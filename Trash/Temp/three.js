import * as THREE from 'three';

const xBounds = {min: -50, max: 50}
const yBounds = {min: 0, max: 100}
const zBounds = {min: -50, max: 50}
const unit = 10

export function initialize() {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const main = document.querySelector('main');
    const aspect = main.clientWidth / main.clientHeight;
    const frustumSize = 160;

    const camera = new THREE.OrthographicCamera(
        -frustumSize * aspect / 2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        -frustumSize / 2,
        0.1,
        1000
    );
    camera.position.set(70, 70, 160);
    camera.lookAt(0, 50, 0);

    // Renderer
    const canvas = document.getElementById('three-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0xffffff);

    // Resize
    const resizeObserver = new ResizeObserver(() => {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    });
    resizeObserver.observe(main);

    initializeChart(scene);

    return {scene, camera, renderer};
}
function createLine({scene, start = [0, 0, 0], end = [0, 0, 0], color = 0x000000}) {
    const geometry = new THREE.BufferGeometry().setFromPoints(
        [new THREE.Vector3(...start), new THREE.Vector3(...end)]
    );
    const material = new THREE.LineBasicMaterial({ color });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    return line;
}

function createPlaneMesh(scene, size, position, plane) {
    const geometry = new THREE.PlaneGeometry(...size);
    const material = new THREE.MeshBasicMaterial({ color: 0xdddddd, opacity: 0.3, transparent: true });
    const planeMesh = new THREE.Mesh(geometry, material);
    planeMesh.position.set(...position);
    planeMesh.rotation.y = plane == 'xy' ? 0 : Math.PI / 2;
    scene.add(planeMesh);
    return planeMesh;
}
function createSphereMesh(scene, radius, position, color = 0x000000) {
    const sphereMesh = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 16, 16),
        new THREE.MeshBasicMaterial({ color })
    );
    sphereMesh.position.set(position);
    scene.add(sphereMesh)
    return sphereMesh;
}
function createText(scene, text, position) {
    // Canvas
    const canvasSize = 516;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = canvasSize;
    const context = canvas.getContext('2d');
    context.font = `${canvasSize / 2}px Verdana, "Hiragino Sans", 'Noto Sans JP', sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvasSize / 2, canvasSize / 2);
    // Sprite
    const spriteScale = 8;
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(spriteScale, spriteScale, spriteScale);
    sprite.position.set(position[0], position[1], position[2]);
    scene.add(sprite);
}

function initializeChart(scene) {
    // x Line
    [zBounds.min, zBounds.max].forEach((z) => {
        const start = [xBounds.min, yBounds.min, z];
        const end = [xBounds.max, yBounds.min, z];
        createLine({scene, start, end});
    });
    // y Line
    [xBounds.min, xBounds.max].forEach((x) => {
        [zBounds.min, zBounds.max].forEach((z) => {
            const start = [x, yBounds.min, z];
            const end = [x, yBounds.max, z];
            createLine({scene, start, end});
        })
    });
    // z　Line
    [xBounds.min, xBounds.max].forEach((x) => {
        const start = [x, yBounds.min, zBounds.min];
        const end = [x, yBounds.min, zBounds.max];
        createLine({scene, start, end});
    });
    // x axis
    createText(scene, 'x', [(xBounds.min + xBounds.max) / 2, yBounds.min - unit, zBounds.max + unit]);
    for (let x = xBounds.min + unit; x < xBounds.max; x += unit) {
        const y = yBounds.min;
        const z = zBounds.max;
        const start = [x, y, z];
        const end = [x, y + unit / 8, z - unit / 8];
        createLine({scene, start , end });
        createText(scene, `${x}`, [x, y - unit / 2, z + unit / 2]);
    }
    // y axis
    createText(scene, 'y', [xBounds.min - unit, (yBounds.min + yBounds.max) / 2, zBounds.max + unit]);
    for (let y = yBounds.min + unit; y < yBounds.max; y += unit) {
        const x = xBounds.min;
        const z = zBounds.max;
        const start = [x, y, z];
        const end = [x + unit / 8, y, z - unit / 8];
        createLine({scene, start, end});
        createText(scene, `${y}`, [x - unit / 2, y, z + unit / 2]);
    }
    // z axis
    createText(scene, 'z', [xBounds.max + unit, yBounds.min - unit, (zBounds.min + zBounds.max) / 2]);
    for (let z = zBounds.min + unit; z < zBounds.max; z += unit) {
        const y = 0;
        const x = xBounds.max;
        const start = [x, y, z];
        const end = [x - unit / 8, y + unit / 8, z];
        createLine({scene, start, end});
        createText(scene, `${z}`, [x + unit / 2, y - unit / 2, z]);
    }
}

export function setupInteractions(scene, camera, renderer, state) {
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const positions = [];
    const pointMeshes = [];
    const lineMeshes = [];
    let editingIndex = null;

    // Camera
    const cameraPosition = camera.position.clone();
    const cameraLookAt = new THREE.Vector3(0, 50, 0); // 元の注視点

    // Points Text
    const positionList = document.getElementById('position-list');
    const position = document.getElementById('position');
    const updateButton = document.createElement('button');
    updateButton.textContent = '更新';
    updateButton.style.display = 'none';
    position.appendChild(updateButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.style.display = 'none';
    position.appendChild(deleteButton);
    // Point
    const point = new THREE.Vector3();

    const xCenter = (xBounds.max + xBounds.min) / 2; 
    const yCenter = (yBounds.max + yBounds.min) / 2; 
    const zCenter = (zBounds.max + zBounds.min) / 2; 
    // XY Plane Mesh
    const xyPlaneMesh = createPlaneMesh(scene, [xBounds.max - xBounds.min, yBounds.max - yBounds.min], [xCenter, yCenter, zCenter], 'xy')
    xyPlaneMesh.visible = false;
    // YZ Plane Mesh
    const yzPlaneMesh = createPlaneMesh(scene, [zBounds.max - zBounds.min, yBounds.max - yBounds.min], [xCenter, yCenter, zCenter], 'yz')
    yzPlaneMesh.visible = false;
    // Temporary Sphere Mesh
    const tempSphere = createSphereMesh(scene, 0.4, 0xff0000);
    tempSphere.visible = false;
    // Temporary Line 
    const tempLine = createLine({scene, color: 0x00ff00 });
    tempLine.visible = false;

    // Create Button
    const createButton = document.getElementById("create-button")
    createButton.addEventListener('click', () => {
        if (state.plain == null) {
            viewFront();
            state.plain = 'XY';
            createButton.innerText = '完了';
        } else {
            viewFree();
            state.plain = null;
            createButton.innerText = '作成';
        }
    });

    // On Mousemove
    renderer.domElement.addEventListener('mousemove', (event) => {
        if (!state.plain) return;

        // Point
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(state.plain === "XY" ? xyPlaneMesh : yzPlaneMesh);
        if (!intersects.length) return;

        switch(state.plain) {
            case 'XY':
                point.x = intersects[0].point.x;
                point.y = intersects[0].point.y;
                break;
            case 'YZ':
                point.z = intersects[0].point.z;
                break;
        }
        
        // Position
        // Inputs
        updateInputsFromPoint();

        // Sphere
        tempSphere.position.copy(point);

        // Line
        if (positions.length > 0) {
            tempLine.geometry.setFromPoints([positions[positions.length - 1], point]);
        } 
    });

    function viewFront() {
        yzPlaneMesh.visible = false;
        xyPlaneMesh.visible = true;
        tempSphere.visible = true;
        tempLine.visible = true;
        position.style.display = 'flex';
        camera.position.set(0, 50, 100);
        camera.lookAt(0, 50, 0);
    }
    function viewRight() {
        xyPlaneMesh.visible = false;
        yzPlaneMesh.position.x = point.x;
        yzPlaneMesh.visible = true;
        camera.position.copy(cameraPosition);
        camera.lookAt(cameraLookAt);
    }
    function viewFree() {
        xyPlaneMesh.visible = false;
        yzPlaneMesh.visible = false;
        tempSphere.visible = false;
        tempLine.visible = false;
        position.style.display = 'none';
        camera.position.copy(cameraPosition);
        camera.lookAt(cameraLookAt);
    }
    // On Click
    renderer.domElement.addEventListener('click', (event) => {
        switch(state.plain) {
            case 'XY':
                viewRight();
                state.plain = 'YZ'
                break;
            case 'YZ':
                positions.push(point.clone());
                const li = document.createElement('li');
                li.textContent = `${positions.length}: (${point.x.toFixed(2)}, ${point.y.toFixed(2)}, ${point.z.toFixed(2)})`;

                li.addEventListener('click', () => {
                    editingIndex = Array.from(positionList.children).indexOf(li);
                    xInput.value = positions[editingIndex].x.toFixed(2);
                    yInput.value = positions[editingIndex].y.toFixed(2);
                    zInput.value = positions[editingIndex].z.toFixed(2);
                    updateButton.style.display = 'inline-block';
                    deleteButton.style.display = 'inline-block';
                });

                positionList.appendChild(li);

                // Sphere
                const sphere = createSphereMesh(scene, 0.4, point, 0xff0000);
                pointMeshes.push(sphere);

                // Line
                if (positions.length > 1) {
                    const line = createLine({scene, start: positions[positions.length - 2], end: positions[positions.length - 1], color: 0x000000});
                    lineMeshes.push(line);
                }
                
                // To XY Plain
                viewFront();
                state.plain = 'XY';
                break;
        }
    });

    // --- Bidirectional binding between point and inputs ---
    const xInput = document.getElementById('x-input');
    const yInput = document.getElementById('y-input');
    const zInput = document.getElementById('z-input');

    function updateInputsFromPoint() {
        xInput.value = point.x.toFixed(2);
        yInput.value = point.y.toFixed(2);
        zInput.value = point.z.toFixed(2);
    }

    function updatePointFromInputs() {
        point.x = parseFloat(xInput.value) || 0;
        point.y = parseFloat(yInput.value) || 0;
        point.z = parseFloat(zInput.value) || 0;
        tempSphere.position.copy(point);
        if (positions.length > 0) {
            tempLine.geometry.setFromPoints([positions[positions.length - 1], point]);
        }
    }

    [xInput, yInput, zInput].forEach(input => {
        input.addEventListener('input', updatePointFromInputs);
    });

    // --- Enter key navigation for xInput, yInput, zInput ---
    xInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            yInput.focus();
        }
    });
    yInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            zInput.focus();
        }
    });
    zInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Confirm the current position as if clicking in 3D space
            positions.push(point.clone());

            const li = document.createElement('li');
            li.textContent = `${positions.length}: (${point.x.toFixed(2)}, ${point.y.toFixed(2)}, ${point.z.toFixed(2)})`;

            li.addEventListener('click', () => {
                editingIndex = Array.from(positionList.children).indexOf(li);
                xInput.value = positions[editingIndex].x.toFixed(2);
                yInput.value = positions[editingIndex].y.toFixed(2);
                zInput.value = positions[editingIndex].z.toFixed(2);
                updateButton.style.display = 'inline-block';
                deleteButton.style.display = 'inline-block';
            });

            positionList.appendChild(li);

            const sphere = createSphereMesh(scene, 0.4, point, 0xff0000);
            pointMeshes.push(sphere);

            if (positions.length > 1) {
                const line = createLine({scene, start: positions[positions.length - 2], end: positions[positions.length - 1], color: 0x000000});
                lineMeshes.push(line);
            }

            // Reset point inputs for next position
            point.set(0, 0, 0);
            xInput.value = '';
            yInput.value = '';
            zInput.value = '';
            xInput.focus();

            tempSphere.position.copy(point);
            tempLine.geometry.setFromPoints([point, point]);
        }
    });

    updateButton.addEventListener('click', () => {
        if (editingIndex !== null) {
            positions[editingIndex].x = parseFloat(xInput.value) || 0;
            positions[editingIndex].y = parseFloat(yInput.value) || 0;
            positions[editingIndex].z = parseFloat(zInput.value) || 0;

            const li = positionList.children[editingIndex];
            li.textContent = `${editingIndex + 1}: (${positions[editingIndex].x.toFixed(2)}, ${positions[editingIndex].y.toFixed(2)}, ${positions[editingIndex].z.toFixed(2)})`;

            // Update sphere and lines for this index
            const sphere = pointMeshes[editingIndex];
            sphere.position.set(positions[editingIndex].x, positions[editingIndex].y, positions[editingIndex].z);

            if (editingIndex > 0) {
                lineMeshes[editingIndex - 1].geometry.setFromPoints([positions[editingIndex - 1], positions[editingIndex]]);
            }
            if (editingIndex < positions.length - 1) {
                lineMeshes[editingIndex].geometry.setFromPoints([positions[editingIndex], positions[editingIndex + 1]]);
            }

            editingIndex = null;
            updateButton.style.display = 'none';
            deleteButton.style.display = 'none';
        }
    });

    deleteButton.addEventListener('click', () => {
        if (editingIndex !== null) {
            positions.splice(editingIndex, 1);
            positionList.removeChild(positionList.children[editingIndex]);

            for (let i = 0; i < positionList.children.length; i++) {
                const p = positions[i];
                positionList.children[i].textContent =
                    `${i + 1}: (${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)})`;
            }

            // Remove corresponding sphere and adjust lines
            const sphere = pointMeshes[editingIndex];
            scene.remove(sphere);
            pointMeshes.splice(editingIndex, 1);

            if (editingIndex > 0) {
                scene.remove(lineMeshes[editingIndex - 1]);
                lineMeshes.splice(editingIndex - 1, 1);
            }
            if (editingIndex < lineMeshes.length) {
                scene.remove(lineMeshes[editingIndex]);
                lineMeshes.splice(editingIndex, 1);
            }

            lineMeshes.forEach((line, idx) => {
                line.geometry.setFromPoints([positions[idx], positions[idx + 1]]);
            });

            editingIndex = null;
            updateButton.style.display = 'none';
            deleteButton.style.display = 'none';
        }
    });

    return { points: positions };
}
