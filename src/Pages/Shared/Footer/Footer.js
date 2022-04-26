import React from "react";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <div className="bg-dark text-white py-3 mt-4 text-center">
      <p>&copy; copyright {fullYear} all rights reserved.</p>
      <h6>Development by &hearts; Mohammad Shariful</h6>
    </div>
  );
};

export default Footer;
