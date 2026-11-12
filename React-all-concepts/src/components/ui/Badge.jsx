import React from 'react';

export default function Badge({ children, variant = 'core' }) {
  const variantMap = {
    core: 'badge-core',
    hook: 'badge-hook',
    perf: 'badge-perf',
    adv: 'badge-adv',
    react19: 'badge-react19',
  };

  return (
    <span className={`badge ${variantMap[variant] || 'badge-core'}`}>
      {children}
    </span>
  );
}

