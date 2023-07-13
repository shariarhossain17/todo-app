import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { default as AuthProvider } from "./provider/AuthContext";
import Router from "./routes/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
