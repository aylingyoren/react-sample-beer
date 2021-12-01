import React, { useState } from "react";
import { Beer } from "../API/interface";

export function useModifyFavorites() {
  const [isFav, setFav] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<Beer[]>([]);
  const addToFavorite = (item: Beer) => {
    setFav(true);
    setFavorite([...favorite, item]);
    localStorage.setItem(`${item.id}`, JSON.stringify(item));
  };

  console.log(favorite);

  // favorite.map((item) =>
  //   localStorage.setItem(`${item.id}`, JSON.stringify(item))
  // );

  const removeFromFavorite = (id: number) => {
    setFav(false);

    setFavorite(favorite.filter((item: Beer) => item.id !== id));
    localStorage.removeItem(`${id}`);
  };

  return {
    isFav,
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
