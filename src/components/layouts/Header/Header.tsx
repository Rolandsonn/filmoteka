import React, { FC, useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../../../store/Context";
import styles from "./Header.module.css";
const Header = () => {
  const [value, setValue] = useContext(TodoContext);
  const [search, setSearch] = useState("");
  return (
    <>
      <nav className={styles.menu}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            search && setValue(search);
          }}
        >
          <input
            className={styles.input}
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </nav>
    </>
  );
};

export default Header;
