import PropTypes from "prop-types";

function ErrorMessage({
  title = "Oops! Something went wrong",
  message,
  onRetry,
}) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center p-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        {message && <p className="text-gray-600 mb-4">{message}</p>}
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onRetry: PropTypes.func,
};

export default ErrorMessage;
