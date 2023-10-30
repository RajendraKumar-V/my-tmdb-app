import React, { useState } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import useMediaData from "./CustomHooks/useMovieData";
import MovieList from "./Components/MovieList";
import SeriesList from "./Components/SeriesList";
import TabNavigation from "./Components/TabNavigation";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [activeTab, setActiveTab] = useState("movies");

  const apiKey =
    process.env.REACT_APP_API_KEY || "0ed9e5583ee0385087dff929f46a1b21";

  const getApiUrl = (tab: string) => {
    if (tab === "movies") {
      return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    } else if (tab === "series") {
      return `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;
    } else {
      return "";
    }
  };

  const { mediaData} = useMediaData(getApiUrl(activeTab));

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "movies") {
      console.log('Movies');
      <Link to="/movies"/>;
    } else if (tab === "series") {
      console.log('Series');
      <Link to="/series"/>;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <ErrorBoundary>
          <TabNavigation onTabChange={handleTabChange} />
          <Routes>
          <Route
              path="/"
              element={<MovieList movieData={mediaData || []} />}
            />
            <Route
              path="/movies"
              element={<MovieList movieData={mediaData || []} />}
            />
            <Route
              path="/series"
              element={<SeriesList seriesData={mediaData || []} />}
            />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
