import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import ShowList from "../components/ShowList.jsx";

function Search() {
  const { searchText } = useParams();
  const searchResults = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3">
            <div className="shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Search Results
              </h1>
              <p className="text-gray-600 mt-1">
                {searchResults.length > 0
                  ? `Found ${searchResults.length} shows for "${searchText}"`
                  : `No results found for "${searchText}"`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto">
        {searchResults.length > 0 ? (
          <ShowList shows={searchResults} />
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              No shows found
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              We couldn&apos;t find any shows matching &ldquo;
              {searchText}&rdquo;. Try searching for something else or check the
              spelling.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">
                Search suggestions:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Breaking Bad",
                  "Friends",
                  "Game of Thrones",
                  "The Office",
                  "Stranger Things",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => navigate(`/search/${suggestion}`)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
