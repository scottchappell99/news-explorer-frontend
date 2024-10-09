import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__box">
        <ul className="footer__list">
          <div className="footer__small-box">
            <li className="footer__list-item" id="home">
              <Link to="/" className="footer__home">
                Home
              </Link>
            </li>
            <li className="footer__list-item" id="tripleten">
              <a
                href="http://www.tripleten.com"
                className="footer__tripleten"
                target="_blank"
              >
                TripleTen
              </a>
            </li>
          </div>
          <li className="footer__list-item" id="github">
            <a
              href="http://github.com/scottchappell99"
              className="footer__link"
              target="_blank"
            >
              <button className="footer__github" />
            </a>
          </li>
          <li className="footer__list-item" id="facebook">
            <a
              href="http://facebook.com/scott.chappell99"
              className="footer__link"
              target="_blank"
            >
              <button className="footer__facebook" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
