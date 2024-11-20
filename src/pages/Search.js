import { searchForShow } from "../helpers/showsHelper";
import ShowList from "../components/ShowList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Search() {
  const params = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const shows = await searchForShow(params.searchText);
        setSearchResults(shows);
      } catch (err) {
        setError("Failed to fetch shows");
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [params.searchText]);

  return (
    <>
      <h1>Search</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading &&
        !error &&
        (searchResults.length > 0 ? (
          <ShowList shows={searchResults} />
        ) : (
          <h2>No Shows found</h2>
        ))}
    </>
  );
}

export default Search;
