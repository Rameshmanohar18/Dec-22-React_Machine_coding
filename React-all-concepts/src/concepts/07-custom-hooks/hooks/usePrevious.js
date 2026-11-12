import { useRef, useEffect } from 'react';

/**
 * Custom Hook: usePrevious
 * Tracks the previous value of a prop or state variable from the prior render cycle.
 *
 * @param {*} value - The value to track
 * @returns {*} The value from the previous render
 */
export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]); // Updates after render finishes

  return ref.current;
}
