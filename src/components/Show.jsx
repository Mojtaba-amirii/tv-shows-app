import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Show({ showObject }) {
  const { id, image, name, rating } = showObject;

  return (
    <Link to={`/show/${id}`} className="group block h-full">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 h-full flex flex-col relative">
        <div className="relative overflow-hidden aspect-2/3">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={image.medium}
            alt={name}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Rating Badge */}
          {rating?.average && (
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md flex items-center shadow-sm border border-white/10">
              <svg
                className="w-3 h-3 text-yellow-400 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {rating.average}
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-tight mb-2">
              {name}
            </h2>
          </div>

          <div className="mt-3 flex items-center text-sm font-medium text-primary/80 group-hover:text-primary transition-colors duration-200">
            <span>View Details</span>
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

Show.propTypes = {
  showObject: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      average: PropTypes.number,
    }),
  }).isRequired,
};

export default Show;
