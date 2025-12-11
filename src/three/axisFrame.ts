import * as THREE from 'three';
import { createLabel } from './labels';

export function buildAxisFrame(scene: THREE.Scene) {
    // X/Y/Z の範囲
    const xMin = -50, xMax = 50;
    const yMin = 0,   yMax = 100;
    const zMin = -50, zMax = 50;
    const unit = 10;

    // 枠を作る
    const material = new THREE.LineBasicMaterial({ color: 0x000000 });
    const points = [];

    // 8 点
    const A = new THREE.Vector3(xMin, yMin, zMin);
    const B = new THREE.Vector3(xMax, yMin, zMin);
    const C = new THREE.Vector3(xMax, yMax, zMin);
    const D = new THREE.Vector3(xMin, yMax, zMin);

    const E = new THREE.Vector3(xMin, yMin, zMax);
    const F = new THREE.Vector3(xMax, yMin, zMax);
    const G = new THREE.Vector3(xMax, yMax, zMax);
    const H = new THREE.Vector3(xMin, yMax, zMax);

    // 辺をつなげる
    const edges = [
        [A,B], [B,C], [D,A], // 手前
        [E,F], [F,G], [H,E], // 奥
        [A,E], [B,F], // 縦
    ];

    for (const [p1,p2] of edges) {
        const geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);
        const line = new THREE.Line(geometry, material);
        scene.add(line);
    }

    // X軸の目盛り
    addAxisTicks(scene, xMin, xMax, unit, 'x');

    // Y軸の目盛り
    addAxisTicks(scene, yMin, yMax, unit, 'y');

    // Z軸の目盛り
    addAxisTicks(scene, zMin, zMax, unit, 'z');
}

// 軸の目盛りを追加
function addAxisTicks(scene: THREE.Scene, start: number, end: number, step: number, axis: 'x' | 'y' | 'z') {
    const tickMaterial = new THREE.LineBasicMaterial({ color: 0x888888 });

    for (let v = start; v <= end; v += step) {
        let p1 = new THREE.Vector3();
        let p2 = new THREE.Vector3();
        let labelPos = new THREE.Vector3();

        if (axis === 'x') {
            p1 = new THREE.Vector3(v, 0, -1);
            p2 = new THREE.Vector3(v, 0, 1);
            labelPos = new THREE.Vector3(v, 0, 2);
        } else if (axis === 'y') {
            p1 = new THREE.Vector3(-1, v, 0);
            p2 = new THREE.Vector3(1, v, 0);
            labelPos = new THREE.Vector3(2, v, 0);
        } else if (axis === 'z') {
            p1 = new THREE.Vector3(-1, 0, v);
            p2 = new THREE.Vector3(1, 0, v);
            labelPos = new THREE.Vector3(2, 0, v);
        }

        // Tick 線
        const geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);
        const tick = new THREE.Line(geometry, tickMaterial);
        scene.add(tick);

        // Label（数字）
        const label = createLabel(v.toString());
        label.position.copy(labelPos);
        scene.add(label);
    }
}