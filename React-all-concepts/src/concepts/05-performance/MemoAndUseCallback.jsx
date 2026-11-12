import React, { useState, useCallback, useRef } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Child component wrapped in React.memo
const MemoizedChild = React.memo(function MemoizedChild({ name, onAction, variant }) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  const isGreen = variant === 'safe';

  return (
    <div
      style={{
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: isGreen ? '#052e16' : '#3f1118',
        border: isGreen ? '1px solid #16a34a' : '1px solid #dc2626',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ color: isGreen ? '#86efac' : '#fca5a5', fontSize: '0.9rem' }}>{name}</strong>
        <span className="render-badge">Renders: {renderCount.current}</span>
      </div>
      <button
        onClick={onAction}
        className={`btn ${isGreen ? 'btn-success' : 'btn-danger'}`}
        style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', alignSelf: 'flex-start' }}
      >
        Trigger Action
      </button>
    </div>
  );
});

export default function MemoAndUseCallback() {
  const [parentCounter, setParentCounter] = useState(0);
  const [textInput, setTextInput] = useState('');

  // 1. Un-memoized function: Created freshly on EVERY single parent render!
  // Referential equality changes -> React.memo fails -> child re-renders
  const handleUnmemoizedAction = () => {
    console.log('Unmemoized callback called');
  };

  // 2. Memoized function with useCallback: Reference remains stable!
  // Referential equality maintained -> React.memo skips re-render!
  const handleMemoizedAction = useCallback(() => {
    console.log('Memoized callback called');
  }, []); // Empty deps: stable forever

  const codeSnippet = `import React, { useState, useCallback } from 'react';

// Child wrapped in React.memo (Shallow prop comparison)
const Button = React.memo(({ onClick, label }) => {
  console.log('Rendering', label);
  return <button onClick={onClick}>{label}</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  // BAD: Creates a new function reference every time Parent renders
  // Button will re-render even though it is wrapped in React.memo!
  const handleBad = () => console.log('bad');

  // GOOD: useCallback caches the function instance between renders
  // Button's props remain referentially identical -> skips re-render!
  const handleGood = useCallback(() => {
    console.log('good');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Parent State: {count}</button>
      <Button label="Unmemoized" onClick={handleBad} />
      <Button label="Memoized" onClick={handleGood} />
    </div>
  );
}`;

  return (
    <SectionCard
      id="memo-and-usecallback"
      title="React.memo & useCallback: Referential Equality"
      subtitle="Eliminating unnecessary re-renders through function memoization and shallow prop comparisons"
      badges={[
        { label: 'Performance', variant: 'perf' },
        { label: 'Hook', variant: 'hook' },
      ]}
      summaryPoints={[
        'React.memo is a higher-order component that performs shallow comparison of props: if props are the same, it skips re-rendering the child.',
        'The Referential Trap: In JS, () => {} !== () => {}. Every render re-creates inline functions and objects, breaking React.memo shallow comparison.',
        'useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.',
        'Rule of thumb: useCallback is only beneficial when passing functions to memoized children (React.memo) or as dependencies to other hooks (useEffect).'
      ]}
      interviewTip="Does wrapping every function in useCallback make your app faster? NO! useCallback itself has runtime overhead (allocating dependency arrays and comparison). Only use it when the function is passed to a memoized child component or into a dependency array."
      codeSnippet={codeSnippet}
      codeFileName="MemoAndUseCallback.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {/* Parent triggers */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setParentCounter((c) => c + 1)}
              className="btn btn-primary"
            >
              Re-render Parent State (Count: {parentCounter})
            </button>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Type to trigger parent re-renders..."
              className="input-field"
              style={{ maxWidth: '280px' }}
            />
          </div>
          <p style={{ margin: '0.6rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>
            Click the button above and watch the render badges below:
          </p>
        </div>

        {/* Children comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          <MemoizedChild
            name="Child A: Broken Memo (Inline Function)"
            onAction={handleUnmemoizedAction}
            variant="broken"
          />

          <MemoizedChild
            name="Child B: Optimized (useCallback Function)"
            onAction={handleMemoizedAction}
            variant="safe"
          />
        </div>
      </div>
    </SectionCard>
  );
}
