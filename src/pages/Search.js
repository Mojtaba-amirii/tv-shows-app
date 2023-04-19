import { searchForShow } from "../helpers/showsHelper";
import ShowList from "../components/ShowList";
import { useParams } from "react-router-dom";

function Search() {
  const params = useParams();

  const searchResults = searchForShow(params.searchText);

  return (
    <>
      <h1>Search</h1>

      {searchResults.length > 0 ? (
        <ShowList shows={searchResults} />
      ) : (
        <h2>No Shows found</h2>
      )}
    </>
  );
}

export default Search;
