// src/pages/customer/Payment.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Payment = () => {
  const { orderId } = useParams();

  const savedOrder = JSON.parse(localStorage.getItem("currentOrder")) || {
    total: 0,
  };
  const [total] = useState(savedOrder.total);

  const upiId = "9179026397@upi";
  const upiUrl = `upi://pay?pa=${upiId}&pn=Restaurant&tn=Order%20${orderId}&am=${total}&cu=INR`;

  const handlePayment = () => {
    alert(
      `Payment of ₹${total.toFixed(2)} successful for order #${orderId}! (Simulated)`,
    );
    localStorage.removeItem("currentOrder");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 p-4">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-6 max-w-sm w-full text-center transform transition-transform hover:scale-105 hover:shadow-3xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">💳 Payment</h1>
        <p className="text-lg mb-4 text-gray-700">
          Total:{" "}
          <span className="text-green-500 font-semibold">
            ₹{total.toFixed(2)}
          </span>
        </p>

        {/* QR Code centered */}
        <div className="mb-4 flex justify-center p-4 bg-white/70 rounded-xl shadow-inner">
          <QRCodeCanvas value={upiUrl} size={180} />
        </div>

        <p className="text-xs text-gray-500 break-all mb-6 px-2">{upiUrl}</p>

        <button
          onClick={handlePayment}
          className="relative inline-block px-8 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-green-400 to-green-600 shadow-lg overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></span>
          <span className="relative">Confirm Payment</span>
        </button>
      </div>
    </div>
  );
};

export default Payment;
