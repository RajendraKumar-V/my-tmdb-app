import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MovieList from "../src/Components/MovieList";


jest.mock("../src/Components/MovieDetail", () => ({ movie, movieId }) => {
  <div data-testid="mocked-movie-detail">
    <p>{movie.title}</p>
    <p>Movie ID: {movieId}</p>
  </div>;
});

const mockMovieData = {
  results: [
    {
      id: 1,
      title: "Five Nights at Freddy's",
      poster_path: "/image1.jpg",
    },
    {
      id: 2,
      title: "Muzzle",
      poster_path: "/image2.jpg",
    },
  ],
};

describe("MovieList", () => {
  it("renders loading message when movie data is not available", () => {
    render(<MovieList movieData={null} />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("renders movie list when movie data is available", async () => {
    render(<MovieList movieData={mockMovieData} />);
    await waitFor(() => {
      expect(screen.queryByText("Five Nights at Freddy's")).toBeTruthy();
      expect(screen.queryByText("Muzzle")).toBeTruthy();
    });
  });

  it("displays MovieDetail when a movie is clicked", async () => {
    render(<MovieList movieData={mockMovieData} />);
    await waitFor(() => {
      fireEvent.click(screen.getByText("Five Nights at Freddy's"));
      expect(screen.getByTestId("mock-movie-detail")).toBeTruthy();
    });
  });
});
