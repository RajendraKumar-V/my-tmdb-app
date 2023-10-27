import React, { useState } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import useMovieData from "./CustomHooks/useMovieData";
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetail";
import TabNavigation from "./Components/TabNavigation";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface MovieDetailWrapperProps {
  movie: any;
  movieId: number; // You should replace 'any' with the actual type of the 'movie' prop
}

function App() {
  const [activeTab, setActiveTab] = useState("movies");
  //const movieId = activeTab === "movies" ? 550 : 12345;
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=0ed9e5583ee0385087dff929f46a1b21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
  const { movie, loading, error } = useMovieData(apiUrl);
  const { id: movieId } = useParams();
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
          {movie && (
            <Route
              path="/movie/:id"
              element={<MovieDetailWrapper movie={movie} movieId={movieId ? parseInt(movieId) : 0} />}
            />
          )}
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

function MovieDetailWrapper({ movie }: MovieDetailWrapperProps) {
  const { id } = useParams();
  const movieId = id ? parseInt(id) : 0;

  return <MovieDetail movie={movie} movieId={movieId} />;
}
