import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ value }) => {
  const [showQRCode, setShowQRCode] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  return (
    <div>
      <button onClick={toggleQRCode}>Generate QR Code</button>
      {showQRCode && <QRCode value={value} />}
    </div>
  );
};

export default QRCodeGenerator;
