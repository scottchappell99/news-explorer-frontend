import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../utils/Context/AuthContext";
import { UserContext } from "../../utils/Context/UserContext";

import "./Navigation.css";

function Navigation({ savedNews, openPopup }) {
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
    <div className="navigation">
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
        className={`${savedNews}navigation__sign-out ${
          !isLoggedIn ? `${savedNews}navigation__sign-out_type_hidden` : ""
        }`}
      >
        {userInfo.name}
      </button>
    </div>
  );
}

export default Navigation;
