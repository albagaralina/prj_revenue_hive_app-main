import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

//image
import error2 from "../../../assets/images/error/02.png";

const Maintenance = () => {
  return (
    <>
      {/* <div className="wrapper"> */}
      <div className="iq-maintenance mt-4 mt-md-5 mt-lg-0">
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center auto-vh-100">
            <div className="iq-maintenance">
              <div className="text-center">
                <img src={error2} className="img-fluid" alt="" loading="lazy" />
              </div>
              <h3 className="mt-4 mb-1 text-center">
                We are Currently Performing Maintenance
              </h3>
              <p className="text-center">Please check back in sometime.</p>
            </div>
            <Row className="mt-3">
              <Col lg={4} md={6}>
                <Card className="text-center">
                  <Card.Body>
                    <i className="material-symbols-outlined text-primary md-64">
                      dvr
                    </i>
                    <h5 className="card-title mt-1 text-center">
                      Why is the Site Down?
                    </h5>
                    <p className="mb-0 text-center">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center">
                  <Card.Body>
                    <i className="material-symbols-outlined text-primary md-64">
                      history{" "}
                    </i>
                    <h5 className="card-title mt-1 text-center">
                      What is the Downtime?
                    </h5>
                    <p className="mb-0 text-center">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center">
                  <Card.Body>
                    <i className="material-symbols-outlined text-primary md-64">
                      info
                    </i>
                    <h5 className="card-title mt-1 text-center">
                      Do you need Support?
                    </h5>
                    <p className="mb-0 text-center">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* </div> */}
    </>
  );
};

export default Maintenance;
