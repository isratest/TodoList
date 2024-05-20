import React from "react";
import "./styles/Search.css";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className="find-container">
      <input
        className="find"
        type="text"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        placeholder="Find Todo"
      />
    </div>
  );
}

export { Search };
