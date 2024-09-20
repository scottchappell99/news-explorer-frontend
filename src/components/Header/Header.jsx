import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__user-box">
        <p className="header__home">Home</p>
        <button className="header__sign-in">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
