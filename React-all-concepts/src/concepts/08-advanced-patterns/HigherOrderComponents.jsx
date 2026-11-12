import React, { useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// 1. Higher-Order Component Definition
function withLogger(WrappedComponent) {
  // Return an enhanced functional component
  function WithLoggerComponent(props) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    return (
      <div style={{ position: 'relative', border: '1px dashed #6366f1', padding: '0.8rem', borderRadius: '8px' }}>
        <span
          style={{
            position: 'absolute',
            top: '-10px',
            right: '12px',
            background: '#4f46e5',
            color: '#fff',
            fontSize: '0.68rem',
            padding: '0.1rem 0.5rem',
            borderRadius: '4px',
            fontWeight: 600,
          }}
        >
          HOC: withLogger({componentName})
        </span>
        {/* Forward all props to wrapped component */}
        <WrappedComponent {...props} />
      </div>
    );
  }

  WithLoggerComponent.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithLoggerComponent;
}

// 2. Base Component
function UserCard({ name, role }) {
  return (
    <div>
      <h4 style={{ margin: 0, color: '#f8fafc' }}>{name}</h4>
      <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: '#38bdf8' }}>{role}</p>
    </div>
  );
}

// 3. Component Enhanced via HOC
const EnhancedUserCard = withLogger(UserCard);

export default function HigherOrderComponents() {
  const [role, setRole] = useState('Senior Cloud Engineer');

  const codeSnippet = `import React from 'react';

// 1. HOC: A function that takes a component and returns a new component
export function withAuth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const isAuthenticated = checkAuthToken();

    if (!isAuthenticated) {
      return <div className="auth-fallback">Please log in to view this content.</div>;
    }

    // Forward props cleanly
    return <WrappedComponent {...props} />;
  };
}

// 2. Usage
function UserDashboard({ user }) {
  return <h1>Welcome {user.name}</h1>;
}

export const ProtectedDashboard = withAuth(UserDashboard);`;

  return (
    <SectionCard
      id="higher-order-components"
      title="Higher-Order Components (HOC) Pattern"
      subtitle="Reusing component logic by wrapping components (withAuth, withLogger, withLoader)"
      badges={[
        { label: 'Design Pattern', variant: 'adv' },
        { label: 'Architecture', variant: 'core' },
      ]}
      summaryPoints={[
        'A Higher-Order Component (HOC) is a pure function that takes a component as an argument and returns a newly enhanced component: const Enhanced = hoc(Base).',
        'Always pass unrelated props through to the wrapped component using {...props}.',
        'Assign a clear displayName (e.g. WithLogger(Component)) for clean React DevTools inspection.',
        'Never use HOCs inside the render method: Defining an HOC inside render creates a new component type every render, unmounting and losing child state!'
      ]}
      interviewTip="HOCs vs Custom Hooks: Why did React introduce Hooks if HOCs existed? HOCs cause 'wrapper hell' (deeply nested component hierarchies in DevTools), can have prop collision bugs, and make TypeScript typing complex. Custom hooks provide the same logic-sharing power without altering the component tree."
      codeSnippet={codeSnippet}
      codeFileName="HigherOrderComponents.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
          Below, <code>UserCard</code> is wrapped in <code>withLogger()</code> HOC to automatically decorate it
          with logging wrappers and telemetry badges without altering its internal code:
        </p>

        <EnhancedUserCard name="Elena Rostova" role={role} />

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setRole(role === 'Staff AI Researcher' ? 'Senior Cloud Engineer' : 'Staff AI Researcher')}
            className="btn btn-secondary"
            style={{ fontSize: '0.78rem' }}
          >
            Update Role Prop
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

