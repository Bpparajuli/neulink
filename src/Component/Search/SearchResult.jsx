import React from "react";
const SearchResult = (props) => {
  return (
    <>
      <div>
        <h1>
          Medicine detail or patient detail searched for {props.name} are below:{" "}
        </h1>
      </div>
    </>
  );
};

export default SearchResult;
