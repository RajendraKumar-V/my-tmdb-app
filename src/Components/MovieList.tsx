import React, { FC, useState } from "react";
//import "../custom.css"; // Import your custom CSS
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
      <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie: MovieData) => (
          <div
            key={movie.id}
            className="movie-card bg-white rounded-lg shadow-md"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster w-40 h-40 !important"
              />
              <h2 className="movie-title text-lg font-bold mt-2 px-2 py-1">
                {movie.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 rounded-md ${
              index + 1 === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }mr-2`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
