import React, { useState } from "react";
import SearchResult from "./SearchResult";
import "./searchbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const SearchBox = () => {
  const [data, setData] = useState("");
  const handleSearch = () => {
    const input = document.querySelector('input[type="text"]');
    setData(input.value);
  };
  return (
    <>
      <div className="search-box">
        <input type="text" placeholder="search..." />
        <button onClick={handleSearch}>
          <icon>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
          </icon>
        </button>
      </div>
      <div>{data === "" ? null : <SearchResult name={data} />}</div>
    </>
  );
};
export default SearchBox;
