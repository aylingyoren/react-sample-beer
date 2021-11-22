import React from "react";
import BeerList from "../BeerList";
import PageHeader from "../PageHeader";
import SearchBox from "../SearchBox";

function SearchPage(): JSX.Element {
  return (
    <>
      <PageHeader />
      <SearchBox />
      <BeerList />
    </>
  );
}
export default SearchPage;
