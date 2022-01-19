import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Beer } from "../../API/interface";
import { FavoriteActionTypes } from "../../redux/favoriteTypes";
import { useTypedSelector } from "../../redux/useTypedSelector";
import "./BeerCard.css";

type BeerCardProps = {
  item: Beer;
};

function BeerCard(props: BeerCardProps): JSX.Element {
  const dispatch = useDispatch();
  const favorite = useTypedSelector((state) => state.favorites);

  const addToFavorite = (fav: Beer) => {
    dispatch({ type: FavoriteActionTypes.ADD_TO_FAVORITES, payload: fav });
    console.log(fav);
  };

  const removeFromFavorite = (fav: Beer) => {
    dispatch({
      type: FavoriteActionTypes.REMOVE_FROM_FAVORITES,
      payload: fav.id,
    });
    console.log(fav);
  };

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
            favorite?.find((el) => el.id === item.id)
              ? removeFromFavorite(item)
              : addToFavorite(item)
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
