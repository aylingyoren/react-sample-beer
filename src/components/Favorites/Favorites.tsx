import { useContext } from "react";
import { useSearchPage } from "../../hooks/useSearchPage";
import FavoriteCard from "../FavoriteCard";
import { FavoriteContext } from "../../API/FavoriteContext";
import "./Favorites.css";

function Favorites(): JSX.Element {
  const { loading, error } = useSearchPage("https://api.punkapi.com/v2/beers");

  const [favorite] = useContext(FavoriteContext);

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return <div> Error occured </div>;
  }

  return (
    <div className="favorites">
      <h1 className="favorites-title">Your Favorite Beers</h1>
      <ul>
        {favorite.map((item) => (
          <FavoriteCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
