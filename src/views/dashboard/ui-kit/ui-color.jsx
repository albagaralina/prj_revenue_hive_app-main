import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const UiColors = () => {
  return (
    <>
      <div id="content-page" className="content-inner">
        <Container>
          <Row>
            <Col sm={12}>
              <div
                className="card position-relative inner-page-bg bg-primary"
                style={{ height: "150px" }}
              >
                <div className="inner-page-title">
                  <h3 className="text-white">Color Page</h3>
                  <p className="text-white">lorem ipsum</p>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">SocialV Color</h4>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <p>
                    Similar to the contextual text color classes, easily set the
                    background of an element to any contextual class. Anchor
                    components will darken on hover, just like the text classes.
                    Background utilities{" "}
                    <strong>
                      do not set <code>color</code>
                    </strong>
                    , so in some cases you’ll want to use <code>.text-*</code>{" "}
                    utilities.
                  </p>
                  <Row className="mt-4">
                    <Col lg={2} md={6} className="text-center mt-5 mt-lg-0">
                      <p className="bg-primary pt-5 pb-5 text-center rounded"></p>
                      <h6>Primary</h6>
                    </Col>{" "}
                    <Col lg={2} md={6} className="text-center mt-5 mt-lg-0">
                      <p className="bg-secondary pt-5 pb-5 text-center rounded"></p>
                      <h6>Secondary</h6>
                    </Col>
                    <Col lg={2} md={6} className="text-center mt-5 mt-lg-0">
                      <p className="bg-success pt-5 pb-5 text-center rounded"></p>
                      <h6>Success</h6>
                    </Col>
                    <Col lg={2} md={6} className="text-center mt-5 mt-lg-0">
                      <p className="bg-danger pt-5 pb-5 text-center rounded"></p>
                      <h6>Danger</h6>
                    </Col>
                    <Col lg={2} md={6} className="text-center mt-5 mt-lg-0">
                      <p className="bg-warning pt-5 pb-5 text-center rounded"></p>
                      <h6>Warning</h6>
                    </Col>
                    <Col lg={2} md={6} className="text-center mt-5 mt-lg-0">
                      <p className="bg-info pt-5 pb-5 text-center rounded"></p>
                      <h6>Info</h6>
                    </Col>
                    <Col lg={2} md={6} className="text-center mt-5 mt-lg-4">
                      <p className="bg-light pt-5 pb-5 text-center rounded"></p>
                      <h6>Light</h6>
                    </Col>
                    <Col lg={2} md={6} className="text-center mt-5 mt-lg-4">
                      <p className="bg-dark pt-5 pb-5 text-center rounded"></p>
                      <h6>Dark</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">SocialV Color</h4>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <p>
                    Similar to the contextual text color classes, easily set the
                    background of an element to any contextual class. Anchor
                    components will darken on hover, just like the text classes.
                    Background utilities{" "}
                    <strong>
                      do not set <code>color</code>
                    </strong>
                    , so in some cases you’ll want to use <code>.text-*</code>{" "}
                    utilities.
                  </p>
                  <Row className="mt-4">
                    <Col lg={2} md={6} className="text-center">
                      <p className="bg-primary-subtle text-primary pt-3 pb-3 text-center rounded font-size-18">
                        Primary
                      </p>
                    </Col>
                    <Col lg={2} md={6} className="text-center">
                      <p className="bg-secondary-subtle text-secondary pt-3 pb-3 text-center rounded font-size-18">
                        Secondary
                      </p>
                    </Col>
                    <Col lg={2} md={6} className="text-center">
                      <p className="bg-success-subtle text-success pt-3 pb-3 text-center rounded font-size-18">
                        Success
                      </p>
                    </Col>
                    <Col lg={2} md={6} className="text-center">
                      <p className="bg-danger-subtle text-danger pt-3 pb-3 text-center rounded font-size-18">
                        Danger
                      </p>
                    </Col>
                    <Col lg={2} md={6} className="text-center">
                      <p className="bg-warning-subtle text-warning pt-3 pb-3 text-center rounded font-size-18">
                        Warning
                      </p>
                    </Col>
                    <Col lg={2} md={6} className="text-center">
                      <p className="bg-info-subtle text-info pt-4 pb-3 tex3-center rounded font-size-18">
                        Info
                      </p>
                    </Col>
                    <Col lg={2} md={6} className="text-center">
                      <p className="bg-dark-subtle text-dark pt-4 pb-3 tex3-center rounded font-size-18 text-white">
                        Dark
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">SocialV Text Color</h4>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <p>
                    Contextual text classes also work well on anchors with the
                    provided hover and focus states.{" "}
                    <strong>
                      Note that the <code>.text-white</code> and{" "}
                      <code>.text-muted</code> class has no additional link
                      styling beyond underline.
                    </strong>
                  </p>
                  <p className="text-primary">.text-primary</p>
                  <p className="text-secondary">.text-secondary</p>
                  <p className="text-success">.text-success</p>
                  <p className="text-danger">.text-danger</p>
                  <p className="text-warning">.text-warning</p>
                  <p className="text-info">.text-info</p>
                  <p className="text-light bg-dark">.text-light</p>
                  <p className="text-dark">.text-dark</p>
                  <p className="text-muted">.text-muted</p>
                  <p className="text-white bg-dark">.text-white</p>
                  <p className="text-black-50">.text-black-50</p>
                  <p className="text-white-50 bg-dark mb-0">.text-white-50</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">SocialV Text Color</h4>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <p>
                    Contextual text classes also work well on anchors with the
                    provided hover and focus states.{" "}
                    <strong>
                      Note that the <code>.text-white</code> and{" "}
                      <code>.text-muted</code> class has no additional link
                      styling beyond underline.
                    </strong>
                  </p>
                  <p>
                    <Link to="#" className="text-primary">
                      Primary link
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-secondary">
                      Secondary link
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-success">
                      Success link
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-danger">
                      Danger link
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-warning">
                      Warning link
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-info">
                      Info link
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-light bg-dark">
                      Light link
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-dark">
                      Dark link
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-muted">
                      Muted link
                    </Link>
                  </p>
                  <p className="mb-0">
                    <Link to="#" className="text-white bg-dark">
                      White link
                    </Link>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">SocialV Text Color</h4>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <p>
                    Contextual text classes also work well on anchors with the
                    provided hover and focus states.{" "}
                    <strong>
                      Note that the <code>.text-white</code> and{" "}
                      <code>.text-muted</code> class has no additional link
                      styling beyond underline.
                    </strong>
                  </p>
                  <p className="bg-primary-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                    Primary link
                  </p>
                  <p className="bg-secondary-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                    Secondary link
                  </p>
                  <p className="bg-success-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                    Success link
                  </p>
                  <p className="bg-danger-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                    Danger link
                  </p>
                  <p className="bg-warning-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                    Warning link
                  </p>
                  <p className="bg-info-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                    Info link
                  </p>
                  <p className="bg-dark-subtle ps-3 pe-3 pt-2 pb-2 rounded mb-0">
                    Dark link
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">SocialV Text Color</h4>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <p>
                    Contextual text classes also work well on anchors with the
                    provided hover and focus states.{" "}
                    <strong>
                      Note that the <code>.text-white</code> and{" "}
                      <code>.text-muted</code> class has no additional link
                      styling beyond underline.
                    </strong>
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="bg-primary-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                    >
                      Primary link
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="bg-secondary-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                    >
                      Secondary link
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="bg-success-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                    >
                      Success link
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="bg-danger-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                    >
                      Danger link
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="bg-warning-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                    >
                      Warning link
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="bg-info-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                    >
                      Info link
                    </Link>
                  </p>
                  <p className="mb-0">
                    <Link
                      to="#"
                      className="bg-dark-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                    >
                      Dark link
                    </Link>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UiColors;
