import React from "react";
import styles from "./PageHeader.module.css";
import SideMenu from "../SideMenu";

function PageHeader(): JSX.Element {
  return (
    <div className={styles.header}>
      <SideMenu />
      <h3 className={styles.header__title}>Beer Header</h3>
      <p className={styles.header__settings}>Settings</p>
    </div>
  );
}

export default PageHeader;
