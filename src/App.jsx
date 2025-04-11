

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Apparel from "./pages/Apparel";
// import Accessories from "./pages/Accessories";
// import Digital from "./pages/Digital";
import Header from "./components/Header";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import PrivateRoute from "./PrivateRoute";
import WishList from "./pages/WishList";

// Inner component so we can use useLocation
const AppContent = () => {
  const location = useLocation();

  const hideHeaderFooter = location.pathname === "/login";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Apparel />} />
          {/* <Route path="/:category" element={<Accessories />} /> */}
          {/* <Route path="/:category" element={<Digital />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/WishList" element={<WishList/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
