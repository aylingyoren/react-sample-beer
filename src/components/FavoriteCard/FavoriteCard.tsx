import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../API/FavoriteContext";
import { Beer } from "../../API/interface";
import "./FavoriteCard.css";

type FavoriteCardProps = {
  item: Beer;
};

function FavoriteCard(props: FavoriteCardProps): JSX.Element {
  const [favorite, addToFavorite, removeFromFavorite, dispatch] =
    useContext(FavoriteContext);

  const { item } = props;

  return (
    <div>
      <div className="fav-card">
        <img className="fav-card-img" src={item.image_url} alt={item.name} />
        <h2 className="fav-card-name">{item.name}</h2>
        <p className="fav-card-tagline">{item.tagline}</p>
        <p className="fav-card-description">{item.description}</p>
        <Link to={`/beerPage/${item.id}`}>
          <button className="fav-card-btn fav-open">Open</button>
        </Link>
        <button
          onClick={() =>
            favorite?.find((el) => el.id === item.id)
              ? removeFromFavorite(item)
              : addToFavorite(item)
          }
          className="fav-card-btn fav-fav"
        >
          {favorite.find((el) => el.id === item.id)
            ? "Remove Favorite"
            : "Favorite"}
        </button>
      </div>
    </div>
  );
}

export default FavoriteCard;
