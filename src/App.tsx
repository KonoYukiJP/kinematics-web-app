// App.tsx

// Libraries
import React, { useRef, useState, useEffect } from 'react';

// Types
import { Point } from './types/point';
import { Task } from './types/task';

// API
import { register, login } from './api/authentication';
import { solveKinematics } from './api/solve';

import { Appearance, getDefaultAppearance, useSystemAppearance } from './appearance/appearance';

// Components
import { AppHeader } from './components/app-header/AppHeader';
import { LoginSheet } from './components/login-sheet/LoginSheet';
import { JointListView } from './components/joint-list-view/JointListView';
import { TaskListView } from './components/task-list-view/TaskListView';
import { Toolbar} from './components/toolbar/Toolbar';
import { ThreeCanvas } from './components/threecanvas/ThreeCanvas';

// Styles
import './app.css';

// Main App Component
export function App() {
    const systemAppearance = useSystemAppearance();
    const [appearance, setAppearance] = useState<Appearance>(getDefaultAppearance());

    // ログイン状態
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string | null>(null);
    const [isShowingLoginSheet, setIsShowingLoginSheet] = useState<boolean>(false);

    type Target = "robo" | "task" | null;
    // 点データ
    const [robotJoints, setRobotJoints] = useState<Point[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isShowingResults, setIsShowingResults] = useState<boolean>(false);
    const [results, setResults] = useState<Point[]>([]);

    // 編集モード
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [target, setTarget] = useState<Target>(null);

    const [editingAxis, setEditingAxis] = useState<"x" | "y" | "z" | null>(null);

    const [inputPoint, setInputPoint] = useState<Point>([0, 0, 0]);
    const [selectedJointIndex, setSelectedJointIndex] = useState<number | null>(null);
    const inputPointRef = useRef<Point>(inputPoint);

    useEffect(() => {
        setAppearance(systemAppearance);
    }, [systemAppearance]);

    useEffect(() => {
        inputPointRef.current = inputPoint;
    }, [inputPoint]);
    
    const handleLogin = async (username: string, password: string) => {
        try {
            const response = await login(username, password);
            // 成功時
            setIsLoggedIn(true);
            setUsername(username);
            setAuthToken(response.access_token);
            setIsShowingLoginSheet(false);
        } catch (err) {
            alert('ログインに失敗しました。');
        }
    };
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
    const handleSolveKinematics = async () => {
        try {
            if (!authToken) {
                alert('ログインをしてください。');
                setIsShowingLoginSheet(true);
                return;
            }
            if (robotJoints.length === 0) {
                alert('ジョイントを設定してください。');
                return;
            }
            if (tasks.length === 0) {
                alert('タスクを設定してください。');
                return;
            }
            const steps = await solveKinematics(authToken, robotJoints, tasks);

            const positions = steps[0]
                .slice()
                .sort((a, b) => a.joint_id - b.joint_id)
                .map(position => [position.x, position.y, position.z] as Point);
            
            setResults(positions);
            console.log('最終結果:', positions);
        } catch (err) {
            alert('計算に失敗しました。');
            console.error(err);
        }
    };

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
                    setIsShowingLoginSheet(true);
                }}
                onLogout={() => {
                    setIsLoggedIn(false);
                    setUsername(null);
                }}
                appearance={appearance}
                onToggleAppearance={toggleAppearance}
            />

            {isShowingLoginSheet && (
                <LoginSheet
                    onCancel={() => setIsShowingLoginSheet(false)}
                    onRegister={async (username, password) => {
                        handleRegister(username, password);
                    }}
                    onLogin={async (username, password) => {
                        handleLogin(username, password);
                    }}
                />
            )}

            <main id="app-main">
                <JointListView
                    joints={robotJoints}
                    results={results}
                    onAddPoint={() => startEditing("robo")}
                    onRemovePoint={() => removePoint("robo")}
                />
                <div id="three-canvas-container">
                    <ThreeCanvas
                        appearance={appearance}
                        joints={robotJoints} 
                        tasks={tasks}
                        results={results}
                        isEditing={isEditing} 
                        target={target}
                        inputPoint={inputPoint}
                        onInputPointChange={setInputPoint}
                        selectedJointIndex={selectedJointIndex}
                        setSelectedJointIndex={setSelectedJointIndex}
                        onInputPointConfirm={confirmEditing}
                    />
                    {isEditing ? (
                        <Toolbar
                            point={inputPoint}
                            onFocusX={() => {setEditingAxis("x");}}
                            onFocusY={() => {setEditingAxis("y");}}
                            onFocusZ={() => {setEditingAxis("z");}}
                            onChange={setInputPoint}
                            onConfirm={confirmEditing}
                            onCancel={cancelEditing}
                        />
                    ) : (
                        <button className="solve-button" onClick={handleSolveKinematics}>
                            実行
                        </button>
                    )}
                </div>

                <TaskListView
                    tasks={tasks}
                    onAddPoint={() => startEditing("task")}
                    onRemovePoint={() => removePoint("task")}
                />
            </main>
            
        </div>
    );
}
