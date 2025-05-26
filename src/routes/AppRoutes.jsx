import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";
import Users from "../pages/User";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/dealers" element={<Dealers />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/delivery" element={<Delivery />} /> */}
        {/* <Route path="/billing" element={<Billing />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
