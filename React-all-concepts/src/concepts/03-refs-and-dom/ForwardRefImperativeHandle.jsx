import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Child component with restricted imperative API
const CustomSearchBox = forwardRef(function CustomSearchBox(props, ref) {
  const innerInputRef = useRef(null);
  const [isShaking, setIsShaking] = useState(false);

  // Expose ONLY specific methods to the parent component
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      innerInputRef.current?.focus();
    },
    clearInput: () => {
      if (innerInputRef.current) {
        innerInputRef.current.value = '';
      }
    },
    shake: () => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    },
    getValue: () => {
      return innerInputRef.current?.value || '';
    },
  }));

  return (
    <div
      style={{
        display: 'inline-block',
        transform: isShaking ? 'translateX(-8px)' : 'none',
        transition: isShaking ? 'transform 0.1s ease-in-out' : 'none',
      }}
    >
      <input
        ref={innerInputRef}
        type="text"
        placeholder="Custom Search Input..."
        className="input-field"
        style={{
          border: isShaking ? '2px solid #ef4444' : '1px solid #3b82f6',
          maxWidth: '320px',
        }}
      />
    </div>
  );
});

export default function ForwardRefImperativeHandle() {
  const customBoxRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState('Ready for parent commands');

  const handleParentFocus = () => {
    customBoxRef.current?.focusInput();
    setStatusMessage('Parent called: customBoxRef.current.focusInput()');
  };

  const handleParentClear = () => {
    customBoxRef.current?.clearInput();
    setStatusMessage('Parent called: customBoxRef.current.clearInput()');
  };

  const handleParentShake = () => {
    customBoxRef.current?.shake();
    setStatusMessage('Parent called: customBoxRef.current.shake() (Error animation)');
  };

  const handleParentRead = () => {
    const val = customBoxRef.current?.getValue();
    setStatusMessage(`Parent read value directly via imperative handle: "${val}"`);
  };

  const codeSnippet = `import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// 1. forwardRef passes ref from parent to child
const CustomInput = forwardRef((props, ref) => {
  const localInputRef = useRef(null);

  // 2. useImperativeHandle filters what the parent ref can access
  useImperativeHandle(ref, () => ({
    focus: () => localInputRef.current.focus(),
    clear: () => { localInputRef.current.value = ''; },
    shake: () => console.log('Shaking input...')
  }));

  return <input ref={localInputRef} className="custom-input" />;
});

// Parent usage:
export default function Parent() {
  const inputRef = useRef(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      {/* Parent accesses only the custom methods, not full DOM! */}
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  );
}`;

  return (
    <SectionCard
      id="forwardref-useimperativehandle"
      title="forwardRef & useImperativeHandle: Encapsulated Ref APIs"
      subtitle="Exposing custom, safe imperative handles from child components to parents"
      badges={[
        { label: 'Hook', variant: 'hook' },
        { label: 'Component API', variant: 'adv' },
      ]}
      summaryPoints={[
        'forwardRef lets a component expose a DOM node to a parent component via a ref prop (In React 19, ref is available directly as a prop).',
        'useImperativeHandle customizes the ref value returned to the parent, preventing parents from directly mutating arbitrary child DOM nodes.',
        'Encapsulation: Child defines a strict API (e.g. scrollToBottom(), resetForm(), shake()) rather than leaking the raw HTMLInputElement.',
        'Use sparingly: Declarative props (e.g. isOpen={true}) are almost always better than imperative method calls.'
      ]}
      interviewTip="Why use useImperativeHandle instead of just forwarding the raw DOM node? Raw DOM nodes expose dangerous properties and encourage uncontrolled mutations. useImperativeHandle restricts the parent to an explicit set of authorized actions (like focus, scroll, or validate)."
      codeSnippet={codeSnippet}
      codeFileName="ForwardRefImperativeHandle.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <CustomSearchBox ref={customBoxRef} />

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button onClick={handleParentFocus} className="btn btn-primary">
              Focus Child
            </button>
            <button onClick={handleParentClear} className="btn btn-secondary">
              Clear Value
            </button>
            <button onClick={handleParentShake} className="btn btn-danger">
              Shake Input
            </button>
            <button onClick={handleParentRead} className="btn btn-outline">
              Read Value
            </button>
          </div>
        </div>

        <div style={{ padding: '0.75rem 1rem', background: '#111827', borderRadius: '6px', border: '1px solid #1f2937' }}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Parent Controller Status: </span>
          <span style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 600 }}>{statusMessage}</span>
        </div>
      </div>
    </SectionCard>
  );
}
