// appearance.ts

import { useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark';

export const getDefaultAppearance = (): Appearance => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};

export function useSystemAppearance(): Appearance {
    const getSystemAppearance = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [systemAppearance, setSystemAppearance] = useState<Appearance>(getSystemAppearance);

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