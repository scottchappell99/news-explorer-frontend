import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignInPopup({
  activePopup,
  closePopup,
  handleOutsideClick,
  handleChangePopup,
  isOpen,
}) {
  return (
    <PopupWithForm
      title="Sign in"
      buttonText="Sign in"
      switchText="Sign up"
      activePopup={activePopup}
      closePopup={closePopup}
      handleOutsideClick={handleOutsideClick}
      handleChangePopup={handleChangePopup}
      isOpen={isOpen}
    >
      <label htmlFor="email" className="modal__label">
        Email
      </label>
      <input
        id="email"
        type="text"
        className="modal__input"
        placeholder="Enter email"
      />
      <label htmlFor="password" className="modal__label">
        Password
      </label>
      <input
        id="password"
        type="password"
        className="modal__input"
        placeholder="Enter password"
      />
    </PopupWithForm>
  );
}

export default SignInPopup;
