import React, { useState } from "react";
import "../custom.css";
import accusant from "../image/accusoft.svg";

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
    <div className="tab-main-div">
      <div className="prime-div">Movie Flix</div>
      <div className="tab-container">
        <div
          className={`tab ${
            activeTab === "movies" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("movies")}
        >
          Movies
        </div>
        <div
          className={`tab ${
            activeTab === "series" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("series")}
        >
          Series
        </div>
      </div>
      <div className="tab-image">
        <img src={accusant} alt="Close" className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default TabNavigation;
