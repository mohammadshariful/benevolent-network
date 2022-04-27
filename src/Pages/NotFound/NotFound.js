import React from "react";
import { Container } from "react-bootstrap";
import notFounImg from "../../Assets/img/notfound.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <Container className="notFoundImg-container my-5">
      <div>
        <img className="img-fluid notFoundImg" src={notFounImg} alt="" />
        <h2>Oops,looks like the page is lost.</h2>
        <p>This is not a fault,just an accident that was not intentional</p>
      </div>
    </Container>
  );
};

export default NotFound;
