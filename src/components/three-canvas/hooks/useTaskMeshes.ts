// hooks/useTaskMeshes.ts
import { useEffect } from 'react';
import * as THREE from 'three';
import { Task } from '../../../types/task';

interface UseTaskMeshesArgs {
    tasks: Task[];
    sceneRef: React.RefObject<THREE.Scene | null>;
    taskMeshesRef: React.RefObject<THREE.Mesh[]>;
    sphereRadius: number;
    color: number;
}

export function useTaskMeshes({
    tasks,
    sceneRef,
    taskMeshesRef,
    sphereRadius,
    color
}: UseTaskMeshesArgs) {
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        const meshes = taskMeshesRef.current;

        // add meshes
        while (meshes.length < tasks.length) {
            const geometry = new THREE.SphereGeometry(sphereRadius, 32, 16);
            const material = new THREE.MeshBasicMaterial({ color: color });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.userData.color = "task"
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
            meshes[i].position.set(
                targetPosition[0],
                targetPosition[1],
                targetPosition[2]
            );
        });
    }, [tasks]);
}