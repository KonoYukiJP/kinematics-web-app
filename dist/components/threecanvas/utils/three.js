import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
export const initializeThreeScene = (mount, backgroundColor) => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);
    const camera = new THREE.OrthographicCamera(0, 0, 0, 0, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.domElement.classList.add('label-renderer');
    mount.appendChild(labelRenderer.domElement);
    return {
        scene,
        camera,
        renderer,
        labelRenderer
    };
};
export const resizeThreeCanvas = (mount, camera, renderer, labelRenderer, orthoViewSize = 500) => {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const aspect = width / height;
    if (aspect >= 1) {
        camera.top = orthoViewSize;
        camera.bottom = -orthoViewSize;
        camera.left = -orthoViewSize * aspect;
        camera.right = orthoViewSize * aspect;
    }
    else {
        camera.left = -orthoViewSize;
        camera.right = orthoViewSize;
        camera.top = orthoViewSize / aspect;
        camera.bottom = -orthoViewSize / aspect;
    }
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    labelRenderer.setSize(width, height);
};
export const cleanupThreeScene = (mount, renderer, labelRenderer) => {
    return () => {
        mount.removeChild(renderer.domElement);
        mount.removeChild(labelRenderer.domElement);
    };
};
