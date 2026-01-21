// hooks/useTaskMeshes.ts
import { useEffect } from 'react';
import * as THREE from 'three';
export function useTaskMeshes({ tasks, sceneRef, taskMeshesRef, sphereRadius }) {
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene)
            return;
        const meshes = taskMeshesRef.current;
        // add meshes
        while (meshes.length < tasks.length) {
            const geometry = new THREE.SphereGeometry(sphereRadius, 32, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            meshes.push(mesh);
        }
        // remove meshes
        while (meshes.length > tasks.length) {
            const removed = meshes.pop();
            if (removed) {
                scene.remove(removed);
                removed.geometry.dispose();
            }
        }
        // sync positions
        tasks.forEach(({ targetPosition }, i) => {
            meshes[i].position.set(targetPosition[0], targetPosition[1], targetPosition[2]);
        });
    }, [tasks]);
}
