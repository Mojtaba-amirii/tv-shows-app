import PropTypes from "prop-types";

function LoadingSpinner({ title = "Loading...", subtitle }) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-2 border-primary/20 rounded-full mx-auto"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
}

LoadingSpinner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default LoadingSpinner;
