import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";
import FirstPage from "./pages/FirstPage";
import NameInput from "./pages/NameInput";
import TagYourCity from "./pages/TagYourCity";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "NameInput",
        element: <NameInput />,
      },
      {
        path: "TagYourCity",
        element: <TagYourCity />,
      },
      {
        path: "Home",
        element: <Home />,
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
