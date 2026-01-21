// src/api/auth.ts
import { API_BASE_URL } from '../config/api';
export async function register(username, password) {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    if (res.status === 409) {
        throw new Error('USER_ALREADY_EXISTS');
    }
    if (!res.ok) {
        throw new Error('network error');
    }
    const data = await res.json();
    if (!data.ok) {
        throw new Error('register failed');
    }
    return data; // { ok: true }
}
export async function login(username, password) {
    const body = new URLSearchParams({
        username,
        password,
    });
    const response = await fetch(`${API_BASE_URL}/auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
    });
    if (!response.ok) {
        throw new Error('login failed');
    }
    return response.json();
}
export async function logout() {
    const res = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
    });
    if (!res.ok) {
        throw new Error('network error');
    }
    const data = await res.json();
    if (!data.ok) {
        throw new Error('logout failed');
    }
    return data; // { ok: true }
}
