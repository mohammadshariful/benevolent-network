import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../Hooks/useServices";
import Loading from "../../Shared/Loading/Loading";
import SingleSupport from "../SingleSupport/SingleSupport";
import "./Supports.css";
const Supports = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const { services, isLoading } = useServices({ page, size });

  /* ------------------------------------------------------ */
  useEffect(() => {
    const count = async () => {
      const { data } = await axios.get(
        "https://benevolent2022.herokuapp.com/servicesCount"
      );
      const count = data.count;
      const page = Math.ceil(count / 6);
      setPageCount(page);
    };
    count();
  }, []);

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
          <div className="pagination-container text-center">
            {[...Array(pageCount).keys()].map((number, index) => (
              <button
                key={index}
                className={page === number ? "selected" : ""}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
            <select onChange={(e) => setSize(e.target.value)}>
              <option value="5" selected>
                5
              </option>

              <option value="10">10</option>
            </select>
          </div>
        </Container>
      )}
    </>
  );
};

export default Supports;
