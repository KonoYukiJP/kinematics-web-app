// App.tsx

// Libraries
import React, { use, useRef, useState, useEffect } from 'react';

// Types
import { Point } from './types/point';
import { Task } from './types/task';

// API
import { register, login } from './api/auth';

import { Appearance, getDefaultAppearance, useSystemAppearance } from './appearance/appearance';

// Components
import { AppHeader } from './components/app-header/AppHeader';
import { LoginSheet } from './components/login-sheet/LoginSheet';
import { RoboView } from './components/roboview/RoboView';
import { Toolbar} from './components/toolbar/Toolbar';
import { ThreeCanvas } from './components/threecanvas/ThreeCanvas';
import { TaskList } from './components/taskview/TaskView';

// Styles
import './app.css';

// Main App Component
export function App() {
    const systemAppearance = useSystemAppearance();
    const [appearance, setAppearance] = useState<Appearance>(getDefaultAppearance());

    // ログイン状態
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string | null>(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

    type Target = "robo" | "task" | null;
    // 点データ
    const [robotJoints, setRobotJoints] = useState<Point[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);

    // 編集モード
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [target, setTarget] = useState<Target>(null);

    const [editingAxis, setEditingAxis] = useState<"x" | "y" | "z" | null>(null);

    const [inputPoint, setInputPoint] = useState<Point>([0, 0, 0]);
    const [selectedJointIndex, setSelectedJointIndex] = useState<number | null>(null);
    const inputPointRef = useRef<Point>(inputPoint);
    useEffect(() => {
        inputPointRef.current = inputPoint;
    }, [inputPoint]);

    useEffect(() => {
        setAppearance(systemAppearance);
    }, [systemAppearance]);
    
    const handleRegister = async (username: string, password: string) => {
        try {
            await register(username, password);
            alert('登録が完了しました。続けてログインしてください。');
        } catch (err) {
             if (err instanceof Error && err.message === 'USER_ALREADY_EXISTS') {
                alert('そのユーザー名は既に使われています。');
            } else {
                alert('登録に失敗しました。');
            }
        }
    };

    const handleLogin = async (username: string, password: string) => {
        try {
            const response = await login(username, password);
            console.log(response)
            // 成功時
            setIsLoggedIn(true);
            setUsername(username);
            setIsLoginModalOpen(false);
        } catch (err) {
            alert('ログインに失敗しました。');
        }
    }

    const toggleAppearance = () => {
        setAppearance(prev => prev === 'light' ? 'dark' : 'light');
    };

    // 編集開始
    const startEditing = (target: Target) => {
        setInputPoint([0, 0, 0]);
        setTarget(target);
        setIsEditing(true);
    };
    // 点を保存
    const confirmEditing = () => {
        const inputPoint = inputPointRef.current;
        if (target === "robo") {
            setRobotJoints(prev => [...prev, inputPoint]);
        } else if (target === "task") {
            const selectedIndex = selectedJointIndex !== null ? selectedJointIndex : (robotJoints.length - 1);
            setTasks(prev => [...prev, 
                {
                    jointIndex: selectedIndex,
                    targetPosition: inputPoint
                }
        ]);
        }
        setTarget(null);
        setIsEditing(false);
    };
    const cancelEditing = () => {
        setTarget(null);
        setIsEditing(false);
    };

    const removePoint = (target: Target) => {
        if (target === "robo") {
            setRobotJoints(prev => prev.slice(0, -1));
        } else if (target === "task") {
            setTasks(prev => prev.slice(0, -1));
        }
    };
    return (
        <div id="app-container" className={`${appearance}-appearance`}>
            <AppHeader
                isLoggedIn={isLoggedIn}
                username={username ?? undefined}
                onLogin={() => {
                    setIsLoginModalOpen(true);
                }}
                onLogout={() => {
                    setIsLoggedIn(false);
                    setUsername(null);
                }}
                appearance={appearance}
                onToggleAppearance={toggleAppearance}
            />

            {isLoginModalOpen && (
                <LoginSheet
                    onCancel={() => setIsLoginModalOpen(false)}
                    onRegister={async (username, password) => {
                        handleRegister(username, password);
                    }}
                    onLogin={async (username, password) => {
                        handleLogin(username, password);
                    }}
                />
            )}

            <main id="app-main">
                <RoboView
                    roboPoints={robotJoints}
                    onAddPoint={() => startEditing("robo")}
                    onRemovePoint={() => removePoint("robo")}
                />
                <div id="three-canvas-container">
                    <ThreeCanvas
                        appearance={appearance}
                        roboPoints={robotJoints} 
                        tasks={tasks}
                        isEditing={isEditing} 
                        target={target}
                        inputPoint={inputPoint}
                        onInputPointChange={setInputPoint}
                        selectedJointIndex={selectedJointIndex}
                        setSelectedJointIndex={setSelectedJointIndex}
                        onInputPointConfirm={confirmEditing}
                    />
                    {isEditing && (
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
                    taskPoints={tasks}
                    onAddPoint={() => startEditing("task")}
                    onRemovePoint={() => removePoint("task")}
                />
            </main>
            
        </div>
    );
}
