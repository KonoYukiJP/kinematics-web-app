// src/components/threecanvas/utils/appearance.ts

import * as THREE from 'three';

import { colorPalettes } from '../../../appearance/color-palletes';
import type { Appearance } from '../../../appearance/appearance';

export type ThreeColorPalettes = {
    axis: number;
    grid: number;
    background: number;
    label: string;
    mesh: number;
    task: number;
    preview: number;
};

export function createThreeColorPalette(appearance: Appearance): ThreeColorPalettes {
    const colors = colorPalettes[appearance];

    return {
        axis: Number(colors.text.replace('#', '0x')),
        grid: Number(colors.text.replace('#', '0x')),
        background: Number(colors.background.replace('#', '0x')),
        label: colors.text,
        mesh: Number(colors.accent.replace('#', '0x')),
        task: Number(colors.orange.replace('#', '0x')),
        preview: Number(colors.yellow.replace('#', '0x'))
    };
}

export function updateThreeAppearance(
    scene: THREE.Scene,
    colorPalette: ThreeColorPalettes
) {
    scene.background = new THREE.Color(colorPalette.background);

    scene.traverse((obj) => {
        // --- Line の更新 ---
        if (obj instanceof THREE.Line) {
            const colorKey = obj.userData?.color as keyof typeof colorPalette;
            if (colorKey && colorPalette[colorKey] !== undefined) {
                const mat = obj.material as THREE.LineBasicMaterial;
                mat.color.set(colorPalette[colorKey]);
            }
        }

        // --- Mesh の更新 ---
        if (obj instanceof THREE.Mesh) {
            const colorKey = obj.userData?.color as keyof typeof colorPalette;
            if (colorKey && colorPalette[colorKey] !== undefined) {
                const mat = obj.material as THREE.MeshBasicMaterial;
                mat.color.set(colorPalette[colorKey]);
            }
        }
    });
}