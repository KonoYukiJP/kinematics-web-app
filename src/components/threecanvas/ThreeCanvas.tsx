import './threecanvas.css';
import React, { useImperativeHandle, forwardRef, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { buildAxisFrame } from '../../three/axisFrame';

export type ThreeCanvasHandle = {
    addPoint: (position: [number, number, number]) => void;
};

export const ThreeCanvas = forwardRef<ThreeCanvasHandle>((props, ref) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        addPoint(p) {
            // 点を描画
            const geometry = new THREE.SphereGeometry(0.1, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(p[0], p[1], p[2]);
            scene.add(mesh);
            points.push(mesh);
        },

        removeLastPoint() {
            const last = points.pop();
            if (last) scene.remove(last);
        }
    }));

    useEffect(() => {
        if (!mountRef.current) return;

        // シーン、カメラ、レンダラー
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(100, 100, 150);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // ラベル用レンダラー
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(width, height);
        labelRenderer.domElement.classList.add('label-renderer');
        labelRenderer.domElement.style.pointerEvents = 'none';
        mountRef.current.appendChild(labelRenderer.domElement);

        // 座標枠生成
        buildAxisFrame(scene);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.target.set(0, 50, 0);

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

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
            labelRenderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            mountRef.current?.removeChild(labelRenderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            id="three-canvas"
        />
    );
});