import React, { useState } from "react";
//import './Tabnavigation.css';
import "../custom.css";

interface TabNavigationProps {
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("movies");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="tab-navigation">
      <div
        className={`tab ${
          activeTab === "movies" ? "active" : ""
        } cursor-pointer ${
          activeTab === "movies"
            ? "bg-orange-500 text-white font-bold transition m-1"
            : "bg-gray-500 text-white font-bold transition m-1"
        }`}
        onClick={() => handleTabClick("movies")}
      >
        Movies
      </div>
      <div
        className={`tab ${
          activeTab === "series" ? "active" : ""
        } cursor-pointer ${
          activeTab === "series"
            ? "bg-orange-500 text-white font-bold transition m-1"
            : "bg-gray-500 text-white font-bold transition m-1"
        }`}
        onClick={() => handleTabClick("series")}
      >
        Series
      </div>
    </div>
  );
};

export default TabNavigation;
