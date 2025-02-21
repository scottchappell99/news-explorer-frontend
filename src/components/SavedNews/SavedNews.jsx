import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ userSavedNews, handleSaveClick, handleDeleteClick }) {
  return (
    <ul className="saved__news">
      {userSavedNews.map((item) => {
        return (
          <NewsCard
            key={item._id}
            item={item}
            handleSaveClick={handleSaveClick}
            handleDeleteClick={handleDeleteClick}
          />
        );
      })}
    </ul>
  );
}

export default SavedNews;
