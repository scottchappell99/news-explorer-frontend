import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";

import "./Navigation.css";

function Navigation({
  savedNews,
  openPopup,
  handleHamburgerMenuClick,
  isHamburgerMenuActive,
  handleLogOutClick,
}) {
  const isLoggedIn = useContext(AuthContext);
  const userInfo = useContext(UserContext);

  const homeClassName = ({ isActive }) => {
    return `${savedNews}navigation__bar ${
      isActive ? `${savedNews}navigation__bar_type_active` : ""
    }`;
  };

  const articleClassName = ({ isActive }) => {
    return `${savedNews}navigation__bar ${
      isActive ? `${savedNews}navigation__bar_type_active` : ""
    } ${isLoggedIn ? "" : "navigation__bar_type_hidden"}`;
  };

  return (
    <nav className="navigation">
      <button
        className={`${savedNews}navigation__hamburger-menu-button`}
        onClick={handleHamburgerMenuClick}
      />
      <NavLink to="/" className={homeClassName}>
        Home
      </NavLink>
      <NavLink to="/saved-news" className={articleClassName}>
        Saved articles
      </NavLink>
      <button
        onClick={openPopup}
        className={`navigation__sign-in ${
          isLoggedIn ? "navigation__sign-in_type_hidden" : ""
        }`}
      >
        Sign in
      </button>
      <button
        onClick={handleLogOutClick}
        className={`${savedNews}navigation__sign-out ${
          !isLoggedIn ? `${savedNews}navigation__sign-out_type_hidden` : ""
        }`}
      >
        {userInfo.name}
      </button>
      <div
        className={`navigation__hamburger-menu ${
          isHamburgerMenuActive ? "" : "navigation__hamburger-menu_type_hidden"
        }`}
      >
        <div className="hamburger-menu__bar">
          <div className="hamburger-menu__content">
            <NavLink to="/" className="hamburger-menu__title">
              NewsExplorer
            </NavLink>
            <button
              className="hamburger-menu__close"
              onClick={handleHamburgerMenuClick}
            />
          </div>
        </div>
        <NavLink to="/" className="hamburger-menu__home">
          Home
        </NavLink>
        <NavLink
          to="/saved-news"
          className={`${savedNews}hamburger-menu__saved-news ${
            isLoggedIn ? "" : "hamburger-menu__saved-news_type_hidden"
          }`}
        >
          Saved Articles
        </NavLink>
        <button
          onClick={openPopup}
          className={`hamburger-menu__sign-in ${
            isLoggedIn ? "hamburger-menu__sign-in_type_hidden" : ""
          }`}
        >
          Sign in
        </button>
        <button
          onClick={handleLogOutClick}
          className={`hamburger-menu__sign-out ${
            !isLoggedIn ? "hamburger-menu__sign-out_type_hidden" : ""
          }`}
        >
          {userInfo.name}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
