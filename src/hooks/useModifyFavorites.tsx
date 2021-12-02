import React, { useState } from "react";
import { Beer } from "../API/interface";

export function useModifyFavorites() {
  const [favorite, setFavorite] = useState<Beer[]>([]);
  const addToFavorite = (item: Beer) => {
    item.isFav = true;
    setFavorite([...favorite, item]);
    localStorage.setItem(`${item.id}`, JSON.stringify(item));
  };

  console.log(favorite);

  // favorite.map((item) =>
  //   localStorage.setItem(`${item.id}`, JSON.stringify(item))
  // );

  const removeFromFavorite = (id: number) => {
    setFavorite(favorite.filter((item: Beer) => item.id !== id));
    localStorage.removeItem(`${id}`);
  };

  return {
    favorite,
    addToFavorite,
    removeFromFavorite,
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
