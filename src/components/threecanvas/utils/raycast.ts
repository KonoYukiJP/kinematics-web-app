import * as THREE from 'three';

export function getPointer( event: MouseEvent, mount: HTMLDivElement ) {
    const rect = mount.getBoundingClientRect();
    const pointer = new THREE.Vector2();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = - ((event.clientY - rect.top) / rect.height) * 2 + 1;
    return pointer;
}

// ---- raycast ----
export function raycast(
    pointer: THREE.Vector2,
    camera: THREE.Camera,
    plane: THREE.Plane,
): THREE.Vector3 {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(pointer, camera);

    const result = new THREE.Vector3();

    raycaster.ray.intersectPlane(plane, result);

    return result;
}

// ---- pick mesh ----
export function pickMesh(
    pointer: THREE.Vector2,
    camera: THREE.Camera,
    meshes: THREE.Mesh[],
): number | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(
        meshes,
        false
    );

    if (intersects.length === 0) return null;
    
    const index = meshes.indexOf(intersects[0].object as THREE.Mesh);

    if (index === -1) return null;
    return index;
}

export function findNearestJointIndex(
    mouse: THREE.Vector2,
    camera: THREE.OrthographicCamera,
    meshes: THREE.Mesh[],
    threshold: number
): number | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const scale = 1 / camera.zoom;

    let nearestIndex: number | null = null;
    let minDistance = Infinity;

    meshes.forEach((mesh, index) => {
        const distance = raycaster.ray.distanceToPoint(mesh.position);
        if (distance <= threshold && distance < minDistance) {
            minDistance = distance;
            nearestIndex = index;
        }
    });

    return nearestIndex;
}