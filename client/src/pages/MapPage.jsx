/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"; // Import useMap from react-leaflet
import getUserWeatherApi from "../services/getUserWeatherApi";
import "leaflet/dist/leaflet.css";
import "../style/mapPage.css";
import { useLanguage } from "../context/LanguageContext";

function MapPage() {
  const { t } = useLanguage();

  const initialWeather = useLoaderData();
  const navigate = useNavigate();
  const [weatherloc, setWeather] = useState(initialWeather);
  const [inputValue, setInputValue] = useState("");

  if (
    !weatherloc ||
    !weatherloc.coord ||
    typeof weatherloc.coord.lat !== "number" ||
    typeof weatherloc.coord.lon !== "number"
  ) {
    return <p> {t("Setting.Locate.ErrorWeatherDataNotAvailable")}</p>;
  }

  const marker = [weatherloc.coord.lat, weatherloc.coord.lon];

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getUserWeatherApi(inputValue, setWeather);
    localStorage.setItem("selectedCity", inputValue);
  };

  // MapCenterer component to center the map at a specific position
  const MapCenterer = ({ position }) => {
    const map = useMap();
    map.setView(position);
  };

  return (
    <section className="mapPage">
      <header className="header">
        <button type="button" onClick={handleBackClick} className="backButton">
          <img src="../src/assets/images/arrow.png" alt="arrow" />
        </button>
        <h1 className="pageTitle">{t("Localisation")}</h1>
      </header>
      <div className="bodycontainer">
        <div className="text-selection-city">
          <p className="descriptionMap">
            {t("Setting.Locate.SelectedCityDefaultDisplayed")}
          </p>
          <form className="formname" onSubmit={handleSubmit}>
            <input
              type="text"
              className="inputlocalisation"
              value={inputValue}
              onChange={handleChange}
              placeholder={`\u{1F50E}\u{FE0E} ${t("Research")}`}
              maxLength={12}
            />
          </form>
        </div>
        <MapContainer center={marker} zoom={10} className="mapContainer">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={marker} />
          <MapCenterer position={marker} />{" "}
          {/* Use MapCenterer to center the map */}
        </MapContainer>
      </div>
    </section>
  );
}

export default MapPage;
