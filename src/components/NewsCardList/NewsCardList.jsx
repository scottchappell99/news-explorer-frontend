import NewsCard from "../NewsCard/NewsCard";

import "./NewsCardList.css";

function NewsCardList({
  isCardsRendered,
  newsData,
  cardsShown,
  handleShowMoreClick,
  handleSaveClick,
}) {
  const newsCardLength = newsData.length - 1;

  return (
    <section
      className={`news-cards ${
        isCardsRendered ? "" : "news-cards_type_hidden"
      }`}
    >
      <h2 className="news-cards__title">Search results</h2>
      <ul className="news-cards__list">
        {newsData.slice(0, cardsShown).map((item, index) => {
          return (
            <NewsCard
              key={index}
              item={item}
              handleSaveClick={handleSaveClick}
            />
          );
        })}
      </ul>
      <button
        type="button"
        onClick={handleShowMoreClick}
        className={`news-cards__show-more ${
          newsCardLength > cardsShown ? "" : "news-cards__show-more_type_hidden"
        }`}
      >
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
