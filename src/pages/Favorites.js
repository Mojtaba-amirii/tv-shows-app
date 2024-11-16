import { useEffect, useState } from "react";
import { getShowByID } from "../helpers/showsHelper";
import ShowList from "../components/ShowList";

function Favorites() {
  const [shows, setShows] = useState([]);
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  useEffect(() => {
    const fetchShows = async () => {
      const promises = favorites.map((favorite) => getShowByID(favorite));
      const shows = await Promise.all(promises);
      setShows(shows);
    };
    fetchShows();
  }, [favorites]);

  return (
    <div>
      <h2>This is the Favorites page</h2>
      <ShowList shows={shows} />
    </div>
  );
}

export default Favorites;
