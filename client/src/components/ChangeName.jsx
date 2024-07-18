import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/changeName.css";
import arrowLeft from "../assets/images/arrow.png";
import { useLanguage } from "../context/LanguageContext";

export default function ChangeName() {
  const { t } = useLanguage();

  const storedName = localStorage.getItem("nameStorage");
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    localStorage.setItem("nameStorage", inputValue);
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsOpen(false);
    }, 1500);
  };
  const togglePopoverEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      localStorage.setItem("nameStorage", inputValue);
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsOpen(false);
    }, 1500);
    }
  }

  const closePopover = () => {
    setIsOpen(false);
  };

  const handleClickArrow = () => {
    navigate("/Home/Settings");
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
        <form className="inputForm" name="inputName">
          <label aria-label="name" htmlFor="inputName" />
          <input
            id="inputName"
            name="inputName"
            type="text"
            placeholder={storedName}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={togglePopoverEnter}
            autoComplete="Your name"

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
