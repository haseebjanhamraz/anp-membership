import { Outlet, Navigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const PrivateRoutes = () => {
  const { enqueueSnackbar } = useSnackbar();

  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    enqueueSnackbar("You need to be logged in", { variant: "warning" });
    return <Navigate to="/login" state={{ from: window.location.pathname }} />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
