import { useContext, useEffect } from "react";
import FavoriteCard from "../FavoriteCard";
import { FavoriteContext } from "../../API/FavoriteContext";
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
import { fetchBeers } from "../../redux/fetchBeersActionCreator";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import "./Favorites.css";

function Favorites(): JSX.Element {
  const { loading, error } = useTypedSelector((state) => state.beers);
  const dispatch = useAppDispatch();

  const [favorite] = useContext(FavoriteContext);

  useEffect(() => {
    dispatch(fetchBeers());
  }, []);

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return <div> {error} </div>;
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
