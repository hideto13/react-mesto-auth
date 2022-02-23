import React from "react";

function PopupWithForm({
  title,
  name,
  buttonTitle,
  isOpen,
  onClose,
  children,
  onSubmit
}) {
  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className={`popup__title popup__title_popup_${name}`}>{title}</h2>
        <form className="popup__form" name={`${name}-form`} onSubmit={onSubmit}>
          {children}
          <button className="popup__submit-button" type="submit">
            {buttonTitle}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
