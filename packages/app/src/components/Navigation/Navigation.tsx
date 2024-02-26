import { Link } from 'react-router-dom';
import SearchIcon from '../../assets/img/search.svg';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button className="nav__hamburger icon-button" title='Open Menu'>
          <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero" /></svg>
        </button>
        <ul className="nav__links">
          <li>
            <Link to="#">Past Trials</Link>
          </li>
          <li>
            <Link to="#">How It Works</Link>
          </li>
          <li>
            <Link to="#">Login / Sign Up</Link>
          </li>
          <li>
            <form id='search' name='search' onSubmit={e => e.preventDefault()}>
              <input className="nav__search-input" aria-label="search" type="text" />
              <button className="nav__search icon-button" title="Search" type="submit">
                <img src={SearchIcon} alt="search" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
