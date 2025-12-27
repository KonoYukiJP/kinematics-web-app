// App.tsx

import React, { use, useRef, useState, useEffect } from 'react';

import { RoboView, Sidebar } from './components/roboview/RoboView';
import { Toolbar} from './components/toolbar/Toolbar';
import { ThreeCanvas } from './components/threecanvas/ThreeCanvas';
import { TaskList } from './components/taskview/TaskView';
import './app.css';

export type Point = [number, number, number];

export function App() {
    type Target = "robo" | "task" | null;
    // 点データ
    const [roboPoints, setRoboPoints] = useState<[number, number, number][]>([]);
    const [taskPoints, setTaskPoints] = useState<[number, number, number][]>([]);

    // 編集モード
    const [editorMode, setEditorMode] = useState<boolean>(false);
    const [target, setTarget] = useState<Target>(null);

    const [editingAxis, setEditingAxis] = useState<"x" | "y" | "z" | null>(null);

    const [inputPoint, setInputPoint] = useState<Point>([0, 0, 0]);
    const inputPointRef = useRef<Point>(inputPoint);
    useEffect(() => {
        inputPointRef.current = inputPoint;
    }, [inputPoint]);
    
    // 編集開始
    const startEditing = (target: Target) => {
        setInputPoint([0, 0, 0]);
        setTarget(target);
        setEditorMode(true);
    };
    // 点を保存
    const confirmEditing = () => {
        const inputPoint = inputPointRef.current;
        if (target === "robo") {
            setRoboPoints(prev => [...prev, inputPoint]);
        } else if (target === "task") {
            setTaskPoints(prev => [...prev, inputPoint]);
        }
        setTarget(null);
        setEditorMode(false);
    };
    const cancelEditing = () => {
        setTarget(null);
        setEditorMode(false);
    };

    const removePoint = (target: Target) => {
        if (target === "robo") {
            setRoboPoints(prev => prev.slice(0, -1));
        } else if (target === "task") {
            setTaskPoints(prev => prev.slice(0, -1));
        }
    };
    return (
        <div id="app-container">
            <RoboView
                roboPoints={roboPoints}
                onAddPoint={() => startEditing("robo")}
                onRemovePoint={() => removePoint("robo")}
            />
            <div id="three-canvas-container">
                <ThreeCanvas
                    roboPoints={roboPoints} 
                    taskPoints={taskPoints}
                    target={target}
                    inputPoint={inputPoint}
                    editorMode={editorMode} 
                    onInputPointChange={setInputPoint}
                    onInputPointConfirm={confirmEditing}
                />
                {editorMode && (
                    <Toolbar
                        point={inputPoint}
                        onFocusX={() => {setEditingAxis("x");}}
                        onFocusY={() => {setEditingAxis("y");}}
                        onFocusZ={() => {setEditingAxis("z");}}
                        onChange={setInputPoint}
                        onConfirm={confirmEditing}
                        onCancel={cancelEditing}
                    />
                )}
            </div>

            <TaskList
                taskPoints={taskPoints}
                onAddPoint={() => startEditing("task")}
                onRemovePoint={() => removePoint("task")}
            />
        </div>
    );
}
