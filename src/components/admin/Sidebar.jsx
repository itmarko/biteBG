import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200";

  const activeLinkClass = "bg-gray-700"; // Highlighted background

  return (
    <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col">
      {/* Logo / Brand */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        BiteManager
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeLinkClass : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeLinkClass : ""}`
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/admin/menu"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeLinkClass : ""}`
          }
        >
          Menu
        </NavLink>

        <NavLink
          to="/admin/tables"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeLinkClass : ""}`
          }
        >
          Tables
        </NavLink>

        <NavLink
          to="/admin/staff"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeLinkClass : ""}`
          }
        >
          Staff
        </NavLink>

        <NavLink
          to="/admin/payments"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeLinkClass : ""}`
          }
        >
          Payments
        </NavLink>

        {/* QR Code Page */}
        <NavLink
          to="/admin/qr-codes"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeLinkClass : ""}`
          }
        >
          Table QR Codes
        </NavLink>
        <NavLink
          to="/admin/payment-settings"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeLinkClass : ""}`
          }
        >
          Payment Settings
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-sm">
        © 2026 BiteManager
      </div>
    </aside>
  );
};

export default Sidebar;
