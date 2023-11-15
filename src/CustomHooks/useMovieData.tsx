import { useState, useEffect } from "react";
import { MovieData } from "../type";
import {AxiosError } from "axios";
import themoviedb from "../../src/lib/themoviedb/themoviedb.js";

interface DiscoverOptions {
  api_key: string;
}

interface DiscoverResponse {
  results: MovieData[];
}

const useMovieData = (
  options: DiscoverOptions,
  success: (data: MovieData[]) => void,
  error: (error: AxiosError) => void,
  initialData: MovieData[] | null = null
) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await themoviedb.discover.getMovies(options, success, error);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [options.api_key, success, error]);

  return { loading };
};

export default useMovieData;