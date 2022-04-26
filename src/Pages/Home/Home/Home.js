import React from "react";
import TitleChange from "../../Shared/TitleChange/TitleChange";
import Banner from "../Banner/Banner";
import Supports from "../Supports/Supports";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <TitleChange title="Home" />
      <Banner />
      <Supports />
    </div>
  );
};

export default Home;
