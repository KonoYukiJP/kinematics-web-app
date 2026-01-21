import * as THREE from 'three';
export function getPointer(event, mount) {
    const rect = mount.getBoundingClientRect();
    const pointer = new THREE.Vector2();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    return pointer;
}
// ---- raycast ----
export function raycast(pointer, camera, plane) {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(pointer, camera);
    const result = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, result);
    return result;
}
// ---- pick mesh ----
export function pickMesh(pointer, camera, meshes) {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(meshes, false);
    if (intersects.length === 0)
        return null;
    const index = meshes.indexOf(intersects[0].object);
    if (index === -1)
        return null;
    return index;
}
export function findNearestJointIndex(mouse, camera, meshes, threshold) {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const scale = 1 / camera.zoom;
    let nearestIndex = null;
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
