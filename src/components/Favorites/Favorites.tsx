import React, { useContext } from "react";
import { useModifyFavorites } from "../../hooks/useModifyFavorites";
import { Beer } from "../../API/interface";
import "./Favorites.css";


function Favorites(): JSX.Element {
  const { 
    isFav,
    favorite, 
    addToFavorite, 
    removeFromFavorite,
    // FavoriteContext 
  } = useModifyFavorites();

  // const favoriteContext = useContext(FavoriteContext);
  
  return (
    <div className="favorites">
      <h1 className="favorites-title">Your Favorite Beers</h1>
      {/* <ul>{favorite.map((item: Beer) => {
        <li key={item.id}>{item}</li>
      })}</ul> */}
    </div>
  );
}

export default Favorites;
