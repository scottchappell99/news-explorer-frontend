import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SignUpPopup({
  activePopup,
  closePopup,
  handleOutsideClick,
  handleChangePopup,
  isOpen,
  isPopupLoading,
  handleRegistration,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const reset = () => {
      resetForm({
        email: "",
        password: "",
      });
    };
    handleRegistration(values, reset);
  };
  return (
    <PopupWithForm
      title="Sign up"
      buttonText={`${isPopupLoading ? "Registering..." : "Sign up"}`}
      switchText="Sign in"
      activePopup={activePopup}
      closePopup={closePopup}
      handleOutsideClick={handleOutsideClick}
      handleChangePopup={handleChangePopup}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      isValid={isValid}
    >
      <label htmlFor="email" className={"modal__label"}>
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={values.email || ""}
        className={`modal__input ${
          errors.email === "" ? "" : "modal__input_error"
        }`}
        placeholder="Enter email"
        onChange={handleChange}
        required
      />
      <p className="modal__error">{errors.email}</p>
      <label
        htmlFor="password"
        className={`modal__label ${
          errors.password === "" ? "" : "modal__label_error"
        }`}
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        name="password"
        value={values.password || ""}
        className={`modal__input ${
          errors.password === "" ? "" : "modal__input_error"
        }`}
        onChange={handleChange}
        placeholder="Enter password"
        required
      />
      <p className="modal__error">{errors.password}</p>
      <label
        htmlFor="username"
        className={`modal__label ${
          errors.username === "" ? "" : "modal__label_error"
        }`}
      >
        Username
      </label>
      <input
        id="username"
        type="text"
        name="username"
        value={values.username || ""}
        className={`modal__input ${
          errors.username === "" ? "" : "modal__input_error"
        }`}
        onChange={handleChange}
        placeholder="Enter your username"
        required
      />
      <p className="modal__error">{errors.username}</p>
    </PopupWithForm>
  );
}

export default SignUpPopup;
