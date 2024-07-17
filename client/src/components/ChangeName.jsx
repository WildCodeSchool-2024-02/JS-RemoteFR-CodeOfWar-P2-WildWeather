import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/changeName.css";
import arrowLeft from "../assets/images/arrow.png";
import { useLanguage } from "../context/LanguageContext";

export default function ChangeName() {
  const { t } = useLanguage();

  const storedName = localStorage.getItem("nameStorage");

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  const handleClickArrow = () => {
    navigate(-1);
  };

  return (
    <div className="form-container">
      <header className="backArrow">
        <button
          type="button"
          className="btn-arrow"
          onClick={() => handleClickArrow("Home/Settings")}
        >
          <img
            src={arrowLeft}
            alt="arrow left icon to move backwards"
            width={20}
            className="arrow-left"
          />
        </button>

        <h3>{t("Setting.YourName.Name")}</h3>
      </header>
      <div className="input-container">
        <form className="inputForm">
          <label aria-label="name" htmlFor="inputName" />
          <input
            id="inputName"
            name="inputName"
            type="text"
            placeholder={storedName}
            value={inputValue}
            onChange={handleChange}
          />
        </form>

        <div className="btn-confirm">
          {inputValue ? (
            <button
              type="submit"
              className="btn-submit"
              onClick={togglePopover}
            >
              {t("Setting.YourName.Confirm")}
            </button>
          ) : null}
          {isOpen && (
            <div className="pop-over">
              <button
                onClick={closePopover}
                type="button"
                className="btn-popover"
              >
                X
              </button>
              <p>{t("Setting.YourName.NameConfirmed")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
