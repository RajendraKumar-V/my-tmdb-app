import { useState, useEffect } from "react";
import axios from "axios";
import { MovieData } from "../type";

const useMovieData = (apiUrl: string, initialData: MovieData | null = null) => {
  const [mediaData, setMediaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMediaData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { mediaData, loading };
};

export default useMovieData;
