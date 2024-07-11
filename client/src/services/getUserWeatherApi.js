import axios from "axios";

export default function HandleClickUserWeatherAPI (inputCity, functionState) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => functionState(response.data))
      .catch((err) => console.error(err));
  };