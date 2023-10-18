import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieData } from '../type';

const useMovieData = (apiUrl: string, initialData: MovieData | null = null) => {
  const apiKey = process.env.REACT_APP_API_KEY || '0ed9e5583ee0385087dff929f46a1b21';

  const [movie, setMovie] = useState<MovieData | null>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}?api_key=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [apiKey, apiUrl]);

  return { movie, loading, error };
};

export default useMovieData;