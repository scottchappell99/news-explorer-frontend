import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./SearchBox.css";

function SearchBox({ handleSearchKeywords }) {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const reset = () => {
      resetForm({
        search: "",
      });
    };
    handleSearchKeywords(values, reset);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__bar"
        type="text"
        name="search"
        value={values.search || ""}
        id="search"
        placeholder={`${
          values.search === "" ? "Please enter a keyword" : "Enter topic"
        }`}
        onChange={handleChange}
        required
      />
      <button type="submit" className="search__submit">
        Search
      </button>
    </form>
  );
}

export default SearchBox;
