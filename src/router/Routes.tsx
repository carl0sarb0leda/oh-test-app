import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { ProtectRoute } from "./ProtectRoute";

const NotFound = () => {
  return <div>Not found</div>;
};
const LogIn = () => {
  return <div>Login</div>;
};
const Dashboard = () => {
  return <div>Dashboard</div>;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route index element={<LogIn />} />
        <Route
          path="dashboard"
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
