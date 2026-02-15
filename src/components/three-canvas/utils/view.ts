import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Bounds } from './chart';

// bounds center 取得
function getBoundsCenter(bounds: Bounds): THREE.Vector3 {
    return new THREE.Vector3(
        (bounds.xMax + bounds.xMin) / 2,
        (bounds.yMax + bounds.yMin) / 2,
        (bounds.zMax + bounds.zMin) / 2
    );
}

function animateCameraTo(
    camera: THREE.OrthographicCamera,
    controls: OrbitControls,
    targetPosition: THREE.Vector3,
    targetLookAt: THREE.Vector3,
    targetZoom: number,
    duration: number = 400
) {
    const startPosition = camera.position.clone();
    const startTarget = controls.target.clone();
    const startZoom = camera.zoom;
    const startTime = performance.now();

    function animate(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);

        // easeInOutQuad
        const ease = t < 0.5
            ? 2 * t * t
            : 1 - Math.pow(-2 * t + 2, 2) / 2;

        camera.position.lerpVectors(startPosition, targetPosition, ease);
        controls.target.lerpVectors(startTarget, targetLookAt, ease);
        camera.zoom = THREE.MathUtils.lerp(startZoom, targetZoom, ease);

        camera.updateProjectionMatrix();
        controls.update();

        if (t < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

export function setFront(
    bounds: Bounds,
    camera: THREE.OrthographicCamera,
    controls: OrbitControls
) {
    const center = getBoundsCenter(bounds);
    const targetPosition = new THREE.Vector3(
        center.x,
        center.y,
        center.z + 300
    );

    animateCameraTo(camera, controls, targetPosition, center, 1);
}

export function setRight(
    bounds: Bounds,
    camera: THREE.OrthographicCamera,
    controls: OrbitControls
) {
    const center = getBoundsCenter(bounds);
    const targetPosition = new THREE.Vector3(
        center.x + 300,
        center.y,
        center.z
    );

    animateCameraTo(camera, controls, targetPosition, center, 1);
}

export function reset(
    bounds: Bounds,
    camera: THREE.OrthographicCamera,
    controls: OrbitControls
) {
    const center = getBoundsCenter(bounds);
    const targetPosition = new THREE.Vector3(
        center.x + 100,
        center.y + 50,
        center.z + 150
    );

    animateCameraTo(camera, controls, targetPosition, center, 1);
}