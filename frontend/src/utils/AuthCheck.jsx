const AuthCheck = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated; // Return true if authenticated, false otherwise
};

export default AuthCheck;
