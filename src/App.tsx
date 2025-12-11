// App.tsx

import React, { useRef, useState } from 'react';

import { Sidebar } from './components/sidebar/sidebar';
import { Toolbar} from './components/toolbar/Toolbar';
import { Tabbar } from './components/tabbar/Tabbar';
import { ThreeCanvas, ThreeCanvasHandle } from './components/threecanvas/ThreeCanvas';
import './style.css';

export function App() {
    // active tab
    const [activeTab, setActiveTab] = useState<"robot" | "taskPoint">("robot");

    // 書くタブの点データ
    const [robotPoints, setRobotPoints] = useState<[number, number, number][]>([]);
    const [taskPoints, setTaskPoints] = useState<[number, number, number][]>([]);

    // 編集ウィンドウの表示
    const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

    // 編集中の値
    const [editingValue, setEditingValue] = useState<[number, number, number]>([0, 0, 0]);

    // Three.jsとの接続
    const threeRef = useRef<ThreeCanvasHandle>(null);

    // 現在のタブの配列を取得
    const currentPoints = activeTab === "robot" ? robotPoints : taskPoints;
    const setCurrentPoints = activeTab === "robot" ? setRobotPoints : setTaskPoints;

    // 新規点追加の開始
    const handleAddPoint = () => {
        setEditingValue([0, 0, 0]);
        setIsEditorOpen(true);
    };

    // --- 共通関数：どちらのタブにいるかで動作分け ---
    const addPoint = () => {
        const newPoint: [number, number, number] = [0, 0, 0];

        if (activeTab === "robot") {
            setRobotPoints(prev => [...prev, newPoint]);
        } else {
            setTaskPoints(prev => [...prev, newPoint]);
        }

        threeRef.current?.addPoint(newPoint);
    };

    const removePoint = () => {
        if (activeTab === "robot") {
            setRobotPoints(prev => prev.slice(0, -1));
        } else {
            setTaskPoints(prev => prev.slice(0, -1));
        }

        threeRef.current?.removeLastPoint();
    };

    // 点を保存
    const handleConfirm = () => {
        const newPoints = [...currentPoints, editingValue];
        setCurrentPoints(newPoints);

        // Three.js 側に追加
        threeRef.current?.addPoint(editingValue);

        setIsEditorOpen(false);
    };

    const handleCancel = () => {
        setIsEditorOpen(false);
    };

    return (
        <div id="app-container"
            style={{
                width: '100%',
                height: '100%',
                display: 'flex'
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                <Sidebar 
                    activeTab={activeTab}
                    onAddPoint={handleAddPoint}
                    onRemovePoint={removePoint}
                    points={currentPoints}
                />

                {/* Toolbar */}
                {isEditorOpen && (
                    <Toolbar
                        value={editingValue}
                        onChange={setEditingValue}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                )}

                {/* 下のタブバー */}
                <Tabbar
                    activeTab={activeTab}
                    onChangeTab={setActiveTab}
                />
            </div>
            
            <ThreeCanvas ref={threeRef} points={robotPoints} />
        </div>
    );
}
