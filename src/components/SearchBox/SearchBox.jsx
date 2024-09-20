import "./SearchBox.css";

function SearchBox() {
  return (
    <form className="search">
      <input
        className="search__bar"
        id="search"
        type="text"
        placeholder="Enter topic"
      />
      <button className="search__submit">Search</button>
    </form>
  );
}

export default SearchBox;
