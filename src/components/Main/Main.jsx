import "./Main.css";

function Main({ SearchBox, handleSearchKeywords }) {
  return (
    <main className="main">
      <h2 className="main__title">What&apos;s going on in the world?</h2>
      <p className="main__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchBox handleSearchKeywords={handleSearchKeywords} />
    </main>
  );
}

export default Main;
