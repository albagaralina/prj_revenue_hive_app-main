import React from "react";
import { Col, Modal, Row } from "react-bootstrap";

// img
import embed from "../assets/images/icon/embed.png";
import whatsapp from "../assets/images/icon/whatsapp.png";
import facebook from "../assets/images/icon/facebook.png";
import twitter from "../assets/images/icon/twitter.png";
import pinterest from "../assets/images/icon/pinterest.png";
import linkdin from "../assets/images/icon/linkedin.png";

import { Link } from "react-router-dom";

const ShareOffcanvasNew = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="sharemodal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="modal-title" id="share-btnLabel">
              Share
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mt-4">
          <Row className="gy-3">
            <Col lg={2} sm={4} className="col-6 text-center">
              <Link to="#" className="d-inline-block">
                <span className="image">
                  <img src={embed} className="img-fluid" alt="social-images" />
                </span>
                <h6 className="mt-2 mb-0 font-size-14 fw-semibold">Embed</h6>
              </Link>
            </Col>
            <Col lg={2} sm={4} className="col-6 text-center">
              <Link to="#" className="d-inline-block">
                <span className="image">
                  <img
                    src={whatsapp}
                    className="img-fluid"
                    alt="social-images"
                  />
                </span>
                <h6 className="mt-2 mb-0 font-size-14 fw-semibold">WhatsApp</h6>
              </Link>
            </Col>
            <Col lg={2} sm={4} className="col-6 text-center">
              <Link to="#" className="d-inline-block">
                <span className="image">
                  <img
                    src={facebook}
                    className="img-fluid"
                    alt="social-images"
                  />
                </span>
                <h6 className="mt-2 mb-0 font-size-14 fw-semibold">Facebook</h6>
              </Link>
            </Col>
            <Col lg={2} sm={4} className="col-6 text-center">
              <Link to="#" className="d-inline-block">
                <span className="image">
                  <img
                    src={twitter}
                    className="img-fluid"
                    alt="social-images"
                  />
                </span>
                <h6 className="mt-2 mb-0 font-size-14 fw-semibold">Twitter</h6>
              </Link>
            </Col>
            <Col lg={2} sm={4} className="col-6 text-center">
              <Link to="#" className="d-inline-block">
                <span className="image">
                  <img
                    src={pinterest}
                    className="img-fluid"
                    alt="social-images"
                  />
                </span>
                <h6 className="mt-2 mb-0 font-size-14 fw-semibold">
                  Pinterest
                </h6>
              </Link>
            </Col>
            <Col lg={2} sm={4} className="col-6 text-center">
              <Link to="#" className="d-inline-block">
                <span className="image">
                  <img
                    src={linkdin}
                    className="img-fluid"
                    alt="social-images"
                  />
                </span>
                <h6 className="mt-2 mb-0 font-size-14 fw-semibold">LinkedIn</h6>
              </Link>
            </Col>
          </Row>
          <div className="mt-4">
            <div className="share-form">
              <input
                type="text"
                className="form-control"
                defaultValue="https://iqonic.design/"
              />
              <button className="btn btn-link share-link-btn h6 m-0 fw-semibold">
                Copy
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ShareOffcanvasNew;
