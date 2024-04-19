// ErrorMessage.jsx
import React from "react";
import "./AlertsCSS/Alerts.css";

const ErrorMessage = ({ message }) => {
  return (
    <>
      <div className="error slide-in-from-left" style={{ color: "red" }}>
        {message}
      </div>
    </>
  );
};

export default ErrorMessage;
