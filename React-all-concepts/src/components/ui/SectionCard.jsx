import React, { useState } from 'react';
import Badge from './Badge';
import CodeBlock from './CodeBlock';

export default function SectionCard({
  id,
  title,
  subtitle,
  badges = [],
  summaryPoints = [],
  interviewTip,
  codeSnippet,
  codeFileName,
  children
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="concept-card" id={id}>
      <div className="concept-card-header">
        <div className="concept-card-title-group">
          <h3>
            <span style={{ color: '#06b6d4' }}>#</span> {title}
          </h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="concept-meta-tags">
          {badges.map((b, idx) => (
            <Badge key={idx} variant={b.variant || 'core'}>
              {b.label}
            </Badge>
          ))}
          <button
            onClick={() => setShowCode(!showCode)}
            className="btn btn-outline"
            style={{ padding: '0.3rem 0.7rem', fontSize: '0.75rem', borderColor: '#4f46e5' }}
          >
            {showCode ? 'Hide Code' : 'View Code'}
          </button>
        </div>
      </div>

      <div className="concept-body">
        {summaryPoints && summaryPoints.length > 0 && (
          <div className="deep-dive-box">
            <strong style={{ color: '#818cf8' }}>Key Concept Breakdown:</strong>
            <ul>
              {summaryPoints.map((pt, index) => (
                <li key={index}>{pt}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Live Interactive Playground / Demo */}
        <div className="demo-box">
          <div className="demo-box-header">
            <span>Live Interactive Demo</span>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'none' }}>
              Interact to observe React behavior
            </span>
          </div>
          {children}
        </div>

        {interviewTip && (
          <div className="interview-tip">
            <strong>💡 Top Interview Focus:</strong> {interviewTip}
          </div>
        )}
      </div>

      {showCode && codeSnippet && (
        <CodeBlock code={codeSnippet} fileName={codeFileName || `${title.replace(/\s+/g, '')}.jsx`} />
      )}
    </div>
  );
}

