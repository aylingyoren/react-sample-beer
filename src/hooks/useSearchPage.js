import React, { useState, useEffect } from "react";

  export function useSearchPage(url) {

    const [beerList, setBeerList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  async function getBeers() {
    setLoading(true);
    try {
      const request = await fetch(url);
      const beers = await request.json();
        setBeerList(beers);
        setLoading(false);
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw new Error(error.message)
    }
  }

  useEffect(() => {
    getBeers();
  }, []);

  return {
    beerList,
    loading,
    error,
  }
}

