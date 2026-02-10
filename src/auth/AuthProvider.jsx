import React, { createContext, useState, useEffect } from "react";
import * as jwtDecode from "jwt-decode"; // works with jwt-decode@3

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    /**
     * 🔧 DEV MODE ONLY
     * Auto-login as ADMIN to test pages
     * Comment this block before production
     */
    const DEV_AUTO_LOGIN = true;

    if (DEV_AUTO_LOGIN) {
      setUser({
        id: "dev-admin",
        name: "Admin Tester",
        role: "ADMIN",
      });
      return; // skip JWT logic
    }

    // ===== REAL AUTH LOGIC =====
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = (token) => {
    try {
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.error("Invalid token:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
