import React from "react";
import { Outlet } from "react-router-dom";
import BeerList from "../BeerList";
import SearchBox from "../SearchBox";

function SearchPage(): JSX.Element {
  return (
    <>
      <SearchBox />
      <BeerList />
      
      <Outlet />
    </>
  );
}
export default SearchPage;
