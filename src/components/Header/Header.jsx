import { Link } from "react-router-dom";
import "./Header.css";

function Header({ Navigation, openPopup }) {
  return (
    <header className="header">
      <Link to="/" className="header__title">
        NewsExplorer
      </Link>
      <Navigation savedNews="" openPopup={openPopup} />
    </header>
  );
}

export default Header;
