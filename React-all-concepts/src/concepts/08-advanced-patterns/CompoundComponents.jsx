import React, { createContext, useContext, useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// 1. Compound Component Context
const TabsContext = createContext(null);

// 2. Parent Container
function Tabs({ defaultTab, children }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>{children}</div>
    </TabsContext.Provider>
  );
}

// 3. Tab List
function TabList({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.4rem',
        borderBottom: '1px solid #374151',
        paddingBottom: '0.4rem',
      }}
    >
      {children}
    </div>
  );
}

// 4. Tab Item
function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        padding: '0.45rem 0.9rem',
        borderRadius: '6px',
        border: 'none',
        background: isActive ? '#4f46e5' : 'transparent',
        color: isActive ? '#ffffff' : '#9ca3af',
        fontWeight: 600,
        fontSize: '0.85rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  );
}

// 5. Tab Panel
function TabPanel({ id, children }) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== id) return null;

  return (
    <div
      style={{
        padding: '1rem',
        background: '#111827',
        borderRadius: '8px',
        border: '1px solid #1f2937',
        color: '#e2e8f0',
        fontSize: '0.88rem',
      }}
    >
      {children}
    </div>
  );
}

// Attach sub-components to parent for dot-notation syntax
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default function CompoundComponents() {
  const codeSnippet = `import React, { createContext, useContext, useState } from 'react';

// 1. Context manages shared active state implicitly
const TabsContext = createContext(null);

export function Tabs({ defaultTab, children }) {
  const [active, setActive] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className="tabs-wrapper">{children}</div>
    </TabsContext.Provider>
  );
}

export function Tab({ id, children }) {
  const { active, setActive } = useContext(TabsContext);
  return (
    <button
      className={active === id ? 'tab active' : 'tab'}
      onClick={() => setActive(id)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ id, children }) {
  const { active } = useContext(TabsContext);
  return active === id ? <div className="panel">{children}</div> : null;
}

// Dot notation attachment
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Declarative API like HTML <select> and <option>:
<Tabs defaultTab="overview">
  <Tabs.Tab id="overview">Overview</Tabs.Tab>
  <Tabs.Tab id="settings">Settings</Tabs.Tab>

  <Tabs.Panel id="overview">Welcome to the overview!</Tabs.Panel>
  <Tabs.Panel id="settings">Configurable settings here.</Tabs.Panel>
</Tabs>`;

  return (
    <SectionCard
      id="compound-components"
      title="Compound Components Pattern (Dot Notation APIs)"
      subtitle="Building intuitive, declarative component families that share implicit state (like HTML select & option)"
      badges={[
        { label: 'Design Pattern', variant: 'adv' },
        { label: 'Component Architecture', variant: 'core' },
      ]}
      summaryPoints={[
        'Compound components work together as a synchronized unit (e.g. <Tabs>, <Tabs.Tab>, <Tabs.Panel>) with implicit state handled via Context.',
        'Users can rearrange the layout or nest custom elements between components without breaking functionality.',
        'Eliminates massive prop configurations like <Tabs items={[{ title: "", content: "" }]} /> in favor of declarative JSX composition.',
        'Standard pattern used by top component libraries like Radix UI, Headless UI, and Chakra UI.'
      ]}
      interviewTip="What problem does the Compound Component pattern solve? It eliminates prop drilling and rigid prop configurations for multi-part components, giving consumers full declarative control over JSX markup while sharing internal state seamlessly."
      codeSnippet={codeSnippet}
      codeFileName="CompoundComponents.jsx"
    >
      <Tabs defaultTab="overview">
        <Tabs.List>
          <Tabs.Tab id="overview">📌 Architecture Overview</Tabs.Tab>
          <Tabs.Tab id="security">🛡 Security Protocols</Tabs.Tab>
          <Tabs.Tab id="metrics">📈 Telemetry & Logs</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel id="overview">
          Micro-frontend cluster running React 19 concurrent features with automated edge SSR caching.
        </Tabs.Panel>

        <Tabs.Panel id="security">
          Zero-trust JWT authentication with rotating refresh keys, strict Content Security Policy, and sanitized payloads.
        </Tabs.Panel>

        <Tabs.Panel id="metrics">
          99.99% uptime, 42ms median latency, 0 unhandled promise rejections recorded in the past 24 hours.
        </Tabs.Panel>
      </Tabs>
    </SectionCard>
  );
}
