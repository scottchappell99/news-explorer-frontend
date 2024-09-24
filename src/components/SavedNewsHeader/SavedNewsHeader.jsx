import "./SavedNewsHeader.css";

function SavedNewsHeader({ Navigation }) {
  return (
    <header className="saved-news-header">
      <h1 className="saved-news-header__title">NewsExplorer</h1>
      <Navigation savedNews="saved-news-" />
    </header>
  );
}

export default SavedNewsHeader;
