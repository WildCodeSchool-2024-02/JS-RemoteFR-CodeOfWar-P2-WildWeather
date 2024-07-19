import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import dataCountry from "../assets/data/dataCountry.json";
import dataSentences from "../assets/data/dataComicSentences.json";

import "../style/home.css";

export default function HomeCitySentence({ userWeather }) {
  const weather = useLoaderData();
  // Génère un nombre aléatoire entre 0 et 3, ce nbr sera utilisé pour générer une des trois phrases(#personalWelcome) aléatoirement
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * 3));
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * 3));
  }, [userWeather]);

  const getCityName = (nameCityApi) => {
    const deleteSpeChart = nameCityApi.replace(/'/g, " ");
    const breakSentence = deleteSpeChart.split(" ");

    return breakSentence.includes("Arrondissement")
      ? breakSentence.slice(2).join(" ")
      : nameCityApi;
  };

  return (
    <>
      <h2 id="cityHome">
        {userWeather.length !== 0
          ? getCityName(userWeather.name)
          : getCityName(weather.name)}
      </h2>
      <p id="regCountry">
        {userWeather.length !== 0
          ? dataCountry[userWeather.sys.country]
          : dataCountry[weather.sys.country]}
      </p>
      {userWeather.length !== 0 ? (
        <p id="personalWelcome">
          {dataSentences[userWeather.weather[0].main][randomIndex]}
        </p>
      ) : (
        <p id="personalWelcome">
          {dataSentences[weather.weather[0].main][randomIndex]}
        </p>
      )}
    </>
  );
}

HomeCitySentence.propTypes = {
  userWeather: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      weather: PropTypes.arrayOf({
        main: PropTypes.string.isRequired,
      }),
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
};
