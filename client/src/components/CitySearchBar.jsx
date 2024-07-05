import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CitySearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [message, setMessage] = useState(""); // Ajout d'un état pour le message
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const fetchCitySuggestions = async (searchQuery) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=3&appid=${import.meta.env.VITE_API_KEY}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    if (value === "") {
      setSuggestions([]);
      return;
    }

    fetchCitySuggestions(value.toLowerCase());
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setQuery(city.name);
    setSuggestions([]);
  };

  const handleValidation = () => {
    if (selectedCity) {
      localStorage.setItem("selectedCity", selectedCity.name);
      setMessage(`Ville sélectionnée : ${selectedCity.name}`); // Mettre à jour le message au lieu d'afficher une alerte
      navigate("/Home");
    }
  };

  const handleKeyPress = (event, city) => {
    if (event.key === "Enter" || event.key === " ") {
      handleCitySelect(city);
    }
  };

  const formatCityName = (name) => {
    if (typeof name !== "string") {
      throw new TypeError("Expected a string");
    }
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="inputnameandtag">
      <input
        type="text"
        className="inputcity"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter your city"
        aria-label="City name"
        ref={inputRef}
      />
      <ul>
        {suggestions.map((city) => (
          <li key={city.name} style={{ listStyle: "none" }}>
            <button
              type="button" // Ajout de l'attribut type="button"
              onClick={() => handleCitySelect(city)}
              onKeyPress={(event) => handleKeyPress(event, city)}
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
              }}
            >
              {formatCityName(city.name)}
            </button>
          </li>
        ))}
      </ul>
      <button className="confirmcity" type="submit" onClick={handleValidation}>
        Confirm
      </button>
      {message && <p>{message}</p>} {/* Affichage du message */}
    </div>
  );
}

export default CitySearchBar;
