import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './toolbar.css';
export function Toolbar({ point, onFocusX, onFocusY, onFocusZ, onChange, onConfirm, onCancel }) {
    const update = (index, value) => {
        const newPoint = [...point];
        newPoint[index] = value;
        onChange(newPoint);
    };
    return (_jsxs("div", { id: "toolbar", children: [_jsxs("div", { className: "pointinput", children: [_jsx("label", { children: "X" }), _jsx("input", { type: "number", value: point[0].toFixed(2), onFocus: onFocusX, onChange: e => update(0, Number(e.target.value)) })] }), _jsxs("div", { className: "pointinput", children: [_jsx("label", { children: "Y" }), _jsx("input", { type: "number", value: point[1].toFixed(2), onFocus: onFocusY, onChange: e => update(1, Number(e.target.value)) })] }), _jsxs("div", { className: "pointinput", children: [_jsx("label", { children: "Z" }), _jsx("input", { type: "number", value: point[2].toFixed(2), onFocus: onFocusZ, onChange: e => update(2, Number(e.target.value)) })] }), _jsxs("div", { className: "toolbar-buttons", children: [_jsx("button", { onClick: onCancel, children: "\u2716\uFE0F" }), _jsx("button", { onClick: onConfirm, children: "\u2714\uFE0F" })] })] }));
}
