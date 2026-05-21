import { useCallback, useEffect, useState } from "react";

/**
 * handleDebounce utility function
 * Delays the execution of a function until the user stops typing
 * @param fn - function to debounce
 * @param time - delay in milliseconds
 */
const handleDebounce = (fn: (value: string) => void, time: number) => {
    let timerId: ReturnType<typeof setTimeout>;
    return function (value: string) {
        // Clear previous timer on every keystroke
        clearTimeout(timerId);
        // Set new timer
        timerId = setTimeout(() => fn(value), time)
    }
}

/**
 * useSearch hook
 * Handles search input state and debounced search
 * @param onSearch - callback function to handle search
 */
export function useSearch(onSearch: (value: string) => void, value: string = "") {

    useEffect(() => {
        if (value === "") {
            setInputValue(""); // reset input when parent resets
        }
    }, [value])

    // Local input value for immediate UI update
    const [inputValue, setInputValue] = useState(value)

    // Create debounced search function once on mount
    const debounce = useCallback(handleDebounce(onSearch, 500), []);

    /**
     * Handle input change
     * Updates input immediately, debounces the search
     */
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        debounce(e.target.value.toLowerCase().trim());
    }

    return { inputValue, handleSearch }
}