import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';

export const initializeThreeScene = (mount: HTMLElement, backgroundColor: number) => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    const camera = new THREE.OrthographicCamera(0, 0, 0, 0, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
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
}

export const resizeThreeCanvas = (
    mount: HTMLElement,
    camera: THREE.OrthographicCamera, 
    renderer: THREE.WebGLRenderer, 
    labelRenderer: CSS2DRenderer, 
    orthoViewSize: number = 500
) => {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const aspect = width / height;

    if (aspect >= 1) {
        camera.top = orthoViewSize;
        camera.bottom = -orthoViewSize;
        camera.left = -orthoViewSize * aspect;
        camera.right = orthoViewSize * aspect;
    } else {
        camera.left = -orthoViewSize;
        camera.right = orthoViewSize;
        camera.top = orthoViewSize / aspect;
        camera.bottom = -orthoViewSize / aspect;
    }

    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    labelRenderer.setSize(width, height);
}

export const cleanupThreeScene = (mount: HTMLElement, renderer: THREE.WebGLRenderer, labelRenderer: CSS2DRenderer) => {
    return () => {
        mount.removeChild(renderer.domElement);
        mount.removeChild(labelRenderer.domElement);
    };
}



