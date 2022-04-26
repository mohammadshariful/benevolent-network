import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocailLogin from "../Shared/SocailLogin/SocailLogin";
import TitleChange from "../Shared/TitleChange/TitleChange";
const Login = () => {
  return (
    <Container className="form-control-area">
      <TitleChange title="Login" />

      <div className=" mx-auto form-container">
        <h2 className="text-center">Login Benevolent Network</h2>
        <Form className="form mt-3">
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button className="w-100 d-block btn-submit" type="submit">
            Login
          </button>
        </Form>
        <p
          style={{ cursor: "pointer", color: "#ff7044" }}
          className="text-end mt-2"
        >
          Forget your password?
        </p>
        <div className="my-3 ">
          <SocailLogin />
          <p>
            Don't have an account?
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
