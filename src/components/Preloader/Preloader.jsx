import "./Preloader.css";

function Preloader({ isLoading }) {
  return (
    <div className={`preloader ${isLoading ? "" : "preloader_type_hidden"}`}>
      <div className="preloader__circle"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
