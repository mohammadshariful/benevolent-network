import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./AddEvent.css";
const AddEvent = () => {
  return (
    <div>
      <h3>Add Event</h3>
      <div className="event-container">
        <div className="add-event-container">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="EventTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text" placeholder="Event Title" />
              </Form.Group>

              <Form.Group as={Col} controlId="EventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="date" placeholder="Event Date" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="email" placeholder="Description" />
              </Form.Group>

              <Form.Group as={Col} controlId="Banner">
                <Form.Label>Banner</Form.Label>
                <Form.Control type="text" placeholder="Banner" />
              </Form.Group>
            </Row>
            <button type="submit" className="btn btn-primary  ">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
