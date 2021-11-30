import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BeerList from "../BeerList";
import SearchBox from "../SearchBox";

function SearchPage(): JSX.Element {
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <SearchBox setSearch={setSearch} search={search} />
      <BeerList search={search} />
      
      <Outlet />
    </>
  );
}
export default SearchPage;
