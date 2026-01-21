import * as THREE from 'three';
// Sphere の作成
export function createSphereMesh(scene, radius, position, color = 0x000000) {
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16), new THREE.MeshBasicMaterial({ color }));
    sphere.position.copy(position);
    scene.add(sphere);
    return sphere;
}
// Line の作成
export function createLine({ scene, start, end, color = 0x000000 }) {
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([start, end]), new THREE.LineBasicMaterial({ color }));
    scene.add(line);
    return line;
}
