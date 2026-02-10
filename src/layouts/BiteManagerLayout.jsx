import React from "react";
import { Link, Outlet } from "react-router-dom";

const BiteManager = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">BiteManager - Marko</h1>
        <nav className="flex flex-col gap-3">
          <Link className="hover:text-yellow-300" to="/marko/dashboard">
            Dashboard
          </Link>
          <Link className="hover:text-yellow-300" to="/marko/companies">
            Companies
          </Link>
          <Link className="hover:text-yellow-300" to="/marko/stats">
            Stats
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default BiteManager;
