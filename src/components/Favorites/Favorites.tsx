import React from "react";
import { useModifyFavorites } from "../../hooks/useModifyFavorites";
import { Beer } from "../../interface";
import "./Favorites.css";


function Favorites(): JSX.Element {
  // const { favorite, addToFavorite, removeFromFavorite } = useModifyFavorites();
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
