/* AppHeader.tsx */

import React, { useState, useEffect, useRef } from 'react';
import { Appearance } from '../../appearance/appearance';
import { Settings } from 'lucide-react';

import './AppHeader.css';
import '@/styles/ui/dropdown.css';

type AppHeaderProps = {
    isLoggedIn: boolean;
    username?: string;
    onLogin: () => void;
    onLogout: () => void;
    appearance: Appearance;
    onToggleAppearance: () => void;
};


// close dropdown
function useDropdownClose(
    dropdownRef: React.RefObject<HTMLElement | null>,
    isShowingDropdown: boolean,
    onDropdownClose: () => void
) {
    React.useEffect(() => {
        if (!isShowingDropdown) return;

        // mousedown outside
        function onMouseDown(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onDropdownClose();
            }
        }

        // keydown escape key
        function onKeydown(event: KeyboardEvent) {
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

export function AppHeader({ isLoggedIn, username, onLogin, onLogout, appearance, onToggleAppearance }: AppHeaderProps) {
    const [isShowingSettingsMenu, setIsShowingSettingsMenu] = useState(false);
    const [isShowingUserMenu, setIsShowingUserMenu] = useState(false);
    const settingsDropdownRef = useRef<HTMLDivElement | null>(null);
    const userDropdownRef = useRef<HTMLDivElement | null>(null);

    const onUserButtonClick = () => {
        setIsShowingUserMenu(prev => !prev);
    };
    const onLogoutButtonClick = () => {
        setIsShowingUserMenu(false);
        onLogout();
    };

    useDropdownClose(userDropdownRef, isShowingUserMenu, () => setIsShowingUserMenu(false));
    useDropdownClose(settingsDropdownRef, isShowingSettingsMenu, () => setIsShowingSettingsMenu(false));

    return (
        <header id="app-header">
            <div id="app-header-left">
                <h1>関節独立型運動学計算Webアプリ</h1>
            </div>
            
            <div id="app-header-right">
                {isLoggedIn ? (
                    <div className="dropdown" ref={userDropdownRef}>
                        <button
                            className={`dropdown-button ${isShowingUserMenu ? 'active' : ''}`}
                            onClick={onUserButtonClick}
                        >
                            {username}
                        </button>

                        {isShowingUserMenu && (
                            <div className="dropdown-menu">
                                <button className="logout-button" onClick={onLogoutButtonClick}>
                                    ログアウト
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className="dropdown-button" onClick={onLogin}>ログイン</button>
                )}
                <div className="dropdown" ref={settingsDropdownRef}>
                    <button
                        type="button"
                        className={`dropdown-button ${isShowingSettingsMenu ? 'active' : ''}`}
                        aria-label="設定"
                        onClick={() => setIsShowingSettingsMenu(prev => !prev)}
                    >
                        <Settings />
                    </button>

                    {isShowingSettingsMenu && (
                        <div className="dropdown-menu">
                            <div className="menu-item">
                                <span>ダークモード</span>
                                <label className="toggle">
                                    <input
                                        type="checkbox"
                                        checked={appearance === 'dark'}
                                        onChange={onToggleAppearance}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}