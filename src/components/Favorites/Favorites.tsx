import React, { useContext } from "react";
import { useSearchPage } from "../../hooks/useSearchPage";
import { Beer } from "../../API/interface";
import { FavoriteContext } from "../../API/FavoriteContext";
import "./Favorites.css";
import { Link } from "react-router-dom";
import FavoriteCard from "../FavoriteCard";

function Favorites(): JSX.Element {
  const { beerList, loading, error } = useSearchPage(
    "https://api.punkapi.com/v2/beers"
  );
  // "https://api.punkapi.com/v2/beers?page=2&per_page=80"

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
          <FavoriteCard key={item.id}>
            <div className="fav-card">
              <img className="fav-card-img" src={item.image_url} />
              <h2 className="fav-card-name">{item.name}</h2>
              <p className="fav-card-tagline">{item.tagline}</p>
              <p className="fav-card-description">{item.description}</p>
              <Link to={`/beerPage/${item.id}`}>
                <button className="fav-card-btn fav-open">Open</button>
              </Link>
              <button
                onClick={(event: React.MouseEvent<HTMLElement>) =>
                  isFav ? removeFromFavorite(item.id) : addToFavorite(item)
                }
                className="fav-card-btn fav-fav"
              >
                {favorite.includes(item) ? "Remove Favorite" : "Favorite"}
              </button>
            </div>
          </FavoriteCard>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
