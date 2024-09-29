import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SignInPopup({
  activePopup,
  closePopup,
  handleOutsideClick,
  handleChangePopup,
  isOpen,
  isPopupLoading,
  handleLogIn,
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
    handleLogIn(values, reset);
  };

  return (
    <PopupWithForm
      title="Sign in"
      buttonText={`${isPopupLoading ? "Signing in..." : "Sign in"}`}
      switchText="Sign up"
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
        placeholder="Enter password"
        onChange={handleChange}
        required
      />
      <p className="modal__error">{errors.password}</p>
    </PopupWithForm>
  );
}

export default SignInPopup;
