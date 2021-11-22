import React from "react";
import styles from "./SearchBox.module.css";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

function SearchBox(): JSX.Element {
  return (
    <div className={styles.searchbox}>
      <input className={styles.searchinput} placeholder="Search Beers" />
      <Search className={styles.search} />
    </div>
  );
}

export default SearchBox;
