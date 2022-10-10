import { useState, useEffect } from "react";
// API
import API from "../../../API/API";

const intialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useGetTrending = () => {
  const [trendings, setTrendings] = useState(intialState);
  const [loadingTrendings, setLoadingTrendings] = useState(false);
  const [error, setEror] = useState(false);

  // Initial
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setEror(false);
        setLoadingTrendings(true);
        const { results } = await API.fetchTrending();
        setTrendings(results);
      } catch (error) {
        setEror(true);
      }
      setLoadingTrendings(false);
    };
    fetchTrending();
  }, []);

  return { trendings, loadingTrendings, error };
};
