import { useState } from "react";

const UPIForm = () => {
  const [upiId, setUpiId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!upiId.trim()) {
      setMessage("Please enter a valid UPI ID.");
      return;
    }

    // Here you would send the UPI ID to your backend
    // For now, we just log it
    console.log("UPI ID submitted:", upiId);
    setMessage("UPI ID saved successfully!");
  };

  return (
    <div className="bg-white shadow rounded-xl p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Enter UPI ID</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your UPI ID (example@upi)"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save UPI ID
        </button>

        {message && (
          <p
            className={`mt-2 ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default UPIForm;
