import React from "react";
import logo from "../img/anp-logo.png"; // Import your logo

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-600"></div>
      <img src={logo} alt="Logo" className="absolute w-24 h-24" />
    </div>
  );
};

export default Spinner;
