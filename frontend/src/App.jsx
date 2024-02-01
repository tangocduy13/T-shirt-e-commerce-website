import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication.jsx";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";

const App = () => {
  return (
    <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path={"/authentication"} element={<Authentication />} />
      <Route path={"/products"} element={<ProductList />} />
    </Routes>
  );
};

export default App;
