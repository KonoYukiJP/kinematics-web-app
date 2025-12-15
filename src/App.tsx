// App.tsx

import React, { useRef, useState } from 'react';

import { Sidebar } from './components/sidebar/sidebar';
import { Toolbar} from './components/toolbar/Toolbar';
import { Tabbar } from './components/tabbar/Tabbar';
import { ThreeCanvas, ThreeCanvasHandle } from './components/threecanvas/ThreeCanvas';
import './app.css';

export type Point = [number, number, number];

export function App() {
    // active tab
    const [activeTab, setActiveTab] = useState<"robot" | "task">("robot");

    // 書くタブの点データ
    const [robotPoints, setRobotPoints] = useState<[number, number, number][]>([]);
    const [taskPoints, setTaskPoints] = useState<[number, number, number][]>([]);

    // Three.jsとの接続
    const threecanvasRef = useRef<ThreeCanvasHandle>(null);

    // 編集モード
    const [editorMode, setEditorMode] = useState<boolean>(false);
    // 編集中の軸
    const [editingAxis, setEditingAxis] = useState<"x" | "y" | "z" | null>(null);

    // 編集中の値
    const [tempPoint, setTempPoint] = useState<Point>([0, 0, 0]);

    // 現在のタブの配列を取得
    const currentPoints = activeTab === "robot" ? robotPoints : taskPoints;
    const setCurrentPoints = activeTab === "robot" ? setRobotPoints : setTaskPoints;

    // 編集開始
    const startEditing = () => {
        setTempPoint([0, 0, 0]);
        setEditorMode(true);
    };

    const cancelEditing = (p: Point) => {
        setEditorMode(false);
    };

    const confirmEditing = (p: Point) => {
        setCurrentPoints([...robotPoints, p]);

        // Three.js 側に追加
        threecanvasRef.current?.addPoint(p);

        setEditorMode(false);
    }

    const updateTempPoint = (newPoint: Point) => {
        setTempPoint(newPoint);
    }

    // --- 共通関数：どちらのタブにいるかで動作分け ---
    const addPoint = () => {
        const newPoint: [number, number, number] = [0, 0, 0];

        if (activeTab === "robot") {
            setRobotPoints(prev => [...prev, newPoint]);
        } else {
            setTaskPoints(prev => [...prev, newPoint]);
        }

        threecanvasRef.current?.addPoint(newPoint);
    };

    const removePoint = () => {
        if (activeTab === "robot") {
            setRobotPoints(prev => prev.slice(0, -1));
        } else {
            setTaskPoints(prev => prev.slice(0, -1));
        }

        threecanvasRef.current?.removeLastPoint();
    };

    // 点を保存
    const handleConfirm = () => {
        const newPoints = [...currentPoints, tempPoint];
        setCurrentPoints(newPoints);

        // Three.js 側に追加
        threecanvasRef.current?.addPoint(tempPoint);

        setEditorMode(false);
    };

    const handleCancel = () => {
        setEditorMode(false);
    };

    const handleAddPointFromCanvas = (p: [number, number, number]) => {
        setRobotPoints([...robotPoints, p]);
        setEditorMode(false);  // ← 確定したら編集終了
    };

    return (
        <div id="app-container">
            <div style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
                <Sidebar 
                    activeTab={activeTab}
                    onAddPoint={startEditing}
                    onRemovePoint={removePoint}
                    points={currentPoints}
                />

                {/* Toolbar */}
                {editorMode && (
                    <Toolbar
                        point={tempPoint}
                        onFocusX={() => {
                            setEditingAxis("x");
                        }}
                        onFocusY={() => {
                            setEditingAxis("y");
                        }}
                        onFocusZ={() => {
                            setEditingAxis("z");
                        }}
                        onChange={setTempPoint}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                )}

                {/* 下のタブバー */}
                {!editorMode && (
                    <Tabbar
                        activeTab={activeTab}
                        onChangeTab={setActiveTab}
                    />
                )}
            </div>
            
            <ThreeCanvas 
                points={currentPoints} 
                editorMode={editorMode} 
                onPointComplete={confirmEditing}
            />
        </div>
    );
}
