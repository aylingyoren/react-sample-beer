import React, { useContext } from "react";
import { useSearchPage } from "../../hooks/useSearchPage";
import { Beer } from "../../API/interface";
import { FavoriteContext } from "../../API/FavoriteContext";
import "./Favorites.css";
import BeerCard from "../BeerCard";
import { Link } from "react-router-dom";

function Favorites(): JSX.Element {
  const { beerList, loading, error } = useSearchPage(
    "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  );
  const [favorite, addToFavorite, removeFromFavorite, isFav] =
    useContext(FavoriteContext);
  console.log(favorite);

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    console.log("Error occured fetching data!");
    return <div> Error occured </div>;
  }

  return (
    <div className="favorites">
      <h1 className="favorites-title">Your Favorite Beers</h1>
      <ul>
        {favorite.map((item) => (
          <li style={{ padding: "10px", fontSize: "24px" }} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
