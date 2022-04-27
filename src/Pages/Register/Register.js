import axios from "axios";
import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import SocailLogin from "../Shared/SocailLogin/SocailLogin";
import TitleChange from "../Shared/TitleChange/TitleChange";
import "./Register.css";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("successfully register", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [user]);

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const date = e.target.date.value;
    const organize = e.target.organize.value;
    const user = { name, email, password, date, organize };
    await createUserWithEmailAndPassword(email, password);
    axios
      .post("https://benevolent2022.herokuapp.com/user", user)
      .then((data) => {
        e.target.reset();
      });
  };

  return (
    <Container className="form-control-area">
      <TitleChange title="Signup" />
      <div className=" mx-auto form-container">
        <h2 className="text-center">Register as a Volunteer</h2>
        <Form onSubmit={handleRegisterForm} className="form mt-3">
          <Form.Group className="mb-3" controlId="name">
            <Form.Control type="text" name="name" placeholder="Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Control type="date" name="date" placeholder="Date" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desicription">
            <Form.Control
              type="text"
              name="description"
              placeholder="Desicription"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="organize">
            <Form.Control
              type="text"
              name="organize"
              placeholder="Organize books at the library."
              required
            />
          </Form.Group>
          {error && <p className="error">{error.message}</p>}
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
