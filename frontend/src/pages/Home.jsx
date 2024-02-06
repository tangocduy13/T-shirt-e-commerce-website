import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/NavbarMenu.jsx";

const Home = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
