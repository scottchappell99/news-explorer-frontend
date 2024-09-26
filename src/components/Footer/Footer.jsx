import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <div className="footer__box">
        <Link to="/" className="footer__home">
          Home
        </Link>
        <a href="http://www.tripleten.com" className="footer__tripleten">
          TripleTen
        </a>
        <a href="http://github.com/scottchappell99" className="footer__link">
          <button className="footer__github"></button>
        </a>
        <a href="http://facebook.com/scott.chappell99" className="footer__link">
          <button className="footer__facebook"></button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
