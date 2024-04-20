// RegistrationPage.jsx
import React from "react";
import RegistrationForm from "./RegistrationForm";
import Nav from "../components/partials/Nav";

const RegistrationPage = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen p-10">
        <h2 className="text-4xl font-bold">Register</h2>
        <p className="mt-5 text-lg">
          Create your account to access our database.
        </p>
        <RegistrationForm />
      </div>
    </>
  );
};

export default RegistrationPage;
