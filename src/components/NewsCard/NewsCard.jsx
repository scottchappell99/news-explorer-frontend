import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { ActivePageContext } from "../../context/ActivePageContext";

import testImage from "../../assets/images/testimage.png";

import "./NewsCard.css";

function NewsCard({ item }) {
  const isLoggedIn = useContext(AuthContext);
  const isActivePageMain = useContext(ActivePageContext);

  const publishedDate = new Date(item.publishedAt);
  const publishedMonthWord = publishedDate.toLocaleString("default", {
    month: "long",
  });
  const publishedDay = publishedDate.getDate();
  const publishedYear = publishedDate.getFullYear();

  return (
    <li className="news-card">
      <div
        className={`news-card__keyword ${
          isActivePageMain ? "news-card__keyword_type_hidden" : ""
        }`}
      >
        {/* {keyword} */}
      </div>
      <button
        className={`news-card__delete ${
          isActivePageMain ? "news-card__delete_type_hidden" : ""
        }`}
      />
      <div
        className={`news-card__delete-text ${
          isActivePageMain ? "news-card__delete-text_type_hidden" : ""
        }`}
      >
        Remove from saved
      </div>
      <button
        className={`news-card__save ${
          isActivePageMain ? "" : "news-card__save_type_hidden"
        }`}
      />
      <button
        className={`news-card__sign-in ${
          isLoggedIn ? "news-card__sign-in_type_hidden" : ""
        }`}
      >
        Sign in to save articles
      </button>
      <img
        src={item.urlToImage}
        alt={item.description}
        className="news-card__image"
      />
      <p className="news-card__date">{`${publishedMonthWord} ${publishedDay}, ${publishedYear}`}</p>
      <h3 className="news-card__headline">{item.title}</h3>
      <p className="news-card__blurb">{item.content}</p>
      <p className="news-card__publication">{item.source.name}</p>
    </li>
  );
}

export default NewsCard;
