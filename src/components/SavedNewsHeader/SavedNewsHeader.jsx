import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../utils/Context/UserContext";

import "./SavedNewsHeader.css";

function SavedNewsHeader({
  Navigation,
  openPopup,
  handleHamburgerMenuClick,
  isHamburgerMenuActive,
}) {
  const userInfo = useContext(UserContext);

  return (
    <header className="saved-news-header">
      <div className="saved-news-header__bar">
        <Link to="/" className="saved-news-header__title">
          NewsExplorer
        </Link>
        <Navigation
          savedNews="saved-news-"
          openPopup={openPopup}
          handleHamburgerMenuClick={handleHamburgerMenuClick}
          isHamburgerMenuActive={isHamburgerMenuActive}
        />
      </div>
      <div className="saved-news-header__intro">
        <h2 className="saved-news-header__saved-articles">Saved articles</h2>
        <p className="saved-news-header__text">
          {userInfo.name}, you have x saved articles
        </p>
        <div className="saved-news-header__keywords">
          <p className="saved-news-header__keywords-text">By keywords:</p>
          <p className="saved-news-header__keywords-keywords">
            abc, def, and ghi
          </p>
        </div>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
