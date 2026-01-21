import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
// 軸枠を追加
export function addAxesFrame(scene, bounds, unit, color) {
    const material = new THREE.LineBasicMaterial({ color: color });
    // 頂点
    const frontTopLeft = new THREE.Vector3(bounds.xMin, bounds.yMax, bounds.zMax);
    const frontTopRight = new THREE.Vector3(bounds.xMax, bounds.yMax, bounds.zMax);
    const frontBottomLeft = new THREE.Vector3(bounds.xMin, bounds.yMin, bounds.zMax);
    const frontBottomRight = new THREE.Vector3(bounds.xMax, bounds.yMin, bounds.zMax);
    const backTopLeft = new THREE.Vector3(bounds.xMin, bounds.yMax, bounds.zMin);
    const backTopRight = new THREE.Vector3(bounds.xMax, bounds.yMax, bounds.zMin);
    const backBottomLeft = new THREE.Vector3(bounds.xMin, bounds.yMin, bounds.zMin);
    const backBottomRight = new THREE.Vector3(bounds.xMax, bounds.yMin, bounds.zMin);
    // 辺
    const edges = [
        // Front
        [frontTopLeft, frontBottomLeft],
        [frontBottomRight, frontTopRight],
        [frontBottomLeft, frontBottomRight],
        // Back
        [backTopLeft, backBottomLeft],
        [backBottomRight, backTopRight],
        [backBottomLeft, backBottomRight],
        // Sides
        [frontBottomLeft, backBottomLeft],
        [frontBottomRight, backBottomRight]
    ];
    // 辺を追加
    for (const [start, end] of edges) {
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        const line = new THREE.Line(geometry, material);
        line.userData.color = "axis";
        scene.add(line);
    }
    // 軸を追加
    addAxis(scene, bounds, unit, 'x');
    addAxis(scene, bounds, unit, 'y');
    addAxis(scene, bounds, unit, 'z');
}
// 軸を追加
function addAxis(scene, bounds, unit, axis) {
    const gridlineMaterial = new THREE.LineBasicMaterial({ color: 0x888888 });
    const { xMin, xMax, yMin, yMax, zMin, zMax } = bounds;
    const start = axis === 'x' ? xMin : axis === 'y' ? yMin : zMin;
    const end = axis === 'x' ? xMax : axis === 'y' ? yMax : zMax;
    const axisLabel = createLabel(axis.toUpperCase());
    if (axis === 'x') {
        axisLabel.position.set((xMin + xMax) / 2, yMin - 16, zMax + 16);
    }
    else if (axis === 'y') {
        axisLabel.position.set(xMin - 16, (yMin + yMax) / 2, zMax + 16);
    }
    else {
        axisLabel.position.set(xMax + 16, yMin - 16, (zMin + zMax) / 2);
    }
    scene.add(axisLabel);
    for (let axisValue = start; axisValue <= end; axisValue += unit) {
        let gridlineStart;
        let gridlineEnd;
        let lavelPosition;
        if (axis === 'x') {
            gridlineStart = new THREE.Vector3(axisValue, yMin, zMax);
            gridlineEnd = new THREE.Vector3(axisValue, yMin + 2, zMax);
            lavelPosition = new THREE.Vector3(axisValue, yMin - 8, zMax + 8);
        }
        else if (axis === 'y') {
            gridlineStart = new THREE.Vector3(xMin, axisValue, zMax);
            gridlineEnd = new THREE.Vector3(xMin + 2, axisValue, zMax - 2);
            lavelPosition = new THREE.Vector3(xMin - 8, axisValue, zMax + 8);
        }
        else {
            gridlineStart = new THREE.Vector3(xMax, yMin, axisValue);
            gridlineEnd = new THREE.Vector3(xMax, yMin + 2, axisValue);
            lavelPosition = new THREE.Vector3(xMax + 8, yMin - 8, axisValue);
        }
        // gridline
        const gridlineGeometry = new THREE.BufferGeometry().setFromPoints([gridlineStart, gridlineEnd]);
        const gridline = new THREE.Line(gridlineGeometry, gridlineMaterial);
        scene.add(gridline);
        // label
        const label = createLabel(axisValue.toString());
        label.position.copy(lavelPosition);
        scene.add(label);
    }
}
export function createLabel(text) {
    const div = document.createElement('div');
    div.className = 'label';
    div.textContent = text;
    return new CSS2DObject(div);
}
