import React from "react";
import { useSearchBeers } from "../../hooks/useSearchPage";

function BeerList() {
  const { beerList, loading, error } = useSearchBeers(
    "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  );

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    console.log("Error occured fetching data!");
    return <div> Error occured </div>;
  }

  return (
    <div>
      {beerList.map((item) => {
        return (
          <div style={{ margin: "0 15px" }} key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.tagline}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default BeerList;
