import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MovieList from "../src/Components/MovieList";
import { MovieData } from "../src/type";

jest.mock("../src/Components/MovieDetail", () => ({ movie, movieId }) => {
  <div data-testid="mocked-movie-detail">
    <p>{movie.title}</p>
    <p>Movie ID: {movieId}</p>
  </div>;
});

const mockMovieData: Partial<MovieData> = {
  adult: false,
  backdrop_path: "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
  title: `Five Nights at Freddy's`,
};

describe("MovieList", () => {

  it("renders loading message when movie data is not available", () => {
    render(<MovieList movieData={null} />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

});
