import React, { useState, useRef, useLayoutEffect } from 'react';
import SectionCard from '../../components/ui/SectionCard';

export default function UseLayoutEffectConcept() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  // useLayoutEffect runs synchronously AFTER React mutates the DOM,
  // but BEFORE the browser paints pixels to the screen!
  useLayoutEffect(() => {
    if (showTooltip && buttonRef.current && tooltipRef.current) {
      const btnRect = buttonRef.current.getBoundingClientRect();
      const tipRect = tooltipRef.current.getBoundingClientRect();

      // Position tooltip right above the button without any visible jump/flicker
      setTooltipPos({
        top: btnRect.top - tipRect.height - 10,
        left: btnRect.left + (btnRect.width / 2) - (tipRect.width / 2),
      });
    }
  }, [showTooltip]);

  const codeSnippet = `import React, { useState, useRef, useLayoutEffect } from 'react';

export default function TooltipAnchor() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  // Runs SYNCHRONOUSLY after DOM mutation, BEFORE browser paint.
  // Prevents visual flicker/layout shift when reading DOM measurements.
  useLayoutEffect(() => {
    if (isOpen && buttonRef.current && tooltipRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left
      });
    }
  }, [isOpen]);

  return (
    <div>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Toggle Tooltip
      </button>
      {isOpen && (
        <div ref={tooltipRef} style={{ position: 'fixed', top: position.top, left: position.left }}>
          Calculated synchronously without layout flicker!
        </div>
      )}
    </div>
  );
}`;

  return (
    <SectionCard
      id="use-layout-effect"
      title="useLayoutEffect: Synchronous DOM Measurement vs useEffect"
      subtitle="Eliminating visual flicker and layout shifts before browser screen paint"
      badges={[
        { label: 'Hook', variant: 'hook' },
        { label: 'DOM Painting', variant: 'perf' },
      ]}
      summaryPoints={[
        'Render Pipeline: Virtual DOM diff -> DOM updated -> useLayoutEffect runs synchronously -> Browser Paints -> useEffect runs asynchronously.',
        'Use useLayoutEffect when you need to measure the DOM (e.g. getBoundingClientRect, scroll position) and immediately adjust styles or positions before the user sees a jump.',
        'Caution: useLayoutEffect BLOCKS browser rendering until it finishes. Heavy calculations inside it cause perceptible UI lag and frozen frames.',
        'Always default to useEffect unless you specifically experience a visible layout jump or flicker.'
      ]}
      interviewTip="What is the difference between useEffect and useLayoutEffect? useEffect is asynchronous and runs after the browser repaints the screen. useLayoutEffect is synchronous and runs after DOM mutations but before the browser paints, making it ideal for DOM measurements."
      codeSnippet={codeSnippet}
      codeFileName="UseLayoutEffectConcept.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '140px' }}>
        <p style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
          Click the button below. The tooltip element will calculate its target DOM coordinates in
          <code>useLayoutEffect</code>, preventing any visual jump before paint.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            ref={buttonRef}
            onClick={() => setShowTooltip(!showTooltip)}
            className="btn btn-primary"
          >
            {showTooltip ? 'Hide Tooltip' : 'Measure & Show Tooltip'}
          </button>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Button BoundingClientRect measured synchronously
          </span>
        </div>

        {showTooltip && (
          <div
            ref={tooltipRef}
            style={{
              position: 'fixed',
              top: `${tooltipPos.top}px`,
              left: `${tooltipPos.left}px`,
              zIndex: 9999,
              background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
              color: '#ffffff',
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              fontSize: '0.78rem',
              fontWeight: 600,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
              pointerEvents: 'none',
              transition: 'opacity 0.15s ease',
            }}
          >
            ⚡ Calculated via useLayoutEffect (Top: {Math.round(tooltipPos.top)}px, Left: {Math.round(tooltipPos.left)}px)
          </div>
        )}
      </div>
    </SectionCard>
  );
}
