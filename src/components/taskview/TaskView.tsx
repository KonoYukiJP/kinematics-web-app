import './taskview.css';
import { Plus, Minus } from 'lucide-react'

type Props = {
    taskPoints: [number, number, number][];
    onAddPoint: () => void;
    onRemovePoint: () => void;
};

export function TaskList({ taskPoints, onAddPoint, onRemovePoint }: Props) {
    return (
        <div id="taskview">
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
                        {taskPoints.map(([x, y, z], i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
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