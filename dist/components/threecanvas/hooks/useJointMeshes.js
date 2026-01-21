// src/components/threecanvas/hooks/useJointMesh.ts
import { useEffect } from 'react';
import * as THREE from 'three';
export function useJointMeshes({ displayJoints, sceneRef, roboMeshesRef, roboLineRef, sphereRadius }) {
    // ---- robo points update ----
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene)
            return;
        const meshes = roboMeshesRef.current;
        // add points
        while (meshes.length < displayJoints.length) {
            const geometry = new THREE.SphereGeometry(sphereRadius, 32, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            meshes.push(mesh);
        }
        // remove points
        while (meshes.length > displayJoints.length) {
            const removed = meshes.pop();
            if (removed)
                scene.remove(removed);
        }
        // update positions
        displayJoints.forEach((p, i) => {
            meshes[i].position.set(p[0], p[1], p[2]);
        });
    }, [displayJoints, sceneRef, roboMeshesRef, sphereRadius]);
    // ---- robo line update ----
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene)
            return;
        // 既存の線を削除
        if (roboLineRef.current) {
            scene.remove(roboLineRef.current);
            roboLineRef.current.geometry.dispose();
            roboLineRef.current = null;
        }
        if (displayJoints.length < 2)
            return;
        // Vector3 配列に変換
        const vertices = displayJoints.map(p => new THREE.Vector3(p[0], p[1], p[2]));
        const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const line = new THREE.Line(geometry, material);
        scene.add(line);
        roboLineRef.current = line;
    }, [displayJoints, sceneRef, roboLineRef]);
}
