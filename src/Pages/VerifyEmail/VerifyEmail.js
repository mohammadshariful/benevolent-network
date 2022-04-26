import React from "react";
import emailIcon from "../../Assets/social-icon/icons8-email-64.png";
import "./VerifyEmail.css";
const VerifyEmail = () => {
  return (
    <div className="verify-email-container ">
      <div className="verify-info">
        <img className="d-block mx-auto" src={emailIcon} alt="" />
        <h4>Thank you for signing in</h4>
        <h3>Verify your email address</h3>
        <p>
          Didn't get a email?Please click the button to verify agin your address
        </p>
        <button>Verify Email Address</button>
      </div>
    </div>
  );
};

export default VerifyEmail;
