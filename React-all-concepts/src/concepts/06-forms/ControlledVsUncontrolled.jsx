import React, { useState, useRef } from 'react';
import SectionCard from '../../components/ui/SectionCard';

export default function ControlledVsUncontrolled() {
  // Controlled State
  const [controlledEmail, setControlledEmail] = useState('');
  const [controlledCount, setControlledCount] = useState(0);

  // Uncontrolled Ref
  const uncontrolledInputRef = useRef(null);
  const [uncontrolledOutput, setUncontrolledOutput] = useState('');

  const handleControlledChange = (e) => {
    setControlledEmail(e.target.value);
    setControlledCount((c) => c + 1);
  };

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get('uncontrolledUsername');
    setUncontrolledOutput(`Submitted value extracted directly from DOM: "${value}"`);
  };

  const codeSnippet = `import React, { useState, useRef } from 'react';

// 1. Controlled Component: React state is the single source of truth
export function ControlledForm() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value} // Controlled by React
      onChange={(e) => setValue(e.target.value.toUpperCase())} // Direct intercept
    />
  );
}

// 2. Uncontrolled Component: The DOM stores the value directly
export function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read from DOM via ref or new FormData(e.target)
    alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} defaultValue="John" />
      <button type="submit">Submit</button>
    </form>
  );
}`;

  return (
    <SectionCard
      id="controlled-vs-uncontrolled"
      title="Controlled vs Uncontrolled Components"
      subtitle="Single source of truth in React state vs DOM-delegated state & FormData"
      badges={[
        { label: 'Forms', variant: 'core' },
        { label: 'Architecture', variant: 'core' },
      ]}
      summaryPoints={[
        'Controlled: Form data is handled by a React component state. Value is dictated by React: <input value={val} onChange={...} />.',
        'Uncontrolled: Form data is handled by the DOM itself. Values are pulled on-demand using useRef or the HTML FormData API: <input defaultValue="val" ref={ref} />.',
        'Choose Controlled when: Real-time validation, character limits, formatting values as user types, or synchronizing inputs is required.',
        'Choose Uncontrolled when: Dealing with file inputs (<input type="file" /> is ALWAYS uncontrolled in React), or when building simple non-reactive submit forms.'
      ]}
      interviewTip="Can a file input (<input type='file' />) be a controlled component in React? No! A file input's value can only be set by the user (for browser security reasons), making it an inherently uncontrolled component in React accessed via a ref."
      codeSnippet={codeSnippet}
      codeFileName="ControlledVsUncontrolled.jsx"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
        {/* Controlled Input */}
        <div style={{ background: '#111827', padding: '1.2rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <h4 style={{ margin: 0, color: '#38bdf8' }}>1. Controlled Input</h4>
            <span className="render-badge">Keystroke Updates: {controlledCount}</span>
          </div>
          <input
            type="email"
            value={controlledEmail}
            onChange={handleControlledChange}
            placeholder="name@example.com"
            className="input-field"
          />
          <div style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: '#94a3b8' }}>
            React State: <strong style={{ color: '#fff' }}>"{controlledEmail}"</strong>
          </div>
          <small style={{ color: '#64748b', display: 'block', marginTop: '0.3rem' }}>
            Every keystroke syncs through React state and can be transformed or validated immediately.
          </small>
        </div>

        {/* Uncontrolled Input */}
        <div style={{ background: '#111827', padding: '1.2rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ margin: '0 0 0.8rem 0', color: '#a78bfa' }}>2. Uncontrolled Form (FormData)</h4>
          <form onSubmit={handleUncontrolledSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <input
              name="uncontrolledUsername"
              ref={uncontrolledInputRef}
              defaultValue="CyberKnight"
              placeholder="Username..."
              className="input-field"
            />
            <button type="submit" className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>
              Read from DOM on Submit
            </button>
          </form>
          {uncontrolledOutput && (
            <div style={{ marginTop: '0.8rem', fontSize: '0.82rem', color: '#34d399' }}>
              {uncontrolledOutput}
            </div>
          )}
        </div>
      </div>
    </SectionCard>
  );
}
