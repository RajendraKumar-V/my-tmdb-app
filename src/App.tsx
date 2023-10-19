import React, { useState } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import useMovieData from "./CustomHooks/useMovieData";
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetail";
import TabNavigation from "./Components/TabNavigation";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [activeTab, setActiveTab] = useState("movies");
  const movieId = activeTab === "movies" ? 550 : 12345;
  const apiUrl = `https://api.themoviedb.org/3/movie/popular`;
  const { movie, loading, error } = useMovieData(apiUrl);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <TabNavigation onTabChange={handleTabChange} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList movieData={movie} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
