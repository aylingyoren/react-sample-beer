import React, { useState } from "react";
import { useSearchBeers } from "./useSearchPage";
import { Beer } from "../interface";

export function useMakeFavorite() {
  const { beerList, loading, error } = useSearchBeers(
    "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  );

  const beerId = beerList.map((beer: Beer) => beer.id);

  const [favorite, setFavorite] = useState(false);
  const makeFavorite = () => setFavorite((prevValue) => !prevValue);
  return {
    favorite,
    makeFavorite,
  };
}
