import "./Header.css";

function Header({ Navigation }) {
  return (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation savedNews="" />
    </header>
  );
}

export default Header;
