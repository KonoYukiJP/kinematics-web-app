// three.js

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
    resizeObserver.observe(canvas);

    initializeChart(scene);

    return {scene, camera, renderer};
}

function initializeChart(scene) {
    function addLine(start, end) {
        const geometry = new THREE.BufferGeometry().setFromPoints(
            [new THREE.Vector3(...start), new THREE.Vector3(...end)]
        )
        const material = new THREE.LineBasicMaterial({ color: 0x000000 })
        const line = new THREE.Line(geometry, material)
        scene.add(line);
    }
    function addText(text, position) {
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
    // x Line
    [zBounds.min, zBounds.max].forEach((z) => {
        const start = [xBounds.min, yBounds.min, z];
        const end = [xBounds.max, yBounds.min, z];
        addLine(start, end);
    });
    // y Line
    [xBounds.min, xBounds.max].forEach((x) => {
        [zBounds.min, zBounds.max].forEach((z) => {
            const start = [x, yBounds.min, z];
            const end = [x, yBounds.max, z];
            addLine(start, end);
        })
    });
    // z　Line
    [xBounds.min, xBounds.max].forEach((x) => {
        const start = [x, yBounds.min, zBounds.min];
        const end = [x, yBounds.min, zBounds.max];
        addLine(start, end);
    });
    // x axis
    addText('x', [(xBounds.min + xBounds.max) / 2, yBounds.min - unit, zBounds.max + unit]);
    for (let x = xBounds.min + unit; x < xBounds.max; x += unit) {
        const y = yBounds.min;
        const z = zBounds.max;
        addLine([x, y, z], [x, y + unit / 8, z - unit / 8]);
        addText(`${x}`, [x, y - unit / 2, z + unit / 2]);
    }
    // y axis
    addText('y', [xBounds.min - unit, (yBounds.min + yBounds.max) / 2, zBounds.max + unit]);
    for (let y = yBounds.min + unit; y < yBounds.max; y += unit) {
        const x = xBounds.min;
        const z = zBounds.max;
        addLine([x, y, z], [x + unit / 8, y, z - unit / 8]);
        addText(`${y}`, [x - unit / 2, y, z + unit / 2]);
    }
    // z axis
    addText('z', [xBounds.max + unit, yBounds.min - unit, (zBounds.min + zBounds.max) / 2]);
    for (let z = zBounds.min + unit; z < zBounds.max; z += unit) {
        const y = 0;
        const x = xBounds.max;
        addLine([x, y, z], [x - unit / 8, y + unit / 8, z]);
        addText(`${z}`, [x + unit / 2, y - unit / 2, z]);
    }
}