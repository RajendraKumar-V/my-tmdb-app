import React, { FC } from "react";
import { MovieData } from '../type';
import './MovieCard.css'; 


const MovieList:FC<{ movieData: MovieData | null }> = ({ movieData }) => {
  if (!movieData) {
    return <p>Loading...</p>;
  }
  return (
     <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt={movieData.title} />
      <div className="movie-details">
        <h2>{movieData.title}</h2>
        <p>{movieData.tagline}</p>
        <p>Release Date: {movieData.release_date}</p>
        <p>Runtime: {movieData.runtime} minutes</p>
        <p>Genres: {movieData.genres.map((genre) => genre.name).join(', ')}</p>
        <p>Rating: {movieData.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieList;
