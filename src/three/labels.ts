import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

export function createLabel(text: string) {
    const div = document.createElement('div');
    div.className = 'axis-label';
    div.textContent = text;
    return new CSS2DObject(div);
}