import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../../redux/slices/data";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  let [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (name) => {
    dispatch(searchPoke(name));
  };

  return (
    <div className={styles.containerSearchBar}>
      <div className={styles.containerForm}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(name);
          }}
        >
          <input
            placeholder="Search pokemon..."
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className={styles.submit}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
