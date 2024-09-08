import React, { useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

//Choice js 
import ChoicesJs from "../../../components/choices";

//css
import "./email-compose.css";
import Select from "react-select";

//select
const options = [
  { value: "Petey Cruiser", label: "Petey Cruiser" },
  { value: "Bob Frapples", label: "Bob Frapples" },
  { value: "Barb Ackue", label: "Barb Ackue" },
  { value: "Greta Life", label: "Greta Life" },
];

const options2 = [
  { value: "Brock Lee", label: "Brock Lee" },
  { value: "Rick O'Shea", label: "Rick O'Shea" },
  { value: "Cliff Hanger", label: "Cliff Hanger" },
  { value: "Barb Dwyer", label: "Barb Dwyer" },
];


const EmailCompose = () => {
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChange1 = (e) => {
    setSelectedValue1(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  return (
    <>
      <div id="content-page" className="content-inner">
        <Container className="relative">
          <Row className="row-eq-height">
            <Col md="12">
              <Row>
                <Col md="12">
                  <Card className="iq-border-radius-20">
                    <Card.Body>
                      <Row>
                        <Col md="12" className="mb-3">
                          <h5 className="text-primary card-title d-flex gap-1">
                            <span className="material-symbols-outlined">drive_file_rename_outline</span>
                            Compose Message
                          </h5>
                        </Col>
                      </Row>
                      <Form className="email-form">
                        <Row className="form-group">
                          <Form.Label
                            column
                            sm="2"
                            htmlFor="to"
                            className="col-form-label"
                          >
                            To:
                          </Form.Label>
                          <Col sm="10">
                            <Select
                              className="dropdown"
                              placeholder=""
                              value={options.filter((obj) =>
                                selectedValue.includes(obj.value)
                              )}
                              options={options}
                              onChange={handleChange}
                              isMulti
                              isClearable
                            />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Form.Label
                            column
                            sm="2"
                            htmlFor="cc"
                            className="col-form-label"
                          >
                            Cc:
                          </Form.Label>
                          <Col sm="10">
                            <Select
                              className="dropdown"
                              placeholder=""
                              value={options2.filter((obj) =>
                                selectedValue1.includes(obj.value)
                              )}
                              options={options2}
                              onChange={handleChange1}
                              isMulti
                              isClearable
                            />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Form.Label
                            column
                            sm="2"
                            htmlFor="subject"
                            className="col-form-label"
                          >
                            Subject:
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" id="subject" />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Form.Label
                            htmlFor="subject"
                            column
                            sm="2"
                            className="col-form-label"
                          >
                            Your Message:
                          </Form.Label>
                          <Col md="10">
                            <Form.Control
                              as="textarea"
                              className="textarea"
                              rows={5}
                              defaultValue="Next, use our Get Started docs to setup Tiny!"
                            />
                          </Col>
                        </Row>
                        <Form.Group className="form-group d-flex justify-content-between align-items-center compose-bottom pt-3 m-0">
                          <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                            <div className="send-btn">
                              <button type="button" className="btn btn-primary">
                                Send
                              </button>
                            </div>
                            <div className="send-panel">
                              <Form.Label
                                className="ms-2 mb-0 bg-primary-subtle rounded"
                                htmlFor="file"
                              >
                                {" "}
                                <Form.Control
                                  type="file"
                                  id="file"
                                  style={{ display: "none" }}
                                />
                                <Link
                                  to="#"
                                  className="material-symbols-outlined writ-icon text-primary"
                                >
                                  attachment
                                </Link>
                              </Form.Label>{" "}
                              <Form.Label className="ms-2 mb-0 bg-primary-subtle rounded">
                                {" "}
                                <Link
                                  to="#"
                                  className="material-symbols-outlined text-primary"
                                >
                                  place
                                </Link>
                              </Form.Label>{" "}
                              <Form.Label className="ms-2 mb-0 bg-primary-subtle rounded">
                                {" "}
                                <Link
                                  to="#"
                                  className="material-symbols-outlined text-primary"
                                >
                                  add_to_drive
                                </Link>{" "}
                              </Form.Label>{" "}
                              <Form.Label className="ms-2 mb-0 bg-primary-subtle rounded">
                                {" "}
                                <Link
                                  to="#"
                                  className="material-symbols-outlined text-primary"
                                >
                                  photo_camera
                                </Link>{" "}
                              </Form.Label>{" "}
                              <Form.Label className="ms-2 mb-0 bg-primary-subtle rounded">
                                {" "}
                                <Link
                                  to="#"
                                  className="material-symbols-outlined text-primary"
                                >
                                  sentiment_satisfied
                                </Link>{" "}
                              </Form.Label>{" "}
                            </div>
                          </div>
                          <div className="d-flex mr-3 align-items-center">
                            <div className="send-panel float-right">
                              <Form.Label className="ms-2 mb-0 bg-primary-subtle rounded">
                                <Link
                                  to="#"
                                  className="material-symbols-outlined text-primary"
                                >
                                  settings
                                </Link>
                              </Form.Label>{" "}
                              <Form.Label className="ms-2 mb-0 bg-primary-subtle rounded">
                                <Link
                                  to="#"
                                  className="material-symbols-outlined"
                                >
                                  delete
                                </Link>{" "}
                              </Form.Label>{" "}
                            </div>
                          </div>
                        </Form.Group>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EmailCompose;
