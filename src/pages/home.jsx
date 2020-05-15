import React from "react";
import Header from "../components/header/header";
import Sandbox from "../components/svgsandbox/sandbox";
import Sandbox1 from "../components/svgsandbox/snadbox1";
import "./pages.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Sandbox />
      <Sandbox1 />
    </div>
  );
};

export default Home;
