import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Plus, Minus } from 'lucide-react';
import '@/styles/layout/sidebar.css';
import '@/styles/ui/table.css';
import '@/styles/ui/controls.css';
import './TaskListView.css';
export function TaskListView({ tasks, onAddPoint, onRemovePoint }) {
    return (_jsxs("div", { className: "sidebar task-list-view", children: [_jsx("h2", { children: "\u30BF\u30B9\u30AF\u8A2D\u5B9A" }), _jsx("p", { children: "\u30B8\u30E7\u30A4\u30F3\u30C8\u3092\u6307\u5B9A\u3057\u3001\u305D\u306E\u30B8\u30E7\u30A4\u30F3\u30C8\u304C\u5230\u9054\u3059\u3079\u304D\u76EE\u6A19\u5EA7\u6A19\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" }), _jsx("div", { className: "table-wrapper", children: _jsxs("table", { className: "points-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "#" }), _jsx("th", { children: "X" }), _jsx("th", { children: "Y" }), _jsx("th", { children: "Z" })] }) }), _jsx("tbody", { children: tasks.map(({ jointIndex, targetPosition: [x, y, z] }, i) => (_jsxs("tr", { children: [_jsx("td", { children: jointIndex + 1 }), _jsx("td", { children: x.toFixed(2) }), _jsx("td", { children: y.toFixed(2) }), _jsx("td", { children: z.toFixed(2) })] }, i))) })] }) }), _jsxs("div", { className: "dual-controls list-controls", children: [_jsx("button", { onClick: onAddPoint, children: _jsx(Plus, {}) }), _jsx("button", { onClick: onRemovePoint, disabled: tasks.length === 0, children: _jsx(Minus, {}) })] })] }));
}
