import React, { useState, useEffect } from 'react';
import SectionCard from '../../components/ui/SectionCard';

export default function UseEffectConcept() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [logs, setLogs] = useState([]);
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addLog = (msg) => {
    setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev.slice(0, 4)]);
  };

  // 1. Timer Effect with Cleanup
  useEffect(() => {
    if (!timerRunning) return;

    addLog('Effect setup: Started setInterval');
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // CLEANUP FUNCTION: Runs before the effect re-runs or when component unmounts
    return () => {
      addLog('Effect cleanup: Cleared intervalId');
      clearInterval(intervalId);
    };
  }, [timerRunning]);

  // 2. Fetch Effect with AbortController to prevent race conditions
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    addLog(`Fetch effect started for user #${userId}`);

    // Simulated API call with abort signal
    const timeoutId = setTimeout(() => {
      if (!controller.signal.aborted) {
        setUserData({
          id: userId,
          name: `User Alpha-${userId}`,
          role: userId % 2 === 0 ? 'Lead Architect' : 'Staff Engineer',
        });
        setIsLoading(false);
        addLog(`Fetch success for user #${userId}`);
      }
    }, 800);

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
      addLog(`Fetch effect cleaned up / aborted for user #${userId}`);
    };
  }, [userId]);

  const codeSnippet = `import React, { useState, useEffect } from 'react';

export default function DataSubscriber({ topicId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. Setup AbortController for network requests
    const controller = new AbortController();

    async function loadData() {
      try {
        const res = await fetch(\`/api/topics/\${topicId}\`, { signal: controller.signal });
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
      }
    }

    loadData();

    // 2. Cleanup Function: Prevents memory leaks and race conditions
    return () => {
      controller.abort(); // Cancel pending network request
    };
  }, [topicId]); // Dependency array: Runs on mount & whenever topicId changes

  return <div>{data ? data.title : 'Loading...'}</div>;
}`;

  return (
    <SectionCard
      id="use-effect"
      title="useEffect: Side Effects, Cleanups & Abort Controllers"
      subtitle="Lifecycle synchronization, avoiding memory leaks, race conditions, and infinite loop traps"
      badges={[
        { label: 'Hook', variant: 'hook' },
        { label: 'Lifecycle', variant: 'core' },
      ]}
      summaryPoints={[
        'Dependency array rules: Omitted = every render; [] = mount/unmount only; [dep1, dep2] = whenever values change by Object.is() comparison.',
        'Cleanup function: Always return a cleanup function to unsubscribe from sockets, clear timers, remove event listeners, or abort network requests.',
        'React StrictMode Double-Invocation: In development, React mounts, unmounts, and remounts components to help developers detect missing cleanups.',
        'Race Condition fix: When an ID changes quickly, an earlier request could finish after a later one. An AbortController in the cleanup prevents stale data overwriting newer data.'
      ]}
      interviewTip="Why shouldn't you make the useEffect callback async directly (e.g. useEffect(async () => ...))? Because an async function implicitly returns a Promise, but React expects an effect to return either nothing or a synchronous cleanup function!"
      codeSnippet={codeSnippet}
      codeFileName="UseEffectConcept.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {/* Controls Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {/* Timer Demo */}
          <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
            <h4 style={{ color: '#38bdf8', margin: '0 0 0.5rem 0' }}>Timer with Cleanup</h4>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f8fafc', marginBottom: '0.6rem' }}>
              {seconds}s
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className={`btn ${timerRunning ? 'btn-danger' : 'btn-success'}`}
                style={{ padding: '0.3rem 0.8rem' }}
              >
                {timerRunning ? 'Stop & Cleanup' : 'Start Timer'}
              </button>
              <button
                onClick={() => setSeconds(0)}
                className="btn btn-secondary"
                style={{ padding: '0.3rem 0.6rem' }}
              >
                Reset
              </button>
            </div>
          </div>

          {/* AbortController Fetch Demo */}
          <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
            <h4 style={{ color: '#a78bfa', margin: '0 0 0.5rem 0' }}>Request & Abort Controller</h4>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
              {[1, 2, 3, 4].map((id) => (
                <button
                  key={id}
                  onClick={() => setUserId(id)}
                  className={`btn ${userId === id ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem' }}
                >
                  User #{id}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              {isLoading ? (
                <span style={{ color: '#f59e0b' }}>Loading User #{userId}...</span>
              ) : userData ? (
                <span>
                  {userData.name} — <strong style={{ color: '#10b981' }}>{userData.role}</strong>
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {/* Live Logs */}
        <div style={{ background: '#090d16', padding: '0.8rem 1rem', borderRadius: '6px', border: '1px solid #1e293b' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', marginBottom: '0.4rem' }}>
            LIFECYCLE & CLEANUP LOG CONSOLE:
          </div>
          {logs.map((log, idx) => (
            <div key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#38bdf8' }}>
              {log}
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
