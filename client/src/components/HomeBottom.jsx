import { useState, useEffect } from "react";

import "../style/homeButton.css";

function HomeBottom({ weather, userWeather }) {
  return (
    <div className="weather-cross-col">
      <div className="data-col">
        <div className="weather-data-col">
          <p>Humidite: </p>
          <h4>{weather.main && weather.main.humidity}%</h4>
        </div>

        <div className="weather-data-col">
          <p>Vent:</p>
          <h4>{weather.wind && weather.wind.speed} m/s</h4>
        </div>
      </div>

      <div className="data-col">
        <div className="weather-data-col">
          <p>T.max:</p>
          <h4>{weather.main && Math.floor(weather.main.temp_max)}º C</h4>
        </div>

        <div className="weather-data-col">
          <p>T.min: </p>
          <h4>{weather.main && Math.floor(weather.main.temp_min)}º C</h4>
        </div>
      </div>
    </div>
  );
}

export default HomeBottom;