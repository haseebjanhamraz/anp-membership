import "./AlertsCSS/Alerts.css";

const SuccessMessage = ({ message }) => {
  return (
    <div className="slide-in-from-left" style={{ color: "green" }}>
      {message}
    </div>
  );
};

export default SuccessMessage;
