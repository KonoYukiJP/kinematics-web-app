
import React from 'react';
import '@/styles/ui/sheet.css';
import './LoginSheet.css';

type LoginSheetProps = {
    onCancel: () => void;
    onRegister: (username: string, password: string) => void;
    onLogin: (username: string, password: string) => void;
};

export function LoginSheet({ onCancel: onCancel, onRegister, onLogin }: LoginSheetProps) {
    type Mode = 'login' | 'register';
    const [mode, setMode] = React.useState<Mode>('login');

    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (mode === 'login') {
            onLogin(username, password);
        } else {
            onRegister(username, password);
        }
    };

    return (
        <div className="sheet-overlay">
            <div className="sheet">
                <h2>{mode === 'login' ? 'ログイン' : '新規作成'}</h2>
                <form onSubmit={onSubmit}>
                    <div className="section">
                        <label>ユーザー名</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder='ユーザー名'
                        />
                    </div>
                    <div className="section">
                        <label>パスワード</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='パスワード'
                        />
                    </div>
                    <div className="login-modal-switch">
                        {mode === 'login' ? (
                            <button
                                type="button"
                                className="link-button"
                                onClick={() => setMode('register')}
                            >
                                アカウントをお持ちでない場合
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="link-button"
                                onClick={() => setMode('login')}
                            >
                                既にアカウントをお持ちの場合
                            </button>
                        )}
                    </div>
                    <div className="sheet-buttons">
                        <button type="button" onClick={onCancel}>
                            キャンセル
                        </button>
                        <button type="submit">
                            {mode === 'login' ? 'ログイン' : '新規作成'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}