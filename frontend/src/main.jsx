import React from "react";
import { createRoot } from "react-dom/client"; // Updated import statement
import App from "./App.jsx";
import "./index.css";
import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <SnackbarProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </SnackbarProvider>
);
