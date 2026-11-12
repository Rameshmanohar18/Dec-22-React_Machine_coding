import React, { useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

export default function ListsAndKeys() {
  const initialItems = [
    { id: 'task-1', text: 'Learn React Core Architecture' },
    { id: 'task-2', text: 'Master React Reconciliation & Fiber' },
    { id: 'task-3', text: 'Build Real-World Projects' },
  ];

  const [itemsWithKey, setItemsWithKey] = useState(initialItems);
  const [itemsWithIndex, setItemsWithIndex] = useState(initialItems);

  const addItemToTop = () => {
    const newItem = {
      id: `task-${Date.now()}`,
      text: `New Task (${new Date().toLocaleTimeString()})`,
    };
    setItemsWithKey([newItem, ...itemsWithKey]);
    setItemsWithIndex([newItem, ...itemsWithIndex]);
  };

  const removeItem = (idToRemove) => {
    setItemsWithKey(itemsWithKey.filter((i) => i.id !== idToRemove));
    setItemsWithIndex(itemsWithIndex.filter((i) => i.id !== idToRemove));
  };

  const codeSnippet = `import React, { useState } from 'react';

// BAD PRACTICE: key={index}
// When items are reordered, inserted at the top, or deleted,
// React assumes the item at index 0 is the same as the previous index 0,
// causing uncontrolled state (like input values or animations) to corrupt!
export function BadList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <span>{item.text}</span>
          <input placeholder="Type note here..." />
        </li>
      ))}
    </ul>
  );
}

// BEST PRACTICE: key={item.id}
// Stable, unique IDs allow React's diffing algorithm to accurately match
// virtual DOM nodes to real DOM elements across renders.
export function GoodList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <input placeholder="Type note here..." />
        </li>
      ))}
    </ul>
  );
}`;

  return (
    <SectionCard
      id="lists-and-keys"
      title="Lists, Keys & The Reconciliation Diffing Algorithm"
      subtitle="Why keys matter, how React Fiber tracks elements, and the danger of using index as key"
      badges={[
        { label: 'Core Concept', variant: 'core' },
        { label: 'Reconciliation', variant: 'perf' },
      ]}
      summaryPoints={[
        'Keys give elements a stable identity between renders, allowing React to identify which items have changed, been added, or been removed.',
        'Never use Math.random() as key: It forces complete DOM re-destruction and recreation on every single render.',
        'Do NOT use array index as key when list order changes, items are filtered, or children contain local state (like text inputs or checkboxes).',
        'Keys must be unique among siblings, but do not need to be globally unique across the entire app.'
      ]}
      interviewTip="How does React use 'keys' in reconciliation? React compares old and new children by key. If the key matches, it reuses the existing DOM node and updates properties. If the key changes, it unmounts the old node and mounts a new one."
      codeSnippet={codeSnippet}
      codeFileName="ListsAndKeys.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button onClick={addItemToTop} className="btn btn-primary">
            + Prepend Item To Top
          </button>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            Tip: Type notes into both lists, then click "Prepend Item To Top" to see the index bug in action!
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Correct List with Stable ID */}
          <div style={{ background: '#092518', border: '1px solid #065f46', borderRadius: '8px', padding: '1rem' }}>
            <h4 style={{ color: '#34d399', margin: '0 0 0.8rem 0', fontSize: '0.95rem' }}>
              ✔ Correct: Stable Unique IDs (`key={`{item.id}`}`)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {itemsWithKey.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#041d13',
                    border: '1px solid #064e3b',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#ecfdf5', fontWeight: 600 }}>{item.text}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-danger"
                      style={{ padding: '0.15rem 0.5rem', fontSize: '0.7rem' }}
                    >
                      Delete
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Type note attached to this task..."
                    className="input-field"
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.6rem' }}
                  />
                  <span style={{ fontSize: '0.7rem', color: '#10b981' }}>Key ID: {item.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buggy List with Index as Key */}
          <div style={{ background: '#261215', border: '1px solid #881337', borderRadius: '8px', padding: '1rem' }}>
            <h4 style={{ color: '#fb7185', margin: '0 0 0.8rem 0', fontSize: '0.95rem' }}>
              ✖ Flawed: Array Index (`key={`{index}`}`)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {itemsWithIndex.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: '#1c0a0d',
                    border: '1px solid #701a28',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#fff1f2', fontWeight: 600 }}>{item.text}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-danger"
                      style={{ padding: '0.15rem 0.5rem', fontSize: '0.7rem' }}
                    >
                      Delete
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Type note attached to this task..."
                    className="input-field"
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.6rem' }}
                  />
                  <span style={{ fontSize: '0.7rem', color: '#f43f5e' }}>Key Index: {index} (Shifts when prepending!)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
