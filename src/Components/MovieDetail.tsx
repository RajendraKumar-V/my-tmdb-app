import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieData } from "../type";
import "./MovieDetail.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieData | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const apiKey =
    process.env.REACT_APP_API_KEY || "0ed9e5583ee0385087dff929f46a1b21";
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [apiUrl, id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/");
  };

  return (
    <div className="movie-details-container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Movie Detail"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="modal-image"
          />
        </div>
        <div className="divModalDetails">
          <p className="modal-title">{movieDetails.title}</p>
          <p className="modal-description">{movieDetails.tagline}</p>
          <p className="modal-release">
            Release Date: {movieDetails.release_date}
          </p>
          <p className="modal-runtime">
            Runtime: {movieDetails.runtime} minutes
          </p>
        </div>

        <button onClick={closeModal} className="close-button">
          Close
        </button>
      </Modal>
    </div>
  );
}

export default MovieDetail;
