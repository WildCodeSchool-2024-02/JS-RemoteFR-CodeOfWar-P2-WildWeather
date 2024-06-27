

import axios from "axios";
import { useState, useEffect } from "react";

import "./home.css";
const apiForecast = {
  base: "https://api.openweathermap.org/data/2.5/forecast?",
};

const api = {
  key: "49a40a9870eca1c572e558094256b16b",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Home() {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState("");

  const getWeather = () => {
    axios
      .get(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)

      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      });
  };
  // useEffect(() => {
  //   getWeather();
  // }, []);
  // https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=49a40a9870eca1c572e558094256b16b

  return (
    <>
      <div className="alex-part">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" className="btn-search" onClick={getWeather}>
          Search
        </button>
        <p>Ville: {weather.name}</p>
        <p>Country:{weather.sys && weather.sys.country}</p>
      </div>

      <article className="weather-cross">
        {/* Primiere Line */}
        <div className="weather weather-left">
          <p>
            <span>Humidite:</span> {weather.main && weather.main.humidity}%
            {/* <span className="separator">|</span> */}
          </p>
          <div className="separator-bottom" />

          <p>
            <span>T.max:</span>{" "}
            {weather.main && Math.floor(weather.main.temp_max)}º C
            {/* <span className="separator">|</span> */}
          </p>
        </div>
        {/* Second line */}

        <div className="weather weather-rigth">
          <p>
            <span>Vent:</span> {weather.wind && weather.wind.speed} m/s
          </p>
          <div className="separator-bottom" />
          <p>
            <span>T.min:</span>{" "}
            {weather.main && Math.floor(weather.main.temp_min)}º C
          </p>
        </div>
      </article>
    </>
  );
}
