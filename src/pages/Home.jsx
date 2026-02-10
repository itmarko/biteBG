import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const Home = () => {
  const tableId = 1; // Example table number

  // QR opens register page
  const qrValue = `${window.location.origin}/customer/menu/${tableId}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to BiteBG
        </h1>

        <p className="text-gray-500">Scan QR • Order Food • Pay Easily</p>

        {/* QR CODE CARD */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm inline-block">
          <QRCodeCanvas
            value={qrValue}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
        </div>

        <p className="text-sm text-gray-400">Table #{tableId}</p>
      </div>
    </div>
  );
};

export default Home;
