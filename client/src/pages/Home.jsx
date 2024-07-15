import { useState, useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import getUserWeatherApi from "../services/getUserWeatherApi";

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
  const searchBar = useRef();
  const navigate = useNavigate();

  const HandleClickNavigate = () => {
    navigate("/Home/Settings");
  };

  const HandleClickSearchBar = () => {
    getUserWeatherApi(inputCity, setUserWeather);
    searchBar.current.value = "";
  };

  const handleChangeSearchBar = (e) => {
    const regex = /^[a-zA-Z-' ]*$/;
    if (regex.test(e.target.value)) {
      setInputCity(e.target.value);
    }
  };

  const HandleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      HandleClickSearchBar(inputCity, setInputCity, setUserWeather);
    }
  };

  return (
    <main className="homeMain">
      <section className="topHome">
        <header className="headerHome">
          <h2 className="welcome">Hi {userName} !</h2>
          <div className="logoItems">
            <button type="button" className="btnNavigate">
              <img
                src="../src/assets/icons/favorite.svg"
                alt="favorite"
                className="logoItem"
                id="favorite"
              />
            </button>
            <button
              type="button"
              className="btnNavigate"
              onClick={HandleClickNavigate}
            >
              <img
                src="../src/assets/icons/setting.svg"
                alt="setting"
                className="logoItem"
                id="settings"
              />
            </button>
          </div>
        </header>
        <div className="searchCity">
          <button
            type="button"
            id="btnSearchCity"
            onClick={HandleClickSearchBar}
          >
            &#x1F50E;&#xFE0E;
          </button>
          <input
            type="text"
            className="inputSearchCity"
            ref={searchBar}
            onChange={handleChangeSearchBar}
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
