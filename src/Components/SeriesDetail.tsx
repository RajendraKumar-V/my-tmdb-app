import React, { FC,useEffect, useState } from "react";
import { SeriesDetailData } from "../type";
import "../custom.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import closeIcon from "../image/close-icon.svg";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

interface SeriesDetailProps {
    series: SeriesDetailData;
    seriesId: number;
  }
  
  function SeriesDetail({ series, seriesId }:SeriesDetailProps){
  const [seriesDetails, setSeriesDetails] = useState<SeriesDetailData | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY || "0ed9e5583ee0385087dff929f46a1b21";
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setModalIsOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`;
    console.log('SerieslistURL',apiUrl);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setSeriesDetails(data))
      .catch((error) => console.error("Error fetching series details:", error));
  }, []);

  if (!seriesDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {modalIsOpen && (
        <div className="series-details-overlay">
          <div className="series-details-container">
            <Link to="/" className="close-button">
              <img src={closeIcon} alt="Close" onClick={handleCloseModal} />
            </Link>
            <div className="flex">
              <div className="series-details-image-div">
                <img
                  src={`https://image.tmdb.org/t/p/w500${seriesDetails.poster_path}`}
                  alt={seriesDetails.name}
                  className="series-details-image"
                />
              </div>
              <div className="series-detail-content-div">
                <p className="series-detail-title">{seriesDetails.name}</p>
                <p className="series-detail-release">
                  Release Date: {seriesDetails.first_air_date}
                </p>
                <p className="series-detail-description">
                  Overview: {seriesDetails.overview}
                </p>
                <p className="series-detail-popularity">
                  Popularity: {seriesDetails.popularity}
                </p>
                <p className="series-details-vote-avg">
                  Vote Average: {seriesDetails.vote_average}
                </p>
                <p className="series-details-vote-count">
                  Vote Count: {seriesDetails.vote_count}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeriesDetail;