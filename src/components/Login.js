import React from "react";
import { useHistory } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import { authorize } from "../utils/authApi";

function Login({
  setLoggedIn,
  onClose,
  handleInfoPopup,
  infoPopupOpen,
  setCurrentEmail,
}) {
  const history = useHistory();
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    authorize({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          setCurrentEmail(emailInputRef.current.value);
          history.push("/");
        } else {
          handleInfoPopup();
        }
      })
      .catch(() => {
        handleInfoPopup();
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
