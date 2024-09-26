import { useContext } from "react";

import { AuthContext } from "../../utils/Context/AuthContext";
import { ActivePageContext } from "../../utils/Context/ActivePageContext";

import testImage from "../../assets/images/testimage.png";

import "./NewsCard.css";

function NewsCard() {
  const isLoggedIn = useContext(AuthContext);
  const isActivePageMain = useContext(ActivePageContext);

  return (
    <li className="news-card">
      <div
        className={`news-card__keyword ${
          isActivePageMain ? "news-card__keyword_type_hidden" : ""
        }`}
      >
        Nature
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
        className={`news-card__sign-in ${
          isLoggedIn ? "news-card__sign-in_type_hidden" : ""
        }`}
      >
        Sign in to save articles
      </button>
      <button
        className={`news-card__save ${
          isActivePageMain ? "" : "news-card__save_type_hidden"
        }`}
      />
      <img src={testImage} alt="" className="news-card__image" />
      <p className="news-card__date">August 9th, 2024</p>
      <h3 className="news-card__headline">
        Everyone Needs a Special 'Sit Spot' in Nature
      </h3>
      <p className="news-card__blurb">
        Ever since I read Richard Louv's influential book, "Last Child in the
        Woods," the idea of having a special "sit spot" has stuck with me. This
        advice, which Louv attributes to nature educator Jon Young, is for both
        adults and children to find...
      </p>
      <p className="news-card__publication">TREEHUGGER</p>
    </li>
  );
}

export default NewsCard;
