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
  const [showModal, setShowModal] = useState(true);
  const apiKey =
    process.env.REACT_APP_API_KEY || "0ed9e5583ee0385087dff929f46a1b21";
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [apiUrl]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal && (
        <div className="movie-details-overlay">
          <div className="modal-content">
            <div className="flex">
              <div className="bg-custom-color rounded-lg shadow-md movie-details-image-div">
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
