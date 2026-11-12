import React, { useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Reusable Card using the children prop (Composition pattern)
function FeatureCard({ title = 'Default Feature', tag = 'General', onAction, children }) {
  return (
    <div
      style={{
        padding: '1.2rem',
        borderRadius: '10px',
        backgroundColor: '#1e293b',
        border: '1px solid #334155',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, color: '#f8fafc', fontSize: '1rem' }}>{title}</h4>
        <span
          style={{
            fontSize: '0.72rem',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            backgroundColor: '#0f172a',
            color: '#38bdf8',
            border: '1px solid #0284c7',
          }}
        >
          {tag}
        </span>
      </div>

      {/* {children} slots whatever JSX was nested inside <FeatureCard>...</FeatureCard> */}
      <div style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>{children}</div>

      {onAction && (
        <button
          onClick={() => onAction(title)}
          className="btn btn-outline"
          style={{ alignSelf: 'flex-start', padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
        >
          Trigger Callback
        </button>
      )}
    </div>
  );
}

export default function PropsAndChildren() {
  const [lastActionMessage, setLastActionMessage] = useState('No action clicked yet.');

  const handleCardClick = (cardTitle) => {
    setLastActionMessage(`Child invoked parent callback for "${cardTitle}" at ${new Date().toLocaleTimeString()}`);
  };

  const codeSnippet = `import React from 'react';

// 1. Destructuring props with default fallback values
function FeatureCard({ title = 'Feature', tag = 'Beta', onAction, children }) {
  return (
    <div className="card">
      <div className="header">
        <h4>{title}</h4>
        <span>{tag}</span>
      </div>

      {/* 2. 'children' prop enables arbitrary component composition */}
      <div className="body">{children}</div>

      {/* 3. Child communicates to parent via callback functions */}
      {onAction && (
        <button onClick={() => onAction(title)}>
          Interact
        </button>
      )}
    </div>
  );
}

// Parent Usage:
export default function App() {
  const handleAction = (item) => console.log('Clicked:', item);

  return (
    <FeatureCard title="Pro Subscription" tag="Active" onAction={handleAction}>
      <p>This content is injected seamlessly via props.children!</p>
      <ul>
        <li>Unlimited bandwidth</li>
        <li>Priority support</li>
      </ul>
    </FeatureCard>
  );
}`;

  return (
    <SectionCard
      id="props-and-children"
      title="Props & Component Composition (Children Prop)"
      subtitle="One-way data flow, immutability of props, and flexible composition using props.children"
      badges={[
        { label: 'Core Concept', variant: 'core' },
        { label: 'Data Flow', variant: 'core' },
      ]}
      summaryPoints={[
        'Props flow unidirectionally (Parent -> Child). Props are READ-ONLY and must never be mutated by a child component.',
        'Child-to-parent communication is achieved by passing callback functions down as props.',
        'props.children lets components act as flexible generic containers without hardcoding specific child content.',
        'Default values can be assigned directly via ES6 object destructuring: ({ title = "Default" }).'
      ]}
      interviewTip="Why favor 'composition over inheritance' in React? Because React components are functions/elements that can nest and wrap other components via props.children, making classical OOP inheritance unnecessary and cumbersome."
      codeSnippet={codeSnippet}
      codeFileName="PropsAndChildren.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          <FeatureCard
            title="Analytics Engine"
            tag="Production"
            onAction={handleCardClick}
          >
            <p style={{ margin: 0 }}>
              Live real-time aggregation of visitor events with automated anomaly detection.
            </p>
          </FeatureCard>

          <FeatureCard
            title="Cloud Storage"
            tag="Enterprise"
            onAction={handleCardClick}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#10b981' }}>✔ 500GB SSD</span>
              <span style={{ color: '#64748b' }}>•</span>
              <span style={{ color: '#10b981' }}>✔ Daily Backups</span>
            </div>
          </FeatureCard>
        </div>

        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#0b0f19',
            border: '1px solid #1e293b',
            borderRadius: '8px',
            fontSize: '0.85rem',
            color: '#38bdf8',
          }}
        >
          <strong>Parent State Tracker:</strong> {lastActionMessage}
        </div>
      </div>
    </SectionCard>
  );
}

