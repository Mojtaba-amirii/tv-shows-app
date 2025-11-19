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
        const showsData = await Promise.all(promises);
        // Filter out null values in case some shows couldn't be fetched
        setShows(showsData.filter((show) => show !== null));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (favorites.length > 0) {
      fetchShows();
    } else {
      setLoading(false);
    }
  }, [favorites.length, favorites]);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <div className="absolute inset-0 w-16 h-16 border-2 border-primary/20 rounded-full mx-auto"></div>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Loading your favorites...
            </h2>
            <p className="text-gray-500">Getting your saved shows ready</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Failed to load favorites
            </h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3">
            <div className="shrink-0">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
              <p className="text-gray-600 mt-1">
                {shows.length > 0
                  ? `${shows.length} show${
                      shows.length === 1 ? "" : "s"
                    } in your collection`
                  : "No favorite shows yet"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto">
        {shows.length > 0 ? (
          <ShowList shows={shows} />
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              No favorites yet
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Start exploring shows and add them to your favorites by clicking
              the heart icon on any show.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              Explore Shows
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
