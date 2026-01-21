// src/api/solve.ts

import { Point } from '@/types/point';
import { Task } from '@/types/task';
import { API_BASE_URL } from '@/config/api';

type Joint = {
    joint_id: number;
    x: number;
    y: number;
    z: number;
}

export async function solveKinematics(
    token: string,
    joints: Point[],
    tasks: Task[],
) {
    console.log(joints, tasks);
    const { robot_dat } = await uploadJointData(token, joints);
    const steps = await solveKinematicsWithStream(token, robot_dat, tasks);
    return steps;
}

async function solveKinematicsWithStream(token: string, robotDat: string, tasks: Task[]) {
    const steps: Joint[][] = [];

    const body = {
        robot_dat: robotDat,
        steps: [{ targets: tasks.map(task => ({
            joint_id: task.jointIndex,
            x: task.targetPosition[0],
            y: task.targetPosition[1],
            z: task.targetPosition[2]
        }))}],
    }

    const response = await fetch(`${API_BASE_URL}/solve`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) throw new Error(`Network error: ${response.status}`);

    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");

        // 最後の行はまだ不完全な場合があるので残す
        buffer = lines.pop()!;

        for (const line of lines) {
            if (!line.trim()) continue;
            const data = JSON.parse(line);
            if (data.type === "step") {
                steps.push(data.joints);
            }
            handleSolverEvent(data);
        }
    }

    // 最後のバッファも処理
    if (buffer) {
        const data = JSON.parse(buffer);
        if (data.type === "step") {
            steps.push(data.joints);
        }
        handleSolverEvent(data);
    }

    return steps;
}

function handleSolverEvent(event: any) {
    switch (event.type) {
        case "start":
            const {session_id, robot_id, robot_dat} = event;
            break;
        case "init":
            const initialJoints = event.joints;
            break;
        case "ping":
            break;
        case "step":
            const { step, meta, joints } = event;
            break;
        case "end":
            break;
        case "error":
            const { message, log_path } = event;
            throw new Error(message);
            break;
    }
}

async function uploadJointData(token: string, joints: Point[]) {
    const lines: string[] = [];

    // ジョイントの数
    lines.push(joints.length.toString());

    for (let i = 0; i < joints.length; i++) {
        // ジョイントの番号
        lines.push(`#${i}`);
        // ジョイントの位置
        const position = joints[i];
        lines.push(`${position[0].toFixed(6)}\t${position[1].toFixed(6)}\t${position[2].toFixed(6)}`);
        // 回転軸の方向ベクトル
        lines.push(`0.0\t0.0\t1.0`);
        // 変位の最大値／最小値
        lines.push(`-1.570796327\t1.570796327`);
        // 上位軸の番号リスト
        const upper = i < joints.length - 1 ? i + 1 : -1;
        lines.push(`${upper}\t-1`);
        // 下位軸の番号リスト
        const lower = i > 0 ? i - 1 : -1;
        lines.push(`${lower}\t-1`);
        // 強調パラメータの初期値
        lines.push(`0.01\t0.01`);
        // 回転軸：０ｘ００、並進軸：０ｘ０１、停止：0ｘ02
        lines.push(`0x00`);
    }

    const content = lines.join('\n');

    const file = new File(
        [content],
        'joints.dat',
        { type: 'text/plain' }
    );

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/robots/upload`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error('UPLOAD_FAILED');
    }

    const data: { ok: boolean, robot_dat: string } = await response.json();

    if (!data.ok) {
        throw new Error('solve failed');
    }

    return data;
}
