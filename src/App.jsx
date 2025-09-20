import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment"
import Authentication from "./auth/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  );
};

export default App;
