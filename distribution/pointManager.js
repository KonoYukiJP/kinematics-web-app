// src/pointManager.ts
import { createSphereMesh, createLine } from './threeUtils';
export class PointManager {
    scene;
    positions;
    pointMeshes;
    lineMeshes;
    constructor(scene) {
        this.scene = scene;
        this.positions = [];
        this.pointMeshes = [];
        this.lineMeshes = [];
    }
    // 点の追加
    addPoint(point) {
        const cloned = point.clone();
        this.positions.push(cloned);
        // Sphere
        const sphere = createSphereMesh(this.scene, 0.4, cloned, 0xff0000);
        this.pointMeshes.push(sphere);
        // Line (つなぐ線がある場合)
        if (this.positions.length > 1) {
            const prev = this.positions[this.positions.length - 2];
            const line = createLine({
                scene: this.scene,
                start: prev,
                end: cloned,
                color: 0x000000
            });
            this.lineMeshes.push(line);
        }
        return this.positions.length - 1; // index
    }
    // 点の更新
    updatePoint(index, point) {
        const cloned = point.clone();
        this.positions[index] = cloned;
        // Sphere 更新
        this.pointMeshes[index].position.copy(cloned);
        // 前の線
        if (index > 0) {
            this.lineMeshes[index - 1].geometry.setFromPoints([
                this.positions[index - 1],
                cloned
            ]);
        }
        // 次の線
        if (index < this.positions.length - 1) {
            this.lineMeshes[index].geometry.setFromPoints([
                cloned,
                this.positions[index + 1]
            ]);
        }
    }
    // 点の削除
    removePoint(index) {
        // Sphere 削除
        const sphere = this.pointMeshes[index];
        this.scene.remove(sphere);
        this.pointMeshes.splice(index, 1);
        // Position 削除
        this.positions.splice(index, 1);
        // 線の削除（前）
        if (index > 0) {
            const line = this.lineMeshes[index - 1];
            this.scene.remove(line);
            this.lineMeshes.splice(index - 1, 1);
        }
        // 線の削除（後）
        if (index < this.lineMeshes.length) {
            const line = this.lineMeshes[index];
            this.scene.remove(line);
            this.lineMeshes.splice(index, 1);
        }
        // 残りの線を張り直す
        this.lineMeshes.forEach((line, i) => {
            line.geometry.setFromPoints([
                this.positions[i],
                this.positions[i + 1]
            ]);
        });
    }
    // 点一覧の取得
    getPoints() {
        return this.positions;
    }
}
