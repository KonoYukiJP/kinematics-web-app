import React from 'react';
import { X, Check } from 'lucide-react';
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
    const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);

    const formatDisplay = (v: number) => Number.isFinite(v) ? v.toFixed(2) : '';
    const formatValue = (index: number, v: number) =>
        focusedIndex === index ? v.toString() : formatDisplay(v);

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
                    value={formatValue(0, point[0])}
                    onFocus={() => {
                        setFocusedIndex(0);
                        onFocusX();
                    }}
                    onChange={e => update(0, Number(e.target.value))}
                    onBlur={e => {
                        setFocusedIndex(null);
                        update(0, Number(Number(e.target.value).toFixed(2)));
                    }}
                />
            </div>

            <div className="pointinput">
                <label>Y</label>
                <input 
                    type="number" 
                    value={formatValue(1, point[1])}
                    onFocus={() => {
                        setFocusedIndex(1);
                        onFocusY();
                    }}
                    onChange={e => update(1, Number(e.target.value))}
                    onBlur={e => {
                        setFocusedIndex(null);
                        update(1, Number(Number(e.target.value).toFixed(2)));
                    }}
                />
            </div>

            <div className="pointinput">
                <label>Z</label>
                <input 
                    type="number" 
                    value={formatValue(2, point[2])}
                    onFocus={() => {
                        setFocusedIndex(2);
                        onFocusZ();
                    }}
                    onChange={e => update(2, Number(e.target.value))}
                    onBlur={e => {
                        setFocusedIndex(null);
                        update(2, Number(Number(e.target.value).toFixed(2)));
                    }}
                />
            </div>

            <div className="toolbar-buttons">
                <button onClick={onCancel}><X /></button>
                <button onClick={onConfirm}><Check /></button>
            </div>
        </div>
    );
}