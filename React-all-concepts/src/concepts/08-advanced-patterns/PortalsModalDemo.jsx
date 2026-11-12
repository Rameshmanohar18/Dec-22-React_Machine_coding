import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import SectionCard from '../../components/ui/SectionCard';

function ModalDialog({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  // Render modal into document.body to avoid parent container z-index or overflow:hidden bugs
  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '480px',
          padding: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.2rem' }}>{title}</h3>
          <button
            onClick={onClose}
            className="btn btn-outline"
            style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem' }}
          >
            ✕
          </button>
        </div>

        <div style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          {children}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={onClose} className="btn btn-primary">
            Confirm & Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function PortalsModalDemo() {
  const [modalOpen, setModalOpen] = useState(false);

  const codeSnippet = `import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // 1. createPortal mounts JSX into a different DOM subtree (e.g. document.body)
  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body // Target DOM container
  );
}`;

  return (
    <SectionCard
      id="react-portals"
      title="React Portals: Escaping CSS Stacking Contexts"
      subtitle="createPortal for modals, tooltips, dialogs, and event bubbling across DOM boundaries"
      badges={[
        { label: 'DOM & Portals', variant: 'core' },
        { label: 'createPortal', variant: 'hook' },
      ]}
      summaryPoints={[
        'ReactDOM.createPortal(child, container) inserts a child component into a different location in the DOM (e.g. document.body).',
        'Solves CSS stacking context conflicts: If an ancestor container has overflow: hidden or z-index: 1, child modals/tooltips will be clipped unless portaled to document.body.',
        'Event Bubbling Superpower: An event fired inside a portal STILL bubbles up through the React component tree (its virtual ancestors), regardless of where the node sits in the real HTML DOM!',
        'Ideal for: Modals, lightboxes, dropdown menus, floating tooltips, and toast notifications.'
      ]}
      interviewTip="Do React synthetic events bubble through Portals? YES! Even though the portal's DOM element lives in document.body, events bubble up according to the React Virtual DOM hierarchy, allowing parent handlers in the React tree to capture events from the portal."
      codeSnippet={codeSnippet}
      codeFileName="PortalsModalDemo.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div
          style={{
            padding: '1rem',
            background: '#111827',
            borderRadius: '8px',
            border: '1px solid #1f2937',
            overflow: 'hidden', // Parent with overflow hidden!
            position: 'relative',
          }}
        >
          <p style={{ margin: '0 0 0.8rem 0', fontSize: '0.85rem', color: '#94a3b8' }}>
            This box has <code>overflow: hidden</code>. Regular fixed elements inside here would get clipped or
            trapped. With <code>createPortal</code>, the modal escapes cleanly to <code>document.body</code>!
          </p>
          <button onClick={() => setModalOpen(true)} className="btn btn-primary">
            Launch Portal Modal
          </button>
        </div>

        <ModalDialog
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="React 19 Portaled Dialog"
        >
          <p>
            This modal is rendered directly as a child of <code>document.body</code> via <code>createPortal()</code>.
          </p>
          <p style={{ marginTop: '0.5rem', color: '#38bdf8' }}>
            Notice that clicking outside the dialog card triggers the backdrop close handler!
          </p>
        </ModalDialog>
      </div>
    </SectionCard>
  );
}
