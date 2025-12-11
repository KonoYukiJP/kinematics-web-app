

type Props = {
    value: [number, number, number];
    onChange: (v: [number, number, number]) => void;
    onConfirm: () => void;
    onCancel: () => void;
};

export function Toolbar({ value, onChange, onConfirm, onCancel }: Props) {
    const update = (index: number, val: number) => {
        const newVal = [...value] as [number,number,number];
        newVal[index] = val;
        onChange(newVal);
    };

    return (
        <div id="point-editor">
            <div className="editor-row">
                <label>X</label>
                <input 
                    type="number" 
                    value={value[0]} 
                    onChange={e => update(0, Number(e.target.value))}
                />
            </div>

            <div className="editor-row">
                <label>Y</label>
                <input 
                    type="number" 
                    value={value[1]} 
                    onChange={e => update(1, Number(e.target.value))}
                />
            </div>

            <div className="editor-row">
                <label>Z</label>
                <input 
                    type="number" 
                    value={value[2]} 
                    onChange={e => update(2, Number(e.target.value))}
                />
            </div>

            <div className="editor-buttons">
                <button onClick={onConfirm}>✔</button>
                <button onClick={onCancel}>キャンセル</button>
            </div>
        </div>
    );
}