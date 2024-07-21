import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** Pages Import */
import HomePage from "./Pages/HomePage.jsx";
import About from "./Pages/About.jsx";
import Menu from "./Pages/Menu.jsx";
import Activities from "./Pages/Activities.jsx";
import Stories from "./Pages/Stories.jsx";
import Ambassador from "./Pages/Ambassador.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/stories",
        element: <Stories />,
      },
      {
        path: "/ambassador",
        element: <Ambassador />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
