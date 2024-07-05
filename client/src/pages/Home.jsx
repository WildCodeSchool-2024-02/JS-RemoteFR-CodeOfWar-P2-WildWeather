import { useEffect, useState } from "react";

import axios from "axios";

import HomeCitySentence from "../components/HomeCitySentence";
import HomeTempCloud from "../components/HomeTempCloud";
import HomeCarousel from "../components/HomeCarousel";

import "../style/home.css";

export default function Home() {
  // Création d'un state pour stocker la requete API avec les données de la ville de l'utilisateur par default
  const [weather, setWeather] = useState([]);
  // State qui va stocker les données de la nouvelle requete API avec le nom de ville saisie dans l'input
  const [userWeather, setUserWeather] = useState([]);
  // State qui va stocker la valeur saisie dans l'input de recherche de ville grace à la fonction rattacher a l'input
  const [inputCity, setInputCity] = useState("");
  // Extraction de la donnée du local storage pour sotcké la ville de l'utrilsateur par défault
  // const itemStorage = localStorage.getItem("selectedCity");
  const inputSearch = document.querySelector("#inputSearchCity");

  const getWeather = () => {
    axios
      // Liens API pour test https://api.openweathermap.org/data/2.5/weather?q=${itemStorage}&units=metric&appid=${import.meta.env.VITE_API_KEY}
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=bordeaux&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => setWeather(response.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getWeather();
  }, []);
  const HandleClickButtonCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => setUserWeather(response.data))
      .catch((err) => console.error(err));
    inputSearch.value = "";
  };

  const handleChangeInputCity = () => {
    setInputCity(inputSearch.value);
  };
  // Lorsque que l'on appuie sur la touche "entrer" éxecute la fonction (HandleClickButtonCity)
  const HandleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      HandleClickButtonCity();
    }
  };

  return (
    <main className="homeMain">
      <section className="topHome">
        {weather.length !== 0 && (
          <>
            <header className="headerHome">
              <h2 className="welcome">
                Hi !{/* Hi {localeStorage.getItem('name')} ! */}
              </h2>
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
                onClick={HandleClickButtonCity}
              >
                &#x1F50E;&#xFE0E;
              </button>
              <input
                type="text"
                id="inputSearchCity"
                onChange={handleChangeInputCity}
                onKeyDown={HandleKeyPress}
                placeholder="Search for a City"
              />
            </div>
            <div className="cityGlobalInfo">
              <HomeCitySentence weather={weather} userWeather={userWeather} />
              <HomeTempCloud weather={weather} userWeather={userWeather} />
            </div>
          </>
        )}
      </section>
      {/* <HomeBottom weather={weather} userWeather={userWeather} /> */}
      <HomeCarousel
        weather={weather}
        userWeather={userWeather}
        inputCity={inputCity}
      />
      {/* Graphique */}
    </main>
  );
}
