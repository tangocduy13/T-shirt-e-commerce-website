import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location.state);
};

export default Home;
