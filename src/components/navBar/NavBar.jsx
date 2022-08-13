import React, { useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerSearch}>
        <BurgerMenu />
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
