import React, { useContext } from "react";
import { Beer } from "../../API/interface";
import { FavoriteContext } from "../../API/FavoriteContext";
import "./Favorites.css";

function Favorites(): JSX.Element {
  const [favorite, addToFavorite, removeFromFavorite, isFav] =
    useContext(FavoriteContext);
  console.log(favorite);

  return (
    <div className="favorites">
      <h1 className="favorites-title">Your Favorite Beers</h1>
      <ul>
        {favorite.map((item: Beer) => {
          <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Favorites;
