import { useEffect } from "react";
import { Beer } from "../../API/interface";
import BeerCard from "../BeerCard";
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
import { fetchBeers } from "../../redux/fetchBeersActionCreator";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import "./BeerList.css";

type BeerListProps = {
  search: string;
};

function BeerList(props: BeerListProps): JSX.Element {
  const { beers, loading, error } = useTypedSelector((state) => state.beers);
  const dispatch = useAppDispatch();

  const { search } = props;

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
    <div className="beer-list">
      {beers
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
