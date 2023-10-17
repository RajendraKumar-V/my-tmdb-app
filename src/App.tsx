import React,{useState,useEffect} from 'react'
import MovieList from './MovieList';
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
import axios from 'axios';
import { MovieData } from './type';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY || '0ed9e5583ee0385087dff929f46a1b21';
  const apiUrl = "https://api.themoviedb.org/3/movie/550";
  const [movie, setMovie] = useState<MovieData | null>(null);

  useEffect(() => {
    axios.get(`${apiUrl}?api_key=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [apiKey, movie]);
  return (
    <div className="App">
      <h1>Movie List</h1>
      <ErrorBoundary>
      <MovieList movieData={movie} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
