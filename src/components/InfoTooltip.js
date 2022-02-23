import successImg from "../images/success.svg";
import unsuccessImg from "../images/unsuccess.svg";

function InfoTooltip({ isOpen, onClose, success }) {
  return (
    <section className={`popup popup_info ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_popup_info">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={success ? successImg : unsuccessImg}
          alt="success"
          className="popup__success"
        />
        <h2 className="popup__title popup__title_popup_info">
          {success
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
