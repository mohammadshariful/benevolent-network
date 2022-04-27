import axios from "axios";
import React from "react";
import { Col } from "react-bootstrap";
import useEvents from "../../../Hooks/useEvents";
import TitleChange from "../../Shared/TitleChange/TitleChange";
import "./Event.css";
const Event = ({ event }) => {
  const { _id, title, date, description, picture } = event;
  const { events, setEvents } = useEvents();
  const handeDelete = async (id) => {
    const url = `http://localhost:5000/event/${id}`;
    const confrim = window.confirm("Are you sure want to delete?");

    if (confrim) {
      const { data } = await axios.delete(url);
      if (data.deletedCount > 0) {
        const remaing = events.filter((event) => event._id !== id);
        setEvents(remaing);
      }
    }
  };
  return (
    <Col md={4}>
      <TitleChange title="Event" />
      <div className=" event-container">
        <div className="event-img-container">
          <img className="img-fluid" src={picture} alt="" />
        </div>
        <div className="event-info">
          <h5>{title}</h5>
          <p>{description}</p>
          <p className="fw-bold mb-5">{date}</p>
          <button
            onClick={() => handeDelete(_id)}
            type="button"
            className="cancle-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </Col>
  );
};

export default Event;
