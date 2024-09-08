import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const UiOffcanvas = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  // <Button variant="primary"  onClick={() => setOpen(!open)}>
  // <Offcanvas show={open} onHide={()=> setOpen(!open)}>
  return (
    <>
      <div id="content-page" className="content-inner">
        <Container>
          <Row>
            <Col sm={12}>
              <Card
                className="position-relative inner-page-bg bg-primary"
                style={{ height: "150px" }}
              >
                <div className="inner-page-title">
                  <h3 className="text-white">Offcanvas Page</h3>
                  <p className="text-white">lorem ipsum</p>
                </div>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <div className="header-title">
                    <h4 className="card-title">Offcanvas components</h4>
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <p>
                    Use the buttons below to show and hide an offcanvas element
                    via JavaScript that toggles the .show class on an element
                    with the .offcanvas class.
                  </p>
                  <ul className="list-inline p-0 m-0">
                    <li>
                      <code>.offcanvas</code> hides content (default)
                    </li>
                    <li>
                      <code>.offcanvas.show</code> shows content
                    </li>
                  </ul>
                  <Link
                    className="btn btn-primary"
                    data-bs-toggle="offcanvas"
                    to="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={() => setOpen(!open)}
                  >
                    Link with href
                  </Link>{" "}

                  <Button variant="primary" onClick={() => setOpen(!open)}>
                    Button with data-bs-target
                  </Button>
                  <Offcanvas show={open} onHide={() => setOpen(!open)}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <div>
                        Some text as placeholder. In real life you can have the
                        elements you have chosen. Like, text, images, lists,
                        etc.
                      </div>
                      <Dropdown className="mt-3">
                        <Dropdown.Toggle className="btn btn-secondary dropdown-toggle">
                          Dropdown button {" "}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Offcanvas.Body>
                  </Offcanvas>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <div className="header-title">
                    <h4 className="card-title">Offcanvas Link Or Dropdown</h4>
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <p>
                    Scrolling the element is disabled when an offcanvas and its
                    backdrop are visible. Use the data-bs-scroll attribute to
                    toggle scrolling and data-bs-backdrop to toggle the
                    backdrop.
                  </p>
                  <button
                    className="btn btn-primary mb-2"
                    type="button"
                    onClick={() => setOpen1(!open1)}
                  >
                    Enable body scrolling
                  </button>{" "}
                  <button
                    className="btn btn-primary mb-2"
                    type="button"
                    onClick={() => setOpen2(!open2)}
                  >
                    Enable backdrop (default)
                  </button>{" "}
                  <button
                    className="btn btn-primary mb-2 mb-lg-0"
                    type="button"
                    onClick={() => setOpen3(!open3)}
                  >
                    Enable both scrolling & backdrop
                  </button>
                  <Offcanvas
                    show={open1}
                    onHide={() => setOpen1(!open1)}
                    scroll={true}
                    backdrop={false}
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Colored With Scrolling</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Try scrolling the rest of the page to see this option in action.
                    </Offcanvas.Body>
                  </Offcanvas>
                  <Offcanvas show={open2} onHide={() => setOpen2(!open2)}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Offcanvas With Backdrop</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Try scrolling the rest of the page to see this option in action.
                    </Offcanvas.Body>
                  </Offcanvas>
                  <Offcanvas
                    show={open3}
                    onHide={() => setOpen3(!open3)}
                    scroll={true}
                    backdrop={true}
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Backdroped With Scrolling</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Try scrolling the rest of the page to see this option in action.
                    </Offcanvas.Body>
                  </Offcanvas>
                  <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasWithBackdrop"
                    aria-labelledby="offcanvasWithBackdropLabel"
                  >
                    <div className="offcanvas-header">
                      <h5
                        className="offcanvas-title"
                        id="offcanvasWithBackdropLabel"
                      >
                        Offcanvas with backdrop
                      </h5>
                      <div className="close-icon" data-bs-dismiss="offcanvas">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="offcanvas-body">
                      <p>
                        Try scrolling the rest of the page to see this option in
                        action.
                      </p>
                    </div>
                  </div>
                  <div
                    className="offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    tabIndex="-1"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                  >
                    <div className="offcanvas-header">
                      <h5
                        className="offcanvas-title"
                        id="offcanvasWithBothOptionsLabel"
                      >
                        Backdroped with scrolling
                      </h5>
                      <div className="close-icon" data-bs-dismiss="offcanvas">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="offcanvas-body">
                      <p>
                        Try scrolling the rest of the page to see this option in
                        action.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <div className="header-title">
                    <h4 className="card-title">Offcanvas Placement</h4>
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <p>
                    There’s no default placement for offcanvas components, so
                    you must add one of the modifier classes below;
                  </p>
                  <ul className="list-inline p-0">
                    <li>
                      <code>.offcanvas-start</code> places offcanvas on the left
                      of the viewport (shown above)
                    </li>
                    <li>
                      <code>.offcanvas.end</code> places offcanvas on the right
                      of the viewport
                    </li>
                    <li>
                      <code>.offcanvas.top</code> places offcanvas on the top of
                      the viewport
                    </li>
                    <li>
                      <code>.offcanvas.bottom</code> places offcanvas on the
                      bottom of the viewport
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary mb-2 "
                    type="button"
                    onClick={() => setOpen4(!open4)}
                  >
                    Toggle top offcanvas
                  </button>{" "}
                  <Offcanvas
                    show={open4}
                    onHide={() => setOpen4(!open4)}
                    placement="top"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title as="h5">Offcanvas top</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Try scrolling the rest of the page to see this option in action
                    </Offcanvas.Body>
                  </Offcanvas>
                  <button
                    className="btn btn-primary mb-2"
                    type="button"
                    onClick={() => setOpen5(!open5)}
                  >
                    Toggle right offcanvas
                  </button>{" "}<br />
                  <Offcanvas
                    show={open5}
                    onHide={() => setOpen5(!open5)}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title as="h5">Offcanvas right</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Try scrolling the rest of the page to see this option in action.
                    </Offcanvas.Body>
                  </Offcanvas>
                  <button
                    className="btn btn-primary mb-2 mb-lg-0"
                    type="button"
                    onClick={() => setOpen6(!open6)}
                  >
                    Toggle bottom offcanvas
                  </button>{" "}
                  <Offcanvas
                    show={open6}
                    onHide={() => setOpen6(!open6)}
                    placement="bottom"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Offcanvas Bottom</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="small">
                      Try scrolling the rest of the page to see this option in action.
                    </Offcanvas.Body>
                  </Offcanvas>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UiOffcanvas;
