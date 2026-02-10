import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const AdminQRCodePage = () => {
  const [tableNumber, setTableNumber] = useState("");
  const [tableName, setTableName] = useState("");

  const customerUrl =
    tableNumber || tableName
      ? `${window.location.origin}/customer/menu/${tableNumber}`
      : "";

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-4">Generate QR Code for Table</h2>

      <input
        type="number"
        placeholder="Enter Table Number"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />

      <input
        type="text"
        placeholder="Enter Table Name"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />

      {customerUrl && (
        <div className="text-center mt-4">
          <h3 className="mb-2 font-semibold">
            {tableName ? tableName : `Table #${tableNumber}`} QR Code
          </h3>

          {/* QR Code with table name in center */}
          <QRCodeCanvas
            value={customerUrl}
            size={200}
            imageSettings={{
              src: tableName
                ? `data:image/svg+xml;base64,${btoa(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                      <rect width="100" height="100" fill="white"/>
                      <text x="50%" y="50%" font-size="16" dominant-baseline="middle" text-anchor="middle" fill="black">${tableName}</text>
                    </svg>`
                  )}`
                : "",
              height: 60,
              width: 60,
              excavate: true, // clears QR pixels behind the image
            }}
          />

          <p className="mt-2 text-sm text-gray-500 break-all">{customerUrl}</p>
        </div>
      )}
    </div>
  );
};

export default AdminQRCodePage;
