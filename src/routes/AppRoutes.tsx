import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import MenuPage from "../pages/Menu";
import Register from "../pages/Register";
import ResetPasswordPage from "../pages/ResetPasswordPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgotPassword" element={<ResetPasswordPage />} />
    </Routes>
  );
};

export default AppRoutes;
