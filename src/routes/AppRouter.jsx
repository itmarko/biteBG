import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "../auth/AuthProvider";
import PrivateRoute from "../auth/PrivateRoute";

// Layouts
import BiteManagerLayout from "../layouts/BiteManagerLayout";
import AdminLayout from "../layouts/AdminLayout";
import KitchenLayout from "../layouts/KitchenLayout";
import CustomerLayout from "../layouts/CustomerLayout";

// Pages (Marko/Admin/Kitchen/Customer)
import BiteManagerLogin from "../auth/login/BiteManagerLogin";
import AdminLogin from "../auth/login/AdminLogin";
import KitchenLogin from "../auth/login/KitchenLogin";
import ErrorPage from "../pages/ErrorPage";

// import MarkoDashboard from "../pages/marko/Dashboard";
// import CompaniesList from "../pages/marko/CompaniesList";
// import Stats from "../pages/marko/Stats";

import AdminDashboard from "../pages/admin/Dashboard";
import QRCodePage from "../pages/admin/AdminQRCodePage";
import Payment from "../components/admin/PaymentSettings";
// import AdminMenu from "../pages/admin/Menu";
// import AdminTables from "../pages/admin/Tables";
// import AdminOrders from "../pages/admin/Orders";

// import KitchenOrders from "../pages/kitchen/Orders";

import CustomerMenu from "../pages/customer/CustomerMenu";
import CustomerOrder from "../pages/customer/Order";
import CustomerPayment from "../pages/customer/Payment";
import CustomerForm from "../components/customer/form/CustomerForm";

const AppRouter = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        LOGIN ROUTES
        <Route path="/login/marko" element={<BiteManagerLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/kitchen" element={<KitchenLogin />} />
        {/* MARKO ROUTES */}
        <Route
          path="/bite-manager"
          element={
            <PrivateRoute roles={["MARKO"]}>
              <BiteManagerLayout />
            </PrivateRoute>
          }
        >
          {/* <Route path="dashboard" element={<MarkoDashboard />} />
          <Route path="companies" element={<CompaniesList />} />
          <Route path="stats" element={<Stats />} />
          <Route index element={<Navigate to="dashboard" replace />} /> */}
        </Route>
        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <PrivateRoute roles={["ADMIN"]}>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="qr-codes" element={<QRCodePage />} />
          <Route path="payment-settings" element={<Payment />} />
          {/* <Route path="menu" element={<AdminMenu />} />
          <Route path="tables" element={<AdminTables />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route index element={<Navigate to="dashboard" replace />} /> */}
        </Route>
        {/* KITCHEN ROUTES */}
        <Route
          path="/kitchen"
          element={
            <PrivateRoute roles={["KITCHEN"]}>
              <KitchenLayout />
            </PrivateRoute>
          }
        >
          {/* <Route path="orders" element={<KitchenOrders />} />
          <Route index element={<Navigate to="orders" replace />} /> */}
        </Route>
        {/* CUSTOMER ROUTES (PUBLIC) */}
        <Route path="/customer" element={<CustomerLayout />}>
          <Route path="register" element={<CustomerForm />} />
          <Route path="menu/:tableId" element={<CustomerMenu />} />
          <Route path="order/:orderId" element={<CustomerOrder />} />
          <Route path="payment/:orderId" element={<CustomerPayment />} />
        </Route>
        {/* DEFAULT ROUTE */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default AppRouter;
