import NewsCard from "../NewsCard/NewsCard";

import "./NewsCardList.css";

function NewsCardList({ isRendered }) {
  return (
    <section
      className={`news-cards ${isRendered ? "" : "news-cards_type_hidden"}`}
    >
      <h2 className="news-cards__title">Search results</h2>
      <ul className="news-cards__list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
      <button className="news-cards__show-more">Show more</button>
    </section>
  );
}

export default NewsCardList;
