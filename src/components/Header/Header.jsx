import { Link } from "react-router-dom";
import "./Header.css";

function Header({ Navigation }) {
  return (
    <header className="header">
      <Link to="/" className="header__title">
        NewsExplorer
      </Link>
      <Navigation savedNews="" />
    </header>
  );
}

export default Header;
