import React, { useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

export default function ConditionalRendering() {
  const [authStatus, setAuthStatus] = useState('LOGGED_IN'); // 'LOGGED_IN', 'LOGGED_OUT', 'SUSPENDED'
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  // Pattern 1: Switch / Lookup object for multiple states
  const renderAuthBanner = () => {
    switch (authStatus) {
      case 'LOGGED_IN':
        return (
          <div style={{ padding: '0.8rem', background: '#064e3b', color: '#6ee7b7', borderRadius: '6px' }}>
            ✓ Authenticated: Full dashboard access granted.
          </div>
        );
      case 'SUSPENDED':
        return (
          <div style={{ padding: '0.8rem', background: '#7f1d1d', color: '#fca5a5', borderRadius: '6px' }}>
            ⚠ Account Suspended: Please verify your credentials.
          </div>
        );
      case 'LOGGED_OUT':
      default:
        return (
          <div style={{ padding: '0.8rem', background: '#374151', color: '#d1d5db', borderRadius: '6px' }}>
            🔒 Logged Out: Please log in to proceed.
          </div>
        );
    }
  };

  const codeSnippet = `import React from 'react';

export default function NotificationBadge({ count, isVisible, status }) {
  // 1. Early Return / Guard Clause
  if (!isVisible) {
    return null; // Returning null renders nothing to DOM
  }

  return (
    <div>
      {/* 2. Ternary operator for binary choices */}
      {status === 'active' ? <span>Online</span> : <span>Offline</span>}

      {/* 3. Logical && Pitfall:
          BUGGY:  {count && <Badge />} -> if count is 0, React renders "0" to the screen!
          SAFE:   {count > 0 && <Badge />} OR {Boolean(count) && <Badge />}
      */}
      {count > 0 && (
        <span className="badge">{count} Unread</span>
      )}
    </div>
  );
}`;

  return (
    <SectionCard
      id="conditional-rendering"
      title="Conditional Rendering & The Falsy '0' Bug"
      subtitle="Mastering ternary operators, short-circuit evaluation, early returns, and common pitfalls"
      badges={[
        { label: 'Core Concept', variant: 'core' },
        { label: 'Common Pitfall', variant: 'perf' },
      ]}
      summaryPoints={[
        'Ternary (? :) is ideal for rendering one of two alternative components.',
        'Logical AND (&&) renders the right side if the left side evaluates to truthy.',
        'THE "0" BUG: In JavaScript, 0 is falsy, but in JSX {0 && <Component />} evaluates to 0, which React prints to the DOM! Always use {count > 0 && ...} or {Boolean(count) && ...}.',
        'Returning null from a component tells React to render nothing (unmounting the element cleanly).'
      ]}
      interviewTip="Explain why `{items.length && <List />}` is a bug in React. Answer: When `items.length` is 0, the expression evaluates to 0, causing the literal number '0' to be rendered on the user interface instead of nothing!"
      codeSnippet={codeSnippet}
      codeFileName="ConditionalRendering.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {/* Controls */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Auth State:</span>
          {['LOGGED_IN', 'LOGGED_OUT', 'SUSPENDED'].map((st) => (
            <button
              key={st}
              onClick={() => setAuthStatus(st)}
              className={`btn ${authStatus === st ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.3rem 0.7rem', fontSize: '0.78rem' }}
            >
              {st}
            </button>
          ))}

          <span style={{ marginLeft: '1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
            Unread Count:
          </span>
          <button
            onClick={() => setUnreadMessages((prev) => Math.max(0, prev - 1))}
            className="btn btn-secondary"
            style={{ padding: '0.3rem 0.6rem' }}
          >
            -
          </button>
          <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
            {unreadMessages}
          </span>
          <button
            onClick={() => setUnreadMessages((prev) => prev + 1)}
            className="btn btn-secondary"
            style={{ padding: '0.3rem 0.6rem' }}
          >
            +
          </button>

          <button
            onClick={() => setShowNotification(!showNotification)}
            className="btn btn-outline"
            style={{ marginLeft: 'auto', padding: '0.3rem 0.7rem', fontSize: '0.78rem' }}
          >
            Toggle Visibility ({showNotification ? 'Visible' : 'Hidden (null)'})
          </button>
        </div>

        {/* Live renders */}
        {showNotification ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {renderAuthBanner()}

            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                padding: '1rem',
                backgroundColor: '#111827',
                borderRadius: '8px',
                border: '1px solid #1f2937',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Buggy Logical AND (items.length && ...): </span>
                <span style={{ background: '#374151', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  {/* Intentionally showing the real result of unreadMessages && ... */}
                  {unreadMessages && <span style={{ color: '#ec4899' }}>🔔 New Message!</span>}
                </span>
                <small style={{ display: 'block', color: '#f43f5e', fontSize: '0.75rem', marginTop: '4px' }}>
                  {unreadMessages === 0 ? 'Notice: The digit 0 is printed directly into DOM!' : 'Truthy: prints JSX'}
                </small>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Safe Evaluation (count &gt; 0 && ...): </span>
                <span style={{ background: '#374151', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  {unreadMessages > 0 && <span style={{ color: '#10b981' }}>🔔 Safe New Message!</span>}
                  {unreadMessages === 0 && <span style={{ color: '#64748b' }}>[Renders Nothing Cleanly]</span>}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ padding: '0.8rem', textAlign: 'center', color: '#64748b', fontStyle: 'italic' }}>
            Component returned null (DOM unmounted)
          </div>
        )}
      </div>
    </SectionCard>
  );
}
