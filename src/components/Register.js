import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="form__container">
      <h2 className="form__title">Регистрация</h2>
      <form className="popup__form">
        <input
          className="popup__input  popup__input_theme_dark"
          name="name"
          type="email"
          id="name"
          placeholder="Email"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
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
          maxLength="200"
          autoComplete="off"
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
    </div>
  );
}

export default Register;
