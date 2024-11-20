import ShowList from "../components/ShowList";
import { getHomeShows } from "../helpers/showsHelper";
import { useEffect, useState } from "react";

function Home() {
  const [shows, setShows] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const showsData = await getHomeShows();
        setShows(showsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchShows();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Couldn't load shows: {error}</h1>;
  }

  return (
    <div className="HomePage">
      <h1>The Best TV Shows App</h1>
      <ShowList shows={shows} />
    </div>
  );
}

export default Home;
