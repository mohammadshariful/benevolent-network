import React from "react";
import { Container, Row } from "react-bootstrap";
import useEvents from "../../../Hooks/useEvents";
import Event from "../Event/Event";
import "./Events.css";

const Events = () => {
  const { events } = useEvents();
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center mx-auto">
        {events.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </Row>
    </Container>
  );
};

export default Events;
