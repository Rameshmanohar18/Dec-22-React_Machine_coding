import React, { createContext, useContext, useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// 1. Create Context
const ThemeContext = createContext(null);

// 2. Custom Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const value = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// 3. Custom Hook with Safety Guard
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return context;
}

// Deeply nested consumer component
function DeepNestedUserCard() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        padding: '1.2rem',
        borderRadius: '8px',
        backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
        color: isDark ? '#f8fafc' : '#0f172a',
        border: isDark ? '1px solid #334155' : '1px solid #cbd5e1',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4 style={{ margin: 0 }}>Deep Child Component (No Prop Drilling)</h4>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.82rem', color: isDark ? '#94a3b8' : '#64748b' }}>
            Current Active Theme: <strong>{theme.toUpperCase()}</strong>
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className={`btn ${isDark ? 'btn-primary' : 'btn-secondary'}`}
          style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
        >
          {isDark ? '☀ Switch to Light' : '🌙 Switch to Dark'}
        </button>
      </div>
    </div>
  );
}

export default function ThemeContextDemo() {
  const codeSnippet = `import React, { createContext, useContext, useState } from 'react';

// 1. Create Context with null default
const ThemeContext = createContext(null);

// 2. Custom Provider encapsulates state and updater
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook with Guard Clause for developer ergonomics
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}

// 4. Any deeply nested component consumes directly without props passing:
export function Child() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Theme is: {theme}</button>;
}`;

  return (
    <SectionCard
      id="theme-context"
      title="React Context: Global State Without Prop Drilling"
      subtitle="createContext, useContext, Provider patterns, and guarded custom consumer hooks"
      badges={[
        { label: 'Context API', variant: 'core' },
        { label: 'Architecture', variant: 'hook' },
      ]}
      summaryPoints={[
        'React Context provides a way to pass data through the component tree without having to pass props down manually at every level (Prop Drilling).',
        'Always wrap useContext in a custom hook (e.g. useTheme) that throws a descriptive error if accessed outside the provider.',
        'Whenever context value changes, ALL components calling useContext(ThemeContext) will re-render.',
        'Use Context for high-level state (theme, authenticated user, localization, toast alerts), not for high-frequency updates like animations or 60fps tickers.'
      ]}
      interviewTip="What is the drawback of React Context? Whenever the Provider's value reference updates, EVERY component that consumes that context re-renders, even if it only uses an un-updated property. To fix this, use split contexts or memoization."
      codeSnippet={codeSnippet}
      codeFileName="ThemeContextDemo.jsx"
    >
      <ThemeProvider>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
            The component below is nested inside <code>&lt;ThemeProvider&gt;</code> and consumes the theme state
            and updater directly via <code>useTheme()</code> without any intermediate props:
          </p>
          <DeepNestedUserCard />
        </div>
      </ThemeProvider>
    </SectionCard>
  );
}
