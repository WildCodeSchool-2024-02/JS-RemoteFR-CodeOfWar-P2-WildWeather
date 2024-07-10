import axios from "axios";


export default function getWeatherApi() {
   return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("selectedCity")}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => response.data)
      .catch((err) => console.error(err))
 };

      