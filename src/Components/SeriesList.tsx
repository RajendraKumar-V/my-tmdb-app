import React, { FC, useState } from "react";
import { SeriesData } from "../type";
import SeriesDetail from "./SeriesDetail";

interface SeriesListProps {
  seriesData?: SeriesData[] | null;
}

const SeriesList: FC<SeriesListProps> = ({ seriesData }) => {
  const [selectedSeries, setSelectedSeries] = useState<SeriesData | null>(null);

  const handleSeriesSelect = (selectedSeries: SeriesData) => {
    setSelectedSeries(selectedSeries);
  };

  if (seriesData  === null) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(seriesData ) || seriesData.length === 0) {
    return <p>No movies found.</p>;
  }


  return (
    <>
      <div className="movie-list-maindiv" data-testid="mocked-series-detail">
        {seriesData && seriesData.length ? (
          seriesData.map((series: SeriesData) => (
            <div key={series.id}>
              <div
                className="group movie-list-imagediv relative"
                onClick={() => handleSeriesSelect(series)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.name}
                  className="movie-list-image"
                />
                <p className="movie-list-title">{series.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      {selectedSeries && (
        <div data-testid="mock-movie-detail" className="movie-details-overlay">
          <SeriesDetail
            series={selectedSeries}
            seriesId={selectedSeries.id}
            setSelectedSeries={setSelectedSeries}
          />
        </div>
      )}
    </>
  );
};

export default SeriesList;