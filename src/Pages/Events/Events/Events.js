import React from "react";
import { Container, Row } from "react-bootstrap";
import Event from "../Event/Event";
import "./Events.css";
const events = [1, 2, 3, 4];
const Events = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center mx-auto">
        {events.map((arr) => (
          <Event />
        ))}
      </Row>
    </Container>
  );
};

export default Events;
