/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import dataUtcOffset from "../assets/data/dataUtcOffset.json";
import getForecastCity from "../services/getForecastApi";

import "@splidejs/react-splide/css";
import "../style/homeCarousel.css";

export default function HomeCarousel({ weather, userWeather, inputCity }) {
  const userCity = localStorage.getItem("selectedCity");
  const [forecastWeather, setForecastWeather] = useState([]);
  
  useEffect(
    () => {
      if(userWeather.length !== 0){
      getForecastCity(inputCity, setForecastWeather)
    }else{
      getForecastCity(userCity, setForecastWeather)
    }},[userWeather, userCity]
  );

  const getForecastHour = (dateAPI, codeCountry) => {
    if (dateAPI && codeCountry) {
      // Format : YYYY-MM-DD HH:MM:SS
      const dateLocale = new Date(dateAPI);
      // Obtenir l'heure locale, Format : HH
      const hoursLocal = dateLocale.getHours();
      // Utilisation des données en Json pour obtenir UTC(convertie en minutes) grâce au code pays
      const hoursUTC = dataUtcOffset[codeCountry];
      // hoursUTC / 60 = converti en heures
      // + 24 pour s'assurer que le nombre soit bien positif (UTC peut être négatif)
      // % 24 pour s'assurer que le nombre reste dans la plage horaire 0-23
      const hoursWithOffset = (hoursLocal + hoursUTC / 60 + 24) % 24;
      return hoursWithOffset.toString().padStart(2, "0");
    }
    return null;
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
      }}
    >
      {forecastWeather.list ? (
        forecastWeather.list.map((forecast) => (
          <SplideSlide key={forecast.dt_txt}>
            <div className="carouselCard">
              <p className="carouselTime">
                {userWeather.length !== 0
                  ? `${getForecastHour(forecast.dt_txt, userWeather.sys.country)}:00`
                  : `${getForecastHour(forecast.dt_txt, weather.sys.country)}:00`}
              </p>
              <img
                src={`../src/assets/icons/${forecast.weather[0].icon}.svg`}
                alt="Weather Icon"
              />
              <p className="carouselTemp">{Math.floor(forecast.main.temp)}°</p>
            </div>
          </SplideSlide>
        ))
      ) : (
        <p className="CarouselError">CHARGEMENT...</p>
      )}
    </Splide>
  );
}