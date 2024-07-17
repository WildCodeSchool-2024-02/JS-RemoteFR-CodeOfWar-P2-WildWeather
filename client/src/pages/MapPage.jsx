/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"; // Import useMap from react-leaflet
import getUserWeatherApi from "../services/getUserWeatherApi";
import "leaflet/dist/leaflet.css";
import "../style/mapPage.css";

function MapPage() {
  const initialWeather = useLoaderData();
  const navigate = useNavigate();
  const [weatherloc, setWeather] = useState(initialWeather);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const marker = [weatherloc.coord.lat, weatherloc.coord.lon];


  if (
    !weatherloc ||
    !weatherloc.coord ||
    typeof weatherloc.coord.lat !== "number" ||
    typeof weatherloc.coord.lon !== "number"
  ) {
    return <p>Error: Weather data is not available.</p>;
  }

  const handleBackClick = () => {
    navigate("/Home/Settings");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getUserWeatherApi(inputValue, setWeather);
    localStorage.setItem("selectedCity", inputValue);
  };
  const handleClickSubmit = (e) => {
    e.preventDefault();
    getUserWeatherApi(inputValue, setWeather);
    localStorage.setItem("selectedCity", inputValue);
  }
  // MapCenterer component to center the map at a specific position
  const MapCenterer = ({ position }) => {
    const map = useMap();
    map.setView(position);
  };
  const togglePopover = (e) => {
    e.preventDefault();
    getUserWeatherApi(inputValue, setWeather);
    localStorage.setItem("selectedCity", inputValue);
    setIsOpen(!isOpen);
  };
  const closePopover = () => {
    setIsOpen(false);
  };

  return (
    <section className="mapPage">
      <header className="header">
        <button type="button" onClick={handleBackClick} className="backButton">
          <img src="../src/assets/images/arrow.png" alt="arrow" />
        </button>
        <h1 className="pageTitle">Localisation</h1>
      </header>
      <div className="bodycontainer">
        <div className="text-selection-city">
          <p className="descriptionMap">
            The selected city will be displayed by default when you open your
            space.
          </p>
          <div className="inputLoca">
            <form className="formname" onSubmit={handleSubmit}>
              <input
                type="text"
                className="inputlocalisation"
                value={inputValue}
                onChange={handleChange}
                placeholder="Research"
              />
              <button type="button" id="btn-formname" onClick={handleClickSubmit} >
                &#x1F50E;&#xFE0E;
            </button>
            </form>
          </div>
        </div>
        <MapContainer center={marker} zoom={10} className="mapContainer">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={marker} />
          <MapCenterer position={marker} />{" "}
        </MapContainer>
      </div>
      <div className="btn-confirm">
          {inputValue ? (
            <button
              type="submit"
              className="citySubmit"
              onClick={togglePopover}
            >
              Confirm
            </button>
          ) : null}
          {isOpen && (
            <div className="pop-over">
              <button
                onClick={closePopover}
                type="button"
                className="btn-popover"
              >
                X
              </button>
              <p>Localisation confirmed !</p>
            </div>
          )}
        </div>  
    </section>
  );
}

export default MapPage;
