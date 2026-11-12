import { useEffect } from 'react';

/**
 * Custom Hook: useOnClickOutside
 * Triggers a callback whenever a mousedown or touchstart event occurs outside
 * the referenced DOM element (essential for modals, dropdowns, popovers).
 *
 * @param {React.RefObject} ref - Target container ref
 * @param {Function} handler - Callback invoked when clicking outside
 */
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or its descendants
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
