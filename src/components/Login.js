import React from "react";
import InfoTooltip from "./InfoTooltip";

function Login({ onClose, infoPopupOpen, onLogin }) {
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });
  }

  return (
    <div className="form__container">
      <h2 className="form__title">Вход</h2>
      <form className="popup__form" onSubmit={handleSubmit}>
        <input
          className="popup__input  popup__input_theme_dark"
          name="name"
          type="email"
          id="name"
          placeholder="Email"
          required
          minLength="2"
          maxLength="50"
          autoComplete="off"
          ref={emailInputRef}
        />
        <span
          id="name-error"
          className="popup__error popup__error_field_name"
        ></span>
        <input
          className="popup__input popup__input_theme_dark"
          name="text"
          type="password"
          id="text"
          placeholder="Пароль"
          required
          minLength="2"
          maxLength="50"
          autoComplete="off"
          ref={passwordInputRef}
        />
        <span
          id="text-error"
          className="popup__error popup__error_field_text"
        ></span>
        <button
          className="popup__submit-button popup__submit-button_theme_dark"
          type="submit"
        >
          Войти
        </button>
      </form>
      <InfoTooltip isOpen={infoPopupOpen} success={false} onClose={onClose} />
    </div>
  );
}

export default Login;
