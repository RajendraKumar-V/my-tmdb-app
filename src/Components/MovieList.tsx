import React, { FC } from "react";
import "./MovieCard.css";
import { MovieData } from "../type";
import { Link } from "react-router-dom";
interface MovieListProps {
  movieData: any;
}

const MovieList: FC<MovieListProps> = ({ movieData }) => {
  if (!movieData || !movieData.results) {
    return <p>Loading...</p>;
  }

  const movies = movieData.results;

  //const sanitizedTitle = movies.title.replace(/[: -]/g, "_");
  return (
    <div className="movie-list">
      {movies.map((movie: MovieData) => (
        <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h2 className="movie-title">{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
