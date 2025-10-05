import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Show({ showObject }) {
  const { id, image, name } = showObject;

  return (
    <Link to={`/show/${id}`}>
      <div className="Show">
        <img className="Show-image" src={image.medium} alt={name} />
        <h2>{name}</h2>
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
  }).isRequired,
};

export default Show;
