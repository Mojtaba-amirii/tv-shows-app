import { Link } from "react-router-dom";

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

export default Show;
