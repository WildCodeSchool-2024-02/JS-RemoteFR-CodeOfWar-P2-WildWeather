import { useState, useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import getUserWeatherApi from "../services/getUserWeatherApi";

import HomeCitySentence from "../components/HomeCitySentence";
import HomeTempCloud from "../components/HomeTempCloud";
import HomeCarousel from "../components/HomeCarousel";
import HomeBottom from "../components/HomeBottom";

import "../style/home.css";
import ChangeName from "../components/ChangeName";

export default function Home() {
  const weather = useLoaderData(); // Loader contenant la requete API de la ville favorite par default

  const [userWeather, setUserWeather] = useState([]); // State API de la ville saisie par user
  const [inputCity, setInputCity] = useState(""); // State qui stock la valeur de l'input
  const [isFavorite, setIsFavorite] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  console.info(isFavorite);

  const userName = localStorage.getItem("nameStorage");
  const userCity = localStorage.getItem("selectedCity");
  const searchBar = useRef();
  const navigate = useNavigate();

  // Event Listener de naviguation
  const HandleClickNavigate = () => {
    navigate("/Home/Settings");
  };
  // EVent Listener saisie ville utilisateur
  const HandleClickSearchBar = () => {
    getUserWeatherApi(inputCity, setUserWeather);
    searchBar.current.value = "";
    if (inputCity.toLowerCase() === userCity.toLowerCase()) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
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
  // Event Listener pour redéfinir la ville favorite par default
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
    setIsClicked(true);
    localStorage.setItem("selectedCity", userWeather.name);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <main className="homeMain">
      <section className="topHome">
        <header className="headerHome">
          <h2 className="welcome">Hi {userName} !</h2>
          <div className="logoItems">
            <button
              type="button"
              className={`btnNavigate ${isClicked ? "clicked" : ""}`}
              onClick={handleClickFavorite}
            >
              <img
                src={
                  isFavorite
                    ? "../src/assets/icons/isFavorite.png"
                    : "../src/assets/icons/favorite.svg"
                }
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
      <ChangeName />
    </main>
  );
}
