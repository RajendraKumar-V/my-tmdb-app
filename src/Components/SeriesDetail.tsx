import React, {Dispatch, SetStateAction,useEffect, useState } from "react";
import { SeriesDetailData,SeriesData } from "../type";
import "../custom.css";
import Modal from "react-modal";
import closeIcon from "../image/close-icon.svg";
import themoviedb from "../../src/lib/themoviedb/themoviedb.js";
import { AxiosResponse, AxiosError } from 'axios';

Modal.setAppElement("#root");

interface SeriesDetailProps {
    series: SeriesDetailData;
    seriesId: number;
    setSelectedSeries: Dispatch<SetStateAction<SeriesData | null>>;
  }

  function SeriesDetail({ series, seriesId,setSelectedSeries }:SeriesDetailProps){
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serialDetailOptions = {
          params: {
            api_key: themoviedb.common.api_key,
          },
          onSuccess: (data: AxiosResponse<SeriesDetailData[]>) => {
            data;
          },
          onError: (error: AxiosError) => {
            console.error("Series Detail Data Error:", error);
          },
        };
  
        themoviedb.movies.getById(
          {
            ...serialDetailOptions.params,
            id: seriesId,
          },
        );
      } catch (error) {
        console.error("Error fetching series detail data:", error);
      }
    };
  
    fetchData();
  }, [seriesId]);

  if (!series) {
    return <p>Loading...</p>;
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedSeries(null);
  };


  return (
    <div>
    {showModal && series && (
      <div className="movie-details-overlay">
        <div className="modal-content">
          <div className="close-button" onClick={closeModal}>
            <img
              src={closeIcon}
              data-testid="Close-Modal"
              alt="Close"
            />
          </div>
          <div className="flex">
            <div className="bg-custom-color rounded-lg shadow-md movie-details-image-div">
              <img
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.name}
                className="movie-details-image"
              />
            </div>
            <div className="movie-detail-content-div">
              <p className="movie-detail-title">{series.name}</p>
              <p className="movie-detail-release">
                Release Date: {series.first_air_date}
              </p>
              <p className="movie-detail-description">
                Overview: {series.overview}
              </p>
              <p className="movie-details-vote-avg">
                Vote Average: {series.vote_average}
              </p>
              <p className="movie-details-vote-count">
                Vote Count: {series.vote_count}
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