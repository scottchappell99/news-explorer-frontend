import { Link } from "react-router-dom";
import "./Header.css";

function Header({
  Navigation,
  openPopup,
  handleHamburgerMenuClick,
  isHamburgerMenuActive,
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
      />
    </header>
  );
}

export default Header;
