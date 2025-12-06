// src/exporter.ts

import * as THREE from 'three';

// -------------------------------------------------
// 線データの読み込みボタンを設置
// -------------------------------------------------
export async function setupLineLoader(scene: THREE.Scene): Promise<void> {
    const lineButton = document.createElement('button');
    lineButton.innerText = '線を表示';
    lineButton.style.top = '20px';
    lineButton.style.right = '20px';
    lineButton.style.zIndex = '10';

    const toolbar = document.getElementById('toolbar');
    if (!toolbar) {
        console.warn('#toolbar が見つかりません');
        return;
    }
    toolbar.appendChild(lineButton);

    lineButton.addEventListener('click', async () => {
        try {
            const response = await fetch('/Temp/points.txt');
            const text = await response.text();
            const lines = text.trim().split('\n').filter(line => line.length > 0);

            for (let i = 0; i < lines.length - 1; i += 2) {
                const start = lines[i].split(/\s+/).map(Number);
                const end = lines[i + 1].split(/\s+/).map(Number);

                const points = [
                    new THREE.Vector3(start[0], start[1], start[2]),
                    new THREE.Vector3(end[0], end[1], end[2])
                ];

                const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, material);

                scene.add(line);
            }
        } catch (err) {
            console.error('線データの取得に失敗しました:', err);
        }
    });
}

// -------------------------------------------------
// エクスポートボタンの設置
// -------------------------------------------------
export function setupExportButton(scene: THREE.Scene, points: THREE.Vector3[]): void {
    const exportButton = document.createElement('button');
    exportButton.innerText = 'ジョイントデータを保存';
    exportButton.style.top = '60px';
    exportButton.style.right = '20px';
    exportButton.style.zIndex = '10';

    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.warn('#sidebar が見つかりません');
        return;
    }
    sidebar.appendChild(exportButton);

    exportButton.addEventListener('click', () => {
        exportJointData(points);
    });
}

// -------------------------------------------------
// 保存処理
// -------------------------------------------------
export function exportJointData(points: THREE.Vector3[]): void {
    if (!points || points.length === 0) {
        alert('保存する点がありません');
        return;
    }

    const lines: string[] = [];
    lines.push(points.length.toString());

    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        lines.push(`#${i}`);
        lines.push(`${p.x.toFixed(6)}\t${p.y.toFixed(6)}\t${p.z.toFixed(6)}`);

        // 方向ベクトル
        lines.push(`0.0\t0.0\t1.0`);

        // 制限角度
        lines.push(`-1.570796327\t1.570796327`);

        // 接続情報
        const upper = i > 0 ? i - 1 : -1;
        const lower = i < points.length - 1 ? i + 1 : -1;
        lines.push(`${upper}\t-1`);
        lines.push(`${lower}\t-1`);

        // しきい値・不使用フラグ
        lines.push(`0.01\t0.01`);
        lines.push(`0x00`);
    }

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'joint_data.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}