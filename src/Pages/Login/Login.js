import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import SocailLogin from "../Shared/SocailLogin/SocailLogin";
import TitleChange from "../Shared/TitleChange/TitleChange";

const Login = () => {
  const [email, setEmail] = useState("");
  const [signInWithEmailAndPassword, user, , error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("successfully Login", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  const forgetPasswordHandle = async (e) => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("email sent", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("please enter email", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <Container className="form-control-area">
      <TitleChange title="Login" />

      <div className=" mx-auto form-container">
        <h2 className="text-center">Login Benevolent Network</h2>
        <Form onSubmit={handleLogin} className="form mt-3">
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              onBlur={handleEmail}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {error && <p className="error">{error.message}</p>}
          <button className="w-100 d-block btn-submit" type="submit">
            Login
          </button>
        </Form>
        <p
          onClick={forgetPasswordHandle}
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
