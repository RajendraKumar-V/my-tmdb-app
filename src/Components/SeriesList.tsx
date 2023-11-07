import React, { FC, useState } from "react";
import { SeriesData } from "../type";
import SeriesDetail from "./SeriesDetail";

interface SeriesListProps {
  seriesData: SeriesData[] | undefined;
}

const SeriesList: FC<SeriesListProps> = ({ seriesData }) => {
  const [selectedSeries, setSelectedSeries] = useState<SeriesData | null>(null);

  const handleSeriesSelect = (seriesData: SeriesData) => {
    if (selectedSeries !== null) {
      setSelectedSeries(seriesData);
    }
  };

  return (
    <>
      <div className="movie-list-maindiv">
        {seriesData?seriesData.map((series: SeriesData) => (
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
        )) : <p>No data available</p>}
      </div>
      {selectedSeries && (
        <div className="series-details-overlay">
          <SeriesDetail series={selectedSeries} seriesId={selectedSeries.id} />
        </div>
      )}
    </>
  );
};

export default SeriesList;
