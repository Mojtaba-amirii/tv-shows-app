import { useParams } from "react-router-dom"
import { getShowByID } from "../helpers/showsHelper"
import NotFound from "./NotFound"

function ShowPage() {
  const params = useParams()
  const show = getShowByID(params.showID)


  return (
    <>
      { 
        !!show ?  
        <div className="ShowPage">
          <h1>{show.name}</h1>
          <img src={show.image.medium} />
          <h2>Language: {show.language}</h2>
          <h3>Rating: {show.rating.average}</h3>
          <h3>Genres: {show.genres.join(', ')}</h3>
        </div>
        :
        <NotFound />
      }
    </>
  )
}
export default ShowPage


