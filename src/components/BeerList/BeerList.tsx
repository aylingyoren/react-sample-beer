import { useSearchBeers } from "../../hooks/useSearchPage";
import { Beer } from "../../interface";
import BeerCard from "../BeerCard";
import "./BeerList.css";

function BeerList(): JSX.Element {
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
    <div className="beer-list">
      {beerList.map((item: Beer) => {
        return (
          <BeerCard
            className="beer-card"
            style={{ margin: "0 20px" }}
            key={item.id}
          >
            <img className="beer-img" src={item.image_url} />
            <h2>{item.name}</h2>
            <p>{item.tagline}</p>
            <hr />
          </BeerCard>
        );
      })}
    </div>
  );
}

export default BeerList;
