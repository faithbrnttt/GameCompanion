import { useState } from 'react';
import NewsResults from './components/newsResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from './components/Nav';
import RawgResults from './components/rawgResults';
import TwitchResults from './components/twitchResults';

function App() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
    setQuery('');
    setMenuOpen(false); // Close nav after search
  };


  return (
    <div className="container">
      <div className="nav-container-container">
        <div className="nav-container">
          <div className="title-align">
            <h2>Game Companion</h2>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div className={`nav-content ${menuOpen ? 'open' : ''}`}>
            <Nav closeMenu={() => setMenuOpen(false)} />

            <form onSubmit={handleSearch} className="search-wrapper">
              <input
                className="search"
                type="text"
                placeholder="Search game..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="search-btn" type="submit" aria-label="Search">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>



          </div>
        </div>
      </div>

      <NewsResults query={searchTerm} />
      <section id="ratings" className="spacer"></section>
      <RawgResults query={searchTerm} />
      <section id="twitch" className="spacer"></section>
      <TwitchResults query={searchTerm} />
    </div>
  );
}

export default App;
