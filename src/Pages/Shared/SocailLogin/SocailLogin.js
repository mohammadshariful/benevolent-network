import React from "react";
import googleImg from "../../../Assets/social-icon/icons8-google-30.png";
import "./SocailLogin.css";
const SocailLogin = () => {
  return (
    <p className="d-flex justify-content-center align-items-center social-login social-login">
      <img src={googleImg} alt="" />
      <span>Continue with Google</span>
    </p>
  );
};

export default SocailLogin;
