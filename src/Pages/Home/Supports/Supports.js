import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleSupport from "../SingleSupport/SingleSupport";
import "./Supports.css";
const Supports = () => {
  const arr = [1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <Container className="supports-container">
      <Row className="d-flex justify-contnet-center align-items-center">
        {arr.map((ar) => (
          <SingleSupport />
        ))}
      </Row>
    </Container>
  );
};

export default Supports;
