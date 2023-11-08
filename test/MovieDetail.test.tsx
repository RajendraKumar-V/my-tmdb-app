import React, { SetStateAction } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MovieDetail from "../src/Components/MovieDetail";
import { MovieData } from "../src/type";
import { BrowserRouter } from "react-router-dom";

describe("MovieDetail", () => {
  const mockMovie = {
    results: [
      {
        id: 1,
        title: "Five Nights at Freddy's",
        poster_path: "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg", // Fix the typo in the image path
      },
      {
        id: 2,
        title: "Muzzle",
        poster_path: "/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
      },
    ],
  } as MovieData;


  it('MovieDetail renders correctly', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({
        title: 'Muzzle',
      }),
      ok: true,
    });
  
    render(
        <BrowserRouter>
          <MovieDetail
            movie={mockMovie}
            movieId={mockMovie}
            setSelectedMovie={setSelectedMovie}
          />
        </BrowserRouter>
      );
  
    await waitFor(() => {
      expect(screen.getByText("Muzzle")).toBeTruthy();
    });
  });

  
});

function setSelectedMovie(_value: SetStateAction<MovieData | null>): void {
    throw new Error("Function not implemented.");
}

