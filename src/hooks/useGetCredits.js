import { useState, useEffect } from "react";
// API
import API from "../API/API";

const intialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useGetCredits = () => {
  const [credits, setCredits] = useState(intialState);
  const [loadingCredits, setLoadingCredits] = useState(false);
  const [error, setEror] = useState(false);

  // Initial
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setEror(false);
        setLoadingCredits(true);
        const { results } = await API.fetchCredits();
        setCredits(results);
      } catch (error) {
        setEror(true);
      }
      setLoadingCredits(false);
    };
    fetchCredits();
  }, []);

  return { credits, loadingCredits, error };
};
