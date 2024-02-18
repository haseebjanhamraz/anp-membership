// LogoutButton.jsx
import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token
    logout();
    // Redirect the user to the login page
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
