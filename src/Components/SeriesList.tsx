import React, { FC, useState, useEffect } from "react";
import { SeriesData, SeriesDataResponse } from "../type";
import SeriesDetail from "./SeriesDetail";

interface SeriesListProps {
  seriesData: SeriesData[] | undefined;
}

const itemsPerPage = 20;

const SeriesList: FC<SeriesListProps> = ({ seriesData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSeries, setSelectedSeries] = useState<SeriesData | null>(null);

  const handleSeriesSelect = (seriesData: SeriesData) => {
    if (selectedSeries !== null) {
      setSelectedSeries(seriesData);
    }
  };

  let totalPages = 0;
  let seriesList: SeriesData[] = [];
  if (Array.isArray(seriesData)) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    seriesList = seriesData.slice(startIndex, endIndex);
    totalPages = Math.ceil(seriesData.length / itemsPerPage);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const paginationButtons = [];

    for (let index = 1; index <= totalPages; index++) {
      paginationButtons.push(
        <button
          key={index}
          onClick={() => handlePageChange(index)}
          className={`my-custom-button ${
            index === currentPage ? "active" : "inactive"
          }`}
        >
          {index}
        </button>
      );
    }

    return paginationButtons;
  };

  return (
    <>
      <div className="movie-list-maindiv">
        {seriesList.map((series: SeriesData) => (
          <div key={series.id}>
            <div
              className="group movie-list-imagediv relative"
              onClick={() => seriesData && handleSeriesSelect(seriesData[0])}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.name}
                className="movie-list-image"
              />
              <p className="movie-list-title">{series.name}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedSeries && (
        <div className="series-details-overlay">
          <SeriesDetail series={selectedSeries} seriesId={selectedSeries.id} />
        </div>
      )}
      <div className="flex items-center justify-center">
        {renderPaginationButtons()}
      </div>
    </>
  );
};

export default SeriesList;
