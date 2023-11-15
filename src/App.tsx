import React, { useState, useEffect } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import MovieList from "./Components/MovieList";
import SeriesList from "./Components/SeriesList";
import TabNavigation from "./Components/TabNavigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SeriesData, MovieData } from "./type";
import themoviedb from "../src/lib/themoviedb/themoviedb.js";

function App() {
  const [activeTab, setActiveTab] = useState("movies");
  const [movieData, setMovieData] = useState<MovieData[] | null>(null);
  const [seriesData, setSeriesData] = useState<SeriesData[] | null>(null);
  const [movieLoading, setMovieLoading] = useState(true);
  const [seriesLoading, setSeriesLoading] = useState(true);
  const navigate = useNavigate();
  const handleTabChange = async (tab: string) => {
    setActiveTab(tab);
  };

  const fetchMovieData = async () => {
    setMovieLoading(true);
    const movieOptions = {
      api_key: themoviedb.common.api_key,
    };

    try {
      themoviedb.discover.getMovies(
        movieOptions,
        (data) => {
          const parsedData = JSON.parse(data);
          setMovieData(parsedData.results);
          setMovieLoading(false);
        },
        (error) => {
          console.error("Movie Data Error:", error);
          setMovieLoading(false);
        }
      );
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setMovieLoading(false);
    }
  };

  const fetchSeriesData = async () => {
    setSeriesLoading(true);
    const seriesOptions = {
      api_key: themoviedb.common.api_key,
    };

    try {
      themoviedb.discover.getTvShows(
        seriesOptions,
        (data) => {
          const parsedData = JSON.parse(data);
          setSeriesData(parsedData.results);
          setSeriesLoading(false);
        },
        (error) => {
          console.error("Series Data Error:", error);
          setSeriesLoading(false);
        }
      );
    } catch (error) {
      console.error("Error fetching series data:", error);
      setSeriesLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "movies") {
      fetchMovieData();
      navigate("/movies");
    } else if (activeTab === "series") {
      fetchSeriesData();
      navigate("/series");
    }
  }, [activeTab]);

  return (
    <div className="App">
      <ErrorBoundary>
      <TabNavigation onTabChange={handleTabChange} />
      <Routes>
        <Route path="/" element={<MovieList movieData={movieData} />} />
        <Route path="/movies" element={<MovieList movieData={movieData} />} />
        <Route
          path="/series"
          element={<SeriesList seriesData={seriesData} />}
        />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
