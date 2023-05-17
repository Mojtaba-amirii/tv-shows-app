import { useParams } from "react-router-dom";
import { getShowByID } from "../helpers/showsHelper";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import showsData from "../shows-data";

function ShowPage() {
  const { showID } = useParams();
  const [show, setShow] = useState(undefined);

  useEffect(() => {
    const fetchShow = async () => {
      const showData = await getShowByID(showID);
      setShow(showData);
    };
    fetchShow();
  }, [showID]);

  if (!show) return <NotFound />;

  return (
    <>
      {!!show ? (
        <div className="ShowPage">
          <h1>{show.name}</h1>
          <img src={show.image.medium} />
          <h2>Language: {show.language}</h2>
          <h3>Rating: {show.rating.average}</h3>
          <h3>Genres: {show.genres.join(", ")}</h3>
          {!!show._embedded.cast &&
            show._embedded.cast.map((member) => (
              <div>{member.person.name + " as " + member.character.name}</div>
            ))}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
export default ShowPage;
