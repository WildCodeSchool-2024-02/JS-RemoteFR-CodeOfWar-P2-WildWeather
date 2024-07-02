import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function NameInput() {
  const { setName } = useOutletContext(); // Utilisation de useOutletContext pour accéder à setName
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
      navigate("/TagYourCity");
    }
  }, [setName, navigate]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputValue);
    localStorage.setItem("name", inputValue);
    navigate("/TagYourCity");
  };

  const handleSkip = () => {
    setName("Pierre");
    localStorage.removeItem("name");
    navigate("/TagYourCity");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <p>What's your name?</p>
        <p>Let's personalize your experience.</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Tape your name here..."
        />
        <button className="Validebutton" type="submit">
          Confirm
        </button>
        <button className="Passedbutton" type="button" onClick={handleSkip}>
          Skip
        </button>
      </form>
    </main>
  );
}

export default NameInput;
