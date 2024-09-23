import { useContext } from "react";
import { UserContext } from "../../utils/Context/UserContext";

import "./SavedNews.css";

function SavedNews() {
  const userInfo = useContext(UserContext);

  return (
    <section className="saved-news">
      <h2 className="saved-news__title">Saved articles</h2>
      <p className="saved-news__text">
        {userInfo.name}, you have x saved articles
      </p>
      <div className="saved-news__keywords">
        <p className="saved-news__keywords-text">By keywords:</p>
        <p className="saved-news__keywords-keywords">abc, def, and ghi</p>
      </div>
    </section>
  );
}

export default SavedNews;
