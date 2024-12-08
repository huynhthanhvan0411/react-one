import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));
const Dashboard = React.lazy(() => import("../pages/DashBoard"));
const Order = React.lazy(() => import("../pages/Order"));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/order"
        element={
          <Suspense fallback={<div>Loading Order...</div>}>
            <Order />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
