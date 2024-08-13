import React from "react";

function Search({ updateSearch, search }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={updateSearch}
        value={search}
      />
    </div>
  );
}

export default Search;
