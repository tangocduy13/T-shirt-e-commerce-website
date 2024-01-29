import "./App.css";
import React from "react";

import Authentication from "./pages/authentication/Authentication.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path={"/authentication"} element={<Authentication />} />
    </Routes>
  );
};

export default App;
