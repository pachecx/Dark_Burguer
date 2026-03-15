import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import MenuPage from "../pages/Menu";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
