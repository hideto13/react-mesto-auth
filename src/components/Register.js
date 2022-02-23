import React from "react";
import { Link } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import { register } from "../utils/authApi";

function Register({ onClose, infoPopupOpen, handleInfoPopup }) {
  const [success, setSuccess] = React.useState(false);
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    register({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    })
      .then((res) => {
        if (res.statusCode !== 400) {
          setSuccess(true);
          handleInfoPopup();
        }
      })
      .catch(() => {
        setSuccess(false);
        handleInfoPopup();
      });
  }

  React.useEffect(() => {
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  }, []);

  return (
    <div className="form__container">
      <h2 className="form__title">Регистрация</h2>
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
          Зарегистрироваться
        </button>
      </form>
      <Link to="/sign-in" className="form__link">
        Уже зарегистрированы? Войти
      </Link>
      <InfoTooltip isOpen={infoPopupOpen} success={success} onClose={onClose} />
    </div>
  );
}

export default Register;
