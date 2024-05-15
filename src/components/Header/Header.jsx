import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import "./Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <nav className="primary-nav">
        <a className="primary-nav__logo-link" href="#">
          <img className="primary-nav__logo" src={logo} alt="Brainflix Logo" />
        </a>
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
          <Button className="button--upload button--tablet" text="Upload"/>
          <div className="primary-nav__avatar"></div>
          <Button className="button--upload" text="Upload"/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
