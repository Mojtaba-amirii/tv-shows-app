import { useState, useEffect } from "react";

import ShowList from "../components/ShowList.jsx";
import { searchForShow } from "../helpers/showsHelper";

function Upcoming() {
  const [upcomingShows, setUpcomingShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingShows = async () => {
      try {
        // Since we don't have a direct upcoming endpoint, let's fetch some popular ongoing series
        const popularShows = [
          "The Bear",
          "House of the Dragon",
          "Wednesday",
          "Stranger Things",
          "The Last of Us",
        ];
        const showPromises = popularShows.map((show) => searchForShow(show));
        const results = await Promise.all(showPromises);

        // Flatten the results and take the first show from each search
        const shows = results
          .filter((result) => result && result.length > 0)
          .map((result) => result[0])
          .filter((show) => show !== null);

        setUpcomingShows(shows);
      } catch (err) {
        setError(err.message || "Failed to fetch upcoming shows");
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingShows();
  }, []);

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
              Finding upcoming shows...
            </h2>
            <p className="text-gray-500">Discovering what&apos;s coming next</p>
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
              Failed to load upcoming shows
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
      <div className="bg-linear-to-r from-purple-600 via-purple-700 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Upcoming Shows
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Stay ahead of the curve with the most anticipated series and
              episodes coming soon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
                <div className="bg-white/10 rounded-md px-6 py-3">
                  <div className="flex items-center text-white/80">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">Popular Series</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
                <div className="bg-white/10 rounded-md px-6 py-3">
                  <div className="flex items-center text-white/80">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">Fresh Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shows Section */}
      <div className="max-w-7xl mx-auto">
        <div className="py-8">
          <div className="flex items-center justify-between mb-6 px-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Trending & Upcoming
              </h2>
              <p className="text-gray-600 mt-1">
                Popular shows you shouldn&apos;t miss
              </p>
            </div>
            <div className="hidden sm:flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              Curated selection
            </div>
          </div>

          <ShowList shows={upcomingShows} />

          {upcomingShows.length === 0 && !loading && !error && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No upcoming shows found
              </h3>
              <p className="text-gray-500">
                Check back later for the latest updates on upcoming episodes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
