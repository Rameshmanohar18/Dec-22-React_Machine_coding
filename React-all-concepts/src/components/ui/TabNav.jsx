import React from 'react';

export default function TabNav({ tabs, activeTab, onSelectTab }) {
  return (
    <div className="category-nav-bar">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`nav-pill ${isActive ? 'active' : ''}`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            {tab.count !== undefined && <span className="badge-count">{tab.count}</span>}
          </button>
        );
      })}
    </div>
  );
}

