import React, { FC, useState } from "react";
import "./MovieCard.css";
import "./Pagination.css";
import { MovieData } from "../type";
import { Link } from "react-router-dom";

interface MovieListProps {
  movieData: any;
}

const itemsPerPage = 10;

const MovieList: FC<MovieListProps> = ({ movieData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!movieData || !movieData.results) {
    return <p>Loading...</p>;
  }

  // Calculate the range of items to display based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const movies = movieData.results.slice(startIndex, endIndex);

  const totalPages = Math.ceil(movieData.results.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
