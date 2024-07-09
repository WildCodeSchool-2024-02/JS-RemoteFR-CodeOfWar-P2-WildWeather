import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import FirstPage from "./pages/FirstPage";
import NameInput from "./pages/NameInput";
import TagYourCity from "./pages/TagYourCity";
import Home from "./pages/Home";

const getWeatherApi = () =>
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("selectedCity")}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data)
    .catch((err) => console.error(err));

const router = createBrowserRouter([
  {
    element: <App />,
    id: "app",
    children: localStorage.getItem("selectedCity")
      ? [
          {
            path: "/",
            element: <Home />,
            loader: getWeatherApi,
          },
          {
            path: "/Home",
            element: <Home />,
            loader: getWeatherApi,
          },
        ]
      : [
          {
            path: "/",
            element: <FirstPage />,
          },
          {
            path: "/NameInput",
            element: <NameInput />,
          },
          {
            path: "/TagYourCity",
            element: <TagYourCity />,
          },
          {
            path: "/Home",
            element: <Home />,
            loader: getWeatherApi,
          },
        ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
