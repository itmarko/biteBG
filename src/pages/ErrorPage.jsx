import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
      <p className="mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/customer/menu/1"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go to Customer Menu
      </Link>
    </div>
  );
};

export default ErrorPage;
