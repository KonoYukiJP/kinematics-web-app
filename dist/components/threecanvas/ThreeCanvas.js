import { jsx as _jsx } from "react/jsx-runtime";
import './threecanvas.css';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { createThreeColorPalette, updateThreeAppearance } from './utils/appearance';
import { usePreview } from './hooks/usePreview';
import { useJointMeshes } from './hooks/useJointMeshes';
import { useTaskMeshes } from './hooks/useTaskMeshes';
import { initializeThreeScene, resizeThreeCanvas, cleanupThreeScene } from './utils/three';
import { addAxesFrame } from './utils/chart';
import { initializeOrbitControls, registerControlsShortcuts } from './utils/controls';
import { startAnimationLoop } from './utils/animation';
import * as view from './utils/view';
import { getPointer, raycast, findNearestJointIndex } from './utils/raycast';
export function ThreeCanvas({ appearance, joints, tasks, results, isEditing, isShowingResults, target, inputPoint, selectedJointIndex, onInputPointChange, setSelectedJointIndex, onInputPointConfirm }) {
    const [colorPalette, setColorPalette] = useState(() => createThreeColorPalette(appearance));
    const displayJoints = isShowingResults ? results : joints;
    const bounds = {
        xMin: -50, xMax: 50,
        yMin: 0, yMax: 100,
        zMin: -50, zMax: 50
    };
    const unit = 10;
    const orthoViewSize = 100;
    const sphereRadius = 0.8;
    const hoverScale = 2;
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const labelRendererRef = useRef(null);
    const controlsRef = useRef(null);
    const [step, setStep] = useState(null);
    const xyPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
    const yzPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(1, 0, 0), 0));
    const roboMeshesRef = useRef([]);
    const roboLineRef = useRef(null);
    const taskMeshesRef = useRef([]);
    const previewMeshRef = useRef(null);
    const previewLineRef = useRef(null);
    const hoverSphereRef = useRef(null);
    function updateMeshScale() {
        const camera = cameraRef.current;
        if (!camera)
            return;
        const scale = 1 / camera.zoom;
        // robo points
        roboMeshesRef.current.forEach(mesh => {
            mesh.scale.setScalar(scale);
        });
        // task points
        taskMeshesRef.current.forEach(mesh => {
            mesh.scale.setScalar(scale);
        });
        // preview
        if (previewMeshRef.current) {
            previewMeshRef.current.scale.setScalar(scale);
        }
        // hover
        if (hoverSphereRef.current) {
            hoverSphereRef.current.scale.setScalar(scale);
        }
    }
    useEffect(() => {
        const mount = mountRef.current;
        if (!mount)
            return;
        //  ---- init Three.js ----
        const { scene, camera, renderer, labelRenderer } = initializeThreeScene(mount, colorPalette.background);
        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;
        labelRendererRef.current = labelRenderer;
        resizeThreeCanvas(mount, camera, renderer, labelRenderer, orthoViewSize);
        // ---- init Controls ----
        const controls = initializeOrbitControls(camera, renderer);
        controls.addEventListener('change', updateMeshScale);
        controlsRef.current = controls;
        const unregisterControlsShortcuts = registerControlsShortcuts(controls);
        // 座標枠生成
        addAxesFrame(scene, bounds, unit, colorPalette.axis);
        // ---- hover mesh ----
        const hoverSphere = new THREE.Mesh(new THREE.SphereGeometry(sphereRadius * hoverScale, 32, 16), new THREE.MeshBasicMaterial({
            color: 0xffff00,
            transparent: true,
            opacity: 0.7,
            depthWrite: false,
        }));
        hoverSphere.visible = false;
        scene.add(hoverSphere);
        hoverSphereRef.current = hoverSphere;
        // リサイズ対応
        const onResize = () => {
            resizeThreeCanvas(mount, camera, renderer, labelRenderer, orthoViewSize);
        };
        window.addEventListener('resize', onResize);
        // animation loop
        startAnimationLoop(scene, camera, renderer, labelRenderer, controls);
        // cleanup
        return () => {
            if (hoverSphereRef.current) {
                scene.remove(hoverSphereRef.current);
                hoverSphereRef.current.geometry.dispose();
                hoverSphereRef.current = null;
            }
            cleanupThreeScene(mount, renderer, labelRenderer);
            controls.removeEventListener('change', updateMeshScale);
            unregisterControlsShortcuts();
            window.removeEventListener('resize', onResize);
        };
    }, []);
    useEffect(() => {
        const colorPalette = createThreeColorPalette(appearance);
        setColorPalette(colorPalette);
        const scene = sceneRef.current;
        if (!scene)
            return;
        updateThreeAppearance(scene, colorPalette);
    }, [appearance]);
    // ---- isEditing change ----
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene)
            return;
        // 編集終了
        if (!isEditing) {
            setStep(null);
            return;
        }
        // 編集開始
        if (target === "robo") {
            setStep("xy");
        }
        else {
            setStep("jointindex");
        }
    }, [isEditing]);
    // ---- step change ----
    useEffect(() => {
        const scene = sceneRef.current;
        const camera = cameraRef.current;
        const controls = controlsRef.current;
        if (!scene || !camera || !controls)
            return;
        if (step === null) {
            if (previewMeshRef.current) {
                scene.remove(previewMeshRef.current);
                previewMeshRef.current.geometry.dispose();
                previewMeshRef.current = null;
            }
            if (previewLineRef.current) {
                scene.remove(previewLineRef.current);
                previewLineRef.current.geometry.dispose();
                previewLineRef.current = null;
            }
            if (hoverSphereRef.current) {
                hoverSphereRef.current.visible = false;
            }
            view.reset(bounds, camera, controls);
        }
        else if (step === "xy") {
            const previewMesh = new THREE.Mesh(new THREE.SphereGeometry(sphereRadius, 32, 16), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
            scene.add(previewMesh);
            previewMeshRef.current = previewMesh;
            view.setFront(bounds, camera, controls);
        }
        else if (step === "z") {
            view.setRight(bounds, camera, controls);
        }
    }, [step]);
    // ---- mouse move ----
    useEffect(() => {
        const mount = mountRef.current;
        if (!mount)
            return;
        function onMouseMove(event) {
            if (!isEditing)
                return;
            const mount = mountRef.current;
            const camera = cameraRef.current;
            if (!mount || !camera)
                return;
            const pointer = getPointer(event, mount);
            if (step === "jointindex") {
                const scale = 1 / camera.zoom;
                const jointIndex = findNearestJointIndex(pointer, camera, roboMeshesRef.current, sphereRadius * scale * hoverScale);
                setSelectedJointIndex(jointIndex);
            }
            if (step === "xy") {
                const position = raycast(pointer, camera, xyPlaneRef.current);
                onInputPointChange([
                    position.x, position.y, position.z
                ]);
            }
            if (step === "z") {
                const position = raycast(pointer, camera, yzPlaneRef.current);
                onInputPointChange([
                    inputPoint[0], inputPoint[1], position.z
                ]);
            }
        }
        mount.addEventListener("mousemove", onMouseMove);
        return () => mount.removeEventListener("mousemove", onMouseMove);
    }, [step]);
    // ---- click ----
    useEffect(() => {
        const mount = mountRef.current;
        if (!mount)
            return;
        function onClick(event) {
            if (step === "jointindex") {
                if (selectedJointIndex === null)
                    return;
                setStep("xy");
                return;
            }
            if (step === "xy") {
                yzPlaneRef.current.constant = -inputPoint[0];
                setStep("z");
                return;
            }
            if (step === "z") {
                onInputPointConfirm();
                return;
            }
        }
        mount.addEventListener("click", onClick);
        return () => mount.removeEventListener("click", onClick);
    }, [step, inputPoint, selectedJointIndex]);
    usePreview({
        inputPoint,
        target,
        isEditing,
        roboMeshesRef,
        previewMeshRef,
        previewLineRef,
        hoverSphereRef,
        sceneRef,
        selectedJointIndex
    });
    useJointMeshes({
        displayJoints,
        sceneRef,
        roboMeshesRef,
        roboLineRef,
        sphereRadius
    });
    useTaskMeshes({
        tasks,
        sceneRef,
        taskMeshesRef,
        sphereRadius
    });
    return (_jsx("div", { ref: mountRef, id: "three-canvas" }));
}
