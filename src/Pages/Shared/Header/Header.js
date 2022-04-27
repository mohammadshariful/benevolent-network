import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "#FF7044" }}
          className="fw-bold fs-3"
        >
          Benevolent Network
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/events">Event</CustomLink>
            {user ? (
              <CustomLink to="/login" onClick={() => signOut(auth)}>
                LogOut
              </CustomLink>
            ) : (
              <CustomLink to="/login">LogIn</CustomLink>
            )}
            <CustomLink to="/register">SignUp</CustomLink>
            {user && <CustomLink to="/admin">Admin</CustomLink>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
