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
      title: `Five Nights at Freddy's`,
      poster_path: "/image1.jpg",
    },
    {
      id: 2,
      title: `Muzzle`,
      poster_path: "/image2.jpg",
    },
  ],
};

describe("MovieList", () => {
  it("renders loading message when movie data is not available", () => {
    render(<MovieList movieData={null} />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it('renders "No movies found." when movie data is an empty array', () => {
    render(<MovieList movieData={[]} />);
    const noMoviesMessage = screen.getByText(/No movies found./i);
    expect(noMoviesMessage).toBeTruthy();
  });
});
