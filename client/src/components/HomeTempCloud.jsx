/* eslint-disable react/prop-types */
import "../style/home.css";

export default function HomeTempCloud({ weather, userWeather }) {
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