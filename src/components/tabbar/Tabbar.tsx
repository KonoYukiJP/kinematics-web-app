// TabBar.tsx
import React from 'react';

type Props = {
    activeTab: 'robot' | 'taskPoint';
    onChangeTab: (tab: 'robot' | 'taskPoint') => void;
};

export function Tabbar({ activeTab, onChangeTab }: Props) {
    return (
        <div style={{
            display: 'flex',
            borderTop: '1px solid #444',
            height: '48px'
        }}>
            <button
                style={{
                    flex: 1,
                    background: activeTab === 'robot' ? '#333' : '#222',
                    color: 'white'
                }}
                onClick={() => onChangeTab('robot')}
            >
                ロボット
            </button>

            <button
                style={{
                    flex: 1,
                    background: activeTab === 'taskPoint' ? '#333' : '#222',
                    color: 'white'
                }}
                onClick={() => onChangeTab('taskPoint')}
            >
                タスク点
            </button>
        </div>
    );
}