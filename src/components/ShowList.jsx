import PropTypes from "prop-types";
import Show from "./Show.jsx";

function ShowList({ shows = [] }) {
  return (
    <div className="ShowList">
      {shows.map((show) => (
        <Show key={show.id} showObject={show} />
      ))}
    </div>
  );
}

ShowList.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ShowList;
