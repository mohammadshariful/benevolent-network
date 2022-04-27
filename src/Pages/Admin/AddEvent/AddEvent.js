import axios from "axios";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "./AddEvent.css";
const AddEvent = () => {
  const addEventHandle = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const date = e.target.date.value;
    const description = e.target.description.value;
    const picture = e.target.picture.value;

    const event = { title, date, description, picture };
    console.log(event);
    axios.post("http://localhost:5000/event", event).then((data) => {
      toast.success("Successfully event added");
      e.target.reset();
    });
  };
  return (
    <div>
      <h3>Add Event</h3>
      <div className="event-container">
        <div className="add-event-container">
          <Form onSubmit={addEventHandle}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="EventTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Event Title"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="EventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  placeholder="Event Date"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Banner">
                <Form.Label>Banner</Form.Label>
                <Form.Control type="text" name="picture" placeholder="Banner" />
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
