import PropTypes from "prop-types";

import "../style/homeButton.css";

function HomeBottom({ weather, userWeather }) {
  console.info(userWeather);
  return (
    <div className="weather-cross-col">
      <div className="data-col">
        <div className="weather-data-col">
          <p>Humidite: </p>
          <h4>
            {userWeather.length !== 0
              ? userWeather.main.humidity
              : weather.main.humidity}
            %
          </h4>
        </div>

        <div className="weather-data-col">
          <p>Vent:</p>
          <h4>
            {userWeather.length !== 0
              ? userWeather.wind.speed
              : weather.wind.speed}
            m/s
          </h4>
        </div>
      </div>

      <div className="data-col">
        <div className="weather-data-col">
          <p>T.max:</p>
          <h4>
            {userWeather.length !== 0
              ? userWeather.main.temp_max
              : weather.main.temp_max}
            ºC
          </h4>
        </div>

        <div className="weather-data-col">
          <p>T.min: </p>
          <h4>
            {userWeather.length !== 0
              ? userWeather.main.temp_min
              : weather.main.temp_min}
            ºC
          </h4>
        </div>
      </div>
    </div>
  );
}

HomeBottom.propTypes = {
  weather: PropTypes.shape({
    main: PropTypes.shape({
      humidity: PropTypes.number,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }).isRequired,
  }).isRequired,
  userWeather: PropTypes.shape({
    length: PropTypes.number,
    main: PropTypes.shape({
      humidity: PropTypes.number,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default HomeBottom;
