import React, { Dispatch } from "react";
import styles from "./SearchBox.module.css";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { AiOutlineClose } from "react-icons/ai";

type SearchBoxProps = {
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
};

function SearchBox(props: SearchBoxProps): JSX.Element {
  const clearInput = () => {
    props.setSearch("");
  };

  return (
    <div className={styles.searchbox}>
      <input
        className={styles.searchinput}
        placeholder="Search Beers"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <div className={styles.searchicon}>
        {props.search.length === 0 ? (
          <Search className={styles.search} />
        ) : (
          <AiOutlineClose
            role="button"
            tabIndex={0}
            size="24px"
            className={styles.closeIcon}
            onClick={clearInput}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBox;
