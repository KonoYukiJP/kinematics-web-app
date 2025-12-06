// src/main.ts
import { setupInteractions, initialize } from './three.js';
import { setupLineLoader, setupExportButton } from './exporter.js';
// アニメーションループ
function animate(renderer, scene, camera) {
    function loop() {
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }
    loop();
}
// エントリーポイント
function main() {
    // 操作ステート
    const state = {
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
