import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieData } from "../type";
import "../custom.css";
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

  const handleCloseModal = () => {
    navigate("/");
  }

  return (
    <div className="movie-details-first-div">
          <button
              className="close-button"
              onClick={handleCloseModal}
            >
              Close
            </button>
      <div className="movie-details-second-div">
        <div className="flex">
          <div className="movie-details-image-div">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movie-details-image"
            />
          </div>
          <div className="movie-detail-content-div">
            <p className="modal-title text-3xl font-extrabold  py-4 mb-2 text-white">
              {movieDetails.title}
            </p>
            <p className="modal-release text-lg mb-4 py-4 text-white">
              Release Date: {movieDetails.release_date}
            </p>
            <p className="modal-description text-lg mb-4 py-4 text-white">
              Overview : {movieDetails.overview}
            </p>
            <p className="modal-runtime text-lg text-white">
              Runtime: {movieDetails.runtime} minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
