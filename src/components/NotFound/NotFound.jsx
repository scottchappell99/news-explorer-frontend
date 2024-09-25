import notFoundImage from "../../assets/images/not-found.svg";
import "./NotFound.css";

function NotFound({ isEmptySearch }) {
  return (
    <section
      className={`not-found ${isEmptySearch ? "" : "not-found_type_hidden"}`}
    >
      <img
        src={notFoundImage}
        alt="A sad magnifying glass"
        className="not-found__image"
      />
      <h2 className="not-found__title">Nothing found</h2>
      <p className="not-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NotFound;
