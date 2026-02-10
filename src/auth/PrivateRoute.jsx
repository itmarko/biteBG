import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children, roles }) => {
  const { user } = useContext(AuthContext);

  /**
   * 🔧 DEV MODE BYPASS
   * Allow access without login while testing pages
   * Disable before production
   */
  const DEV_BYPASS = true;

  if (DEV_BYPASS) {
    return children;
  }

  // ===== REAL AUTH LOGIC =====
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Role-based access
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
