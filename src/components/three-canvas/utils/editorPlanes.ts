// editorPlanes.ts

import * as THREE from 'three';

export function createXYPlane(scene: THREE.Scene, xBounds: [number, number], yBounds: [number, number]): THREE.Mesh {
    const [xMin, xMax] = xBounds;
    const [yMin, yMax] = yBounds;
    const sizeX = xMax - xMin;
    const sizeY = yMax - yMin;

    const geometry = new THREE.PlaneGeometry(sizeX, sizeY);
    const material = new THREE.MeshBasicMaterial({
        color: 0x999999,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set((xMin + xMax) / 2, (yMin + yMax) / 2, 0);
    mesh.rotation.y = Math.PI / 2;
    mesh.visible = false;
    scene.add(mesh);
    return mesh;
}

export function createYZPlane(scene: THREE.Scene, zBounds: [number, number], yBounds: [number, number]): THREE.Mesh {
    const [zMin, zMax] = zBounds;
    const [yMin, yMax] = yBounds;
    const sizeZ = zMax - zMin;
    const sizeY = yMax - yMin;

    const geometry = new THREE.PlaneGeometry(sizeZ, sizeY);
    const material = new THREE.MeshBasicMaterial({
        color: 0x999999,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, (yMin + yMax) / 2, (zMin + zMax) / 2);
    mesh.visible = false;
    scene.add(mesh);
    return mesh;
}
