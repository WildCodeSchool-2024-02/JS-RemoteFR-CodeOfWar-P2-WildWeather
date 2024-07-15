import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getWeatherApi from "./services/getWeatherApi";

import App from "./App";
import FirstPage from "./pages/FirstPage";
import NameInput from "./pages/NameInput";
import TagYourCity from "./pages/TagYourCity";
import Home from "./pages/Home";
import Settings from "./components/Settings";

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
          {
            path: "/Home/Settings",
            element: <Settings />,
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
