import "./SuccessPopup.css";

function SuccessPopup({
  activePopup,
  closePopup,
  handleOutsideClick,
  handleChangePopup,
  isOpen,
}) {
  return (
    <div
      onClick={handleOutsideClick}
      id={isOpen ? activePopup : undefined}
      className={`modal ${isOpen && "modal_type_opened"}`}
    >
      <div className="modal__content success-modal__content">
        <div onClick={closePopup} className="modal__close" />
        <h2 className="success-modal__title">
          Registration successfully completed!
        </h2>
        <p onClick={handleChangePopup} className="success-modal__link">
          Sign in
        </p>
      </div>
    </div>
  );
}

export default SuccessPopup;
