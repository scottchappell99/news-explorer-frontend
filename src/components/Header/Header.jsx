import { useContext } from "react";
import { OnSavedNewsContext } from "../../utils/Context/OnSavedNewsContext";

import "./Header.css";

function Header({ Navigation }) {
  const isOnSavedNews = useContext(OnSavedNewsContext);

  return (
    <header
      className={`header ${isOnSavedNews ? "header_type_saved-news" : ""}`}
    >
      <h1
        className={`header__title ${
          isOnSavedNews ? "header__title_type_saved-news" : ""
        }`}
      >
        NewsExplorer
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;
