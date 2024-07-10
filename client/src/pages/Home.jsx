import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

import HomeCitySentence from "../components/HomeCitySentence";
import HomeTempCloud from "../components/HomeTempCloud";
import HomeCarousel from "../components/HomeCarousel";
import HomeBottom from "../components/HomeBottom";

import "../style/home.css";

export default function Home() {
  // Recupération de la donnée API vie un loader
  const weather = useLoaderData();
  // State qui va stocker les données de la nouvelle requete API avec le nom de ville saisie dans l'input
  const [userWeather, setUserWeather] = useState([]);
  // State qui va stocker la valeur saisie dans l'input de recherche de ville grace à la fonction rattacher a l'input
  const [inputCity, setInputCity] = useState("");
  // Extraction de la donnée du local storage pour sotcké la ville de l'utilsateur par défault
  const userName = localStorage.getItem("nameStorage");

  const HandleClickUserWeatherAPI = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => setUserWeather(response.data))
      .catch((err) => console.error(err));
    setInputCity("");
  };

  const handleChangeInputCity = (e) => {
    const regex = /^[a-zA-Z-' ]*$/;
    if (regex.test(e.target.value)) {
      setInputCity(e.target.value);
    }
  };

  const HandleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      HandleClickUserWeatherAPI();
    }
  };

  return (
    <main className="homeMain">
      <section className="topHome">
        <header className="headerHome">
          <h2 className="welcome">Hi {userName} !</h2>
          <div className="logoItems">
            <img
              src="../src/assets/icons/favorite.svg"
              alt="favorite"
              className="logoItem"
              id="favorite"
            />
            <img
              src="../src/assets/icons/setting.svg"
              alt="setting"
              className="logoItem"
              id="settings"
            />
          </div>
        </header>
        <div className="searchCity">
          <button
            type="button"
            id="btnSearchCity"
            onClick={HandleClickUserWeatherAPI}
          >
            &#x1F50E;&#xFE0E;
          </button>
          <input
            type="text"
            id="inputSearchCity"
            value={inputCity}
            onChange={handleChangeInputCity}
            onKeyDown={HandleKeyPress}
            placeholder="Search for a City"
          />
        </div>
        <div className="cityGlobalInfo">
          <HomeCitySentence weather={weather} userWeather={userWeather} />
          <HomeTempCloud weather={weather} userWeather={userWeather} />
        </div>
      </section>
      {weather.length !== 0 && (
        <HomeBottom weather={weather} userWeather={userWeather} />
      )}
      <HomeCarousel
        weather={weather}
        userWeather={userWeather}
        inputCity={inputCity}
      />
      {/* Graphique */}
    </main>
  );
}
