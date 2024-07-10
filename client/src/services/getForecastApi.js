import axios from "axios";

  export default function getForecastCity(City, functionState) {
    return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${City}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => functionState(response.data))
    .catch((err) => console.error(err));
};
  