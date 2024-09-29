import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews() {
  const userInfo = useContext(UserContext);

  return (
    <ul className="saved__news">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ul>
  );
}

export default SavedNews;
