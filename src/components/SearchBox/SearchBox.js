import React from "react";
import styles from "./SearchBox.module.css";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

function SearchBox() {
  return (
    <div className={styles.searchbox}>
      <input placeholder="Search Beers" />
      <Search />
    </div>
  );
}

export default SearchBox;
