import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileHeader from "../../../components/profile-header";
import CustomToggle from "../../../components/dropdowns";
import ShareOffcanvas from "../../../components/share-offcanvas";
import CreatePostNew from "../../../components/create-post-new";

//image
import img1 from "../../../assets/images/page-img/gi-1.jpg";
import user1 from "../../../assets/images/user/05.jpg";
import user2 from "../../../assets/images/user/06.jpg";
import user3 from "../../../assets/images/user/07.jpg";
import user4 from "../../../assets/images/user/08.jpg";
import user5 from "../../../assets/images/user/09.jpg";
import user6 from "../../../assets/images/user/10.jpg";
import user7 from "../../../assets/images/user/11.jpg";
import user8 from "../../../assets/images/user/12.jpg";
import user10 from "../../../assets/images/user/04.jpg";
import user11 from "../../../assets/images/user/02.jpg";
import user12 from "../../../assets/images/user/03.jpg";
import user13 from "../../../assets/images/user/01.jpg";
import user14 from "../../../assets/images/user/01.jpg";
import img2 from "../../../assets/images/page-img/52.jpg";
import icon1 from "../../../assets/images/icon/01.png";
import icon2 from "../../../assets/images/icon/02.png";
import icon3 from "../../../assets/images/icon/03.png";
import icon4 from "../../../assets/images/icon/04.png";
import icon5 from "../../../assets/images/icon/05.png";
import icon6 from "../../../assets/images/icon/06.png";
import icon7 from "../../../assets/images/icon/07.png";
import header from "../../../assets/images/page-img/profile-bg7.jpg";
import img3 from "../../../assets/images/page-img/60.jpg";

