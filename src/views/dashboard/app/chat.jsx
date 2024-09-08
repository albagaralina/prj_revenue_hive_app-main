import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Tab, Nav, Button, Dropdown } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
//img
import user1 from "../../../assets/images/chat/avatar/01.png";
import user2 from "../../../assets/images/chat/avatar/02.png";
import user3 from "../../../assets/images/chat/avatar/03.png";
import user4 from "../../../assets/images/chat/avatar/04.png";
import user5 from "../../../assets/images/chat/avatar/05.png";
import user6 from "../../../assets/images/chat/avatar/06.png";
import user7 from "../../../assets/images/chat/avatar/07.png";
import user8 from "../../../assets/images/chat/avatar/08.png";
import user9 from "../../../assets/images/chat/avatar/09.png";

import user10 from "../../../assets/images/chat/avatar/10.png";
import chatImg from "../../../assets/images/chat/05.png"

//scrollbar
import Scrollbar from "smooth-scrollbar";


const Chat = () => {

  useEffect(() => {
    Scrollbar.init(document.querySelector(".data-scrollbar"));
  })
  const [active, setActive] = useState("first");
  // const ChatSidebar = () => {
  //   document.getElementsByClassName("scroller")[0].classList.add("show");
  // };
  // const ChatSidebarClose = () => {
  //   document.getElementsByClassName("scroller")[0].classList.remove("show");
  // };

  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  const person_online = [
    {
      img: user1,
      name: "Paul Molive"
    },
    {
      img: user2,
      name: "John Travolta"
    },
    {
      img: user3,
      name: "Barb Ackue"
    },
    {
      img: user4,
      name: "Robert Fox"
    },
    {
      img: user5,
      name: "Maya Didas"
    },
    {
      img: user6,
      name: "Monty Carlo"
    },
    {
      img: user7,
      name: "Paige Turner"
    },
    {
      img: user8,
      name: "Arnold Schwarzenegger"
    },
    {
      img: user9,
      name: "Leonardo DiCaprio"
    }
  ]

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <aside className="sidebar sidebar-chat sidebar-base border-end shadow-none" data-sidebar="responsive">
          <div className="chat-search pt-4 px-4">
            <div className="d-flex align-items-center">
              <h5 className="fw-500">Chats</h5>
            </div>
            <div
              className="sidebar-toggle d-block d-xl-none"
              data-toggle="sidebar"
              data-active="true"
              onClick={minisidebar}
            >
              <i className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 12.2744L19.25 12.2744"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </i>
            </div>
            <div className="chat-searchbar mt-3 pt-1 mb-4">
              <Form.Group className="form-group chat-search-data m-0">
                <input
                  type="text"
                  className="form-control round"
                  id="chat-search"
                  placeholder="Search for messages or users..."
                />
                <i className="material-symbols-outlined">search</i>
              </Form.Group>
            </div>
            <Swiper
              slidesPerView={7.1}
              pagination={{
                clickable: true,
              }}
              className="swiper-general messenger-swiper overflow-hidden mb-4 swiper-container-pointer-events"
              breakpoints={{
                320: { slidesPerView: 4.1 },
                550: { slidesPerView: 4.3 },
                760: { slidesPerView: 5.3 },
                1200: { slidesPerView: 7.2 },
              }}

            >
              {person_online.map((ele, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide text-center" role="group" aria-label="9 / 9" style={{ width: "47.3151px", marginRight: "12px" }} key={index}>
                      <div className="messanger-box position-relative d-inline-block">
                        <img src={ele.img} className="avatar-48 object-cover rounded-circle" alt="messanger-image" />
                      </div>
                      <p className="mt-2 mb-0 font-size-14 custom-ellipsis text-body">{ele.name}</p>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div
            className="sidebar-body pt-0 data-scrollbar mb-5 pb-5 px-4"
            tabIndex="-1"
            style={{ overflow: "hidden", outline: "none" }}>
            <div
              className="scroll-content"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <ul
                className="nav navbar-nav iq-main-menu mb-5 pb-5"
                id="sidebar-menu"
                role="tablist"
              >
                <h6 className="mb-3 pb-1">Recent Chats</h6>
                <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0"
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "first" ? 'active' : ''}`}
                    eventKey="first"
                    onClick={() => setActive("first")}
                  >
                    <div className="position-relative">
                      <img
                        src={user1}
                        alt="status-101"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-success"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            Paul Molive
                          </h6>
                          <span className="mb-0 font-size-12">
                            03:20 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle
                              as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0 "
                  role="presentation"
                >
                  <Nav.Link
                    className={`${active === 'second' ? 'active' : ''} d-flex gap-3 rounded-2 zoom-in `}
                    eventKey="second"
                    onClick={() => setActive("second")}
                  >
                    <div className="position-relative">
                      <img
                        src={user2}
                        alt="status-102"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-success"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            John Travolta
                          </h6>
                          <span className="mb-0 font-size-12">
                            01:10 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0 "
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "third" ? 'active' : ''}`}
                    eventKey="third"
                    onClick={() => setActive("third")}
                  >
                    <div className="position-relative">
                      <img
                        src={user3}
                        alt="status-103"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-success"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            Barb Ackue
                          </h6>
                          <span className="mb-0 font-size-12">
                            05:09 AM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0 "
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "fourth" ? 'active' : ''}`}
                    eventKey="fourth"
                    onClick={() => setActive("fourth")}
                  >
                    <div className="position-relative">
                      <img
                        src={user4}
                        alt="status-104"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-success"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            Robert Fox
                          </h6>
                          <span className="mb-0 font-size-12">
                            01:10 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0 "
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "fifth" ? 'active' : ''}`}
                    eventKey="fifth"
                    onClick={() => setActive("fifth")}
                  >
                    <div className="position-relative">
                      <img
                        src={user5}
                        alt="status-105"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-danger"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            Maya Didas
                          </h6>
                          <span className="mb-0 font-size-12">
                            01:10 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle
                              as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0 "
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "sixth" ? 'active' : ''}`}
                    eventKey="sixth"
                    onClick={() => setActive("sixth")}
                  >
                    <div className="position-relative">
                      <img
                        src={user6}
                        alt="status-106"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-success"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            Monty Carlo
                          </h6>
                          <span className="mb-0 font-size-12">
                            01:10 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle
                              as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0 "
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "seventh" ? 'active' : ''}`}
                    eventKey="seventh"
                    onClick={() => setActive("seventh")}
                  >
                    <div className="position-relative">
                      <img
                        src={user7}
                        alt="status-107"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-success"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            Paige Turner
                          </h6>
                          <span className="mb-0 font-size-12">
                            01:10 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle
                              as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li"
                  className=" iq-chat-list mb-3 ps-0 "
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "eight" ? 'active' : ''}`}
                    eventKey="eight"
                    onClick={() => setActive("eight")}
                  >
                    <div className="position-relative">
                      <img
                        src={user8}
                        alt="status-108"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-danger"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            Arnold Schwarzenegger
                          </h6>
                          <span className="mb-0 font-size-12">
                            01:10 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle
                              as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0 "
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "ninth" ? 'active' : ''}`}
                    eventKey="ninth"
                    onClick={() => setActive("ninth")}
                  >
                    <div className="position-relative">
                      <img
                        src={user9}
                        alt="status-109"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-success"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            Leonardo DiCaprio
                          </h6>
                          <span className="mb-0 font-size-12">
                            01:10 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <div className="btn-group dropdown-user">
                            <button
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></button>
                            <ul className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <button
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </button>
                              </li>
                              <li>
                                <button
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer"></div>
        </aside>
        <main className="main-content">
          <div className="container-fluid content-inner p-0" id="page_layout">
            <Tab.Content id="myTabContent">
              <Tab.Pane     //1
                eventKey="first"
                className="card mb-0 fade"
                id="user-content-101"
                role="tabpanel"
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                          onClick={minisidebar}
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user1}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-success"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">Paul Molive</h5>
                        <small className="text-capitalize fw-500">Online</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="bg-primary-subtle d-flex align-items-center justify-content-center"
                        as="span"
                      >
                        <Dropdown.Toggle as="svg" bsPrefix=" "
                          className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                          id="dropdownMenuButton-09"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          role="menu"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                            fill="currentColor"
                          ></path>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-09"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i
                            >Delete chat</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 1,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                            as="span"
                            bsPrefix=" "
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            How can we help? We're here for you! 😄
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user1}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey John, I am looking for the best admin template.Could
                            you please help me to find it out? 🤔
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply">reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                            bsPrefix=" "
                            as="span"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:49</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                            as="span"
                            bsPrefix=" "
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user1}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                            as="span"
                            bsPrefix=" "
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                            as="span"
                            bsPrefix=" "
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user1}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure. 👍</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                            as="span"
                            bsPrefix=" "
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            as="span"
                            bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user1}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            as="span"
                            bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            as="span"
                            bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg
                      ><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
              <Tab.Pane     //2
                className="card mb-0 fade"
                id="user-content-102"
                role="tabpanel"
                eventKey="second"
                onClick={minisidebar}
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user2}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-success"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">John Travolta</h5>
                        <small className="text-capitalize fw-500">Online</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="dropdown bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <Dropdown.Toggle as="span" bsPrefix=" ">
                          <svg
                            className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                            id="dropdownMenuButton-08"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul"
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-08"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i
                            >Delete chat</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 2,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            as="span"
                            bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            How can we help? We're here for you! 😄
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user2}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey John, I am looking for the best admin template.
                            Could you please help me to find it out? 🤔
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:49</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user2}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply">reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user2}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure. 👍</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user2}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg
                      ><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
              <Tab.Pane     //3
                className="card mb-0 fade"
                id="user-content-103"
                role="tabpanel"
                eventKey="third"
                onClick={minisidebar}
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user3}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-success"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">Barb Ackue</h5>
                        <small className="text-capitalize fw-500">Online</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="dropdown bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <Dropdown.Toggle as="span" bsPrefix=" ">
                          <svg
                            className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                            id="dropdownMenuButton-10"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul"
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-10"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i>Delete chat</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 1,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            How can we help? We're here for you! 😄
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user3}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey John, I am looking for the best admin template.
                            Could you please help me to find it out? 🤔
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"><span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal">
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:49</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user3}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user3}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure. 👍</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1">content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user3}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
              <Tab.Pane     //4
                className="card tab-pane mb-0 fade"
                id="user-content-104"
                role="tabpanel"
                eventKey="fourth"
                onClick={minisidebar}
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user4}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-success"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">Robert Fox</h5>
                        <small className="text-capitalize fw-500">Online</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="dropdown bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <Dropdown.Toggle as="span" bsPrefix=" ">
                          <svg
                            className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                            id="dropdownMenuButton-11"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul"
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-11"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i
                            >Delete chat</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 1,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            How can we help? We're here for you! 😄
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user4}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey John, I am looking for the best admin template.Could
                            you please help me to find it out? 🤔
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:49</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user4}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user4}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure. 👍</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item as="ul"
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item as="ul"
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1">edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user4}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user4}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user4}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg
                      ><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
              <Tab.Pane     //5
                className="card tab-pane mb-0 fade"
                id="user-content-105"
                role="tabpanel"
                eventKey="fifth"
                onClick={minisidebar}
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user5}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-danger"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">Maya Didas</h5>
                        <small className="text-capitalize fw-500">Offline</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="dropdown bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <Dropdown.Toggle as="span" bsPrefix=" ">
                          <svg
                            className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                            id="dropdownMenuButton-12"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul"
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-12"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i>Delete chat</Dropdown.Item>
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 1,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span"
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            How can we help? We're here for you! 😄
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user5}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey John, I am looking for the best admin template.
                            Could you please help me to find it out? 🤔
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:49</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user5}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user5}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure. 👍</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user5}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1">edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span>Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg
                      ><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
              <Tab.Pane     //6
                className="card tab-pane mb-0 fade"
                id="user-content-106"
                role="tabpanel"
                eventKey="sixth"
                onClick={minisidebar}
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user6}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-success"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">Monty Carlo</h5>
                        <small className="text-capitalize fw-500">Online</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="dropdown bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <Dropdown.Toggle as="span" bsPrefix=" ">
                          <svg
                            className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                            id="dropdownMenuButton-13"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul"
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-13"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item
                          >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i
                            >Delete chat</Dropdown.Item
                          >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item
                          >
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 1,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Hey, how are you??</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user6}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey, I am looking for the best dashboard template. Could
                            you please help me to find it out?
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:42</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user6}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">17:00</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span"
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">17:01</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">17:10</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Ok Cool!!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-day-title">
                    <span className="main-title">Today</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">12:00</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">This are nice pics.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user6}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">12:05</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            I want some teachnic for fast code can you help?
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">13:10</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Yes Look clean and fresh UI.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user6}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">15:00</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div
                          className="iq-chating-content d-flex align-items-center iq-image"
                        >
                          <p className="mr-2 mb-0"></p>
                          <div className="">
                            <Link
                              data-fslightbox="gallery"
                              href="#"
                            >
                              <img
                                src={chatImg}
                                className="rounded iq-single-image"
                                alt="chat-user"
                                loading="lazy"
                              />
                            </Link>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg
                      ><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
              <Tab.Pane     //7
                className="card tab-pane mb-0 fade"
                id="user-content-107"
                role="tabpanel"
                eventKey="seventh"
                onClick={minisidebar}
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user7}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-success"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">Paige Turner</h5>
                        <small className="text-capitalize fw-500">Online</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="dropdown bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <Dropdown.Toggle as="span" bsPrefix=" ">
                          <svg
                            className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                            id="dropdownMenuButton-14"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul"
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-14"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item
                          >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i
                            >Delete chat</Dropdown.Item
                          >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item
                          >
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 1,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            How can we help? We're here for you! 😄
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user7}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey John, I am looking for the best admin template.
                            Could you please help me to find it out? 🤔
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:49</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user7}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user7}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure. 👍</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user7}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg
                      ><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
              <Tab.Pane     //8
                className="card tab-pane mb-0 fade"
                id="user-content-108"
                role="tabpanel"
                eventKey="eight"
                onClick={minisidebar}
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user8}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-danger"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">Arnold Schwarzenegger</h5>
                        <small className="text-capitalize fw-500">offline</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="dropdown bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <Dropdown.Toggle as="span" bsPrefix=" ">
                          <svg
                            className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                            id="dropdownMenuButton-15"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul"
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-15"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item
                          >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i
                            >Delete chat</Dropdown.Item
                          >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item
                          >
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 1,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            How can we help? We're here for you! 😄
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user8}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey John, I am looking for the best admin template.
                            Could you please help me to find it out? 🤔
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:49</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user8}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user8}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure. 👍</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user8}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg
                      ><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
              <Tab.Pane     //9
                className="card tab-pane mb-0 fade"
                id="user-content-109"
                role="tabpanel"
                eventKey="ninth"
                onClick={minisidebar}
              >
                <div className="chat-head">
                  <header
                    className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block d-xl-none">
                        <button
                          className="btn btn-sm btn-primary rounded btn-icon"
                          data-toggle="sidebar"
                          data-active="true"
                        >
                          <span className="btn-inner">
                            <svg className="icon-rtl" width="20px" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="avatar chat-user-profile m-0">
                        <img
                          src={user9}
                          alt="avatar"
                          className="avatar-50 rounded-pill"
                          loading="lazy"
                        />
                        <div className="iq-profile-badge bg-success"></div>
                      </div>
                      <div>
                        <h5 className="mb-0">Leonardo DiCaprio</h5>
                        <small className="text-capitalize fw-500">Online</small>
                      </div>
                    </div>

                    <div className="chat-header-icons d-inline-flex ms-auto">
                      <Link
                        href="#"
                        className="chat-icon-phone bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">phone</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-video bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">videocam</i>
                      </Link>
                      <Link
                        href="#"
                        className="chat-icon-delete bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <i className="material-symbols-outlined md-18">delete</i>
                      </Link>
                      <Dropdown
                        className="dropdown bg-primary-subtle d-flex align-items-center justify-content-center"
                      >
                        <Dropdown.Toggle as="span" bsPrefix=" ">
                          <svg
                            className="icon-20 nav-hide-arrow cursor-pointer pe-0"
                            id="dropdownMenuButton-16"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            role="menu"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul"
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-16"
                        >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >push_pin</i
                            >Pin to top</Dropdown.Item
                          >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >delete_outline</i
                            >Delete chat</Dropdown.Item
                          >
                          <Dropdown.Item
                            className=" d-flex align-items-center"
                            href="#"
                          ><i className="material-symbols-outlined md-18 me-1"
                          >watch_later</i
                            >Block</Dropdown.Item
                          >
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </header>
                </div>
                <div className="card-body chat-body bg-body">
                  <div className="chat-day-title">
                    <span className="main-title">Feb 1,2021</span>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:34</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            How can we help? We're here for you! 😄
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user9}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">16:40</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Hey John, I am looking for the best admin template.Could
                            you please help me to find it out? 🤔
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:49</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">
                            Absolutely Yes! SocialV is the Responsive Bootstrap 5
                            Admin Dashboard Template.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user9}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user9}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">I will purchase it for sure. 👍</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user9}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:54</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link
                        >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user10}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">7:55</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle as="span" bsPrefix=" "
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul"
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item
                            >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item
                            >
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-3 py-3 border-top rounded-0">
                  <form className="d-flex align-items-center" action="#">
                    <div className="chat-attagement d-flex">
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_156_599)">
                            <path
                              d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                              fill="currentcolor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link to="#" className="d-flex align-items-center pe-3">
                        <svg
                          className="icon-24"
                          width="18"
                          height="23"
                          viewBox="0 0 18 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00021 21.5V18.3391"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0689 6.25579H13.0585"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.0704 9.59344H13.0605"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Type your message"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path></svg
                      ><span className="d-none d-lg-block ms-1">Send</span>
                    </button>
                  </form>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </main>
      </Tab.Container>
    </>
  );
};
export default Chat;
