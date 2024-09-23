import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../utils/Context/AuthContext";
import { UserContext } from "../../utils/Context/UserContext";
import { OnSavedNewsContext } from "../../utils/Context/OnSavedNewsContext";

import "./Navigation.css";

function Navigation() {
  const isLoggedIn = useContext(AuthContext);
  const userInfo = useContext(UserContext);
  const isOnSavedNews = useContext(OnSavedNewsContext);

  const homeClassName = ({ isActive }) => {
    return `navigation__bar ${isActive ? "navigation__bar_type_active" : ""} ${
      isOnSavedNews ? "navigation__bar_type_saved-news" : ""
    } ${
      isOnSavedNews && isActive ? "navigation__bar_type_saved-news-active" : ""
    }`;
  };

  const articleClassName = ({ isActive }) => {
    return `navigation__bar ${isActive ? "navigation__bar_type_active" : ""} ${
      isLoggedIn ? "" : "navigation__bar_type_hidden"
    } ${isOnSavedNews ? "navigation__bar_type_saved-news" : ""} ${
      isOnSavedNews && isActive ? "navigation__bar_type_saved-news-active" : ""
    }`;
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
        className={`navigation__sign-in ${
          isLoggedIn ? "navigation__sign-in_type_hidden" : ""
        }`}
      >
        Sign in
      </button>
      <button
        className={`navigation__sign-out ${
          !isLoggedIn ? "navigation__sign-out_type_hidden" : ""
        } ${isOnSavedNews ? "navigation__sign-out_type_saved-news" : ""}`}
      >
        {userInfo.name}
      </button>
    </div>
  );
}

export default Navigation;
