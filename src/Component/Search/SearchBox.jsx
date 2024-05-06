import React, { useState } from "react";
import SearchResult from "./SearchResult";
import "./searchbox.css";
const SearchBar = () => {
  const [data, setData] = useState("");
  const handleSearch = () => {
    const input = document.querySelector('input[type="text"]');
    setData(input.value);
  };
  return (
    <>
      <input type="text" placeholder="search anything" />
      <button onClick={handleSearch} className="btn btn-outline-primary">
        Search
      </button>
      <div>{data === "" ? null : <SearchResult name={data} />}</div>
    </>
  );
};
export default SearchBar;
