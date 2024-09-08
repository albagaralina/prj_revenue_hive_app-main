import React, { useState } from "react";

//router
import { Link } from "react-router-dom";

//react bootstrap
import { Dropdown, Button, Modal } from "react-bootstrap";

//components
import CustomToggle from "./dropdowns";

//images
import user1 from "../assets/images/user/1.jpg";
import small1 from "../assets/images/small/07.png";
import small2 from "../assets/images/small/08.png";
import small3 from "../assets/images/small/09.png";
import small4 from "../assets/images/small/10.png";
import small5 from "../assets/images/small/11.png";
import small6 from "../assets/images/small/12.png";
import small7 from "../assets/images/small/13.png";
import small8 from "../assets/images/small/14.png";
import small07 from "../assets/images/small/07.png";
import small08 from "../assets/images/small/08.png";
import small09 from "../assets/images/small/09.png";

const CreatePostNew = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="post-modal-data" className={`card  ${props.class}`}>
        <div className="card-header d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Create Post</h4>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="user-img">
              <img
                loading="lazy"
                src={user1}
                alt="userimg"
                className="avatar-60 rounded-circle"
              />
            </div>
            <form className="post-text ms-3 w-100 " onClick={handleShow}>
              <input
                type="text"
                className="form-control rounded"
                placeholder="Write something here..."
                style={{ border: "none" }}
              />
            </form>
          </div>
          <hr />
          <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap gap-3">
            <li className="bg-primary-subtle rounded p-2 pointer d-flex align-items-center">
              <img
                loading="lazy"
                src={small07}
                alt="icon"
                className="img-fluid me-2"
              />{" "}
              Photo/Video
            </li>
            <li className="bg-primary-subtle rounded p-2 pointer d-flex align-items-center">
              <img
                loading="lazy"
                src={small08}
                alt="icon"
                className="img-fluid me-2"
              />{" "}
              Tag Friend
            </li>
            <li className="bg-primary-subtle rounded p-2 pointer d-flex align-items-center">
              <img
                loading="lazy"
                src={small09}
                alt="icon"
                className="img-fluid me-2"
              />{" "}
              Feeling/Activity
            </li>
            <li className="bg-primary-subtle rounded p-2 pointer text-center">
              <div className="card-header-toolbar d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle as="div" id="post-option" className="lh-1">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className=" dropdown-menu-right"
                    aria-labelledby="post-option"
                  >
                    <Dropdown.Item onClick={handleShow} href="#">
                      Check in
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShow} href="#">
                      Live Video
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShow} href="#">
                      Gif
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShow} href="#">
                      Watch Party
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShow} href="#">
                      Play with Friend
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </li>
          </ul>
        </div>
        <Modal
          // className={`modal fade ${show ? "show" : ""}`}
          // style={{ display: show ? "block" : "none" }}
          show={show} onHide={handleClose}
          // centered
          id="custom-post-modal"
          size="lg"
          fullscreen="sm-down"
        >

          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title" id="post-modalLabel">
              Create Post
            </h5>
            <Link to="#" className="lh-1" onClick={handleClose}>
              <span className="material-symbols-outlined">close</span>
            </Link>
          </div>
          <Modal.Body >
            <div className="d-flex align-items-center">
              <div className="user-img">
                <img
                  loading="lazy"
                  src={user1}
                  alt="userimg"
                  className="avatar-60 rounded-circle img-fluid"
                />
              </div>
              <form className="post-text ms-3 w-100 ">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Write something here..."
                  style={{ border: "none" }}
                />
              </form>
            </div>
            <hr />
            <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small1}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Photo/Video
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small2}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Tag Friend
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small3}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Feeling/Activity
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small4}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Check in
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small5}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Live Video
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small6}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  GiF
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small7}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Watch Party
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#"></Link>
                  <img
                    loading="lazy"
                    src={small8}
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Play with Friends
                </div>
              </li>
            </ul>
            <hr />
            <div className="other-option">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="user-img me-3">
                    <img
                      loading="lazy"
                      src={user1}
                      alt="userimg"
                      className="avatar-60 rounded-circle img-fluid"
                    />
                  </div>
                  <h6>Your Story</h6>
                </div>
                <div className="card-post-toolbar">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn btn-primary"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      role="button"
                    >
                      Friend
                      {/* <span className="btn btn-primary">Friend</span> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu clemassName="dropdown-menu m-0 p-0">
                      <Dropdown.Item className="dropdown-item p-3" href="#">
                        <div className="d-flex align-items-top">
                          <span className="material-symbols-outlined">
                            save
                          </span>
                          <div className="data ms-2">
                            <h6>Public</h6>
                            <p className="mb-0">
                              Anyone on or off Facebook
                            </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item p-3" href="#">
                        <div className="d-flex align-items-top">
                          <span className="material-symbols-outlined">
                            cancel
                          </span>
                          <div className="data ms-2">
                            <h6>Friends</h6>
                            <p className="mb-0">Your Friend on facebook</p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item p-3" href="#">
                        <div className="d-flex align-items-top">
                          <span className="material-symbols-outlined">
                            person_remove
                          </span>
                          <div className="data ms-2">
                            <h6>Friends except</h6>
                            <p className="mb-0">
                              Don't show to some friends
                            </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item p-3" href="#">
                        <div className="d-flex align-items-top">
                          <span className="material-symbols-outlined">
                            notifications
                          </span>
                          <div className="data ms-2">
                            <h6>Only Me</h6>
                            <p className="mb-0">Only me</p>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <Button variant="primary" className="d-block w-100 mt-3">
              Post
            </Button>
          </Modal.Body>

        </Modal>
      </div>
      <div
        className={`modal-backdrop fade ${show ? "show" : "d-none"}`}
        onClick={handleClose}
      ></div>
    </>
  );
};

export default CreatePostNew;
