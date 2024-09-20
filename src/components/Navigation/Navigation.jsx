import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../utils/Context/AuthContext";
import { UserContext } from "../../utils/Context/UserContext";

import "./Navigation.css";

function Navigation() {
  const isLoggedIn = useContext(AuthContext);
  const userInfo = useContext(UserContext);

  const homeClassName = ({ isActive }) => {
    return `navigation__bar ${isActive ? "navigation__bar_type_active" : ""}`;
  };

  const articleClassName = ({ isActive }) => {
    return `navigation__bar ${isActive ? "navigation__bar_type_active" : ""} ${
      isLoggedIn ? "" : "navigation__bar_type_hidden"
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
      <button className="navigation__sign-out">{userInfo.name}</button>
    </div>
  );
}

export default Navigation;
