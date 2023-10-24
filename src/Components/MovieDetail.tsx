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
    <div className="div inline">
      <div className="w-1/2 p-4 bg-blue-200">Div 1</div>
      <div className="w-1/2 p-4 bg-green-200">Div 2</div>
    </div>
  );
}

export default MovieDetail;
