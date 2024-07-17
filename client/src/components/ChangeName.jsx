import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/changeName.css";
import arrowLeft from "../assets/images/arrow.png";

export default function ChangeName() {
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

        <h3>Your Name</h3>
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
              Confirm
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
              <p>Name confirmed!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
