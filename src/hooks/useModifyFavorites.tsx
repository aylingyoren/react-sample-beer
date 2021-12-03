import React, { useState } from "react";
import { Beer } from "../API/interface";

export function useModifyFavorites() {
  const [favorite, setFavorite] = useState<Beer[]>([]);
  const addToFavorite = (item: Beer) => {
    item.isFav = true;
    const newFavs = [...favorite, item];
    setFavorite(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  // console.log(favorite);

  const removeFromFavorite = (item: Beer, id: number) => {
    item.isFav = false;
    const newFavs = favorite.filter((item: Beer) => item.id !== id);
    setFavorite(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  return {
    favorite,
    addToFavorite,
    removeFromFavorite,
    setFavorite
  };
}

// API => Component(fetchBeerList{
//   data
//   list = data.map(({id, name})=> new Beer({id, name}))
//   list = new ListBeer(data) as [{id, name}: Beer]
// })

// interface BeerI {
//   id: string;
//   name:string;
// }

// class Beer1 {
//   constructor(obj: BeerI){
//     id: string;
//     name:string;
//   }
// }
