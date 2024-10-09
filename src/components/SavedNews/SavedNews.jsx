import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ userSavedNews, handleSaveClick }) {
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
