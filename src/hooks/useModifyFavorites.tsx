import React, { useState } from "react";
import { Beer } from "../interface";

export function useModifyFavorites() {
  const [favorite, setFavorite] = useState<Beer[]>([]);
  const addToFavorite = (item: Beer) => {
    setFavorite([...favorite, item]);
  };

  console.log(favorite);

  // const removeFromFavorite = (item: Beer, id: number) => {
  //   favorite.find((item, id, arr) => arr.splice(id, 1));
  // };

  return {
    favorite,
    addToFavorite,
    // removeFromFavorite
  }
}