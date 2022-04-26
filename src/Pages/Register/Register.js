import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocailLogin from "../Shared/SocailLogin/SocailLogin";
import "./Register.css";
const Register = () => {
  return (
    <Container className="form-control-area">
      <div className=" mx-auto form-container">
        <h2 className="text-center">Register as a Volunteer</h2>
        <Form className="form mt-3">
          <Form.Group className="mb-3" controlId="name">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Control type="text" placeholder="Date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desicription">
            <Form.Control type="text" placeholder="Desicription" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="organize">
            <Form.Control
              type="text"
              placeholder="Organize books at the library."
            />
          </Form.Group>
          <button className="w-100 d-block btn-submit" type="submit">
            Registration
          </button>
        </Form>
        <div className="my-3 ">
          <SocailLogin />
          <p>
            Already have an account?
            <Link to="/login">LogIn</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Register;
