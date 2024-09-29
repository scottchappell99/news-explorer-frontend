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
      <Link to="/" className="header__title">
        NewsExplorer
      </Link>
      <Navigation
        savedNews=""
        openPopup={openPopup}
        handleHamburgerMenuClick={handleHamburgerMenuClick}
        isHamburgerMenuActive={isHamburgerMenuActive}
        handleLogOutClick={handleLogOutClick}
      />
    </header>
  );
}

export default Header;
