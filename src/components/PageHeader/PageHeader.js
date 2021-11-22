import React from "react";
import styles from "./PageHeader.module.css";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

function PageHeader() {
  return (
    <div className={styles.header}>
      <Menu className={styles.menu} />
      <h3 className={styles.header__title}>Beer Header</h3>
      <p className={styles.header__settings}>Settings</p>
    </div>
  );
}

export default PageHeader;
