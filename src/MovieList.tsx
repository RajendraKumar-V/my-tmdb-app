import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function MovieList() {
  //const apiKey = '0ed9e5583ee0385087dff929f46a1b21';
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const apiUrl = "https://api.themoviedb.org/3/movie/550";

  interface MovieData {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any; // Define a more specific type if available
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: { id: number; logo_path: string | null; name: string; origin_country: string }[];
    production_countries: { iso_3166_1: string; name: string }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  const [movie, setMovie] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=0ed9e5583ee0385087dff929f46a1b21')
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieList;
