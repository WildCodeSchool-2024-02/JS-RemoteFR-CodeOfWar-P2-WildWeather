/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

import "../style/home.css";

export default function HomeTempCloud({ userWeather }) {
  const weather = useLoaderData();
  return (
    <div id="temperatureCity">
      {userWeather.length !== 0 && weather.length !== 0 ? (
        <img
          src={`../src/assets/icons/${userWeather.weather[0].icon}.svg`}
          id="svgCloud"
          alt="Cloud"
        />
      ) : (
        <img
          src={`../src/assets/icons/${weather.weather[0].icon}.svg `}
          id="svgCloud"
          alt="Cloud"
        />
      )}
      <p id="temperatureNow">
        {userWeather.length !== 0
          ? Math.floor(userWeather.main.temp)
          : Math.floor(weather.main.temp)}
        °
      </p>
      <p id="feelsTemperature">
        Real feel
        {userWeather.length !== 0
          ? Math.floor(userWeather.main.feels_like)
          : Math.floor(weather.main.feels_like)}
        °
      </p>
    </div>
  );
}

HomeTempCloud.propTypes = {
  weather: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
    }).isRequired,
    weather: PropTypes.objectOf({
      icon: PropTypes.string,
    }).isRequired,
  }).isRequired,
  userWeather: PropTypes.shape({
    main: PropTypes.shape({
      feels_like: PropTypes.number,
      temp: PropTypes.number,
    }).isRequired,
    weather: PropTypes.objectOf({
      icon: PropTypes.string,
    }),
  }).isRequired,
};
