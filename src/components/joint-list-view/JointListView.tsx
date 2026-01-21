// src/components/roboview/roboView.tsx

import { useState } from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';

import '@/styles/layout/sidebar.css';
import '@/styles/ui/table.css';
import '@/styles/ui/controls.css';
import './JointListView.css';

type Props = {
    joints: [number, number, number][];
    results: [number, number, number][];
    onAddPoint: () => void;
    onRemovePoint: () => void;
};

export function JointListView({ joints, results, onAddPoint, onRemovePoint }: Props) {
    const [activeTab, setActiveTab] = useState<'input' | 'result'>('input');
    const displayJoints = activeTab === 'input' ? joints : results;

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                {activeTab === 'input' ? (
                    <h2>ジョイント設定</h2>
                ) : (
                    <h2>計算結果</h2>
                )}
                {results.length !== 0 && (
                    <div className="dual-controls navigation-controls">
                    <button
                        type="button"
                        onClick={() => setActiveTab('input')}
                        disabled={activeTab === 'input'}
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('result')}
                        disabled={activeTab === 'result'}
                    >
                        <ChevronRight />
                    </button>
                </div>
                )}
            </div>

            {activeTab === 'input' ? (
                <p>ロボットの各関節の位置を設定します。</p>
            ) : (
                <p>逆運動学によって計算された関節位置です。</p>
            )}

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
                        {displayJoints.map(([x, y, z], i) => (
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
            <div className="dual-controls list-controls">
                <button onClick={onAddPoint}><Plus /></button>
                <button 
                    onClick={onRemovePoint}
                    disabled={joints.length === 0}
                >
                    <Minus />
                </button>
            </div>
        </div>
    );
}