import { useParams } from "react-router-dom";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Payment = () => {
  const { orderId } = useParams();

  const savedOrder = JSON.parse(localStorage.getItem("currentOrder")) || {
    total: 0,
  };

  const total = savedOrder.total;

  const [mode, setMode] = useState(null);
  const [showQR, setShowQR] = useState(false);

  const upiId = "resturent@upi";

  const upiUrl = `upi://pay?pa=${upiId}&pn=Restaurant&tn=Order%20${orderId}&am=${total}&cu=INR`;

  /* ---------------- ONLINE PAYMENT ---------------- */
  const startOnlinePayment = () => {
    setMode("online");

    // try open UPI app
    window.location.href = upiUrl;

    // fallback QR after 5 seconds
    setTimeout(() => {
      setShowQR(true);
    }, 5000);
  };

  /* ---------------- CASH PAYMENT ---------------- */
  const handleCashPayment = () => {
    alert("Cash payment selected. Please pay at counter.");
    localStorage.removeItem("currentOrder");
  };

  /* ---------------- CONFIRM PAYMENT ---------------- */
  const confirmPayment = () => {
    alert(`Payment successful for Order #${orderId}`);
    localStorage.removeItem("currentOrder");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-4">💳 Payment</h1>

        <p className="text-lg mb-6">
          Total:
          <span className="text-green-600 font-semibold">
            ₹{total.toFixed(2)}
          </span>
        </p>

        {/* SELECT MODE */}
        {!mode && (
          <div className="space-y-3">
            <button
              onClick={startOnlinePayment}
              className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600"
            >
              Pay Online (UPI)
            </button>

            <button
              onClick={handleCashPayment}
              className="w-full py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-black"
            >
              Cash Payment
            </button>
          </div>
        )}

        {/* QR FALLBACK */}
        {mode === "online" && showQR && (
          <>
            <p className="text-sm text-gray-500 mb-3">
              Scan QR if payment app did not open
            </p>

            <div className="flex justify-center mb-4">
              <QRCodeCanvas value={upiUrl} size={180} />
            </div>

            <button
              onClick={confirmPayment}
              className="px-6 py-2 bg-green-500 text-white rounded-lg"
            >
              Confirm Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
