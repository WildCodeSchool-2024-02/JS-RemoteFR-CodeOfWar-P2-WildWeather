import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import "../style/home.css";

export default function HomeTempCloud({ userWeather }) {
  const weather = useLoaderData();
  const { t } = useLanguage();

  return (
    <div id="temperatureCity">
      {userWeather.length !== 0 ? (
        <>
          <img
            src={`../src/assets/icons/${userWeather.weather[0].icon}.svg`}
            id="svgCloud"
            alt="Cloud"
          />
          <p id="temperatureNow">{Math.floor(userWeather.main.temp)}</p>
          <p id="feelsTemperature">
            Real feel {Math.floor(userWeather.main.feels_like)}°
          </p>
        </>
      ) : (
        <>
          <img
            src={`../src/assets/icons/${weather.weather[0].icon}.svg `}
            id="svgCloud"
            alt="Cloud"
          />
          <p id="temperatureNow">{Math.floor(weather.main.temp)}°</p>
          <p id="feelsTemperature">
            {t("RealFeel")} {Math.floor(weather.main.feels_like)}°C
          </p>
        </>
      )}
    </div>
  );
}

HomeTempCloud.propTypes = {
  userWeather: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      weather: PropTypes.arrayOf({
        icon: PropTypes.string.isRequired,
      }),
      feels_like: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
    })
  ).isRequired,
};
