import React, { FC, useState } from "react";
import "../custom.css";
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const movies = movieData.results.slice(startIndex, endIndex);

  const totalPages = Math.ceil(movieData.results.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const renderPaginationButtons = () => {
    const paginationButtons = [];

    for (let index = 1; index <= totalPages; index++) {
      paginationButtons.push(
        <button
          key={index}
          onClick={() => handlePageChange(index)}
          className={`my-custom-button ${
            index === currentPage ? "active" : "inactive"
          }`}
        >
          {index}
        </button>
      );
    }

    return paginationButtons;
  };

  return (
    <>
      <div className="movie-list-maindiv">
        {movies.map((movie: MovieData) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="movie-list-imagediv">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-list-image"
                />
                <span className="movie-list-title whitespace-normal">
                  {movie.title}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        {renderPaginationButtons()}
      </div>
    </>
  );
};

export default MovieList;
