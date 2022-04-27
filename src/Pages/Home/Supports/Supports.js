import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../Hooks/useServices";
import Loading from "../../Shared/Loading/Loading";
import SingleSupport from "../SingleSupport/SingleSupport";
import "./Supports.css";
const Supports = () => {
  const { services, isLoading } = useServices();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container className="supports-container">
          <Row className="d-flex justify-contnet-center align-items-center">
            {services.map((service) => (
              <SingleSupport key={service._id} service={service} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Supports;
