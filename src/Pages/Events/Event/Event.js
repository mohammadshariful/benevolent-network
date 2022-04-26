import React from "react";
import { Col } from "react-bootstrap";
import eventImg from "../../../Assets/images/clothSwap.png";
import "./Event.css";
const Event = () => {
  return (
    <Col md={4}>
      <div className=" event-container">
        <div className="event-img-container">
          <img className="img-fluid" src={eventImg} alt="" />
        </div>
        <div className="event-info">
          <h5>Humanity More</h5>
          <p className="fw-bold">29 sep,2020</p>
          <button type="button" className="cancle-btn">
            Cancel
          </button>
        </div>
      </div>
    </Col>
  );
};

export default Event;
