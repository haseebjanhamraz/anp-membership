// utils/PrivateRoutes.jsx
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  // Retrieve authentication status from wherever it's stored
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
