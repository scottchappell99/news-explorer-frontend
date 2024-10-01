import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ userSavedNews, handleSaveClick }) {
  const userInfo = useContext(UserContext);

  return (
    <ul className="saved__news">
      {userSavedNews.map((item) => {
        return (
          <NewsCard
            key={item._id}
            item={item}
            handleSaveClick={handleSaveClick}
          />
        );
      })}
    </ul>
  );
}

export default SavedNews;
