import React, { useState, Suspense, lazy } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Simulating a lazy-loaded component with artificial network latency
const LazyHeavyChartComponent = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: function HeavyChart() {
          return (
            <div
              style={{
                padding: '1.2rem',
                background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
                borderRadius: '8px',
                border: '1px solid #4338ca',
              }}
            >
              <h4 style={{ color: '#a5b4fc', margin: '0 0 0.5rem 0' }}>📊 Dynamic Analytics Module</h4>
              <p style={{ margin: '0 0 0.8rem 0', fontSize: '0.85rem', color: '#cbd5e1' }}>
                This component was split into a separate bundle chunk and loaded on-demand via React.lazy()!
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-end', height: '60px' }}>
                {[40, 75, 55, 90, 65, 80, 95].map((h, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background: '#38bdf8',
                      borderRadius: '4px',
                    }}
                  />
                ))}
              </div>
            </div>
          );
        },
      });
    }, 1200);
  });
});

function LoadingSkeleton() {
  return (
    <div
      style={{
        padding: '1.2rem',
        background: '#111827',
        borderRadius: '8px',
        border: '1px solid #1f2937',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
      }}
    >
      <div style={{ width: '40%', height: '18px', background: '#374151', borderRadius: '4px' }} />
      <div style={{ width: '80%', height: '14px', background: '#1f2937', borderRadius: '4px' }} />
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#38bdf8', fontSize: '0.85rem' }}>
        <span className="react-spinning-logo" style={{ fontSize: '1rem' }}>⚛</span>
        <span>Loading dynamic chunk via &lt;Suspense&gt; fallback...</span>
      </div>
    </div>
  );
}

export default function LazyAndSuspenseDemo() {
  const [loadModule, setLoadModule] = useState(false);

  const codeSnippet = `import React, { Suspense, lazy, useState } from 'react';

// 1. React.lazy takes a function that calls dynamic import()
const AnalyticsChart = lazy(() => import('./AnalyticsChart'));

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>Load Analytics</button>

      {/* 2. Suspense wraps the lazy component with a fallback loader */}
      {showChart && (
        <Suspense fallback={<div>Loading bundle chunk...</div>}>
          <AnalyticsChart />
        </Suspense>
      )}
    </div>
  );
}`;

  return (
    <SectionCard
      id="lazy-and-suspense"
      title="Code Splitting: React.lazy & Suspense Fallbacks"
      subtitle="Reducing initial bundle size by loading heavy components and routes on demand"
      badges={[
        { label: 'Performance', variant: 'perf' },
        { label: 'Code Splitting', variant: 'core' },
      ]}
      summaryPoints={[
        'React.lazy() enables dynamic import() of React components, letting Webpack or Vite split them into separate JavaScript bundle chunks.',
        '<Suspense> specifies a fallback UI (skeleton, spinner) to display while the dynamic component or async data is loading.',
        'Reduces the initial page download size drastically, improving First Contentful Paint (FCP) and Time to Interactive (TTI).',
        'Commonly combined with React Router for route-based code splitting.'
      ]}
      interviewTip="What happens if a React.lazy component fails to load (e.g. network failure)? The Suspense boundary does NOT catch network errors. You must wrap the Suspense boundary in an ErrorBoundary to gracefully display an error UI."
      codeSnippet={codeSnippet}
      codeFileName="LazyAndSuspenseDemo.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          <button
            onClick={() => setLoadModule(!loadModule)}
            className={`btn ${loadModule ? 'btn-danger' : 'btn-primary'}`}
          >
            {loadModule ? 'Unmount Module' : 'Dynamically Load Heavy Bundle'}
          </button>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            {loadModule ? 'Chunk mounted' : 'Chunk idle (0kb downloaded)'}
          </span>
        </div>

        {loadModule && (
          <Suspense fallback={<LoadingSkeleton />}>
            <LazyHeavyChartComponent />
          </Suspense>
        )}
      </div>
    </SectionCard>
  );
}

