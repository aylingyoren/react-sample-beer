import { useState, useEffect, useDebugValue } from "react";
import { Beer } from "../API/interface";

export function useSearchPage(url: string) {
  const [beerList, setBeerList] = useState<Beer[]>([]);
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

  useDebugValue(beerList ?? 'loading...');

  return {
    beerList,
    loading,
    error,
  };
}
