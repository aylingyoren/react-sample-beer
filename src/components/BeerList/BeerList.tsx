import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSearchPage } from "../../hooks/useSearchPage";
import { Beer } from "../../API/interface";
import { FavoriteContext } from "../../API/FavoriteContext";
import BeerCard from "../BeerCard";
import "./BeerList.css";

type BeerlistProps = {
  search: string;
};

function BeerList(props: BeerlistProps): JSX.Element {
  const { beerList, loading, error } = useSearchPage(
    "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  );

  const { search } = props;

  const [favorite, addToFavorite, removeFromFavorite,] =
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
    <div className="beer-list">
      {beerList
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item: Beer) => {
          return (
            <BeerCard key={item.id}>
              <img className="beer-img" src={item.image_url} />
              <div className="beer-plate">
                <h2 className="beer-name">{item.name}</h2>
                <p className="beer-tagline">{item.tagline}</p>
                <Link to={`/beerPage/${item.id}`}>
                  <button className="beer-btn beer-open">Open</button>
                </Link>
                <button
                  onClick={(event: React.MouseEvent<HTMLElement>) =>
                    item.isFav ? removeFromFavorite(item, item.id) : addToFavorite(item)
                  }
                  className="beer-btn beer-fav"
                >
                  {favorite.find(el => el.id === item.id) ? "Remove Favorite" : "Favorite"}
                </button>
              </div>
            </BeerCard>
          );
        })}
    </div>
  );
}

export default BeerList;
