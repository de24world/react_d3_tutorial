import React from "react";
import Header from "../components/header/header";
import Sandbox from "../components/svgsandbox/sandbox";
import "./pages.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Sandbox />
    </div>
  );
};

export default Home;
