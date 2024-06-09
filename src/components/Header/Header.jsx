import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import "./Header.scss";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="primary-nav">
        <Link to="/">
          <img className="primary-nav__logo" src={logo} alt="Brainflix Logo" />
        </Link>
        <div className="primary-nav__container">
          <div className="primary-nav__search">
            <img
              className="primary-nav__search-icon"
              src={searchIcon}
              alt="Search Icon"
            />
            <input
              className="primary-nav__search-input"
              type="text"
              placeholder="Search"
              name="search"
            />
          </div>
          <Link className="button--link" to="/upload">
          <Button className="button--upload button--tablet" text="Upload"/>
          </Link>
          <div className="primary-nav__avatar"></div>
          <Link className="button--link" to="/upload">
          <Button className="button--upload" text="Upload"/>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
