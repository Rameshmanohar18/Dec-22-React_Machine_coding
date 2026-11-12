import React, { useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

export default function JsxAndComponents() {
  const [userName, setUserName] = useState('Alex Developer');
  const [isHighlight, setIsHighlight] = useState(false);

  // Raw HTML string to demonstrate JSX XSS auto-escaping
  const maliciousInput = '<img src=x onerror="alert(\'XSS\')" /> Safe escaped content';

  const codeSnippet = `import React, { useState } from 'react';

// 1. Functional Component is a pure function returning React elements (JSX)
export default function UserBadge({ name, isHighlight }) {
  // 2. Inline styles in JSX require a JavaScript object with camelCase properties
  const dynamicStyle = {
    padding: '12px 18px',
    borderRadius: '8px',
    backgroundColor: isHighlight ? '#312e81' : '#1e293b',
    border: isHighlight ? '2px solid #818cf8' : '1px solid #334155',
    transition: 'all 0.3s ease'
  };

  return (
    // 3. Fragments (<></>) group elements without adding extra nodes to the DOM
    <>
      <div style={dynamicStyle} className="user-profile-badge">
        {/* 4. JSX interpolates any JS expression inside curly braces {} */}
        <h4 style={{ margin: 0, color: '#f8fafc' }}>Hello, {name.toUpperCase()}</h4>
        <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '0.85rem' }}>
          Status: {isHighlight ? '🌟 Premium Member' : '🌱 Regular Member'}
        </p>
      </div>

      {/* 5. React automatically escapes strings to prevent XSS attacks */}
      <small style={{ color: '#64748b' }}>Rendered safely without danger</small>
    </>
  );
}`;

  return (
    <SectionCard
      id="jsx-and-components"
      title="JSX Syntax & Functional Components"
      subtitle="The foundational building blocks of React: JSX compilation, pure components, and DOM safety"
      badges={[
        { label: 'Core Concept', variant: 'core' },
        { label: 'JSX Compilation', variant: 'core' },
      ]}
      summaryPoints={[
        'JSX is NOT HTML — it is syntactic sugar that compiles to React.createElement(type, props, ...children).',
        'JSX rules: Must return a single root element (or Fragment <></>), all tags must close, use camelCase (className, htmlFor, onClick).',
        'Functional components should be Pure with respect to their props (given the same props, they return the same JSX).',
        'React protects against XSS (Cross-Site Scripting) by automatically escaping strings embedded in JSX expressions.'
      ]}
      interviewTip="Interviewers often ask: 'Can browsers read JSX directly?' Answer: No, Babel or Vite (SWC/esbuild) transpiles JSX into React.createElement() or the new jsx runtime (_jsx) function calls before it reaches the browser."
      codeSnippet={codeSnippet}
      codeFileName="JsxAndComponents.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <label style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Edit Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input-field"
            style={{ maxWidth: '240px' }}
          />
          <button
            onClick={() => setIsHighlight(!isHighlight)}
            className={`btn ${isHighlight ? 'btn-primary' : 'btn-secondary'}`}
          >
            {isHighlight ? 'Disable Highlight' : 'Enable Highlight'}
          </button>
        </div>

        {/* Live render preview */}
        <div
          style={{
            padding: '1.2rem',
            borderRadius: '10px',
            backgroundColor: isHighlight ? '#1e1b4b' : '#0f172a',
            border: isHighlight ? '2px solid #6366f1' : '1px solid #1e293b',
            transition: 'all 0.25s ease',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0, color: '#f8fafc', fontSize: '1.1rem' }}>
                Welcome, {userName || 'Anonymous'}!
              </h4>
              <p style={{ margin: '0.3rem 0 0 0', color: '#94a3b8', fontSize: '0.85rem' }}>
                Mode: {isHighlight ? '🚀 Fast-Track Highlight' : 'Standard View'}
              </p>
            </div>
            <span
              style={{
                fontSize: '0.75rem',
                padding: '0.3rem 0.6rem',
                borderRadius: '999px',
                background: isHighlight ? '#4338ca' : '#334155',
                color: '#fff',
              }}
            >
              Pure JSX Element
            </span>
          </div>

          <div style={{ marginTop: '0.9rem', fontSize: '0.8rem', color: '#64748b' }}>
            <span>Auto-sanitized text demo: </span>
            <code>{maliciousInput}</code>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

