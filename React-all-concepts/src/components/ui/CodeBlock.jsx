import React, { useState } from 'react';

export default function CodeBlock({ code, language = 'jsx', fileName = 'Snippet.jsx' }) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-section">
      <div className="code-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ color: '#6366f1', fontSize: '0.8rem' }}>●</span>
          <span className="code-file-label">{fileName}</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn btn-outline"
            style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <button
            onClick={handleCopy}
            className="btn btn-secondary"
            style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
          >
            {copied ? '✓ Copied!' : 'Copy Code'}
          </button>
        </div>
      </div>
      {isExpanded && (
        <pre className="code-pre">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
