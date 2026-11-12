import React, { Component, useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// 1. Error Boundary must be a Class Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  // Update state so the next render will show the fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  // Log the error to an error reporting service (Sentry, LogRocket, etc.)
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '1.2rem',
            background: '#3f1118',
            border: '1px solid #dc2626',
            borderRadius: '8px',
            color: '#fca5a5',
          }}
        >
          <h4 style={{ margin: '0 0 0.4rem 0', color: '#f87171' }}>
            🛡 Caught by ErrorBoundary: Child Component Crashed
          </h4>
          <p style={{ margin: '0 0 0.8rem 0', fontSize: '0.85rem' }}>
            Error details: <code>{this.state.errorMessage}</code>
          </p>
          <button onClick={this.handleReset} className="btn btn-secondary" style={{ fontSize: '0.8rem' }}>
            🔄 Reset & Recover Component
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// 2. Child component that can intentionally throw
function BuggyComponent() {
  const [shouldExplode, setShouldExplode] = useState(false);

  if (shouldExplode) {
    // Deliberately throwing in render phase
    throw new Error('Simulated runtime exception during render cycle!');
  }

  return (
    <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
      <p style={{ margin: '0 0 0.8rem 0', fontSize: '0.88rem', color: '#cbd5e1' }}>
        This child component is operational and safe inside the ErrorBoundary.
      </p>
      <button
        onClick={() => setShouldExplode(true)}
        className="btn btn-danger"
        style={{ fontSize: '0.8rem' }}
      >
        💥 Trigger Intentional Render Exception
      </button>
    </div>
  );
}

export default function ErrorBoundaryDemo() {
  const codeSnippet = `import React, { Component } from 'react';

// 1. Error Boundary Class
export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMonitoringService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong: {this.state.error.message}</h2>;
    }
    return this.props.children;
  }
}

// 2. Wrap risky components:
<ErrorBoundary>
  <ProductFeed />
</ErrorBoundary>`;

  return (
    <SectionCard
      id="error-boundaries"
      title="Error Boundaries: Graceful UI Failure & Recovery"
      subtitle="Catching JavaScript errors anywhere in child component trees to prevent full app crashes"
      badges={[
        { label: 'Resilience', variant: 'adv' },
        { label: 'Lifecycle', variant: 'core' },
      ]}
      summaryPoints={[
        'Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.',
        'Must implement static getDerivedStateFromError(error) and/or componentDidCatch(error, info).',
        'What Error Boundaries DO NOT catch: Errors in event handlers (use try/catch), asynchronous callbacks (setTimeout, requestAnimationFrame), server-side rendering, or errors thrown in the boundary itself.',
        'Always place error boundaries strategically around widgets, modules, or routes so one widget crash doesn\'t take down the entire page.'
      ]}
      interviewTip="Why are Error Boundaries still class components in React 18/19? React does not yet provide a functional hook equivalent for getDerivedStateFromError or componentDidCatch, making class components mandatory for error boundaries."
      codeSnippet={codeSnippet}
      codeFileName="ErrorBoundaryDemo.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
          Clicking the trigger button below throws a real JavaScript error during the component's render phase.
          Watch the Error Boundary intercept the crash cleanly:
        </p>

        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </div>
    </SectionCard>
  );
}
