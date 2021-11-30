import React from "react";
import SideMenu from "../SideMenu";
import styles from "./PageHeader.module.css";


function PageHeader(): JSX.Element {
  return (
    <div className={styles.header}>
      <SideMenu />
      <h3 className={styles.header__title}>Beer Catalog</h3>
    </div>
  );
}

export default PageHeader;
