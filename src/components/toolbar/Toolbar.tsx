// Toolbar.tsx

import React from 'react';
import './toolbar.css';

type Point = [number, number, number];

type Props = {
    point: Point;
    onFocusX: () => void;
    onFocusY: () => void;
    onFocusZ: () => void;
    onChange: (p: Point) => void;
    onConfirm: () => void;
    onCancel: () => void;
};

export function Toolbar({ point, onFocusX, onFocusY, onFocusZ, onChange, onConfirm, onCancel }: Props) {
    const update = (index: number, value: number) => {
        const newPoint = [...point] as [number, number, number];
        newPoint[index] = value;
        onChange(newPoint);
    };

    return (
        <div id="toolbar">
            <div className="pointinput">
                <label>X</label>
                <input 
                    type="number" 
                    value={point[0].toFixed(2)}
                    onFocus={onFocusX}
                    onChange={e => update(0, Number(e.target.value))}
                />
            </div>

            <div className="pointinput">
                <label>Y</label>
                <input 
                    type="number" 
                    value={point[1].toFixed(2)} 
                    onFocus={onFocusY}
                    onChange={e => update(1, Number(e.target.value))}
                />
            </div>

            <div className="pointinput">
                <label>Z</label>
                <input 
                    type="number" 
                    value={point[2].toFixed(2)} 
                    onFocus={onFocusZ}
                    onChange={e => update(2, Number(e.target.value))}
                />
            </div>

            <div className="toolbar-buttons">
                <button onClick={onCancel}>✖️</button>
                <button onClick={onConfirm}>✔️</button>
            </div>
        </div>
    );
}