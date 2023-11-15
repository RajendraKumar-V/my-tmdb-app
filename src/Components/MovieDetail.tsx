import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MovieData, MovieDetailData } from "../type";
import "../custom.css";
import Modal from "react-modal";
import closeIcon from "../image/close-icon.svg";
import themoviedb from "../../src/lib/themoviedb/themoviedb.js";
import { AxiosResponse, AxiosError } from "axios";
interface MovieDetailProps {
  movie: MovieDetailData;
  movieId: number;
  setSelectedMovie: Dispatch<SetStateAction<MovieData | null>>;
}

Modal.setAppElement("#root");

function MovieDetail({ movie, movieId, setSelectedMovie }: MovieDetailProps) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetailOptions = {
          params: {
            api_key: themoviedb.common.api_key,
          },
          onSuccess: (data: AxiosResponse<MovieDetailData[]>) => {
            data;
          },
          onError: (error: AxiosError) => {
            console.error("Movie Detail Data Error:", error);
          },
        };

        themoviedb.movies.getById({
          ...movieDetailOptions.params,
          id: movieId,
        });
      } catch (error) {
        console.error("Error fetching movie detail data:", error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      {showModal && movie && (
        <div className="movie-details-overlay">
          <div className="modal-content">
            <div className="close-button" onClick={closeModal}>
              <img src={closeIcon} data-testid="Close-Modal" alt="Close" />
            </div>
            <div className="flex">
              <div className="bg-custom-color rounded-lg shadow-md movie-details-image-div">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-details-image"
                />
              </div>
              <div className="movie-detail-content-div">
                <p className="movie-detail-title">{movie.title}</p>
                <p className="movie-detail-release">
                  Release Date: {movie.release_date}
                </p>
                <p className="movie-detail-description">
                  Overview: {movie.overview}
                </p>
                <p className="movie-detail-runtime">Runtime: {movie.runtime}</p>
                <p className="movie-details-vote-avg">
                  Vote Average: {movie.vote_average}
                </p>
                <p className="movie-details-vote-count">
                  Vote Count: {movie.vote_count}
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
