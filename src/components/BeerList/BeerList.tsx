import { useState } from "react";
import { useSearchBeers } from "../../hooks/useSearchPage";
import { useMakeFavorite } from "../../hooks/useMakeFavorite";
import { Beer } from "../../interface";
import BeerCard from "../BeerCard";
import "./BeerList.css";

function BeerList(): JSX.Element {
  const { beerList, loading, error } = useSearchBeers(
    "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  );

  const { favorite, makeFavorite } = useMakeFavorite();

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    console.log("Error occured fetching data!");
    return <div> Error occured </div>;
  }

  return (
    <div className="beer-list">
      {beerList.map((item: Beer) => {
        return (
          <BeerCard key={item.id}>
            <img className="beer-img" src={item.image_url} />
            <div className="beer-plate">
              <h2 className="beer-name">{item.name}</h2>
              <p className="beer-tagline">{item.tagline}</p>
              <button className="beer-btn beer-open">Open</button>
              <button onClick={makeFavorite} className="beer-btn beer-fav">
                {favorite ? "Remove Favorite" : "Favorite"}
              </button>
            </div>
          </BeerCard>
        );
      })}
    </div>
  );
}

export default BeerList;
