import React from "react";
import logo from "../img/anp-logo.png"; // Import your logo

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-red-600"></div>
      <img src={logo} alt="Logo" className="absolute w-24 h-24" />
      <div className="flex justify-center mt-44">
        <h1 className="text-3xl text-red-400 font-bold">Loading...</h1>
      </div>
    </div>
  );
};

export default Spinner;
