import React, { FC, useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../../../store/Context";
const Header = () => {
  const [value, setValue] = useContext(TodoContext);
  const [search, setSearch] = useState("");
  return (
    <>
      <nav>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            search && setValue(search);
          }}
        >
          <input
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
