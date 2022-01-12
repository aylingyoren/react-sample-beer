import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../API/FavoriteContext";
import { Beer } from "../../API/interface";
import "./BeerCard.css";

type BeerCardProps = {
  key: number;
  item: Beer;
};

function BeerCard(props: BeerCardProps): JSX.Element {
  const [favorite, addToFavorite, removeFromFavorite] =
    useContext(FavoriteContext);

  const { item } = props;

  return (
    <div className="beer-card">
      <img className="beer-img" src={item.image_url} alt={item.name} />
      <div className="beer-plate">
        <h2 className="beer-name">{item.name}</h2>
        <p className="beer-tagline">{item.tagline}</p>
        <Link to={`/beerPage/${item.id}`}>
          <button className="beer-btn beer-open">Open</button>
        </Link>
        <button
          onClick={() =>
            item.isFav ? removeFromFavorite(item, item.id) : addToFavorite(item)
          }
          className="beer-btn beer-fav"
        >
          {favorite.find((el) => el.id === item.id)
            ? "Remove Favorite"
            : "Favorite"}
        </button>
      </div>
    </div>
  );
}

export default BeerCard;
