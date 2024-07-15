import { useState } from "react";
import "../style/changeName.css";
import arrowLeft from "../assets/images/arrow.png";

export default function ChangeName() {
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
  return (
    <div className="form-container">
      <header className="backArrow">
        <img
          src={arrowLeft}
          alt="arrow left icon to move backwards"
          width={20}
        />
        <h3>Your Name</h3>
      </header>
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
      <div>
        {inputValue ? (
          <button type="submit" className="btn-submit" onClick={togglePopover}>
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
  );
}
