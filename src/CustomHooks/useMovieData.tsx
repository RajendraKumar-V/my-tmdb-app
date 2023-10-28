import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { MovieData } from "../type";

const useMovieData = (apiUrl: string, initialData: MovieData | null = null) => {
  const apiKey = process.env.REACT_APP_API_KEY || '0ed9e5583ee0385087dff929f46a1b21';

  const [mediaData, setMediaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMediaData(response.data);
        setLoading(false);
      } catch (error) {
        //setError(error.toString());
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { mediaData, loading};
};

export default useMovieData;