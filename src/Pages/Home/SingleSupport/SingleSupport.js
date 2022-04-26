import React from "react";
import { Col } from "react-bootstrap";
import "./SingleSupport.css";
const SingleSupport = ({ service }) => {
  const { picture } = service;
  const colors = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];
  const reandomColor = Math.floor(Math.random() * colors.length);

  return (
    <Col md={3} data-aos="fade-up">
      <div className=" mb-3 single-support-container">
        <div className="support-img">
          <img src={picture} className="img-fluid" alt="" />
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
