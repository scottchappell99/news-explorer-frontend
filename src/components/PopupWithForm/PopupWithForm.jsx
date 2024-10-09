import "./PopupWithForm.css";

function PopupWithForm({
  children,
  title,
  buttonText,
  switchText,
  activePopup,
  closePopup,
  handleOutsideClick,
  handleChangePopup,
  handleSubmit,
  isOpen,
  isValid,
}) {
  return (
    <div
      onClick={handleOutsideClick}
      id={isOpen ? activePopup : undefined}
      className={`modal ${isOpen && "modal_type_opened"}`}
    >
      <div className="modal__content modal__content_type_form">
        <div onClick={closePopup} className="modal__close" />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          <button type="submit" className="modal__submit" disabled={!isValid}>
            {buttonText}
          </button>
          <div className="modal__text-box">
            <p className="modal__text">or</p>
            <p onClick={handleChangePopup} className="modal__link">
              {switchText}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
