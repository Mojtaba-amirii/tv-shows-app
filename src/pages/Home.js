import ShowList from "../components/ShowList";
import { getHomeShows } from "../helpers/showsHelper";
import { useEffect, useState } from "react";

function Home() {
  const [shows, setShows] = useState(undefined);

  useEffect(() => {
    const fetchShows = async () => {
      const showsData = await getHomeShows();
      setShows(showsData);
    };
    fetchShows();
  }, []);

  return (
    <>
      {!!shows ? (
        <div className="HomePage">
          <h1>The Best TV Shows App</h1>
          <ShowList shows={shows} />
        </div>
      ) : (
        <h1>Couldn't load shows</h1>
      )}
    </>
  );
}
export default Home;
