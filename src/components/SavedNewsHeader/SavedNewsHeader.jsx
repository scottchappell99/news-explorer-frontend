import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

import "./SavedNewsHeader.css";

function SavedNewsHeader({
  Navigation,
  openPopup,
  handleHamburgerMenuClick,
  isHamburgerMenuActive,
  handleLogOutClick,
  savedKeywords,
  userSavedNews,
}) {
  const userInfo = useContext(UserContext);

  return (
    <header className="saved-news-header">
      <div className="saved-news-header__bar">
        <div className="saved-news-header__content">
          <Link to="/" className="saved-news-header__title-link">
            <h1 className="saved-news-header__title">NewsExplorer</h1>
          </Link>
          <Navigation
            savedNews="saved-news-"
            openPopup={openPopup}
            handleHamburgerMenuClick={handleHamburgerMenuClick}
            isHamburgerMenuActive={isHamburgerMenuActive}
            handleLogOutClick={handleLogOutClick}
          />
        </div>
      </div>
      <div className="saved-news-header__intro">
        <h2 className="saved-news-header__saved-articles">Saved articles</h2>
        <div className="saved-news-header__text-box">
          <p className="saved-news-header__text">
            {`${userInfo.name}, you have ${userSavedNews.length} saved article${
              userSavedNews[1] ? "s" : ""
            }`}
          </p>
        </div>
        <div className="saved-news-header__keywords">
          <p className="saved-news-header__keywords-text">{`By keyword${
            savedKeywords[1] ? "s" : ""
          }:`}</p>
          <p className="saved-news-header__keywords-keywords">
            {`${savedKeywords[0]}${
              savedKeywords[1] ? `, ${savedKeywords[1]} ` : ""
            }${savedKeywords[2] ? `, and ${savedKeywords[3]}` : ""}`}
          </p>
        </div>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
