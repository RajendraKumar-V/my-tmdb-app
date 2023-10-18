import React, { FC } from "react";
import './MovieCard.css';
import { MovieData } from "../type";
interface MovieListProps {
  movieData: any; // Replace 'any' with the correct type if available
}

const MovieList: FC<MovieListProps> = ({ movieData }) => {
  if (!movieData || !movieData.results) {
    return <p>Loading...</p>;
  }

  const movies = movieData.results;
  console.log(movies)

  return (
    <div className="movie-list">
    {movies.map((movie: MovieData) => (
      <div key={movie.id} className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Vote Average: {movie.vote_average}</p>    
      </div>
    ))}
  </div>
  
  );
}

export default MovieList;

