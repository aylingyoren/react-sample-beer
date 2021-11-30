import React, { createContext, useState } from "react";
import { Beer } from "../API/interface";

export function useModifyFavorites() {
  const [isFav, setFav] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<Beer[]>([]);
  const addToFavorite = (item: Beer) => {
    setFav(true);
    setFavorite([...favorite, item]);
    localStorage.setItem('favorite', JSON.stringify(item));
  };

  console.log(favorite);

  const removeFromFavorite = (id: number) => {
    setFav(false);

    setFavorite(favorite.filter((item: Beer) => item.id !== id));
    localStorage.removeItem('favorite');
  };

  const FavoriteContext = createContext<Beer[]>(favorite);

  return {
    isFav,
    favorite,
    addToFavorite,
    removeFromFavorite,
    FavoriteContext
  }
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