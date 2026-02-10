import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to BiteBG
        </h1>

        <p className="text-gray-500">
          Scan QR • Order Food • Pay Easily
        </p>

        {/* Default Customer Button */}
        <button
          onClick={() => navigate("/customer/register")}
          className="
            px-6 py-3 rounded-lg
            border border-gray-300
            bg-white text-black font-medium
            transition-all duration-300
            shadow-sm
            hover:-translate-x-1 hover:-translate-y-1
            hover:shadow-[6px_6px_0px_#969696]
          "
        >
          Start Order
        </button>
      </div>
    </div>
  );
};

export default Home;
