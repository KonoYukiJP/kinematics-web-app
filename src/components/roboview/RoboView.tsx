// src/components/roboview/roboView.tsx

import { Plus, Minus } from 'lucide-react';

import '@/styles/layout/sidebar.css';
import '@/styles/ui/table.css';

type Props = {
    roboPoints: [number, number, number][];
    onAddPoint: () => void;
    onRemovePoint: () => void;
};

export function RoboView({ roboPoints, onAddPoint, onRemovePoint }: Props) {
    return (
        <div className="sidebar">
            <h2>ジョイント設定</h2>
            <p>ロボットの各関節の位置を設定します。</p>

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
                        {roboPoints.map(([x, y, z], i) => (
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