// appearance.ts
import { useEffect, useState } from 'react';
export const getDefaultAppearance = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};
export function useSystemAppearance() {
    const getSystemAppearance = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [systemAppearance, setSystemAppearance] = useState(getSystemAppearance);
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => {
            setSystemAppearance(media.matches ? 'dark' : 'light');
        };
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);
    return systemAppearance;
}
