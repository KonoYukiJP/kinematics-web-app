import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import '@/styles/ui/sheet.css';
import './LoginSheet.css';
export function LoginSheet({ onCancel: onCancel, onRegister, onLogin }) {
    const [mode, setMode] = React.useState('login');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (mode === 'login') {
            onLogin(username, password);
        }
        else {
            onRegister(username, password);
        }
    };
    return (_jsx("div", { className: "sheet-overlay", children: _jsxs("div", { className: "sheet", children: [_jsx("h2", { children: mode === 'login' ? 'ログイン' : '新規作成' }), _jsxs("form", { onSubmit: onSubmit, children: [_jsxs("div", { className: "section", children: [_jsx("label", { children: "\u30E6\u30FC\u30B6\u30FC\u540D" }), _jsx("input", { type: "text", value: username, onChange: (e) => setUsername(e.target.value), required: true, placeholder: '\u30E6\u30FC\u30B6\u30FC\u540D' })] }), _jsxs("div", { className: "section", children: [_jsx("label", { children: "\u30D1\u30B9\u30EF\u30FC\u30C9" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, placeholder: '\u30D1\u30B9\u30EF\u30FC\u30C9' })] }), _jsx("div", { className: "login-modal-switch", children: mode === 'login' ? (_jsx("button", { type: "button", className: "link-button", onClick: () => setMode('register'), children: "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u3067\u306A\u3044\u5834\u5408" })) : (_jsx("button", { type: "button", className: "link-button", onClick: () => setMode('login'), children: "\u65E2\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u306E\u5834\u5408" })) }), _jsxs("div", { className: "sheet-buttons", children: [_jsx("button", { type: "button", onClick: onCancel, children: "\u30AD\u30E3\u30F3\u30BB\u30EB" }), _jsx("button", { type: "submit", children: mode === 'login' ? 'ログイン' : '新規作成' })] })] })] }) }));
}
