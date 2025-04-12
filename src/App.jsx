import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePages";

const App = () => {
  const isAuthenticated = localStorage.getItem("cres-auth") === "true";

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
