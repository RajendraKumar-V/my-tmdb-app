import React, { FC, useState, useEffect } from "react";
import { SeriesData, SeriesDataResponse } from "../type";
import SeriesDetail from "./SeriesDetail";

interface SeriesListProps {
  seriesData: SeriesData[] | undefined;
}

const itemsPerPage = 20;

const SeriesList: FC<SeriesListProps> = ({ seriesData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSeriesId, setSelectedSeriesId] = useState<number | null>(null);

  const handleSeriesSelect = (seriesId: number) => {
    setSelectedSeriesId(seriesId);
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
      <div className="series-list-maindiv">
        {seriesList.map((series: SeriesData) => (
          <div key={series.id}>
            <div
              className="series-list-imagediv"
              onClick={() => handleSeriesSelect(series.id)} // Pass the series ID
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.name}
                className="series-list-image"
              />
            </div>
          </div>
        ))}
      </div>
      {selectedSeriesId !== null && (
        <div className="series-details-overlay">
          <SeriesDetail seriesId={selectedSeriesId} />
        </div>
      )}
      <div className="flex items-center justify-center">
        {renderPaginationButtons()}
      </div>
    </>
  );
};

export default SeriesList;
