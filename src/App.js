import "./styles/App.css";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Upcoming from "./pages/Upcoming";
import NotFound from "./pages/NotFound";
import ShowPage from "./pages/ShowPage";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/show/:showID" element={<ShowPage />} />
          <Route path="/search/:searchText" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
