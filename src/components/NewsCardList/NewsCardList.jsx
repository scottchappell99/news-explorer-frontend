import NewsCard from "../NewsCard/NewsCard";

import "./NewsCardList.css";

function NewsCardList() {
  return (
    <section className="news-cards">
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
