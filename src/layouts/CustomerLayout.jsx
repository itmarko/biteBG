import React from "react";
import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <header className="mb-4">
        <h1 className="text-xl font-semibold text-gray-700">BiteBG</h1>
      </header>

      <section>
        <Outlet />
      </section>
      {/* Optional footer */}
      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; 2026 BiteBG
      </footer>
    </div>
  );
};

export default CustomerLayout;
