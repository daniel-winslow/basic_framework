import { useState, ReactNode } from 'react';

interface Tab {
  /** Unique identifier for the tab */
  id: string;
  /** Label displayed on the tab */
  label: string;
  /** Content displayed when the tab is active */
  content: ReactNode;
}

interface TabsProps {
  /** Array of tab objects to be rendered */
  tabs: Tab[];
}

/** Tabs Navigation Component */
const Tabs = ({ tabs }: TabsProps) => {
  const [ activeTab, setActiveTab ] = useState(tabs[ 0 ]?.id);

  return (
    <div>
      <div className="tabs">
        <ul className="tabs-list">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;
