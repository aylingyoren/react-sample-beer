import { useDispatch } from "react-redux";
import { Beer } from "../../API/interface";
import { FavoriteActionTypes } from "../favoriteTypes";
import { useTypedSelector } from "../useTypedSelector";

export function useModifyFavorites() {
  const dispatch = useDispatch();
  const favorite = useTypedSelector((state) => state.favorites);

  const addToFavorite = (fav: Beer) => {
    localStorage.setItem("favorites", JSON.stringify([...favorite, fav]));
    dispatch({ type: FavoriteActionTypes.ADD_TO_FAVORITES, payload: fav });
    console.log(fav);
  };

  const removeFromFavorite = (fav: Beer) => {
    console.log(fav);
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorite.filter((f) => f.id !== fav.id))
    );
    dispatch({
      type: FavoriteActionTypes.REMOVE_FROM_FAVORITES,
      payload: fav.id,
    });
  };

  console.log(favorite);

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
