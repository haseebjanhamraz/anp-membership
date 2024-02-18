import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import RegistrationPage from "./pages/RegistrationPage"; // Import the RegistrationPage component
import Login from "./pages/LoginForm";
import { AuthProvider } from "./components/AuthContext"; // Import the AuthProvider
import { useAuth } from "./components/AuthContext";

const App = () => {
  const { token } = useAuth();

  console.log("Token:", token); // Add this line to check the value of token

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
        {token && (
          <>
            <Route path="/books/create" element={<CreateBook />} />
            <Route path="/books/details/:id" element={<ShowBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            <Route path="/books/delete/:id" element={<DeleteBook />} />
          </>
        )}
      </Routes>
    </AuthProvider>
  );
};

export default App;
