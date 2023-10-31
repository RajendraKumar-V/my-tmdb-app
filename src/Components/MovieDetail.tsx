import React, { useEffect, useState } from "react";
import { MovieData } from "../type";
import "../custom.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import closeIcon from "../image/close-icon.svg";
import { Link } from "react-router-dom";
interface MovieDetailProps {
  movie: MovieData;
  movieId: number;
  
}

Modal.setAppElement("#root");

function MovieDetail({ movie, movieId }: MovieDetailProps) {
  const [movieDetails, setMovieDetails] = useState<MovieData | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(true);;
  const apiKey =
    process.env.REACT_APP_API_KEY || "0ed9e5583ee0385087dff929f46a1b21";
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setModalIsOpen(false);
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [apiUrl]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {modalIsOpen && (
        <div className="movie-details-overlay">
          <div className="movie-details-container">
            <Link to="/" className="close-button">
              <img src={closeIcon} alt="Close" onClick={handleCloseModal} />
            </Link>
            <div className="flex">
              <div className="movie-details-image-div">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                  className="movie-details-image"
                />
              </div>
              <div className="movie-detail-content-div">
                <p className="movie-detail-title">{movieDetails.title}</p>
                <p className="movie-detail-release">
                  Release Date: {movieDetails.release_date}
                </p>
                <p className="movie-detail-description">
                  Overview : {movieDetails.overview}
                </p>
                <p className="movie-detail-runtime">
                  Runtime : {movieDetails.runtime}
                </p>
                <p className="movie-details-vote-avg">
                  Vote Average: {movieDetails.vote_average}
                </p>
                <p className="movie-details-vote-count">
                  Vote Count: {movieDetails.vote_count}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
