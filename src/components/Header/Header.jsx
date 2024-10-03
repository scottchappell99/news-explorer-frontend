import { Link } from "react-router-dom";
import "./Header.css";

function Header({
  Navigation,
  openPopup,
  handleHamburgerMenuClick,
  isHamburgerMenuActive,
  handleLogOutClick,
}) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__title-link">
          <h1 className="header__title">NewsExplorer</h1>
        </Link>
        <Navigation
          savedNews=""
          openPopup={openPopup}
          handleHamburgerMenuClick={handleHamburgerMenuClick}
          isHamburgerMenuActive={isHamburgerMenuActive}
          handleLogOutClick={handleLogOutClick}
        />
      </div>
    </header>
  );
}

export default Header;
