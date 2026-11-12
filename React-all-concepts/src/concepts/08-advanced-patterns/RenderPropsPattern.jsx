import React, { useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Component that encapsulates mouse position tracking and exposes it via render prop
function MouseTracker({ render }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: '140px',
        background: '#090d16',
        border: '1px dashed #374151',
        borderRadius: '8px',
        position: 'relative',
        cursor: 'crosshair',
        padding: '1rem',
        overflow: 'hidden',
      }}
    >
      <div style={{ color: '#64748b', fontSize: '0.8rem', userSelect: 'none' }}>
        Hover inside this area to capture localized cursor coordinates:
      </div>
      {/* Delegate rendering to the consumer via function call */}
      {render(coords)}
    </div>
  );
}

export default function RenderPropsPattern() {
  const codeSnippet = `import React, { useState } from 'react';

// 1. Component with Render Prop
export function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      {/* Consumer receives state as argument and decides how to render */}
      {render(pos)}
    </div>
  );
}

// 2. Usage:
<MouseTracker
  render={({ x, y }) => (
    <p>Cursor is at: X: {x}, Y: {y}</p>
  )}
/>`;

  return (
    <SectionCard
      id="render-props"
      title="Render Props Pattern (Function as Child)"
      subtitle="Sharing code between React components using a prop whose value is a rendering function"
      badges={[
        { label: 'Design Pattern', variant: 'adv' },
        { label: 'Composition', variant: 'core' },
      ]}
      summaryPoints={[
        'A render prop is a function prop that a component uses to know what to render: <Component render={data => <div>{data}</div>} />.',
        'Separates behavioral logic (mouse events, data fetching, toggling) from the visual UI presentation.',
        'Can also be implemented via props.children: <Component>{data => <div>{data}</div>}</Component>.',
        'While Custom Hooks solve most logic-sharing needs today, render props are still valuable when rendering UI dynamically inside another component.'
      ]}
      interviewTip="What is the difference between Render Props and Higher-Order Components? HOCs statically wrap a component at definition time, which can cause prop naming collisions. Render props dynamically inject data at runtime into the render tree without modifying component definitions."
      codeSnippet={codeSnippet}
      codeFileName="RenderPropsPattern.jsx"
    >
      <MouseTracker
        render={({ x, y }) => (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#38bdf8' }}>
              X: {x}px | Y: {y}px
            </div>
            <span
              style={{
                display: 'inline-block',
                marginTop: '4px',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                background: '#1e293b',
                color: '#34d399',
                fontSize: '0.75rem',
              }}
            >
              Coordinates injected via render(coords) function prop
            </span>
          </div>
        )}
      />
    </SectionCard>
  );
}

