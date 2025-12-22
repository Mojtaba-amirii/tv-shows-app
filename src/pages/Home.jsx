import { useLoaderData } from "react-router-dom";
import ShowList from "../components/ShowList.jsx";
import Hero from "../components/Hero.jsx";

function Home() {
  const shows = useLoaderData();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Hero />
      <div className="max-w-7xl mx-auto">
        <div className="py-8">
          <div className="flex items-center justify-between mb-6 px-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Today&apos;s Schedule
              </h2>
              <p className="text-gray-600 mt-1">Fresh episodes airing today</p>
            </div>
            <div className="hidden sm:flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Updated live
            </div>
          </div>

          <ShowList shows={shows} />
        </div>
      </div>
    </div>
  );
}

export default Home;
