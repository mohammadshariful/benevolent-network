import React from "react";
import { Col } from "react-bootstrap";
import childImg from "../../../Assets/images/childSupport.png";
import "./SingleSupport.css";
const SingleSupport = () => {
  const colors = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];
  const reandomColor = Math.floor(Math.random() * colors.length);

  return (
    <Col md={3} data-aos="fade-up">
      <div className=" mb-3 single-support-container">
        <div className="support-img">
          <img src={childImg} className="img-fluid" alt="" />
        </div>
        <div
          style={{ backgroundColor: `${colors[reandomColor]}` }}
          className="content-area"
        >
          <h4>Child Support</h4>
        </div>
      </div>
    </Col>
  );
};

export default SingleSupport;
