import { Beer } from "../../API/interface";
import { addFavorite, removeFavorite } from "../FavoritesSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useTypedSelector } from "./useTypedSelector";

export function useModifyFavorites() {
  const dispatch = useAppDispatch();
  const favorite = useTypedSelector((state) => state.favorites.favorites);

  const addToFavorite = (fav: Beer) => {
    localStorage.setItem("favorites", JSON.stringify([...favorite, fav]));
    dispatch({ type: addFavorite, payload: fav });
  };

  const removeFromFavorite = (fav: Beer) => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorite.filter((f) => f.id !== fav.id))
    );
    dispatch({
      type: removeFavorite,
      payload: fav.id,
    });
  };

  return {
    favorite,
    addToFavorite,
    removeFromFavorite,
    dispatch,
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
