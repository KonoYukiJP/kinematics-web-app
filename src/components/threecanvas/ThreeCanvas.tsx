import './threecanvas.css';
import React, { useImperativeHandle, forwardRef, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { buildAxisFrame } from '../../three/axisFrame';
import { createXYPlane, createYZPlane } from './editorPlanes';

export interface ThreeCanvasProps {
    points: [number, number, number][];
    editorMode: boolean;
    onPointComplete: (point: [number, number, number]) => void;
}

export function ThreeCanvas({ points, editorMode, onPointComplete }: ThreeCanvasProps) {
    // === React refs ===
    const mountRef = useRef<HTMLDivElement>(null);
    const meshesRef = useRef<THREE.Mesh[]>([]);

    // === Three.js ローカル変数 ===
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
    const orthoViewSize = 100;
    let renderer: THREE.WebGLRenderer;
    let labelRenderer: CSS2DRenderer;
    let controls: OrbitControls;

    const xBounds: [number, number] = [-50, 50];
    const yBounds: [number, number] = [0, 100];
    const zBounds: [number, number] = [-50, 50];
    const unit: number = 10;

    // Three 内で保持するメッシュ配列
    const pointMeshes: THREE.Mesh[] = [];

    // === 編集ステート ===
    const xyPlaneMeshRef = useRef<THREE.Mesh | null>(null);
    const yzPlaneMeshRef = useRef<THREE.Mesh | null>(null);
    const xyPlaneRef = useRef<THREE.Plane>(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
    const yzPlaneRef = useRef<THREE.Plane>(new THREE.Plane(new THREE.Vector3(1, 0, 0), 0))
    const [stage, setStage] = useState<"xy" | "yz" | null>(null);
    const tempPointRef = useRef<THREE.Vector3>(new THREE.Vector3());
    const previewMeshRef = useRef<THREE.Mesh | null>(null);
    

    function updateOrthoCamera(width: number, height: number) {
        const camera = cameraRef.current;
        if (!camera) return;
        const aspect = width / height;

        camera.left   = -orthoViewSize * aspect;
        camera.right  =  orthoViewSize * aspect;
        camera.top    =  orthoViewSize;
        camera.bottom = -orthoViewSize;

        camera.updateProjectionMatrix();
    }

    // ========== プレビュー用メッシュ ==========
    function setupPreviewMesh() {
        const geo = new THREE.SphereGeometry(0.3, 16, 16);
        const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        previewMesh = new THREE.Mesh(geo, mat);
        sceneRef.current?.add(previewMesh);
    }

    // ========= カメラ切り替え ==========
    function setCameraForXY() {
        cameraRef.current?.position.set(0, 0, 300);
        cameraRef.current?.lookAt(0, 0, 0);
    }

    function setCameraForYZ(x: number) {
        cameraRef.current?.position.set(300, 0, 0);
        cameraRef.current?.lookAt(x, 0, 0);
    }

    // ========= レイキャスト ==========
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function raycastToPlane(e: MouseEvent, plane: THREE.Plane): THREE.Vector3 {
        if (!mountRef.current) return new THREE.Vector3();

        const rect = mountRef.current.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, cameraRef.current!);
        const pos = new THREE.Vector3();
        raycaster.ray.intersectPlane(plane, pos);
        return pos;
    }

    function setupEditorPlanes() {
        if (!sceneRef.current) return;

        // XY 平面
        xyPlaneMeshRef.current = createXYPlane(sceneRef.current, xBounds, yBounds);
        // YZ 平面
        yzPlaneMeshRef.current = createYZPlane(sceneRef.current, zBounds, yBounds);
    }

    useEffect(() => {
        if (!mountRef.current) return;

        // シーン、カメラ、レンダラー
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);
        sceneRef.current = scene;

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        const camera = new THREE.OrthographicCamera(0, 0, 0, 0, 0.1, 1000);
        cameraRef.current = camera;
        updateOrthoCamera(width, height);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // ラベル用レンダラー
        labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(width, height);
        labelRenderer.domElement.classList.add('label-renderer');
        mountRef.current.appendChild(labelRenderer.domElement);

        // 座標枠生成
        buildAxisFrame(scene, xBounds, yBounds, zBounds, unit);

        // --- ここで editor planes を作る ---
        setupEditorPlanes();

        // OrbitControls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.mouseButtons = {
            LEFT: null,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.ROTATE
        };
        controls.enableDamping = false;

        resetCameraDefault();
        
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Control") {
                controls.enableRotate = false;
                controls.enablePan = true;
            }
        };

        const onKeyUp = (e: KeyboardEvent) => {
            if (e.key === "Control") {
                controls.enableRotate = true;
                controls.enablePan = false;
            }
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);

        // アニメーション
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
            labelRenderer.render(scene, camera);
        };
        animate();

        // ★ リサイズ対応
        const handleResize = () => {
            if (!mountRef.current) return;

            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            updateOrthoCamera(width, height);

            renderer.setSize(width, height);
            labelRenderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
            mountRef.current?.removeChild(renderer.domElement);
            mountRef.current?.removeChild(labelRenderer.domElement);
        };
    }, []);

    // ==== editorMode の切り替え ====
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;
        const camera = cameraRef.current;
        if (!camera) return;

        if (!editorMode) {
            // 編集終了
            setStage(null);
            if (previewMeshRef.current) scene.remove(previewMeshRef.current);
            xyPlaneMeshRef.current!.visible = false;
            yzPlaneMeshRef.current!.visible = false;
            previewMeshRef.current = null;
            return;
        }
        // 編集開始
        xyPlaneMeshRef.current!.visible = true;
        yzPlaneMeshRef.current!.visible = false;
        setStage("xy");
        const previewMesh = new THREE.Mesh(
            new THREE.SphereGeometry(10, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        );
        scene.add(previewMesh);
        previewMeshRef.current = previewMesh;

        camera.position.set(0, 0, 300);
        camera.lookAt(0, 0, 0);
    }, [editorMode]);

    // ========== マウスイベント ==========
    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
            const previewMesh = previewMeshRef.current;
            if (!editorMode || !previewMesh) return;
            const tempPoint = tempPointRef.current;

            if (stage === "xy") {
                const pos = raycastToPlane(e, xyPlaneRef.current);
                previewMesh.position.copy(pos);
            }

            if (stage === "yz") {
                console.log(tempPoint.x);
                yzPlaneRef.current.constant = -tempPoint.x;
                const pos = raycastToPlane(e, yzPlaneRef.current);
                previewMesh.position.set(tempPoint.x, pos.y, pos.z);
            }
        }

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, [editorMode, stage]);

    // ==== クリック ====
    useEffect(() => {
        function onClick() {
            const previewMesh = previewMeshRef.current;
            if (!editorMode || !previewMesh) return;
            const tempPoint = tempPointRef.current;

            if (stage === "xy") {
                tempPoint.copy(previewMesh.position);
                console.log(previewMesh.position);
                setStage("yz");

                cameraRef.current?.position.set(300, 0, 0);
                cameraRef.current?.lookAt(tempPoint.x, 0, 0);
                return;
            }

            if (stage === "yz") {
                const finalPoint: [number, number, number] = [
                    tempPoint.x,
                    previewMesh.position.y,
                    previewMesh.position.z
                ];

                onPointComplete(finalPoint);
            }
        }
        console.log("register click");
        console.log
        window.addEventListener("click", onClick);
        return () => window.removeEventListener("click", onClick);
    }, [editorMode, stage]);

    // ========= 通常モードのカメラ ==========
    function resetCameraDefault() {
        cameraRef.current?.position.set(100, 100, 150);
        controls.target.set(0, 50, 0);
    }

    

    // ========= 点の同期 ==========
    useEffect(() => {
        if (!sceneRef.current) return;

        const meshes = meshesRef.current;

        // 追加が必要な点
        while (meshes.length < points.length) {
            const geometry = new THREE.SphereGeometry(0.2, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const mesh = new THREE.Mesh(geometry, material);
            sceneRef.current.add(mesh);
            meshes.push(mesh);
        }
        
        // 削除が必要な点
        while (meshes.length > points.length) {
            const removed = meshes.pop();
            if (removed) sceneRef.current.remove(removed);
        }

        // 座標の同期
        points.forEach((p, i) => {
            meshes[i].position.set(p[0], p[1], p[2]);
        });
        
    }, [points]);

    return (
        <div
            ref={mountRef}
            id="three-canvas"
        />
    );
}