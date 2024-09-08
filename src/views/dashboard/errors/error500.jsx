import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// img
import error500Light from "../../../assets/images/error/505-light.png";
import error505 from "../../../assets/images/error/505.png";

const Error500 = () => {
  return (
    <>
      <Container className="p-0">
        <Row className=" no-gutters vh-100">
          <Col sm={12} className="text-center align-self-center">
            <div className="iq-error position-relative mt-5">
              <img
                src={error500Light}
                className="img-fluid iq-error-img img-light center"
                alt="light img"
              />
              <img
                src={error505}
                className="img-fluid iq-error-img img-dark center"
                alt="dark img"
              />
              <h2 className="mb-0 text-center">
                Oops! This Page is Not Working.
              </h2>
              <p className="text-center">
                The requested is Internal Server Error.
              </p>
              <Link className="btn btn-primary mt-3" to="/">
                <span className="d-flex align-items-center">
                  <i className="material-symbols-outlined md-18 me-1">home</i>
                  Back to Home
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error500;
