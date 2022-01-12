import { useSearchPage } from "../../hooks/useSearchPage";
import { Beer } from "../../API/interface";
import BeerCard from "../BeerCard";
import "./BeerList.css";

type BeerListProps = {
  search: string;
};

function BeerList(props: BeerListProps): JSX.Element {
  const { beerList, loading, error } = useSearchPage(
    "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  );

  const { search } = props;

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return <div> Error occured </div>;
  }

  return (
    <div className="beer-list">
      {beerList
        .filter(
          (item) =>
            search === "" ||
            item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item: Beer) => {
          return <BeerCard key={item.id} item={item} />;
        })}
    </div>
  );
}

export default BeerList;
