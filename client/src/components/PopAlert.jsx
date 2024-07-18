import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

import dataAlertText from "../assets/data/dataAlertText.json";

import "../style/popAlert.css";

export default function PopAlert() {
  const weather = useLoaderData();
  const alertContainer = useRef(null);

  const [typeAlert, setTypeAlert] = useState("");
  const [background, setBackground] = useState("");

  const handleClickCloseAlert = () => {
    alertContainer.current.style.display = "none";
  };
  const handleKeyDownAlert = (e) => {
    if (e.key === "enter") {
      alertContainer.current.style.display = "none";
    }
  };

  useEffect(() => {
    if (
      weather.weather[0].icon === "11d" ||
      weather.weather[0].icon === "11n"
    ) {
      setTypeAlert("orage");
      alertContainer.current.style.display = "flex";
      if (dataAlertText[typeAlert]) {
        setBackground(`${dataAlertText[typeAlert].background}`);
      }
    }
    if (weather.main.temp >= 40) {
      alertContainer.current.style.display = "flex";
      setTypeAlert("canicule");
      if (dataAlertText[typeAlert]) {
        setBackground(`${dataAlertText[typeAlert].background}`);
      }
    }
    if (
      weather.weather[0].icon === "13d" ||
      weather.weather[0].icon === "13n"
    ) {
      alertContainer.current.style.display = "flex";
      setTypeAlert("neige");
      if (dataAlertText[typeAlert]) {
        setBackground(`${dataAlertText[typeAlert].background}`);
      }
    }
    if (weather.wind.speed >= 80) {
      alertContainer.current.style.display = "flex";
      setTypeAlert("vent");
      if (dataAlertText[typeAlert]) {
        setBackground(`${dataAlertText[typeAlert].background}`);
      }
    }
  }, [weather, typeAlert]);

  return (
    <section
      className="alertContainer"
      ref={alertContainer}
      onClick={handleClickCloseAlert}
      onKeyDown={handleKeyDownAlert}
      role="button"
      tabIndex="0"
    >
      <img
        src="../src/assets/images/alerte.png"
        alt="Warning"
        className="alertImg"
      />
      {dataAlertText[typeAlert] ? (
        <div className="alertPopup">
          <h2 className="alertTitle">Weather Alert !</h2>
          <p className="alertText" style={{ background }}>
            {dataAlertText[typeAlert].text}
          </p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
