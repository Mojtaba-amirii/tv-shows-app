import { useEffect, useState } from "react";
import { getShowByID } from "../helpers/showsHelper";
import ShowList from "../components/ShowList.jsx";

function Favorites() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const promises = favorites.map((favorite) => getShowByID(favorite));
        const shows = await Promise.all(promises);
        setShows(shows);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchShows();
  }, [favorites]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>This is the Favorites page</h2>
      <ShowList shows={shows} />
    </div>
  );
}

export default Favorites;
