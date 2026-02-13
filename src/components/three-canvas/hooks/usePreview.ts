// src/components/threecanvas/hooks/usePreview.ts
import * as THREE from 'three';
import { Point } from '../../../types/point';
import { useEffect } from 'react';

interface Props {
    inputPoint: Point;
    target: "robo" | "task" | null;
    isEditing: boolean;
    roboMeshesRef: React.RefObject<THREE.Mesh[]>;
    previewMeshRef: React.RefObject<THREE.Mesh | null>;
    previewLineRef: React.RefObject<THREE.Line | null>;
    hoverSphereRef: React.RefObject<THREE.Mesh | null>;
    sceneRef: React.RefObject<THREE.Scene | null>;
    selectedJointIndex: number | null;
    color: number;
}

export function usePreview({
    inputPoint,
    target,
    isEditing,
    roboMeshesRef,
    previewMeshRef,
    previewLineRef,
    hoverSphereRef,
    sceneRef,
    selectedJointIndex,
    color
}: Props) {
    // ---- preview mesh/line ----
    useEffect(() => {
        const previewMesh = previewMeshRef.current;
        if (!isEditing || !previewMesh) return;

        previewMesh.position.set(inputPoint[0], inputPoint[1], inputPoint[2]);

        if (target === "task") return;

        const meshes = roboMeshesRef.current;
        if (meshes.length === 0) return;

        const lastMesh = meshes[meshes.length - 1];
        const a = lastMesh.position;
        const b = inputPoint;

        const geometry = new THREE.BufferGeometry().setFromPoints([
            a.clone(),
            new THREE.Vector3(b[0], b[1], b[2])
        ]);

        if (!previewLineRef.current) {
            const material = new THREE.LineBasicMaterial({ color: color });
            const line = new THREE.Line(geometry, material);
            line.userData.color = "preview"
            sceneRef.current?.add(line);
            previewLineRef.current = line;
        } else {
            previewLineRef.current.geometry.dispose();
            previewLineRef.current.geometry = geometry;
        }
    }, [inputPoint, isEditing, target, roboMeshesRef, previewMeshRef, previewLineRef, sceneRef]);

    // ---- hover sphere ----
    useEffect(() => {
        const hoverSphere = hoverSphereRef.current;
        if (!hoverSphere) return;

        if (selectedJointIndex === null) {
            hoverSphere.visible = false;
            return;
        }

        const mesh = roboMeshesRef.current[selectedJointIndex];
        if (!mesh) {
            hoverSphere.visible = false;
            return;
        }

        hoverSphere.position.copy(mesh.position);
        hoverSphere.visible = true;
    }, [selectedJointIndex, roboMeshesRef, hoverSphereRef]);
}