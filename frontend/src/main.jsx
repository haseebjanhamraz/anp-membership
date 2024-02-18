// main.jsx

import React from "react";
import { createRoot } from "react-dom/client"; // Updated import statement
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import { AuthProvider } from "./components/AuthContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StrictMode>
    </SnackbarProvider>
  </BrowserRouter>
);
