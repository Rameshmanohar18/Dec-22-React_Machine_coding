import { useState, useEffect, useRef } from 'react';

/**
 * Custom Hook: useThrottle
 * Throttles an input value so that updates occur at most once every intervalMs.
 * Unlike useDebounce which resets the timer on each change, throttle guarantees
 * regular periodic execution while changes are ongoing.
 *
 * @param {*} value - The value to throttle
 * @param {number} intervalMs - Throttle interval in milliseconds
 * @returns {*} throttledValue
 */
export function useThrottle(value, intervalMs = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const elapsed = Date.now() - lastExecuted.current;

    if (elapsed >= intervalMs) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, intervalMs - elapsed);

      return () => clearTimeout(timerId);
    }
  }, [value, intervalMs]);

  return throttledValue;
}
