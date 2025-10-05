import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Upcoming from "./pages/Upcoming.jsx";
import NotFound from "./pages/NotFound.jsx";
import ShowPage from "./pages/ShowPage.jsx";
import Header from "./components/Header.jsx";
import Favorites from "./pages/Favorites.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/show/:showID" element={<ShowPage />} />
            <Route path="/search/:searchText" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
