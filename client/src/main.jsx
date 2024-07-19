import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getWeatherApi from "./services/getWeatherApi";

import App from "./App";
import EntryPages from "./pages/EntryPages";
import FirstPage from "./pages/FirstPage";
import NameInput from "./pages/NameInput";
import TagYourCity from "./pages/TagYourCity";
import Home from "./pages/Home";
import Settings from "./components/Settings";
import ChangeName from "./components/ChangeName";
import MapPage from "./pages/MapPage";
import LanguagePage from "./pages/LanguagePage";

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
          {
            path: "/Home/Settings",
            element: <Settings />,
          },
          {
            path: "Home/Settings/ChangeName",
            element: <ChangeName />,
          },
          {
            path: "/MapPage",
            element: <MapPage />,
            loader: getWeatherApi,
          },
          {
            path: "Home/Settings/LanguagePage",
            element: <LanguagePage />,
          },
        ]
      : [
          {
            element: <EntryPages />,
            children: [
              { path: "/", element: <FirstPage /> },
              { path: "NameInput", element: <NameInput /> },
              { path: "TagYourCity", element: <TagYourCity /> },
            ],
          },
          {
            path: "/Home",
            element: <Home />,
            loader: getWeatherApi,
          },
          {
            path: "/Home/Settings",
            element: <Settings />,
          },
          {
            path: "Home/Settings/ChangeName",
            element: <ChangeName />,
          },
          {
            path: "/MapPage",
            element: <MapPage />,
            loader: getWeatherApi,
          },
          {
            path: "/LanguagePage",
            element: <LanguagePage />,
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
