import React, { useState, useMemo } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Simulated CPU-intensive calculation
function expensiveFactorialCalculation(n) {
  const start = performance.now();
  let result = 1;
  // Intentionally adding cycles to simulate heavy compute
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 500000; j++) {
      // Burn micro CPU cycles
      Math.sqrt(j);
    }
    result = (result * i) % 1000000007;
  }
  const duration = (performance.now() - start).toFixed(2);
  return { result, duration, timestamp: new Date().toLocaleTimeString() };
}

export default function UseMemoExpensiveCalculation() {
  const [number, setNumber] = useState(15);
  const [unrelatedState, setUnrelatedState] = useState(0);

  // useMemo caches the returned value until 'number' changes
  const computedData = useMemo(() => {
    return expensiveFactorialCalculation(number);
  }, [number]);

  const codeSnippet = `import React, { useState, useMemo } from 'react';

export default function HeavyComputationComponent() {
  const [number, setNumber] = useState(20);
  const [darkTheme, setDarkTheme] = useState(false);

  // 1. useMemo caches the CALCULATION RESULT between re-renders
  // When 'darkTheme' changes, React re-renders this component,
  // but skips recalculating 'heavyResult' entirely!
  const heavyResult = useMemo(() => {
    return runHeavyCalculations(number);
  }, [number]); // Only recomputes if 'number' changes

  return (
    <div>
      <p>Result: {heavyResult}</p>
      {/* Changing theme does NOT re-run heavy calculation */}
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
    </div>
  );
}`;

  return (
    <SectionCard
      id="use-memo"
      title="useMemo: Caching CPU-Heavy Calculations"
      subtitle="Memoizing expensive computational results and preserving object identity across renders"
      badges={[
        { label: 'Performance', variant: 'perf' },
        { label: 'Hook', variant: 'hook' },
      ]}
      summaryPoints={[
        'useMemo caches the RESULT of a function execution: const val = useMemo(() => compute(a, b), [a, b]).',
        'Difference: useCallback(fn, deps) caches the function instance; useMemo(() => fn(), deps) caches the return value.',
        'Preserving Referential Equality: Passing newly created objects/arrays to child props or hook dependencies triggers renders. Wrap them in useMemo to stabilize their identity.',
        'Do not overuse: useMemo adds memory and garbage-collection overhead. Only use it for genuinely expensive computations (sorting/filtering large lists, complex math, or stable dependency references).'
      ]}
      interviewTip="What is the difference between useMemo and useCallback? useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). useCallback returns a memoized function, whereas useMemo returns the memoized result of invoking that function."
      codeSnippet={codeSnippet}
      codeFileName="UseMemoExpensiveCalculation.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {/* Controls */}
          <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
            <h4 style={{ color: '#60a5fa', margin: '0 0 0.6rem 0' }}>Computation Factor (n): {number}</h4>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {[10, 15, 20, 25].map((val) => (
                <button
                  key={val}
                  onClick={() => setNumber(val)}
                  className={`btn ${number === val ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.78rem' }}
                >
                  n = {val}
                </button>
              ))}
            </div>

            <h4 style={{ color: '#34d399', margin: '0 0 0.6rem 0' }}>Unrelated State Trigger</h4>
            <button
              onClick={() => setUnrelatedState((s) => s + 1)}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem' }}
            >
              Re-render Component (+{unrelatedState})
            </button>
          </div>

          {/* Results Display */}
          <div style={{ background: '#090d16', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
            <h4 style={{ color: '#fbbf24', margin: '0 0 0.5rem 0' }}>useMemo Caching Status</h4>
            <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.88rem', color: '#cbd5e1' }}>
              Computed Value Hash: <strong>{computedData.result}</strong>
            </p>
            <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.88rem', color: '#cbd5e1' }}>
              Execution Time: <span style={{ color: '#34d399', fontWeight: 'bold' }}>{computedData.duration} ms</span>
            </p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
              Last Recalculated At: <strong style={{ color: '#38bdf8' }}>{computedData.timestamp}</strong>
            </p>
            <small style={{ display: 'block', marginTop: '0.6rem', color: '#64748b' }}>
              Notice: Clicking "Re-render Component" updates the counter instantly with ZERO calculation delay because useMemo returned the cached result!
            </small>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
