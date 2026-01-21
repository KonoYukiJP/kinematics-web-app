import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* AppHeader.tsx */
import React, { useState, useRef } from 'react';
import { Settings } from 'lucide-react';
import './AppHeader.css';
import '@/styles/ui/dropdown.css';
// close dropdown
function useDropdownClose(dropdownRef, isShowingDropdown, onDropdownClose) {
    React.useEffect(() => {
        if (!isShowingDropdown)
            return;
        // mousedown outside
        function onMouseDown(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onDropdownClose();
            }
        }
        // keydown escape key
        function onKeydown(event) {
            if (event.key === 'Escape') {
                onDropdownClose();
            }
        }
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('keydown', onKeydown);
        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('keydown', onKeydown);
        };
    }, [isShowingDropdown]);
}
export function AppHeader({ isLoggedIn, username, onLogin, onLogout, appearance, onToggleAppearance }) {
    const [isShowingSettingsMenu, setIsShowingSettingsMenu] = useState(false);
    const [isShowingUserMenu, setIsShowingUserMenu] = useState(false);
    const settingsDropdownRef = useRef(null);
    const userDropdownRef = useRef(null);
    const onUserButtonClick = () => {
        setIsShowingUserMenu(prev => !prev);
    };
    const onLogoutButtonClick = () => {
        setIsShowingUserMenu(false);
        onLogout();
    };
    useDropdownClose(userDropdownRef, isShowingUserMenu, () => setIsShowingUserMenu(false));
    useDropdownClose(settingsDropdownRef, isShowingSettingsMenu, () => setIsShowingSettingsMenu(false));
    return (_jsxs("header", { id: "app-header", children: [_jsx("div", { id: "app-header-left", children: _jsx("h1", { children: "\u95A2\u7BC0\u72EC\u7ACB\u578B\u904B\u52D5\u5B66\u8A08\u7B97Web\u30A2\u30D7\u30EA" }) }), _jsxs("div", { id: "app-header-right", children: [isLoggedIn ? (_jsxs("div", { className: "dropdown", ref: userDropdownRef, children: [_jsx("button", { className: `dropdown-button ${isShowingUserMenu ? 'active' : ''}`, onClick: onUserButtonClick, children: username }), isShowingUserMenu && (_jsx("div", { className: "dropdown-menu", children: _jsx("button", { className: "logout-button", onClick: onLogoutButtonClick, children: "\u30ED\u30B0\u30A2\u30A6\u30C8" }) }))] })) : (_jsx("button", { className: "dropdown-button", onClick: onLogin, children: "\u30ED\u30B0\u30A4\u30F3" })), _jsxs("div", { className: "dropdown", ref: settingsDropdownRef, children: [_jsx("button", { type: "button", className: `dropdown-button ${isShowingSettingsMenu ? 'active' : ''}`, "aria-label": "\u8A2D\u5B9A", onClick: () => setIsShowingSettingsMenu(prev => !prev), children: _jsx(Settings, {}) }), isShowingSettingsMenu && (_jsx("div", { className: "dropdown-menu", children: _jsxs("div", { className: "menu-item", children: [_jsx("span", { children: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9" }), _jsxs("label", { className: "toggle", children: [_jsx("input", { type: "checkbox", checked: appearance === 'dark', onChange: onToggleAppearance }), _jsx("span", { className: "slider round" })] })] }) }))] })] })] }));
}
