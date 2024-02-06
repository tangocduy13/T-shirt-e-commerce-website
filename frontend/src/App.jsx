import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication.jsx";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import UserProfile from "./pages/UserProfile.jsx";

const App = () => {
  return (
    <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path={"/authentication"} element={<Authentication />} />
      <Route path={"/products"} element={<ProductList />} />
      <Route path={"/profile"} element={<UserProfile />} />
    </Routes>
  );
};

export default App;
