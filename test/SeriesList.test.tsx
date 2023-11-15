import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SeriesList from "../src/Components/SeriesList";

jest.mock("../src/Components/SeriesDetail", () => ({ series, seriesId }) => {
  <div data-testid="mocked-series-detail">
    <p>{series.name}</p>
  </div>;
});

const mockSeriesData = {
  results: [
    {
      id: 94722,
      title: `Tagesschau`,
      poster_path: "/image1.jpg",
    },
    {
      id: 219109,
      title: `Elas por Elas`,
      poster_path: "/image2.jpg",
    },
  ],
};

describe("SeriesList", () => {
  it("renders loading message when series data is not available", () => {
    render(<SeriesList seriesData={null} />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it('renders "No series found." when series data is an empty array', () => {
    render(<SeriesList seriesData={[]} />);
    const noMoviesMessage = screen.getByText(/No movies found./i);
    expect(noMoviesMessage).toBeTruthy();
  });
});
