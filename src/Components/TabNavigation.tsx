import React, { useState } from 'react';
import './Tabnavigation.css'; 

interface TabNavigationProps {
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('movies');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="tab-navigation">
      <div
        className={`tab ${activeTab === 'movies' ? 'active' : ''}`}
        onClick={() => handleTabClick('movies')}
      >
        Movies
      </div>
      <div
        className={`tab ${activeTab === 'series' ? 'active' : ''}`}
        onClick={() => handleTabClick('series')}
      >
        Series
      </div>
    </div>
  );
};

export default TabNavigation;