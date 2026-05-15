import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import MenuPage from "../pages/Menu";
import Register from "../pages/Register";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Address from "../pages/address";
import Checkout from "../pages/Checkout";
import CartItem from "../pages/CartItem";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/address" element={<Address />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ResetPasswordPage />} />
    </Routes>
  );
};

export default AppRoutes;
