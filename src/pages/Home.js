import ShowList from '../components/ShowList';
import { getHomeShows } from '../helpers/showsHelper';

const showsData = getHomeShows()

function Home() {
    return (
      <>
        {
          !!showsData ?
          <div className="HomePage">
              <h1>The Best TV Shows App</h1>
              <ShowList shows={showsData} />
          </div>
          :
          <h1>Couldn't load shows</h1>

        }
      </>
    )
}
export default Home