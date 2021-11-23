import React from "react";
import BeerList from "../BeerList";
import SearchBox from "../SearchBox";

function SearchPage(): JSX.Element {
  return (
    <>
      <SearchBox />
      <BeerList />
    </>
  );
}
export default SearchPage;
