import { useState, useEffect } from "react";

function ApiPolling({ url, interval = 10000 }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: abortController.signal,
        });

        if (!response.ok) throw new Error("Failed to fetch");

        const result = await response.json();
        if (mounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (err.name !== "AbortError" && mounted) {
          setError(err.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval
    const intervalId = setInterval(fetchData, interval);

    // Cleanup
    return () => {
      mounted = false;
      clearInterval(intervalId);
      abortController.abort();
    };
  }, [url, interval]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

// Usage:
// <ApiPolling url="https://api.example.com/data" />
export default ApiPolling;
