import React, { useState } from "react";
import { Row, Col, Container, Form, Dropdown, Collapse } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

// img
import user1 from "../../../assets/images/user/01.jpg";
import user2 from "../../../assets/images/user/02.jpg";
import user3 from "../../../assets/images/user/03.jpg";
import user4 from "../../../assets/images/user/04.jpg";
import user5 from "../../../assets/images/user/05.jpg";
import user6 from "../../../assets/images/user/06.jpg";
import user7 from "../../../assets/images/user/07.jpg";

const Todo = () => {
  //Collapse Secret Project
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [activeItem, setActiveItem] = useState('all');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleCollapseToggle = (collapseNumber) => {
    if (collapseNumber === 1) {
      setOpen1(!open1);
      setOpen2(false);
      setOpen3(false);
    } else if (collapseNumber === 2) {
      setOpen1(false);
      setOpen2(!open2);
      setOpen3(false);
    } else if (collapseNumber === 3) {
      setOpen1(false);
      setOpen2(false);
      setOpen3(!open3);
    }
    setActiveItem('all');
  };


  return (
    <>
      <div id="content-page" className="content-inner">
        <Container className="relative">
          <Row>
            <Col lg="3">
              <Card>
                <Card.Body>
                  <div className="iq-todo-page">
                    <Form className="position-relative">
                      <Form.Group className="form-group mb-0">
                        <Form.Control
                          type="text"
                          className="form-control todo-search"
                          id="exampleInputEmail002"
                          placeholder="Search"
                        />
                        <Link className="search-link" to="#">
                          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.82491" cy="7.82495" r="6.74142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                            <path d="M12.5137 12.8638L15.1567 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </Form.Group>
                    </Form>
                    <div className="add-new-project mt-3 mb-3">
                      <Link
                        to="#"
                        className="d-block nrw-project d-flex align-items-center"
                      >
                        <i className="material-symbols-outlined me-2">add</i>add
                        Project
                      </Link>
                    </div>
                    <ul className="todo-task-list p-0 m-0">
                      <li>
                        <Link
                          to="/dashboard/app/todo"
                          onClick={() => {
                            setOpen1(!open1);
                            setActiveItem('all')
                            handleCollapseToggle(1)
                          }}
                          className="d-flex align-items-center"
                        >
                          <i className="material-symbols-outlined md-14 me-2">filter_none</i>
                          Secret Project
                        </Link>
                        <Collapse in={open1}>
                          <ul id="todotask1-collapse" className="sub-task mt-2 p-0">
                            <li className={activeItem === 'all' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('all')}
                              >
                                <i className="material-symbols-outlined filled text-primary md-18 me-1">fiber_manual_record</i>
                                All Task
                              </Link>
                            </li>
                            <li className={activeItem === 'people' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('people')}
                              >
                                <i className="material-symbols-outlined filled text-warning md-18 me-1">fiber_manual_record</i>
                                People
                              </Link>
                            </li>
                            <li className={activeItem === 'files' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-between"
                                onClick={() => handleItemClick('files')}
                              >
                                <div className="d-flex align-items-center">
                                  <i className="material-symbols-outlined filled text-danger md-18 me-1">fiber_manual_record</i>
                                  Files
                                </div>
                                <span className="badge bg-danger float-end">44</span>
                              </Link>
                            </li>
                            <li className={activeItem === 'statistics' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('statistics')}
                              >
                                <i className="material-symbols-outlined filled text-primary md-18 me-1">fiber_manual_record</i>
                                Statistics
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/app/todo"
                          onClick={() => {
                            setOpen2(!open2);
                            setActiveItem('all');
                            handleCollapseToggle(2)
                          }}
                          className="d-flex align-items-center"
                        >
                          <i className="material-symbols-outlined md-14 me-2">filter_none</i>
                          Bnie Mobile App
                        </Link>
                        <Collapse in={open2}>
                          <ul id="todotask1-collapse" className="sub-task mt-2 p-0">
                            <li className={activeItem === 'all' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('all')}
                              >
                                <i className="material-symbols-outlined filled text-primary md-18 me-1">fiber_manual_record</i>
                                All Task
                              </Link>
                            </li>
                            <li className={activeItem === 'people' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('people')}
                              >
                                <i className="material-symbols-outlined filled text-warning md-18 me-1">fiber_manual_record</i>
                                People
                              </Link>
                            </li>
                            <li className={activeItem === 'files' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-between"
                                onClick={() => handleItemClick('files')}
                              >
                                <div className="d-flex align-items-center">
                                  <i className="material-symbols-outlined filled text-danger md-18 me-1">fiber_manual_record</i>
                                  Files
                                </div>
                                <span className="badge bg-danger float-end">20</span>
                              </Link>
                            </li>
                            <li className={activeItem === 'statistics' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('statistics')}
                              >
                                <i className="material-symbols-outlined filled text-primary md-18 me-1">fiber_manual_record</i>
                                Statistics
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/app/todo"
                          onClick={() => {
                            setOpen3(!open3);
                            setActiveItem('all');
                            handleCollapseToggle(3)
                          }}
                          className="d-flex align-items-center"
                        >
                          <i className="material-symbols-outlined md-14 me-2">filter_none</i>
                          New Portfolio Site
                        </Link>
                        <Collapse in={open3}>
                          <ul id="todotask1-collapse" className="sub-task mt-2 p-0">
                            <li className={activeItem === 'all' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('all')}
                              >
                                <i className="material-symbols-outlined filled text-primary md-18 me-1">fiber_manual_record</i>
                                All Task
                              </Link>
                            </li>
                            <li className={activeItem === 'people' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('people')}
                              >
                                <i className="material-symbols-outlined filled text-warning md-18 me-1">fiber_manual_record</i>
                                People
                              </Link>
                            </li>
                            <li className={activeItem === 'files' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-between"
                                onClick={() => handleItemClick('files')}
                              >
                                <div className="d-flex align-items-center">
                                  <i className="material-symbols-outlined filled text-danger md-18 me-1">fiber_manual_record</i>
                                  Files
                                </div>
                                <span className="badge bg-danger float-end">20</span>
                              </Link>
                            </li>
                            <li className={activeItem === 'statistics' ? 'active' : ''}>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                                onClick={() => handleItemClick('statistics')}
                              >
                                <i className="material-symbols-outlined filled text-primary md-18 me-1">fiber_manual_record</i>
                                Statistics
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="9">
              <Row>
                <Col sm="12">
                  <Card>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="todo-date d-flex me-3 align-items-center">
                          <i className="material-symbols-outlined text-success me-2 md-18">calendar_month</i>
                          <span>Wednesday, 08th January, 2020</span>
                        </div>
                        <div className="todo-notification d-flex align-items-center  mt-2 mt-md-0">
                          <div className="notification-icon position-relative d-flex align-items-center me-3">
                            <Link
                              to="#"
                              className="material-symbols-outlined md-18"
                            >
                              notifications
                            </Link>
                            <span className="bg-danger text-white">5</span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-success-subtle"
                          >
                            Add Task
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="8">
                  <Card>
                    <Card.Body className="p-0">
                      <ul className="todo-task-lists m-0 p-0">
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user1}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6 className="d-inline-block">
                                Landing page for secret Project
                              </h6>{" "}
                              <span className="badge bg-warning ms-0 ms-md-3 my-1 my-md-0 text-white">
                                Expiring
                              </span>
                              <p className="mb-0">by Danlel Cllfferton</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check1"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check1"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3 active-task">
                          <div className="user-img img-fluid">
                            <img
                              src={user1}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>Fix Critical Crashes</h6>
                              <p className="mb-0">by Cralg Danles</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check2"
                                  defaultChecked
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check2"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user2}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6 className="d-inline-block">
                                IOS App - Redesign the contact
                              </h6>{" "}
                              <span className="badge bg-success ms-0 ms-md-3 my-1 my-md-0">
                                Ending
                              </span>
                              <p className="mb-0">by Simona Gomez </p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check3"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check3"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user3}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>
                                Final Meetup for the Secrat Project Client
                              </h6>
                              <p className="mb-0">bt Serena Gemoz</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check4"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check4"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user4}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>Code the Parsing Element</h6>
                              <p className="mb-0">by Jeena Gaze</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check5"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check5"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user5}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6 className="d-inline-block">
                                Test the Bug, that causes design
                              </h6>{" "}
                              <span className="badge bg-danger ms-0 ms-md-3 my-1 my-md-0">
                                Urgent
                              </span>
                              <p className="mb-0">by migule Slimmonas</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check6"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check6"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user6}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>Android App Design</h6>
                              <p className="mb-0">by Becky Dimes</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check7"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check7"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user7}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>Skype Meetup with clients</h6>
                              <p className="mb-0">by James Romero</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check8"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check8"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4">
                  <Card>
                    <Card.Body>
                      <div className="iq-todo-right">
                        <Form className="position-relative">
                          <Form.Group className="form-group mb-0">
                            <Form.Control
                              type="text"
                              className="form-control todo-search"
                              id="exampleInputEmail002"
                              placeholder="Search"
                            />
                            <Link className="search-link" to="#">
                              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.82491" cy="7.82495" r="6.74142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <path d="M12.5137 12.8638L15.1567 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </Link>
                          </Form.Group>
                        </Form>
                        <div className="iq-todo-friendlist mt-3">
                          <ul className="suggestions-lists m-0 p-0">
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user1}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Paul Molive</h6>
                                  <p className="mb-0">trainee</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>

                                    <Dropdown.Toggle as="span">
                                      <i className="material-symbols-outlined md-18">
                                        more_vert
                                      </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18 me-2">
                                          person
                                        </i>{" "}
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user2}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Anna Mull</h6>
                                  <p className="mb-0">Web Developer</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>

                                    <Dropdown.Toggle as="span">
                                      <i className="material-symbols-outlined md-18">
                                        more_vert
                                      </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18 me-2">
                                          person
                                        </i>{" "}
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user3}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Paige Turner</h6>
                                  <p className="mb-0">trainee</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>

                                    <Dropdown.Toggle as="span">
                                      <i className="material-symbols-outlined md-18">
                                        more_vert
                                      </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18 me-2">
                                          person
                                        </i>{" "}
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user4}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Barb Ackue</h6>
                                  <p className="mb-0">Web Designer</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>

                                    <Dropdown.Toggle as="span">
                                      <i className="material-symbols-outlined md-18">
                                        more_vert
                                      </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18 me-2">
                                          person
                                        </i>{" "}
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user5}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Greta Life</h6>
                                  <p className="mb-0">Tester</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>

                                    <Dropdown.Toggle as="span">
                                      <i className="material-symbols-outlined md-18">
                                        more_vert
                                      </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-1 me-2">
                                          person
                                        </i>{" "}
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user6}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Ira Membrit</h6>
                                  <p className="mb-0">Android Developer</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>

                                    <Dropdown.Toggle as="span">
                                      <i className="material-symbols-outlined md-18">
                                        more_vert
                                      </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18 me-2">
                                          person
                                        </i>{" "}
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user7}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Pete Sariya</h6>
                                  <p className="mb-0">Web Designer</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>

                                    <Dropdown.Toggle as="span">
                                      <i className="material-symbols-outlined md-18">
                                        more_vert
                                      </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18 me-2">
                                          person
                                        </i>{" "}
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <Link to="#" className="btn btn-primary  d-flex align-items-center justify-content-center"><i className="material-symbols-outlined md-18 me-1">add</i> Load More</Link>
                        </div>
                      </div>
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

export default Todo;
