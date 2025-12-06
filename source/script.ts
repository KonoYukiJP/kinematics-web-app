// src/main.ts

import { setupInteractions, initialize } from './three';
import { setupLineLoader, setupExportButton } from './exporter';

import * as THREE from 'three';

// アニメーションループ
function animate(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera): void {
    function loop() {
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }
    loop();
}

// エントリーポイント
function main(): void {
    // 操作ステート
    const state: { plain: 'XY' | 'YZ' | null } = {
        plain: null
    };

    // グリッドとカメラなどの初期化
    const { scene, camera, renderer } = initialize();

    // インタラクションセットアップ
    const { points } = setupInteractions(scene, camera, renderer, state);

    // 線データの読み込み、エクスポートボタンの設定
    setupLineLoader(scene);
    setupExportButton(scene, points);

    // 描画開始
    animate(renderer, scene, camera);
}

// 実行
main();