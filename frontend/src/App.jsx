import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import RegistrationPage from "./pages/RegistrationPage"; // Import the RegistrationPage component
import Login from "./pages/LoginForm";
import About from "./pages/PublicPages/About";
import PrivateRoutes from "./utils/PrivateRoutes";
import AllEntries from "./pages/AllEntries";
import UserProfile from "./components/User/UserProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<CreateBook />} path="/books/create" />
          <Route element={<EditBook />} path="/books/edit/:id" />
          <Route element={<DeleteBook />} path="/books/delete/:id" />
          <Route element={<ShowBook />} path="/books/details/:id" />
          <Route element={<AllEntries />} path="/all-members" />
          <Route element={<UserProfile />} path="/profile" />
        </Route>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" exact />
        <Route element={<Login />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
      </Routes>
    </Router>
  );
};

export default App;
