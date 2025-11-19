import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NotFound from "./NotFound.jsx";
import { getShowByID } from "../helpers/showsHelper";

function ShowPage() {
  const { showID } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  const existingFavorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const [isFavorited, setIsFavorited] = useState(
    existingFavorites.includes(showID)
  );

  useEffect(() => {
    const fetchShow = async () => {
      setLoading(true);
      const showData = await getShowByID(showID);
      setShow(showData);
      setLoading(false);
    };
    fetchShow();
  }, [showID]);

  const toggleFavorite = () => {
    const existingFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    let newFavorites = [];

    if (existingFavorites.includes(showID)) {
      newFavorites = existingFavorites.filter((id) => id !== showID);
      setIsFavorited(false);
    } else {
      newFavorites = [showID, ...existingFavorites];
      setIsFavorited(true);
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

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
              Loading show details...
            </h2>
            <p className="text-gray-500">Getting all the information ready</p>
          </div>
        </div>
      </div>
    );
  }

  if (!show) return <NotFound />;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Show Header */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-96 w-full object-cover md:w-80"
                src={show.image?.medium || show.image?.original}
                alt={show.name}
              />
            </div>
            <div className="p-8 flex-1">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {show.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    {show.rating?.average && (
                      <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                        <svg
                          className="w-5 h-5 text-yellow-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-medium text-yellow-800">
                          {show.rating.average}/10
                        </span>
                      </div>
                    )}

                    {show.language && (
                      <div className="bg-blue-50 px-3 py-1 rounded-full">
                        <span className="text-blue-800 font-medium">
                          {show.language}
                        </span>
                      </div>
                    )}

                    {show.status && (
                      <div
                        className={`px-3 py-1 rounded-full ${
                          show.status === "Running"
                            ? "bg-green-50 text-green-800"
                            : show.status === "Ended"
                            ? "bg-red-50 text-red-800"
                            : "bg-gray-50 text-gray-800"
                        }`}
                      >
                        <span className="font-medium">{show.status}</span>
                      </div>
                    )}
                  </div>

                  {show.genres && show.genres.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">
                        Genres
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {show.genres.map((genre) => (
                          <span
                            key={genre}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {show.summary && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">
                        Summary
                      </h3>
                      <div
                        className="text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: show.summary }}
                      />
                    </div>
                  )}
                </div>

                <button
                  onClick={toggleFavorite}
                  className={`ml-4 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isFavorited
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-primary hover:bg-primary/90 text-white"
                  }`}
                >
                  {isFavorited ? (
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Remove from Favorites
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
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
                      Add to Favorites
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        {show._embedded?.cast && show._embedded.cast.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cast</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {show._embedded.cast.slice(0, 12).map((member, index) => (
                <div
                  key={`${member.person.id}-${member.character?.id || index}`}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  {member.person.image?.medium && (
                    <img
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      src={member.person.image.medium}
                      alt={member.person.name}
                    />
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {member.person.name}
                    </div>
                    {member.character?.name && (
                      <div className="text-sm text-gray-600">
                        as {member.character.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {show._embedded.cast.length > 12 && (
              <p className="text-center text-gray-500 mt-4">
                And {show._embedded.cast.length - 12} more cast members...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowPage;
