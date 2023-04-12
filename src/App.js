import './App.css';

import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Upcoming from './pages/Upcoming'
import NotFound from './pages/NotFound'
import ShowPage from './pages/ShowPage'
import Search from './pages/Search'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/> 
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/upcoming" element={<Upcoming/>}/>
          <Route path="/show/:showID" element={<ShowPage/>} />
          <Route path="/search" element={<Search />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
