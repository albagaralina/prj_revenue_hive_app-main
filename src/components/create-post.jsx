import React, { useState } from "react";

//router
import { Link } from "react-router-dom";

//react bootstrap
import { Dropdown, Button, Modal } from "react-bootstrap";

//components
import CustomToggle from "./dropdowns";

//images
import user1 from "../assets/images/user/1.jpg";
// import small1 from "../assets/images/small/07.png";
// import small2 from "../assets/images/small/08.png";
// import small3 from "../assets/images/small/09.png";
// import small4 from "../assets/images/small/10.png";
// import small5 from "../assets/images/small/11.png";
// import small6 from "../assets/images/small/12.png";
// import small7 from "../assets/images/small/13.png";
// import small8 from "../assets/images/small/14.png";

const CreatePost = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="post-modal-data" className={`card ${props.class}`}>
        <div className="card-header d-flex justify-content-between border-bottom">
          <div className="header-title">
            <h5 className="card-title">Add a Post</h5>
          </div>
          <Dropdown >
            <Dropdown.Toggle className="lh-1" id="post-option" as="div" bsPrefix=" ">
              <span className="material-symbols-outlined">more_horiz</span>
            </Dropdown.Toggle>
            <Dropdown.Menu
              variant="right"
              aria-labelledby="post-option"
              style={{ position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(0px, -27px)' }}
            >
              <Dropdown.Item
                href="#"
                onClick={handleShow}
              >
                Check in
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={handleShow}
              >
                Live Video
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={handleShow}
              >
                GIF
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={handleShow}
              >
                Watch Party
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={handleShow}
              >
                Play with Friend
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center mb-5">
            <form className="post-text w-100" onClick={handleShow}>
              <input
                type="text"
                className="form-control rounded px-0"
                placeholder="Write And Share Your Post With Your Friends..."
                style={{ border: "none" }}
              />
            </form>
          </div>
        </div>
        <div className="card-body bg-primary-subtle rounded-bottom-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="create-post-data">
              <ul className="list-inline m-0 p-0 d-flex align-items-center gap-4">
                <li>
                  <Link to="#" className="text-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5334 1.3761C12.3751 1.7111 12.6326 2.87776 12.9767 3.25276C13.3209 3.62776 13.8134 3.75526 14.0859 3.75526C15.5342 3.75526 16.7084 4.92943 16.7084 6.37693V11.2061C16.7084 13.1478 15.1334 14.7228 13.1917 14.7228H4.80841C2.86591 14.7228 1.29175 13.1478 1.29175 11.2061V6.37693C1.29175 4.92943 2.46591 3.75526 3.91425 3.75526C4.18591 3.75526 4.67841 3.62776 5.02341 3.25276C5.36758 2.87776 5.62425 1.7111 6.46591 1.3761C7.30841 1.0411 10.6917 1.0411 11.5334 1.3761Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5794 5.91667H13.5869"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6489 8.94C11.6489 7.47667 10.4631 6.29083 8.99975 6.29083C7.53642 6.29083 6.35059 7.47667 6.35059 8.94C6.35059 10.4033 7.53642 11.5892 8.99975 11.5892C10.4631 11.5892 11.6489 10.4033 11.6489 8.94Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.23043 11.6718C4.02709 11.6718 1.29126 12.156 1.29126 14.096C1.29126 16.036 4.01043 16.5377 7.23043 16.5377C10.4346 16.5377 13.1696 16.0527 13.1696 14.1135C13.1696 12.1743 10.4513 11.6718 7.23043 11.6718Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.23042 8.90493C9.33292 8.90493 11.0371 7.20076 11.0371 5.09826C11.0371 2.99576 9.33292 1.2916 7.23042 1.2916C5.12875 1.2916 3.42459 2.99576 3.42459 5.09826C3.41709 7.19326 5.10875 8.89743 7.20459 8.90493H7.23042Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.0031 6.22427V9.56594"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.7079 7.895H13.2996"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.08341 7.75041C9.08341 6.59935 8.15072 5.66666 7.0005 5.66666C5.84944 5.66666 4.91675 6.59935 4.91675 7.75041C4.91675 8.90063 5.84944 9.83332 7.0005 9.83332C8.15072 9.83332 9.08341 8.90063 9.08341 7.75041Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99959 16.5C6.00086 16.5 0.75 12.2486 0.75 7.80274C0.75 4.3222 3.54758 1.5 6.99959 1.5C10.4516 1.5 13.25 4.3222 13.25 7.80274C13.25 12.2486 7.99832 16.5 6.99959 16.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-inline m-0 p-0 d-flex align-items-center gap-4">
                <li>
                  <Link to="#" className="text-body fw-medium">
                    Discard
                  </Link>
                </li>
                <li>
                  <button type="button" className="btn btn-primary px-4">
                    Post
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal
          // className={`modal fade ${show ? "show" : ""}`}
          // style={{ display: show ? "block" : "none" }}
          show={show}
          onHide={handleClose}
          centered
          id="custom-post-modal"
        >
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title" id="post-modalLabel">
              Create Post
            </h5>
            <Link to="#" className="lh-1" onClick={handleClose}>
              <span className="material-symbols-outlined">close</span>
            </Link>
          </div>
          <Modal.Body>
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
                  <Link to="#" className="custom-link-color d-inline-block fw-medium text-body"><span className="material-symbols-outlined align-middle font-size-20 me-1">
                    add_a_photo
                  </span>{" "}
                    Photo/Video
                  </Link>

                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#" className="custom-link-color d-inline-block fw-medium text-body">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      group
                    </span>{" "}
                    Tag Friend
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#" className="custom-link-color d-inline-block fw-medium text-body">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      sentiment_satisfied
                    </span>{" "}
                    Feeling/Activity
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#" className="custom-link-color d-inline-block fw-medium text-body">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      location_on
                    </span>{" "}
                    Check in
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#" className="custom-link-color d-inline-block fw-medium text-body">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      live_tv
                    </span>{" "}
                    Live Video
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#" className="custom-link-color d-inline-block fw-medium text-body">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      gif_box
                    </span>{" "}
                    GIF
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#" className="custom-link-color d-inline-block fw-medium text-body">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      celebration
                    </span>{" "}
                    Watch Party
                  </Link>
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-primary-subtle rounded p-2 pointer me-3">
                  <Link to="#" className="custom-link-color d-inline-block fw-medium text-body">
                    <span className="material-symbols-outlined align-middle font-size-20 me-1">
                      sports_esports
                    </span>{" "}
                    Play with Friends
                  </Link>
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
                    <Dropdown.Menu className=" m-0 p-0">
                      <Dropdown.Item className="p-3" href="#">
                        <div className="d-flex align-items-top">
                          <span className="material-symbols-outlined">save</span>
                          <div className="data ms-2">
                            <h6>Public</h6>
                            <p className="mb-0">Anyone on or off Facebook</p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="p-3" href="#">
                        <div className="d-flex align-items-top">
                          <span className="material-symbols-outlined">cancel</span>
                          <div className="data ms-2">
                            <h6>Friends</h6>
                            <p className="mb-0">Your Friend on facebook</p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="p-3" href="#">
                        <div className="d-flex align-items-top">
                          <span className="material-symbols-outlined">person_remove</span>
                          <div className="data ms-2">
                            <h6>Friends except</h6>
                            <p className="mb-0">Don't show to some friends</p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="p-3" href="#">
                        <div className="d-flex align-items-top">
                          <span className="material-symbols-outlined">notifications</span>
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

export default CreatePost;
