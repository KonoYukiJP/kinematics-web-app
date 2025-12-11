import './sidebar.css';

type Props = {
    activeTab: "robot" | "taskPoint";
    points: [number, number, number][];
    onAddPoint: () => void;
    onRemovePoint: () => void;
};

export function Sidebar({ activeTab, points, onAddPoint, onRemovePoint }: Props) {
    return (
        <div id="sidebar">
            {activeTab === "robot" && <h2>Robot Settings</h2>}
            {activeTab === "taskPoint" && <h2>Task Points</h2>}

            <div className="point-tools">
                <button onClick={onAddPoint}>＋ 追加</button>
                <button onClick={onRemovePoint}>－ 削除</button>
            </div>

            <ul className="point-list">
                {points.map((p, i) => (
                    <li key={i}>({p[0]}, {p[1]}, {p[2]})</li>
                ))}
            </ul>
        </div>
    );
}