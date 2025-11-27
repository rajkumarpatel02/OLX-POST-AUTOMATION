import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T, sanitizer?: (value: T) => T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            const parsed = item ? JSON.parse(item) : initialValue;
            return sanitizer ? sanitizer(parsed) : parsed;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue] as const;
}
