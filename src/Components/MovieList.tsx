import React, { FC, useState } from "react";
import "../custom.css";
import { MovieData } from "../type";
import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { useNavigate } from "react-router-dom";
interface MovieListProps {
  movieData: any;
}

const itemsPerPage = 10;

const MovieList: FC<MovieListProps> = ({ movieData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<MovieData | null>(null);
  const navigate = useNavigate();
  const handleMovieSelect = (movie: MovieData) => {
    setSelectedMovie(movie);
    //navigate(`/movie/${movie.id}`);
  };
  const handleCloseOverlay = () => {
    console.log('Check')
    setSelectedMovie(null);
    navigate("/"); // Manually handle navigation
  };

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
            <div
              className="movie-list-imagediv group"
              onClick={() => handleMovieSelect(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-list-image"
              />
              <p className="movie-list-title">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-details-overlay">
          <MovieDetail movie={selectedMovie} movieId={selectedMovie.id} />
          <button onClick={handleCloseOverlay}>Close</button>
        </div>
      )}
      <div className="flex items-center justify-center">
        {renderPaginationButtons()}
      </div>
    </>
  );
};

export default MovieList;
