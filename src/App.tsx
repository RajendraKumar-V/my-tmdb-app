import React,{useState} from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import useMovieData from './CustomHooks/useMovieData';
import MovieList from './Components/MovieList';
import TabNavigation from './Components/TabNavigation';
import './App.css'; 

function App() {
  const [activeTab, setActiveTab] = useState('movies');
  const movieId = activeTab === 'movies' ? 550 : 12345; // Specify movie IDs for movies and series
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
  const { movie, loading, error } = useMovieData(apiUrl,movieId);
  
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
      <h1>Movie List</h1>
      <TabNavigation onTabChange={handleTabChange} />
      <ErrorBoundary>
        <MovieList movieData={movie} />
      </ErrorBoundary>
    </div>
  );
}

export default App;