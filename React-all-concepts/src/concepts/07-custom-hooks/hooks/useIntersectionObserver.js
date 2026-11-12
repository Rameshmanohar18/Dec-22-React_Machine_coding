import { useState, useEffect } from 'react';

/**
 * Custom Hook: useIntersectionObserver
 * Detects whether a target DOM element is intersecting with the viewport
 * or a parent container. Ideal for infinite scrolling, image lazy-loading,
 * and view telemetry.
 *
 * @param {React.RefObject} targetRef - Reference to the target DOM node
 * @param {IntersectionObserverInit} options - IntersectionObserver configuration
 * @returns {boolean} isIntersecting
 */
export function useIntersectionObserver(targetRef, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = targetRef?.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, options.root, options.rootMargin, options.threshold]);

  return isIntersecting;
}
