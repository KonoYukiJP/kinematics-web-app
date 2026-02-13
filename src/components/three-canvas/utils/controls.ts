import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const initializeOrbitControls = (camera: THREE.Camera, renderer: THREE.WebGLRenderer) => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.mouseButtons = {
        LEFT: null,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.ROTATE,
    };
    controls.enableDamping = false;
    return controls;
}

export const registerControlsShortcuts = (controls: OrbitControls) => {
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

    return () => {
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
    };
}