const EventDetail = () => {
  return (
    <>
      <ProfileHeader img={header} title="Events" />
      <div id="content-page" className="content-inner">
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                <div className="group-info d-flex align-items-center">
                  <div className="me-3">
                    <img
                      className="rounded-circle img-fluid avatar-100"
                      src={img1}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h4>Birthday Celebration</h4>
                    <p className="mb-0 d-flex">
                      <span className="material-symbols-outlined pe-2">lock</span>Private Group . 323
                      members
                    </p>
                  </div>
                </div>
                <div className="group-member d-flex align-items-center  mt-md-0 mt-2">
                  <div className="iq-media-group me-3">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user1}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user2}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user3}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user4}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user5}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user6}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user7}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user8}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                  <button type="submit" className="btn btn-primary d-flex gap-2">
                    <i className="material-symbols-outlined">add</i>Invite
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="fixed-suggestion mb-0 mb-lg-4 z-2">
                <Card>
                  <Card.Header className="d-flex justify-content-between border-bottom">
                    <div className="header-title">
                      <h4 className="card-title">Events</h4>
                    </div>
                    <div className="card-post-toolbar">
                      <Dropdown>
                        <Dropdown.Toggle as="span">
                          <i className="material-symbols-outlined">more_horiz</i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu m-0 p-0">
                          <Dropdown.Item className=" p-3" to="#">
                            <div className="d-flex align-items-top">
                              <div className="icon h4">
                                <i className="material-symbols-outlined">notifications</i>
                              </div>
                              <div className="data ms-2">
                                <h6>Notifications</h6>
                                <p className="mb-0">
                                  Turn on notifications
                                  <br /> for this post
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className=" p-3" to="#">
                            <div className="d-flex align-items-top">
                              <div className="icon h4">
                                <i className="material-symbols-outlined">push_pin</i>
                              </div>
                              <div className="data ms-2">
                                <h6>Pins</h6>
                                <p className="mb-0">
                                  Pin your favourite groups
                                  <br /> for quick access.
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className=" p-3" to="#">
                            <div className="d-flex align-items-top">
                              <div className="icon h4">
                                <i className="material-symbols-outlined">edit</i>
                              </div>
                              <div className="data ms-2">
                                <h6>Following</h6>
                                <p className="mb-0">
                                  Follow or unfollow groups <br />
                                  to control in News Feed.
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className=" p-3" to="#">
                            <div className="d-flex align-items-top">
                              <div className="icon h4">
                                <i className="material-symbols-outlined">cancel</i>
                              </div>
                              <div className="data ms-2">
                                <h6>Membership</h6>
                                <p className="mb-0">
                                  Leave groups that no
                                  <br /> longer interest you.
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <ul className="list-inline p-0 m-0">
                      <li className="mb-md-3 pb-md-3 border-bottom members-list">
                        <div className="iq-search-bar members-search p-0">
                          <form action="#" className="searchbox w-auto">
                            <input
                              type="text"
                              className="text search-input bg-primary-subtle"
                              placeholder="Type here to search..."
                            />
                            <Link className="search-link" to="#">
                              <i className="material-symbols-outlined">search</i>
                            </Link>
                          </form>
                        </div>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-2">
                        <div className="d-flex">
                          <h4 className="material-symbols-outlined">arrow_forward</h4>
                        </div>
                        <h6 className="mb-0">Birthday Celebration</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-2">
                        <div className="d-flex">
                          <h4 className="material-symbols-outlined">arrow_forward</h4>
                        </div>
                        <h6 className="mb-0">New Year Celebration</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-2">
                        <div className="d-flex">
                          <h4 className="material-symbols-outlined">arrow_forward</h4>
                        </div>
                        <h6 className="mb-0">Atlanta Retail Show</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-2">
                        <div className="d-flex">
                          <h4 className="material-symbols-outlined">arrow_forward</h4>
                        </div>
                        <h6 className="mb-0">Holi Celebration</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-2">
                        <div className="d-flex">
                          <h4 className="material-symbols-outlined">arrow_forward</h4>
                        </div>
                        <h6 className="mb-0">Republic Day</h6>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header className="d-flex justify-content-between border-bottom">
                    <div className="header-title">
                      <h4 className="card-title">About</h4>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <ul className="list-inline p-0 m-0">
                      <li className="mb-3">
                        <p className="mb-0">Event Planning's...</p>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <h4 className="material-symbols-outlined">pin_drop</h4>
                        </div>
                        <h6 className="mb-0">
                          Reserving a location for an event
                        </h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <h4 className="material-symbols-outlined">local_shipping</h4>
                        </div>
                        <h6 className="mb-0">Coordinating Outside vendors</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <h4 className="material-symbols-outlined">restaurant_menu</h4>
                        </div>
                        <h6 className="mb-0">Managing Staff</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <h4 className="material-symbols-outlined">home</h4>
                        </div>
                        <h6 className="mb-0">Selecting an overall event theme</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <h4 className="material-symbols-outlined">location_city</h4>
                        </div>
                        <h6 className="mb-0">Negotating hotel contracts</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <h4 className="material-symbols-outlined">work</h4>
                        </div>
                        <h6 className="mb-0">hiring a caterer</h6>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <h4 className="material-symbols-outlined">import_contacts</h4>
                        </div>
                        <h6 className="mb-0">Developing invitations</h6>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg="8">
              <CreatePostNew />
              <Card>
                <Card.Body>
                  <div className="post-item">
                    <div className="user-post-data pb-3">
                      <div className="d-flex justify-content-between">
                        <div className=" me-3">
                          <img
                            className="rounded-circle img-fluid"
                            src={user10}
                            alt=""
                          />
                        </div>
                        <div className="w-100">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="mb-0 d-inline-block">
                                <Link to="#">Paige Turner</Link>
                              </h5>
                              <p className="mb-0">8 hour ago</p>
                            </div>
                            <div className="card-post-toolbar">
                              <Dropdown>
                                <Dropdown.Toggle as="span">
                                  <i className="material-symbols-outlined">more_horiz</i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">save</h4>
                                      <div className="data ms-2">
                                        <h6>Save Post</h6>
                                        <p className="mb-0">
                                          Add this to your saved items
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">edit</h4>
                                      <div className="data ms-2">
                                        <h6>Edit Post</h6>
                                        <p className="mb-0">
                                          Update your post and saved items
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">cancel</h4>
                                      <div className="data ms-2">
                                        <h6>Hide From Timeline</h6>
                                        <p className="mb-0">
                                          See fewer posts like this.
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">delete</h4>
                                      <div className="data ms-2">
                                        <h6>Delete</h6>
                                        <p className="mb-0">
                                          Remove thids Post on Timeline
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">notifications</h4>
                                      <div className="data ms-2">
                                        <h6>Notifications</h6>
                                        <p className="mb-0">
                                          Turn on notifications for this post
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user-post">
                      <Link to="#">
                        <img
                          src={img2}
                          alt="postimage"
                          className="img-fluid w-100"
                        />
                      </Link>
                    </div>
                    <div className="comment-area mt-3">
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="like-block position-relative d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="like-data">
                              <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}>
                                  <img
                                    src={icon1}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu py-2">
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Like</Tooltip>}
                                    className="ms-2 me-2"
                                  >
                                    <img
                                      src={icon1}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Love</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon2}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Happy</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon3}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>HaHa</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon4}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Think</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon5}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Sad</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon6}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Lovely</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon7}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="total-like-block ms-2 me-3">
                              <Dropdown>
                                <Dropdown.Toggle as="span">
                                  140 Likes
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item
                                    className=""
                                    href="#"
                                  >
                                    Max Emum
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    href="#"
                                  >
                                    Bill Yerds
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    href="#"
                                  >
                                    Hap E. Birthday
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    href="#"
                                  >
                                    Tara Misu
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    href="#"
                                  >
                                    Midge Itz
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    href="#"
                                  >
                                    Sal Vidge
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    href="#"
                                  >
                                    Other
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="total-comment-block">
                            <Dropdown>
                              <Dropdown.Toggle as="span">
                                20 Comment
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item className="" to="#">
                                  Max Emum
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Other
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <ShareOffcanvas />
                      </div>
                      <hr />
                      <ul className="post-comments p-0 m-0">
                        <li className="mb-2">
                          <div className="d-flex">
                            <div className="user-img">
                              <img
                                src={user11}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Monty Carlo</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="#">like</Link>
                                <Link to="#">reply</Link>
                                <Link to="#">translate</Link>
                                <span> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex">
                            <div className="user-img">
                              <img
                                src={user12}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Paul Molive</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="#">like</Link>
                                <Link to="#">reply</Link>
                                <Link to="#">translate</Link>
                                <span> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <form className="comment-text d-flex align-items-center mt-3">
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="Enter Your Comment"
                        />
                        <div className="comment-attagement d-flex align-items-center">
                          <Link to="#" className="material-symbols-outlined me-3 link">insert_link</Link>
                          <Link to="#" className="material-symbols-outlined me-3 ">sentiment_satisfied</Link>
                          <Link to="#" className="material-symbols-outlined me-3 ">photo_camera</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="user-post-data py-3">
                      <div className="d-flex justify-content-between">
                        <div className="media-support-user-img me-3">
                          <img
                            className="rounded-circle img-fluid"
                            src={user13}
                            alt=""
                          />
                        </div>
                        <div className="w-100">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="mb-0 d-inline-block me-1">
                                <Link to="#">Pete Sariya</Link>
                              </h5>{" "}
                              <p className=" mb-0 d-inline-block">
                                Update his Status
                              </p>
                              <p className="mb-0">7 hour ago</p>
                            </div>
                            <div className="card-post-toolbar">
                              <Dropdown>
                                <Dropdown.Toggle as="span">
                                  <i className="material-symbols-outlined">more_horiz</i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=" m-0 p-0">
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">save</h4>
                                      <div className="data ms-2">
                                        <h6>Save Post</h6>
                                        <p className="mb-0">
                                          Add this to your saved items
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">edit</h4>
                                      <div className="data ms-2">
                                        <h6>Edit Post</h6>
                                        <p className="mb-0">
                                          Update your post and saved items
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">cancel</h4>
                                      <div className="data ms-2">
                                        <h6>Hide From Timeline</h6>
                                        <p className="mb-0">
                                          See fewer posts like this.
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">delete</h4>
                                      <div className="data ms-2">
                                        <h6>Delete</h6>
                                        <p className="mb-0">
                                          Remove thids Post on Timeline
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=" p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <h4 className="material-symbols-outlined">notifications</h4>
                                      <div className="data ms-2">
                                        <h6>Notifications</h6>
                                        <p className="mb-0">
                                          Turn on notifications for this post
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user-post">
                      <Link to="#">
                        <img
                          src={img3}
                          alt="postimage"
                          className="img-fluid w-100"
                        />
                      </Link>
                    </div>
                    <div className="comment-area mt-3">
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="like-block position-relative d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="like-data">
                              <Dropdown>
                                <Dropdown.Toggle as="span">
                                  <img
                                    src={icon1}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu py-2">
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Like</Tooltip>}
                                    className="ms-2 me-2"
                                  >
                                    <img
                                      src={icon1}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Love</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon2}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Happy</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon3}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>HaHa</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon4}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Think</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon5}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Sade</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon6}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Lovely</Tooltip>}
                                    className="me-2"
                                  >
                                    <img
                                      src={icon7}
                                      className="img-fluid me-2"
                                      alt=""
                                    />
                                  </OverlayTrigger>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="total-like-block ms-2 me-3">
                              <Dropdown>
                                <Dropdown.Toggle as="span">
                                  140 Likes
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    className=""
                                    to="#"
                                  >
                                    Max Emum
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    to="#"
                                  >
                                    Bill Yerds
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    to="#"
                                  >
                                    Hap E. Birthday
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    to="#"
                                  >
                                    Tara Misu
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    to="#"
                                  >
                                    Midge Itz
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    to="#"
                                  >
                                    Sal Vidge
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className=""
                                    to="#"
                                  >
                                    Other
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="total-comment-block">
                            <Dropdown>
                              <Dropdown.Toggle as="span">
                                20 Comment
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item className="" to="#">
                                  Max Emum
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item className="" to="#">
                                  Other
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <ShareOffcanvas />
                      </div>
                      <hr />
                      <ul className="post-comments p-0 m-0">
                        <li className="mb-2">
                          <div className="d-flex ">
                            <div className="user-img">
                              <img
                                src={user11}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Monty Carlo</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="#">like</Link>
                                <Link to="#">reply</Link>
                                <Link to="#">translate</Link>
                                <span> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex ">
                            <div className="user-img">
                              <img
                                src={user12}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Paul Molive</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="#">like</Link>
                                <Link to="#">reply</Link>
                                <Link to="#">translate</Link>
                                <span> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <form className="comment-text d-flex align-items-center mt-3">
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="Enter Your Comment"
                        />
                        <div className="comment-attagement d-flex">
                          <Link to="#" className="material-symbols-outlined me-3 link">insert_link</Link>
                          <Link to="#" className="material-symbols-outlined me-3">sentiment_satisfied</Link>
                          <Link to="#" className="material-symbols-outlined me-3">photo_camera</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EventDetail;
