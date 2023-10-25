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

  // Calculate the range of items to display based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const movies = movieData.results.slice(startIndex, endIndex);

  const totalPages = Math.ceil(movieData.results.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
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
                <h2 className="text-lg font-bold mt-2 px-2 py-1">
                  {movie.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 rounded-md ${
              index + 1 === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            } mr-2`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
