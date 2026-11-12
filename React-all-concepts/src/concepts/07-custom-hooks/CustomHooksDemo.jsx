import React, { useState, useRef } from 'react';
import SectionCard from '../../components/ui/SectionCard';
import { useDebounce } from './hooks/useDebounce';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import { useWindowSize } from './hooks/useWindowSize';
import { usePrevious } from './hooks/usePrevious';

export default function CustomHooksDemo() {
  // 1. useDebounce test
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(searchInput, 600);

  // 2. useLocalStorage test
  const [persistedCounter, setPersistedCounter] = useLocalStorage('demo_count', 0);

  // 3. useWindowSize test
  const { width, height, isMobile, isDesktop } = useWindowSize();

  // 4. useOnClickOutside test
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  // 5. usePrevious test
  const previousSearch = usePrevious(debouncedSearch);

  const codeSnippet = `import { useState, useEffect, useRef } from 'react';

// Custom Hooks are JavaScript functions whose names start with 'use'
// that can call other built-in or custom hooks to share stateful logic.

// 1. useDebounce
export function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// 2. useOnClickOutside (Modals, Popovers, Dropdowns)
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
}`;

  return (
    <SectionCard
      id="custom-hooks"
      title="Custom Hooks: Reusable Stateful Logic Library"
      subtitle="Extracting and composing reusable component logic (useDebounce, useLocalStorage, useOnClickOutside, etc.)"
      badges={[
        { label: 'Custom Hooks', variant: 'hook' },
        { label: 'Design Patterns', variant: 'core' },
      ]}
      summaryPoints={[
        'Custom Hooks allow you to extract component logic into reusable functions with clean, composable APIs.',
        'Rules of Hooks still apply: Must start with "use", only call hooks at the top level, never call hooks inside loops or conditions.',
        'Custom hooks share STATEFUL LOGIC, not state itself: Each component call gets an isolated, independent state instance.',
        'Includes production-ready hooks: useDebounce, useLocalStorage, useFetch, useOnClickOutside, useWindowSize, and usePrevious.'
      ]}
      interviewTip="Do two components using the exact same custom hook share state? NO! Custom hooks share stateful *logic*, but state variables (useState, useReducer) declared inside a custom hook are completely independent for each component that invokes it."
      codeSnippet={codeSnippet}
      codeFileName="CustomHooksDemo.jsx"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
        {/* useDebounce & usePrevious Demo */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ color: '#38bdf8', margin: '0 0 0.5rem 0' }}>1. useDebounce & usePrevious</h4>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Type quickly to test debounce (600ms)..."
            className="input-field"
          />
          <div style={{ marginTop: '0.6rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
            <div>Instant Input: <span style={{ color: '#fff' }}>"{searchInput}"</span></div>
            <div>Debounced Value: <strong style={{ color: '#34d399' }}>"{debouncedSearch}"</strong></div>
            <div>Previous Debounced: <span style={{ color: '#a78bfa' }}>"{previousSearch || '<none>'}"</span></div>
          </div>
        </div>

        {/* useLocalStorage Demo */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ color: '#fbbf24', margin: '0 0 0.5rem 0' }}>2. useLocalStorage</h4>
          <p style={{ margin: '0 0 0.6rem 0', fontSize: '0.85rem', color: '#cbd5e1' }}>
            Persisted Count: <strong style={{ color: '#fff', fontSize: '1.1rem' }}>{persistedCounter}</strong>
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setPersistedCounter((c) => c + 1)}
              className="btn btn-primary"
              style={{ padding: '0.3rem 0.7rem' }}
            >
              Increment (Saves in localStorage)
            </button>
            <button
              onClick={() => setPersistedCounter(0)}
              className="btn btn-secondary"
              style={{ padding: '0.3rem 0.7rem' }}
            >
              Reset
            </button>
          </div>
          <small style={{ color: '#64748b', display: 'block', marginTop: '0.4rem' }}>
            Reload the browser page: this count persists across refreshes!
          </small>
        </div>

        {/* useOnClickOutside Demo */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ color: '#ec4899', margin: '0 0 0.5rem 0' }}>3. useOnClickOutside</h4>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem' }}
            >
              {isDropdownOpen ? 'Close Menu' : 'Open Dropdown Menu'}
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '6px',
                  background: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '6px',
                  padding: '0.8rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                  zIndex: 20,
                  width: '200px',
                }}
              >
                <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Click Outside to Dismiss
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  useOnClickOutside hook detects clicks anywhere else on the document.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* useWindowSize Demo */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ color: '#a855f7', margin: '0 0 0.5rem 0' }}>4. useWindowSize</h4>
          <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.85rem', color: '#cbd5e1' }}>
            Viewport: <strong>{width}px × {height}px</strong>
          </p>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: isMobile ? '#065f46' : '#374151', color: '#fff' }}>
              Mobile: {isMobile ? 'Yes' : 'No'}
            </span>
            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: isDesktop ? '#4338ca' : '#374151', color: '#fff' }}>
              Desktop: {isDesktop ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

