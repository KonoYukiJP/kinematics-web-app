// src/components/taskview/TaskView.tsx

import { Task } from '../../types/task';
import { Plus, Minus } from 'lucide-react'

import '@/styles/layout/sidebar.css';
import '@/styles/ui/table.css';
import '@/styles/ui/controls.css'

type Props = {
    tasks: Task[];
    onAddPoint: () => void;
    onRemovePoint: () => void;
};

export function TaskListView({ tasks, onAddPoint, onRemovePoint }: Props) {
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
                        {tasks.map(({ jointIndex, targetPosition: [x, y, z]}, i) => (
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

            <div className="dual-controls list-controls">
                <button onClick={onAddPoint}><Plus /></button>
                <button 
                    onClick={onRemovePoint}
                    disabled={tasks.length === 0}
                ><Minus /></button>
            </div>
        </div>
    );
}