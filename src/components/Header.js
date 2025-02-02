import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue.trim() === "") {
      navigate("/");
    } else {
      navigate("/search/" + searchValue.trim());
    }
  }, [searchValue, navigate]);

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="Header">
      <div className="Logo" aria-label="Logo"></div>

      <ul className="Navigation" id="Menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link>
        </li>
      </ul>

      <div className="Search">
        <input
          className="input"
          type="text"
          value={searchValue}
          onChange={handleSearch}
          aria-label="Search"
        />
      </div>
    </div>
  );
}

export default Header;
