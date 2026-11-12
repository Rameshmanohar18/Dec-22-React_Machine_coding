import { useState, useEffect } from 'react';

/**
 * Custom Hook: useDebounce
 * Delays updating the debounced value until after the specified delay has elapsed
 * since the last time the value was modified.
 *
 * @param {*} value - The input value to debounce
 * @param {number} delayMs - Delay duration in milliseconds
 * @returns {*} debouncedValue
 */
export function useDebounce(value, delayMs = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    // Cancel timeout if value or delay changes before delayMs has passed
    return () => {
      clearTimeout(handler);
    };
  }, [value, delayMs]);

  return debouncedValue;
}
