import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

import "../style/homeButton.css";

function HomeBottom({ userWeather }) {
  const weather = useLoaderData();

  return (
    <div className="weather-cross-col">
      <div className="data-col">
        <div className="weather-data-col">
          <p>humidity : </p>
          <h4>
            {userWeather.length !== 0
              ? userWeather.main.humidity
              : weather.main.humidity}
            %
          </h4>
        </div>

        <div className="weather-data-col">
          <p>Wind :</p>
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
          <p>Temp.max :</p>
          <h4>
            {userWeather.length !== 0
              ? Math.floor(userWeather.main.temp_max)
              : Math.floor(weather.main.temp_max)}
            ºC
          </h4>
        </div>

        <div className="weather-data-col">
          <p>Temp.min : </p>
          <h4>
            {userWeather.length !== 0
              ? Math.floor(userWeather.main.temp_min)
              : Math.floor(weather.main.temp_min)}
            ºC
          </h4>
        </div>
      </div>
    </div>
  );
}

HomeBottom.propTypes = {
  userWeather: PropTypes.arrayOf(
    PropTypes.shape({
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default HomeBottom;
