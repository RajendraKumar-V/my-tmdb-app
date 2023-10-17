import React, { FC } from "react";
import "./App.css";
import { MovieData } from './type';

const MovieList:FC<{ movieData: MovieData | null }> = ({ movieData }) => {
  if (!movieData) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{movieData.title}</h1>
      <p>{movieData.overview}</p>
      {/* Render other movie details */}
    </div>
  );
}

export default MovieList;
