// src/components/taskview/TaskView.tsx

import { Task } from '../../types/task';
import { Plus, Minus } from 'lucide-react'

import '@/styles/layout/sidebar.css';
import '@/styles/ui/table.css';

type Props = {
    taskPoints: Task[];
    onAddPoint: () => void;
    onRemovePoint: () => void;
};

export function TaskList({ taskPoints, onAddPoint, onRemovePoint }: Props) {
    return (
        <div className="sidebar">
            <h2>タスク設定</h2>
            <p>ジョイントを指定し、そのジョイントが到達すべき目標座標を設定します。</p>

            <div className="table-wrapper">
                <table className="points-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>X</th>
                            <th>Y</th>
                            <th>Z</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskPoints.map(({ jointIndex, targetPosition: [x, y, z]}, i) => (
                            <tr key={i}>
                                <td>{jointIndex + 1}</td>
                                <td>{x.toFixed(2)}</td>
                                <td>{y.toFixed(2)}</td>
                                <td>{z.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="list-controls">
                <button onClick={onAddPoint}><Plus /></button>
                <button onClick={onRemovePoint}><Minus /></button>
            </div>
        </div>
    );
}