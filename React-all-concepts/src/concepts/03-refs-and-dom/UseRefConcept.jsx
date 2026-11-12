import React, { useState, useRef, useEffect } from 'react';
import SectionCard from '../../components/ui/SectionCard';

export default function UseRefConcept() {
  const [searchTerm, setSearchTerm] = useState('');
  const [clickCount, setClickCount] = useState(0);

  // 1. DOM Reference
  const inputRef = useRef(null);

  // 2. Mutable instance variable (persists without triggering re-render)
  const renderCountRef = useRef(1);

  // 3. Storing previous state across renders
  const previousSearchTermRef = useRef('');

  useEffect(() => {
    // Increment render counter on every render
    renderCountRef.current += 1;
  });

  useEffect(() => {
    // Keep track of what searchTerm was before this update
    previousSearchTermRef.current = searchTerm;
  }, [searchTerm]);

  const handleFocusAndSelect = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  };

  const codeSnippet = `import React, { useRef, useState, useEffect } from 'react';

export default function RefDemo() {
  const [text, setText] = useState('');

  // 1. Direct DOM node access
  const inputRef = useRef(null);
  const focusInput = () => inputRef.current.focus();

  // 2. Mutable value that persists across renders without triggering a re-render!
  const renderCounter = useRef(0);
  useEffect(() => {
    renderCounter.current += 1;
  });

  // 3. Storing previous value of a prop or state
  const prevTextRef = useRef('');
  useEffect(() => {
    prevTextRef.current = text;
  }, [text]);

  return (
    <div>
      <input ref={inputRef} value={text} onChange={e => setText(e.target.value)} />
      <button onClick={focusInput}>Focus Input</button>
      <p>Rendered: {renderCounter.current} times</p>
      <p>Current: {text} | Previous: {prevTextRef.current}</p>
    </div>
  );
}`;

  return (
    <SectionCard
      id="use-ref"
      title="useRef: DOM Manipulation & Mutable State Without Re-renders"
      subtitle="Escaping React's declarative flow for DOM access, timer IDs, and previous value tracking"
      badges={[
        { label: 'Hook', variant: 'hook' },
        { label: 'DOM & Refs', variant: 'core' },
      ]}
      summaryPoints={[
        'useRef returns a plain JavaScript object { current: initialValue } that persists for the full lifetime of the component.',
        'Mutating ref.current DOES NOT cause a re-render: Perfect for storing timer IDs, animation frame handles, and previous prop values.',
        'Do NOT read or write ref.current during rendering (JSX generation) — that violates React pure rendering principles. Read/write it only in event handlers or useEffect.',
        'Use refs sparingly for DOM access (focus, scroll positioning, canvas drawing, third-party libraries like charts or video players).'
      ]}
      interviewTip="What is the difference between useState and useRef? useState causes the component to re-render whenever the state updater is called. useRef updates synchronously and does NOT trigger a re-render when its .current value is mutated."
      codeSnippet={codeSnippet}
      codeFileName="UseRefConcept.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {/* DOM Control */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ color: '#38bdf8', margin: '0 0 0.8rem 0' }}>1. DOM Access & Manipulation</h4>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search query..."
              className="input-field"
              style={{ maxWidth: '300px' }}
            />
            <button onClick={handleFocusAndSelect} className="btn btn-primary">
              Focus & Select via inputRef
            </button>
          </div>
        </div>

        {/* Previous Value and Render Counter */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
            <h4 style={{ color: '#fbbf24', margin: '0 0 0.5rem 0' }}>2. Previous State Tracker</h4>
            <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.88rem', color: '#e2e8f0' }}>
              Current: <strong style={{ color: '#38bdf8' }}>"{searchTerm || '<empty>'}"</strong>
            </p>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
              Previous Render: <strong style={{ color: '#a78bfa' }}>"{previousSearchTermRef.current || '<none>'}"</strong>
            </p>
          </div>

          <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
            <h4 style={{ color: '#34d399', margin: '0 0 0.5rem 0' }}>3. Non-Render Trigger Counter</h4>
            <p style={{ margin: '0 0 0.6rem 0', fontSize: '0.88rem', color: '#e2e8f0' }}>
              Total Component Renders: <span className="render-badge">{renderCountRef.current}</span>
            </p>
            <button
              onClick={() => setClickCount((c) => c + 1)}
              className="btn btn-secondary"
              style={{ padding: '0.3rem 0.7rem', fontSize: '0.8rem' }}
            >
              Trigger Re-render State (+{clickCount})
            </button>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

