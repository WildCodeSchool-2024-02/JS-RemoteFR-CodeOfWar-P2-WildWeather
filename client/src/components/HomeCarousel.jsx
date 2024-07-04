/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";

import "../style/homeCarousel.css";
import "@splidejs/react-splide/css";

export default function HomeCarousel({ weather, userWeather, inputCity }) {
  const [forecastWeather, setForecastWeather] = useState([]);
  const getForecastCity = (userCity) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => setForecastWeather(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (userWeather.length !== 0) {
      getForecastCity(inputCity);
    } else if (weather.length !== 0) {
      getForecastCity("bordeaux");
    }
  }, [userWeather, weather]);

  const transformHours = (heure) => {
    let hoursSlide = "";
    if (weather.length !== 0 || userWeather.length !== 0) {
      hoursSlide = new Date(heure).getHours();
    }
    return hoursSlide;
  };

  return (
    <Splide
      className="carouselContainer"
      options={{
        pagination: false,
        perPage: 4,
        perMove: 1,
        autoplay: true,
        arrows: false,
        gap: "12px",
        speed: 2000,
      }}
    >
      {forecastWeather.list ? (
        forecastWeather.list.map((forecast) => (
          <SplideSlide key={forecast.dt_txt}>
            <div className="carouselCard">
              {forecast.dt_txt && (
                <p className="carouselTime">
                  {`${transformHours(forecast.dt_txt)}:00`}
                </p>
              )}
              {forecast.weather.length > 0 && (
                <img
                  src={`../src/assets/icons/${forecast.weather[0].icon}.svg`}
                  alt="Weather Icon"
                />
              )}
              <p className="carouselTemp">
                {forecast.main.temp !== 0 && Math.floor(forecast.main.temp)}°
              </p>
            </div>
          </SplideSlide>
        ))
      ) : (
        <p className="CarouselError">CHARGEMENT...</p>
      )}
    </Splide>
  );
}
