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

// view　操作
export function setFront(
    bounds: Bounds,
    camera: THREE.OrthographicCamera,
    controls: OrbitControls
) {
    const center = getBoundsCenter(bounds);
    camera.position.set(center.x, center.y, center.z + 300);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    controls.target.copy(center);
    controls.update();
}

export function setRight(
    bounds: Bounds,
    camera: THREE.OrthographicCamera,
    controls: OrbitControls
) {
    const center = getBoundsCenter(bounds);
    camera.position.set(center.x + 300, center.y, center.z);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    controls.target.copy(center);
    controls.update();
}

export function reset(
    bounds: Bounds,
    camera: THREE.OrthographicCamera,
    controls: OrbitControls
) {
    const center = getBoundsCenter(bounds);
    camera.position.set(center.x + 100, center.y + 50, center.z + 150);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    controls.target.copy(center);
    controls.update();
}