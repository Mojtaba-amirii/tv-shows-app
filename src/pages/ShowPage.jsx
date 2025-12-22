import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";

function ShowPage() {
  const { showID } = useParams();
  const show = useLoaderData();
  const navigate = useNavigate();

  const existingFavorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const [isFavorited, setIsFavorited] = useState(
    existingFavorites.includes(showID)
  );

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

  const heroImage = show.image?.original || show.image?.medium;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section with Backdrop */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-4 md:left-8 z-20 flex items-center px-4 py-2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md border border-white/10 transition-all duration-200 group cursor-pointer"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
        {heroImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 scale-110"
              style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-gray-50 via-gray-900/60 to-gray-900/30"></div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-64 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Poster Image */}
          <div className="w-full md:w-80 shrink-0 rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <img
              className="w-full h-auto object-cover aspect-2/3"
              src={show.image?.medium || show.image?.original}
              alt={show.name}
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-white pt-4 md:pt-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-sm">
              {show.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm md:text-base font-medium">
              {show.rating?.average && (
                <div className="flex items-center bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 px-3 py-1 rounded-full text-yellow-300">
                  <svg
                    className="w-4 h-4 mr-1 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {show.rating.average}
                </div>
              )}

              {show.premiered && (
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {new Date(show.premiered).getFullYear()}
                </span>
              )}

              {show.runtime && (
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {show.runtime} min
                </span>
              )}

              {show.status && (
                <span
                  className={`px-3 py-1 rounded-full border backdrop-blur-md ${
                    show.status === "Running"
                      ? "bg-green-500/20 border-green-500/30 text-green-300"
                      : "bg-red-500/20 border-red-500/30 text-red-300"
                  }`}
                >
                  {show.status}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={toggleFavorite}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 ${
                  isFavorited
                    ? "bg-red-500 hover:bg-red-600 text-white ring-2 ring-red-300/50"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                {isFavorited ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-2 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Favorited
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </button>

              {show.officialSite && (
                <a
                  href={show.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-200"
                >
                  Visit Website
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>

            {/* Genres */}
            {show.genres && show.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {show.genres.map((genre) => (
                  <span
                    key={genre}
                    className="text-sm font-medium text-gray-300"
                  >
                    {genre}
                    <span className="mx-2 text-gray-600">•</span>
                  </span>
                ))}
              </div>
            )}

            {/* Summary */}
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </div>
          </div>
        </div>

        {/* Cast Section */}
        {show._embedded?.cast && show._embedded.cast.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-1 h-8 bg-primary rounded-full mr-3"></span>
              Top Cast
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {show._embedded.cast.slice(0, 12).map((member, index) => (
                <div
                  key={`${member.person.id}-${member.character?.id || index}`}
                  className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
                    {member.person.image?.medium ? (
                      <img
                        className="w-full h-full object-cover"
                        src={member.person.image.medium}
                        alt={member.person.name}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div
                    className="font-semibold text-gray-900 text-sm truncate"
                    title={member.person.name}
                  >
                    {member.person.name}
                  </div>
                  {member.character?.name && (
                    <div
                      className="text-xs text-gray-500 truncate"
                      title={member.character.name}
                    >
                      {member.character.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowPage;
