import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";
import Welcome from "./pages/Welcome";
import NameInput from "./pages/NameInput";
import TagYourCity from "./pages/TagYourCity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "NameInput",
        element: <NameInput />,
      },
      {
        path: "TagYourCity",
        element: <TagYourCity />,
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
