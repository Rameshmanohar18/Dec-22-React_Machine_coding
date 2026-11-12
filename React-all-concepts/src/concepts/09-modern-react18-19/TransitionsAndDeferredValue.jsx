import React, { useState, useTransition, useDeferredValue } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Simulated large dataset of 4,000 items
const bigDataset = Array.from({ length: 4000 }, (_, i) => ({
  id: i + 1,
  label: `Engine Record #${i + 1} - System Metrics Hash [${Math.sin(i).toFixed(4)}]`,
}));

export default function TransitionsAndDeferredValue() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  // Deferred value defers re-rendering the filtered list while the user is rapidly typing
  const deferredSearch = useDeferredValue(searchTerm);

  const filteredItems = bigDataset.filter((item) =>
    item.label.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  const handleInputChange = (e) => {
    // Urgent update: Instant input reflection
    const val = e.target.value;
    startTransition(() => {
      // Non-urgent transition: Can be interrupted if user types another letter!
      setSearchTerm(val);
    });
  };

  const codeSnippet = `import React, { useState, useTransition, useDeferredValue } from 'react';

export default function FastSearch() {
  const [query, setQuery] = useState('');
  // 1. useTransition gives isPending flag and non-blocking state transition
  const [isPending, startTransition] = useTransition();

  // 2. useDeferredValue defers non-critical UI updates until urgent updates finish
  const deferredQuery = useDeferredValue(query);

  const handleChange = (e) => {
    // Keep user typing responsive at 60fps
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <input onChange={handleChange} />
      {isPending && <span>Calculating filtered records...</span>}
      <ExpensiveList query={deferredQuery} />
    </div>
  );
}`;

  return (
    <SectionCard
      id="transitions-deferred"
      title="Concurrent React: useTransition & useDeferredValue"
      subtitle="Prioritizing urgent user keystrokes over heavy background re-renders without freezing the UI"
      badges={[
        { label: 'React 18/19', variant: 'react19' },
        { label: 'Concurrent', variant: 'perf' },
      ]}
      summaryPoints={[
        'React 18 Concurrent Rendering lets React interrupt a heavy render if a higher-priority event (like typing or clicking) occurs.',
        'Urgent updates (typing, clicking) directly reflect user input. Transition updates (filtering lists, switching tabs) are non-urgent.',
        'useTransition returns [isPending, startTransition]: wrap non-urgent state updates inside startTransition(() => setVal(x)).',
        'useDeferredValue(val) takes a value and defers generating its updated representation until the urgent paint completes.'
      ]}
      interviewTip="What is the difference between useTransition and Debounce/Throttle? Debouncing delays the execution of a function by an arbitrary timer (e.g. 500ms). useTransition executes immediately on modern machines without artificial delay, and yields CPU time automatically only if the main thread gets congested."
      codeSnippet={codeSnippet}
      codeFileName="TransitionsAndDeferredValue.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Type digits to search 4,000 records..."
            onChange={handleInputChange}
            className="input-field"
            style={{ maxWidth: '320px' }}
          />

          {isPending ? (
            <span style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 600 }}>
              ⏳ Concurrent Transition in progress...
            </span>
          ) : (
            <span style={{ color: '#34d399', fontSize: '0.85rem' }}>
              ✓ Showing {filteredItems.length} matching records
            </span>
          )}
        </div>

        {/* Scrollable results preview */}
        <div
          style={{
            maxHeight: '180px',
            overflowY: 'auto',
            background: '#111827',
            borderRadius: '6px',
            border: '1px solid #1f2937',
            padding: '0.5rem',
            opacity: isPending ? 0.6 : 1,
            transition: 'opacity 0.2s ease',
          }}
        >
          {filteredItems.slice(0, 15).map((item) => (
            <div
              key={item.id}
              style={{
                padding: '0.3rem 0.6rem',
                fontSize: '0.8rem',
                borderBottom: '1px solid #1f2937',
                color: '#e2e8f0',
              }}
            >
              {item.label}
            </div>
          ))}
          {filteredItems.length > 15 && (
            <div style={{ padding: '0.4rem', textAlign: 'center', fontSize: '0.75rem', color: '#64748b' }}>
              ... and {filteredItems.length - 15} more records (deferred rendering active)
            </div>
          )}
        </div>
      </div>
    </SectionCard>
  );
}

