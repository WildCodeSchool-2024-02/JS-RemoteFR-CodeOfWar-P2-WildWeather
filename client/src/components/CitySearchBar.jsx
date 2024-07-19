import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CitySearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [message] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const fetchCitySuggestions = async (value) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${import.meta.env.VITE_API_KEY}`
      );
      const json = response.data;

      // Filtrer et trier les résultats pour prioriser ceux qui commencent par la requête
      const filteredResults = json
        .filter((city) => city.name.toLowerCase().includes(value.toLowerCase()))
        .sort((a, b) => {
          // Prioriser les villes commençant par la requête
          const aStartsWith = a.name
            .toLowerCase()
            .startsWith(value.toLowerCase());
          const bStartsWith = b.name
            .toLowerCase()
            .startsWith(value.toLowerCase());

          if (aStartsWith && !bStartsWith) {
            return -1;
          }
          if (!aStartsWith && bStartsWith) {
            return 1;
          }
          return 0;
        });

      // Limiter à 3 résultats uniques
      const uniqueResults = Array.from(
        new Set(filteredResults.map((city) => city.name))
      )
        .slice(0, 3)
        .map((name) => filteredResults.find((city) => city.name === name));

      setSuggestions(uniqueResults);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    if (value.length < 3) {
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
      navigate("/Home");
    } else {
      localStorage.setItem("selectedCity", inputRef.current.value);
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

  return (
    <div className="inputnameandtag">
      <input
        type="text"
        className="inputcity"
        id="inputOfCity"
        value={query}
        onChange={handleInputChange}
        placeholder="&#x1F50E;&#xFE0E; Research"
        aria-label="City name"
        ref={inputRef}
      />
      <ul>
        {suggestions.map((city) => (
          <li
            className="cityListProposition"
            key={city.name}
            style={{ listStyle: "none" }}
          >
            <button
              type="button"
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
      {message && <p>{message}</p>}
    </div>
  );
}

export default CitySearchBar;
