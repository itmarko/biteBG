import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const Home = () => {
  const tableId = 1; // change dynamically per table

  // ✅ QR opens menu page directly
  const qrValue = `${window.location.origin}/customer/menu/${tableId}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to BiteBG
        </h1>

        <p className="text-gray-500">
          Scan QR • Order Food • Pay Easily
        </p>

        {/* QR CARD */}
        <div className="
          bg-white
          p-6
          rounded-2xl
          border
          shadow-md
          inline-block
          transition
          hover:shadow-lg
        ">
          <QRCodeCanvas
            value={qrValue}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
        </div>

        {/* Table Info */}
        <p className="text-sm text-gray-400">
          Table #{tableId}
        </p>

        {/* Optional Link (Testing in Desktop) */}
        <a
          href={qrValue}
          className="text-blue-600 text-sm underline"
        >
          Open Menu
        </a>

      </div>
    </div>
  );
};

export default Home;
