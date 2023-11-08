import React, { FC, useState } from "react";
import "../custom.css";
import { MovieData } from "../type";
import MovieDetail from "./MovieDetail";
interface MovieListProps {
  movieData: any;
}

const itemsPerPage = 20;

const MovieList: FC<MovieListProps> = ({ movieData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<MovieData | null>(null);
  const handleMovieSelect = (movie: MovieData) => {
    setSelectedMovie(movie);
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
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)}
        className={`my-custom-button ${
          index + 1 === currentPage ? "active" : "inactive"
        }`}
      >
        {index + 1}
      </button>
    ));
  };
  return (
    <>
      <div className="movie-list-maindiv">
        {movies.map((movie: MovieData) => (
         <div key={movie.id}>
         <div className="group bg-white rounded-lg shadow-md m-2 relative movie-list-imagediv" onClick={() => handleMovieSelect(movie)}>
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
        <div data-testid="mock-movie-detail" className="movie-details-overlay">
          <MovieDetail movie={selectedMovie} movieId={selectedMovie.id} setSelectedMovie={setSelectedMovie} />
        </div>
      )}
      
      <div className="flex-center">
        {renderPaginationButtons()}
      </div>
    </>
  );
};

export default MovieList;
