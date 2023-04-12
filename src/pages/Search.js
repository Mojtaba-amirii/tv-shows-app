import { searchForShow } from "../helpers/showsHelper";
import ShowList from "../components/ShowList";
import { useState } from "react";

function Search() {
  const allShows = searchForShow("");
  const [searchResults, setSearchResults] = useState(allShows);

  return (
    <>
      <h1>Search</h1>
      <input type="text" onChange={searchShows} />
      {searchResults.length > 0 ? (
        <ShowList shows={searchResults} />
      ) : (
        <h2>No Shows found</h2>
      )}
    </>
  );

  function searchShows(event) {
    const searchText = event.target.value;
    setSearchResults(searchForShow(searchText));
  }
}

export default Search;
