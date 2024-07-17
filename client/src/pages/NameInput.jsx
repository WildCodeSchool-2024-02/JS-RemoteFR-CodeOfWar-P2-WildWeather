import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useName } from "../context/NameContext";

import "../style/nameinput.css";
import "../style/backgroundcloud.css";

function NameInput() {
  const { name, setName } = useName();
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("nameStorage");
    if (storedName) {
      setName(storedName);
      navigate("/TagYourCity");
    }
  }, [setName, navigate]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(name);
    localStorage.setItem("nameStorage", name);
    navigate("/TagYourCity");
  };
  const defaultname = `\nPierre (présent!)`;
  const handleSkip = () => {
    setName(defaultname);
    localStorage.removeItem("nameStorage");
    navigate("/TagYourCity");
  };

  return (
    <section className="NameInput">
      <main className="mainname">
        <form className="formname" onSubmit={handleSubmit}>
          <p className="questionTitleName">What's your name?</p>
          <p className="personalize">Let's personalize your experience.</p>
          <input
            type="text"
            className="inputname"
            value={name}
            onChange={handleChange}
            placeholder="Tape your name here..."
            maxLength={12}
          />
          <div className="buttonsname">
            <button className="Validebutton" type="submit">
              Confirm
            </button>
            <button className="Passedbutton" type="button" onClick={handleSkip}>
              Skip
            </button>
          </div>
        </form>
      </main>
    </section>
  );
}

export default NameInput;
