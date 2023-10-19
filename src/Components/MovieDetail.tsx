import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieData } from "../type";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieData | null>(null);
  const apiKey =
    process.env.REACT_APP_API_KEY || "0ed9e5583ee0385087dff929f46a1b21";
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [apiUrl, id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="movie-poster"
        />
      </div>
      <div>
        <p className="movie-title">{movieDetails.title}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
