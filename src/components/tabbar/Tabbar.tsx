// TabBar.tsx

import React from 'react';
import './tabbar.css';

type Props = {
    activeTab: 'robot' | 'task';
    onChangeTab: (tab: 'robot' | 'task') => void;
};

export function Tabbar({ activeTab, onChangeTab }: Props) {
    return (
        <div id='tabbar'>
            <button
                className={activeTab==='robot' ? 'tab active' : 'tab'}
                onClick={() => onChangeTab('robot')}
            >
                ロボット
            </button>

            <button
                className={activeTab==='task' ? 'tab active' : 'tab'}
                onClick={() => onChangeTab('task')}
            >
                タスク
            </button>
        </div>
    );
}