import React, { useState, useEffect } from "react";

export function useSearchBeers(url: string) {
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
    } catch (err) {
      setLoading(false);
      setError(`${err}`);
      throw new Error(`${err}`);
    }
  }

  useEffect(() => {
    getBeers();
  }, []);

  return {
    beerList,
    loading,
    error,
  };
}
