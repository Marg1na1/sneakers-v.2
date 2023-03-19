import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number = 450) => {
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(handler)
    }, [value]);

    return debouncedValue;
}