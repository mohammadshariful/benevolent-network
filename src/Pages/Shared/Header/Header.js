import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="navbar-container"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Benevolent Network
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/donation">Donation</CustomLink>
            <CustomLink to="/event">Event</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <Link className="register" to="/register">
              Register
            </Link>
            <CustomLink to="/admin">Admin</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
