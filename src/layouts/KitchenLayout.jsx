import React from "react";
import { Outlet } from "react-router-dom";

const KitchenLayout = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Kitchen Orders</h1>
      </header>

      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default KitchenLayout;
