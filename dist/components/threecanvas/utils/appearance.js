// src/components/threecanvas/utils/appearance.ts
import * as THREE from 'three';
import { colorPalettes } from '../../../appearance/color-palletes';
export function createThreeColorPalette(appearance) {
    const colors = colorPalettes[appearance];
    return {
        axis: Number(colors.text.replace('#', '0x')),
        grid: Number(colors.text.replace('#', '0x')),
        background: Number(colors.background.replace('#', '0x')),
        label: colors.text,
    };
}
export function updateThreeAppearance(scene, colorPalette) {
    scene.background = new THREE.Color(colorPalette.background);
    scene.traverse((obj) => {
        // obj が THREE.Line かどうかチェック
        if (!(obj instanceof THREE.Line))
            return;
        // userData.color が存在するかチェック
        const colorKey = obj.userData?.color;
        if (!colorKey)
            return;
        // colorPalette に colorKey が存在するかチェック
        if (colorPalette[colorKey] === undefined)
            return;
        // 安全に Line のマテリアルに色をセット
        const mat = obj.material;
        mat.color.set(colorPalette[colorKey]);
    });
}
