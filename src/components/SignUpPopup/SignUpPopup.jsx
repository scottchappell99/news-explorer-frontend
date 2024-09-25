import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignUpPopup({
  activePopup,
  closePopup,
  handleOutsideClick,
  handleChangePopup,
  isOpen,
}) {
  return (
    <PopupWithForm
      title="Sign up"
      buttonText="Sign up"
      switchText="Sign in"
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
      <label htmlFor="username" className="modal__label">
        Username
      </label>
      <input
        id="username"
        type="text"
        className="modal__input"
        placeholder="Enter your username"
      />
    </PopupWithForm>
  );
}

export default SignUpPopup;
