import React, { Dispatch, useState } from "react";
import styles from "./SearchBox.module.css";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

type SearchBoxProps = {
  setSearch: Dispatch<React.SetStateAction<string>>
}

function SearchBox(props: SearchBoxProps): JSX.Element {
  return (
    <div className={styles.searchbox}>
      <input className={styles.searchinput} placeholder="Search Beers" onChange={e => props.setSearch(e.target.value)} />
      <Search className={styles.search} />
    </div>
  );
}

export default SearchBox;
