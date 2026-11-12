import React, { useState, useMemo } from 'react';
import './App.css';
import TabNav from './components/ui/TabNav';

// Import All Concepts
import {
  JsxAndComponents,
  PropsAndChildren,
  ConditionalRendering,
  ListsAndKeys,
  UseStateConcept,
  UseReducerConcept,
  UseEffectConcept,
  UseLayoutEffectConcept,
  UseRefConcept,
  ForwardRefImperativeHandle,
  ThemeContextDemo,
  AuthContextDemo,
  CartContextDemo,
  MemoAndUseCallback,
  UseMemoExpensiveCalculation,
  LazyAndSuspenseDemo,
  ControlledVsUncontrolled,
  FormValidationDemo,
  CustomHooksDemo,
  HigherOrderComponents,
  CompoundComponents,
  RenderPropsPattern,
  PortalsModalDemo,
  ErrorBoundaryDemo,
  TransitionsAndDeferredValue,
  UseIdDemo,
  React19FeaturesDemo,
} from './concepts';

// Metadata definition for navigation and searching
const MODULE_SECTIONS = [
  {
    id: 'foundations',
    label: 'Foundations & JSX',
    icon: '⚡',
    items: [
      { id: 'jsx-and-components', title: 'JSX & Functional Components', component: <JsxAndComponents key="jsx" /> },
      { id: 'props-and-children', title: 'Props & Children Composition', component: <PropsAndChildren key="props" /> },
      { id: 'conditional-rendering', title: 'Conditional Rendering & 0 Bug', component: <ConditionalRendering key="conditional" /> },
      { id: 'lists-and-keys', title: 'Lists, Keys & Reconciliation', component: <ListsAndKeys key="lists" /> },
    ],
  },
  {
    id: 'state-and-hooks',
    label: 'State & Lifecycle Hooks',
    icon: '🔄',
    items: [
      { id: 'use-state', title: 'useState: Immutability & Lazy State', component: <UseStateConcept key="usestate" /> },
      { id: 'use-reducer', title: 'useReducer: Predictable Complex State', component: <UseReducerConcept key="usereducer" /> },
      { id: 'use-effect', title: 'useEffect: Cleanups & Abort Controller', component: <UseEffectConcept key="useeffect" /> },
      { id: 'use-layout-effect', title: 'useLayoutEffect: DOM Measurement', component: <UseLayoutEffectConcept key="uselayouteffect" /> },
    ],
  },
  {
    id: 'refs-and-dom',
    label: 'Refs & DOM',
    icon: '🎯',
    items: [
      { id: 'use-ref', title: 'useRef: DOM Access & Non-Render Variables', component: <UseRefConcept key="useref" /> },
      { id: 'forwardref-useimperativehandle', title: 'forwardRef & useImperativeHandle', component: <ForwardRefImperativeHandle key="forwardref" /> },
    ],
  },
  {
    id: 'context-api',
    label: 'Context API',
    icon: '🌐',
    items: [
      { id: 'theme-context', title: 'Theme Context & Custom Hooks', component: <ThemeContextDemo key="themecontext" /> },
      { id: 'auth-context', title: 'Auth Context & Session Management', component: <AuthContextDemo key="authcontext" /> },
      { id: 'cart-split-context', title: 'High-Performance Split Context Pattern', component: <CartContextDemo key="cartcontext" /> },
    ],
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: '🚀',
    items: [
      { id: 'memo-and-usecallback', title: 'React.memo & useCallback', component: <MemoAndUseCallback key="memo" /> },
      { id: 'use-memo', title: 'useMemo: CPU Caching & Identity', component: <UseMemoExpensiveCalculation key="usememo" /> },
      { id: 'lazy-and-suspense', title: 'Code Splitting, React.lazy & Suspense', component: <LazyAndSuspenseDemo key="lazy" /> },
    ],
  },
  {
    id: 'forms',
    label: 'Forms & Inputs',
    icon: '📝',
    items: [
      { id: 'controlled-vs-uncontrolled', title: 'Controlled vs Uncontrolled Forms', component: <ControlledVsUncontrolled key="controlled" /> },
      { id: 'form-validation', title: 'Form Architecture & Touched Validation', component: <FormValidationDemo key="validation" /> },
    ],
  },
  {
    id: 'custom-hooks',
    label: 'Custom Hooks',
    icon: '🪝',
    items: [
      { id: 'custom-hooks-demo', title: 'Reusable Stateful Hooks Suite', component: <CustomHooksDemo key="customhooks" /> },
    ],
  },
  {
    id: 'advanced-patterns',
    label: 'Advanced Patterns',
    icon: '🧩',
    items: [
      { id: 'higher-order-components', title: 'Higher-Order Components (HOC)', component: <HigherOrderComponents key="hoc" /> },
      { id: 'compound-components', title: 'Compound Components (Dot Notation)', component: <CompoundComponents key="compound" /> },
      { id: 'render-props', title: 'Render Props Pattern', component: <RenderPropsPattern key="renderprops" /> },
      { id: 'react-portals', title: 'React Portals (Modal Escaping Stacking)', component: <PortalsModalDemo key="portals" /> },
      { id: 'error-boundaries', title: 'Error Boundaries & Safe Fallbacks', component: <ErrorBoundaryDemo key="errorboundary" /> },
    ],
  },
  {
    id: 'modern-react',
    label: 'React 18 & 19 Modern',
    icon: '✨',
    items: [
      { id: 'transitions-deferred', title: 'Concurrent: useTransition & useDeferredValue', component: <TransitionsAndDeferredValue key="transitions" /> },
      { id: 'use-id', title: 'useId: SSR-Safe Unique Identifiers', component: <UseIdDemo key="useid" /> },
      { id: 'react-19-features', title: 'React 19: useActionState & useOptimistic', component: <React19FeaturesDemo key="react19" /> },
    ],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Tab definitions with counts
  const tabs = useMemo(() => {
    const totalCount = MODULE_SECTIONS.reduce((acc, mod) => acc + mod.items.length, 0);
    return [
      { id: 'all', label: 'All Modules', icon: '🌟', count: totalCount },
      ...MODULE_SECTIONS.map((mod) => ({
        id: mod.id,
        label: mod.label,
        icon: mod.icon,
        count: mod.items.length,
      })),
    ];
  }, []);

  // Filtered modules based on activeTab and searchQuery
  const filteredModules = useMemo(() => {
    return MODULE_SECTIONS.map((mod) => {
      // Check if module matches activeTab
      if (activeTab !== 'all' && mod.id !== activeTab) {
        return null;
      }

      // Check query match
      if (!searchQuery.trim()) {
        return mod;
      }

      const q = searchQuery.toLowerCase();
      const filteredItems = mod.items.filter(
        (item) => item.title.toLowerCase().includes(q) || item.id.toLowerCase().includes(q)
      );

      if (filteredItems.length === 0 && !mod.label.toLowerCase().includes(q)) {
        return null;
      }

      return {
        ...mod,
        items: filteredItems.length > 0 ? filteredItems : mod.items,
      };
    }).filter(Boolean);
  }, [activeTab, searchQuery]);

  const totalVisibleItems = filteredModules.reduce((acc, mod) => acc + mod.items.length, 0);

  return (
    <div className="app-container">
      {/* Dashboard Master Header */}
      <header className="dashboard-header animate-fade-in">
        <div className="header-top">
          <div className="logo-group">
            <span className="react-spinning-logo">⚛</span>
            <div>
              <h1 className="header-title">React.js Core & Advanced Concepts</h1>
              <p className="header-subtitle">
                Interactive production code reference, architectural patterns, and interview deep dives
              </p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-chip">
              <span>Modules:</span>
              <span className="stat-num">9</span>
            </div>
            <div className="stat-chip">
              <span>Concepts:</span>
              <span className="stat-num">24+</span>
            </div>
            <div className="stat-chip">
              <span>Engine:</span>
              <span className="stat-num">React 19 Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* Toolbar & Search Bar */}
      <div className="toolbar-bar">
        <div className="search-box-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search concepts (e.g. useReducer, debounce, memo, portals, react 19)..."
            className="input-field"
          />
        </div>

        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="btn btn-outline"
            style={{ fontSize: '0.8rem', padding: '0.55rem 0.9rem' }}
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Module Navigation Tabs */}
      <TabNav tabs={tabs} activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Concepts Feed */}
      <main className="concepts-grid">
        {filteredModules.length === 0 ? (
          <div
            style={{
              padding: '3rem',
              textAlign: 'center',
              background: '#111827',
              borderRadius: '12px',
              border: '1px solid #1f2937',
            }}
          >
            <h3 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>No concepts matched your search</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Try searching for "hooks", "context", "memo", "form", or click "All Modules".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredModules.map((module) => (
            <section key={module.id} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  paddingBottom: '0.4rem',
                  borderBottom: '1px solid #1f2937',
                  marginTop: '1rem',
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{module.icon}</span>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                  {module.label}
                </h2>
                <span
                  style={{
                    fontSize: '0.75rem',
                    background: '#1f2937',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '999px',
                    color: '#94a3b8',
                    marginLeft: 'auto',
                  }}
                >
                  {module.items.length} {module.items.length === 1 ? 'Concept' : 'Concepts'}
                </span>
              </div>

              {module.items.map((item) => item.component)}
            </section>
          ))
        )}
      </main>
    </div>
  );
}

