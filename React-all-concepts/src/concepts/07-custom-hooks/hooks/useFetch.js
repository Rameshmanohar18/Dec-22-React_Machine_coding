import { useState, useEffect } from 'react';

/**
 * Custom Hook: useFetch
 * Manages loading, error, and response data from an HTTP endpoint with automatic
 * AbortController cleanup to prevent race conditions.
 *
 * @param {string} url - Target URL to fetch
 * @param {object} options - Fetch options
 * @returns {{ data: *, loading: boolean, error: Error|null }}
 */
export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { ...options, signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

