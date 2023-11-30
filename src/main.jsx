import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Contato from "./Contato.jsx";
import Sobre from "./Sobre.jsx";
import TrabalhoAberto from "./TrabalhoAberto.jsx";

import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/trabalho",
    element: <TrabalhoAberto />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
