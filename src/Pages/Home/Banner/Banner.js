import React from "react";
import TypeAnimation from "react-type-animation";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="overly-bg">
        <div className="banner-contnet">
          <TypeAnimation
            cursor={true}
            sequence={["I GROW BY HELPING PEOPLE IN NEED.", 5000, ""]}
            wrapper="h1"
            repeat={Infinity}
          />
          {/* <h1>I GROW BY HELPING PEOPLE IN NEED</h1> */}
          <form>
            <div className="input-group">
              <input type="text" name="" placeholder="Search" />
              <button type="submit" className="submit-btn">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
