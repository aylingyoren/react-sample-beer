import React, { useState } from "react";
import { Beer } from "../API/interface";

export function useModifyFavorites() {
  const [favorite, setFavorite] = useState<Beer[]>([]);
  const addToFavorite = (item: Beer) => {
    setFavorite([...favorite, item]);
  };

  // console.log(favorite);

  // const removeFromFavorite = (item: Beer, id: number) => {
  //   favorite.find((item, id, arr) => arr.splice(id, 1));
  // };

  return {
    favorite,
    addToFavorite,
    // removeFromFavorite
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