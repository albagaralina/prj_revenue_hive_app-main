import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  Nav,
  Tab,
  OverlayTrigger,
  Tooltip,
  Collapse,
} from "react-bootstrap";
import Card from "../../../components/Card";
import CreatePost from "../../../components/create-post";
import CustomToggle from "../../../components/dropdowns";
// import ShareOffcanvas from "../../../components/share-offcanvas";
import { Link } from "react-router-dom";
import ReactFsLightbox from "fslightbox-react";
import Doteddropdown from "../../../components/custom/Doted_dropdown";

// images
import img1 from "../../../assets/images/page-img/fun.webp";
// import img2 from "../../../assets/images/user/11.png";
import img3 from "../../../assets/images/icon/08.png";
import img4 from "../../../assets/images/icon/09.png";
import img5 from "../../../assets/images/icon/10.png";
import img6 from "../../../assets/images/icon/11.png";
import img7 from "../../../assets/images/icon/12.png";
import img8 from "../../../assets/images/icon/13.png";
import img9 from "../../../assets/images/page-img/07.jpg";
import img10 from "../../../assets/images/page-img/06.jpg";
import user1 from "../../../assets/images/user/1.jpg";
import user05 from "../../../assets/images/user/05.jpg";
import user01 from "../../../assets/images/user/01.jpg";
import user02 from "../../../assets/images/user/02.jpg";
import user03 from "../../../assets/images/user/03.jpg";
import user06 from "../../../assets/images/user/06.jpg";
import user07 from "../../../assets/images/user/07.jpg";
import user08 from "../../../assets/images/user/08.jpg";
import user09 from "../../../assets/images/user/09.jpg";
import user10 from "../../../assets/images/user/10.jpg";
import user13 from "../../../assets/images/user/13.jpg";
import user14 from "../../../assets/images/user/14.jpg";
import user15 from "../../../assets/images/user/15.jpg";
import user16 from "../../../assets/images/user/16.jpg";
import user17 from "../../../assets/images/user/17.jpg";
import user18 from "../../../assets/images/user/18.jpg";
import user19 from "../../../assets/images/user/19.jpg";
import img04 from "../../../assets/images/user/04.jpg";
// import p1 from "../../../assets/images/page-img/p1.jpg";
// import p3 from "../../../assets/images/page-img/p3.jpg";
import icon1 from "../../../assets/images/icon/01.png";
import icon2 from "../../../assets/images/icon/02.png";
import icon3 from "../../../assets/images/icon/03.png";
import icon4 from "../../../assets/images/icon/04.png";
import icon5 from "../../../assets/images/icon/05.png";
import icon6 from "../../../assets/images/icon/06.png";
import icon7 from "../../../assets/images/icon/07.png";
import g1 from "../../../assets/images/page-img/g1.jpg";
import g2 from "../../../assets/images/page-img/g2.jpg";
import g3 from "../../../assets/images/page-img/g3.jpg";
import g4 from "../../../assets/images/page-img/g4.jpg";
import g5 from "../../../assets/images/page-img/g5.jpg";
import g6 from "../../../assets/images/page-img/g6.jpg";
import g7 from "../../../assets/images/page-img/g7.jpg";
import g8 from "../../../assets/images/page-img/g8.jpg";
import g9 from "../../../assets/images/page-img/g9.jpg";
import loader from "../../../assets/images/page-img/page-load-loader.gif";
import img51 from "../../../assets/images/page-img/51.jpg";
import img52 from "../../../assets/images/page-img/52.jpg";
import img53 from "../../../assets/images/page-img/53.jpg";
import img54 from "../../../assets/images/page-img/54.jpg";
import img55 from "../../../assets/images/page-img/55.jpg";
import img56 from "../../../assets/images/page-img/56.jpg";
import img57 from "../../../assets/images/page-img/57.jpg";
import img58 from "../../../assets/images/page-img/58.jpg";
import img59 from "../../../assets/images/page-img/59.jpg";
import img60 from "../../../assets/images/page-img/60.jpg";
import img61 from "../../../assets/images/page-img/61.jpg";
import img62 from "../../../assets/images/page-img/62.jpg";
import img64 from "../../../assets/images/page-img/64.jpg";
import img65 from "../../../assets/images/page-img/65.jpg";
import img63 from "../../../assets/images/page-img/63.jpg";
import pageBgImg from "../../../assets/images/page-img/profile-bg1.jpg";

import mountain from "../../../assets/images/page-img/mountain.webp";
import pizza from "../../../assets/images/page-img/pizza.webp";
import busImg from "../../../assets/images/page-img/bus.webp";
import boyImg from "../../../assets/images/page-img/boy.webp";
import img11 from "../../../assets/images/page-img/fd.webp";

import coin from "../../../assets/images/gamipress/coin.svg";
import credit from "../../../assets/images/gamipress/credit.svg";
import gems from "../../../assets/images/gamipress/gems.svg";
import ShareOffcanvasNew from "../../../components/ShareOffcanvasNew";
// Fslightbox plugin
const FsLightbox = ReactFsLightbox.default
  ? ReactFsLightbox.default
  : ReactFsLightbox;

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);

  const [open_replay, setopen_replay] = useState(false)
  const [open_replay1, setopen_replay1] = useState(false)
  const [open_replay2, setopen_replay2] = useState(false)
  const [open_replay3, setopen_replay3] = useState(false)
  useEffect(() => {
    document.body.classList.add("profile-page");
    return () => {
      document.body.classList.remove("profile-page");
    };
  });

  const [imageController, setImageController] = useState({
    toggler: false,
    slide: 1,
  });

  function imageOnSlide(number) {
    setImageController({
      toggler: !imageController.toggler,
      slide: number,
    });
  }

  const aboutData = [
    {
      title: 'About Me:', data: 'Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56'
    },
    {
      title: "Email:",
      data: "Bnijohn@gmail.com",
    },
    {
      title: "Mobile:",
      data: "(001) 4544 565 456",
    },
    {
      title: "Address:",
      data: "United States of America",
    },
    {
      title: "Social Link:",
      data: "www.bootstrap.com",
    },
    {
      title: "Birth Date:",
      data: "24 January",
    },
    {
      title: "Birth Year:",
      data: "1994",
    },
    {
      title: "Birthplace:",
      data: "Austin, Texas, USA",
    },
    {
      title: "Lives in:",
      data: "San Francisco, California, USA",
    },
    {
      title: "Gender:",
      data: "Female",
    },
    {
      title: "Interested in:",
      data: "Designing",
    },
    {
      title: "Language:",
      data: "English, French",
    },
    {
      title: "Joined:",
      data: "April 31st, 2014",
    },
    {
      title: "Status:",
      data: "Married",
    },
    {
      title: "Phone Number:",
      data: "(044) 555 - 4369 - 8957",
    },
    {
      title: "Political Incline:",
      data: "Democrat",
    },
  ]

  const linkData = [
    {
      title: "Website:",
      data: "www.bootstrap.com",
    },
    {
      title: "Social Link:",
      data: "www.bootstrap.com",
    },
  ]

  return (
    <>
      <div id="content-page" className="content-inner">
        <FsLightbox
          toggler={imageController.toggler}
          sources={[
            g1,
            g2,
            g3,
            g4,
            g5,
            g6,
            g7,
            g8,
            g9,
            img1,
            boyImg,
            busImg,
            img11,
            mountain,
            pizza,
            img51,
            img52,
            img53,
            img54,
            img55,
            img56,
            img57,
            img58,
            img59,
            img60,
            img61,
            img62,
            img63,
            img64,
            img65,
            img51,
            img52,
            img53,
            img54,
            img55,
            img56,
            img57,
            img58,
            img51,
            img52,
            img53,
            img54,
            img55,
            img56,
            img57,
            img58,
            img59,
            img60,
          ]}
          slide={imageController.slide}
        />
        <Container className="position-relative p-0">
          <div
            className="header-cover-img"
            style={{
              backgroundImage: `url(${pageBgImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Container>
        <Container>
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col sm={12}>
                <Card className="profile-box">
                  <Card.Body>
                    <Row className="align-items-center item-header-content">
                      <Col lg={4} className="profile-left">
                        <ul className="d-flex align-items-center justify-content-center gap-3 list-inline p-0 m-0 mb-3 flex-wrap">
                          <li className="d-flex align-items-center gap-1">
                            <img
                              src={coin}
                              className="img-fluid avatar-24"
                              alt="coin"
                              loading="lazy"
                            />
                            <h6 className="font-size-14 fw-semibold">6765 Coins</h6>
                          </li>
                          <li className="d-flex align-items-center gap-1">
                            <img
                              src={credit}
                              className="img-fluid avatar-24"
                              alt="credit"
                              loading="lazy"
                            />
                            <h6 className="font-size-14 fw-semibold">
                              7180 Credits
                            </h6>
                          </li>
                          <li className="d-flex align-items-center gap-1">
                            <img
                              src={gems}
                              className="img-fluid avatar-24"
                              alt="coin"
                              loading="lazy"
                            />
                            <h6 className="font-size-14 fw-semibold">100 Gems</h6>
                          </li>
                        </ul>
                        <div className="social-links">
                          <ul className="social-data-block d-flex align-items-center justify-content-center list-inline p-0 m-0">
                            <li className="text-center pe-3">
                              <Link to="#">
                                <img
                                  src={img3}
                                  className="img-fluid rounded"
                                  alt="facebook"
                                  loading="lazy"
                                />
                              </Link>
                            </li>
                            <li className="text-center pe-3">
                              <Link to="#">
                                <img
                                  src={img4}
                                  className="img-fluid rounded"
                                  alt="Twitter"
                                  loading="lazy"
                                />
                              </Link>
                            </li>
                            <li className="text-center pe-3">
                              <Link to="#">
                                <img
                                  src={img5}
                                  className="img-fluid rounded"
                                  alt="Instagram"
                                  loading="lazy"
                                />
                              </Link>
                            </li>
                            <li className="text-center pe-3">
                              <Link to="#">
                                <img
                                  src={img6}
                                  className="img-fluid rounded"
                                  alt="Google plus"
                                  loading="lazy"
                                />
                              </Link>
                            </li>
                            <li className="text-center pe-3">
                              <Link to="#">
                                <img
                                  src={img7}
                                  className="img-fluid rounded"
                                  alt="You tube"
                                  loading="lazy"
                                />
                              </Link>
                            </li>
                            <li className="text-center md-pe-3 pe-0">
                              <Link to="#">
                                <img
                                  src={img8}
                                  className="img-fluid rounded"
                                  alt="linkedin"
                                  loading="lazy"
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col lg={4} className="text-center profile-center">
                        <div className="header-avatar position-relative d-inline-block">
                          <span className="change-profile-image bg-primary rounded-pill">
                            <span className="material-symbols-outlined text-white font-size-16">
                              photo_camera
                            </span>
                          </span>
                          <img
                            src={user1}
                            alt="user"
                            className="avatar-150 border border-4 border-white rounded-3"
                          />
                          <span className="badge bg-success fw-500 letter-spacing-1 chat-status">
                            online
                          </span>
                        </div>
                        <h5 className="d-flex align-items-center justify-content-center gap-1 mb-2">
                          Marvin McKinney{" "}
                          <span className="badge  bg-primary rounded-pill material-symbols-outlined font-size-14 p-0 custom-done">
                            done
                          </span>
                        </h5>
                        <ul className="d-flex align-items-center justify-content-center gap-3 list-inline p-0 m-0">
                          <li className="d-flex align-items-center gap-1">
                            <h6 className="material-symbols-outlined font-size-14">
                              location_on
                            </h6>
                            <span className="font-size-14 text-uppercase fw-500">
                              lyON
                            </span>
                          </li>
                          <li className="d-flex align-items-center gap-1">
                            <h6 className="material-symbols-outlined font-size-14">
                              globe_asia
                            </h6>
                            <Link
                              to="https://smartinvestmentoff.com/"
                              className="font-size-14 fw-500 text-body"
                            >
                              smartinvestmentoff.com/
                            </Link>
                          </li>
                        </ul>
                      </Col>
                      <Col lg={4} className="profile-right">
                        <ul className="user-meta list-inline p-0 d-flex align-items-center justify-content-center">
                          <li>
                            <h5>0</h5>Posts
                          </li>
                          <li>
                            <h5>0</h5>Comments
                          </li>
                          <li>
                            <h5>82.6K</h5>Views
                          </li>
                        </ul>
                      </Col>
                    </Row>

                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="p-0">
                    <div className="user-tabing item-list-tabs">
                      <Nav
                        as="ul"
                        variant="pills"
                        className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0 rounded"
                      >
                        <Nav.Item as="li" className=" col-12 col-sm-3">
                          <Nav.Link
                            href="#pills-timeline-tab"
                            eventKey="first"
                            role="button"
                            className=" d-flex flex-md-column align-items-center flex-row justify-content-center gap-2"
                          >
                            <span className="icon rounded-3">
                              <span className="material-symbols-outlined">
                                calendar_month
                              </span>
                            </span>
                            <p className="mb-0 mt-0 mt-md-3">Timeline</p>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="col-12 col-sm-3">
                          <Nav.Link
                            href="#pills-about-tab"
                            eventKey="second"
                            role="button"
                            className="d-flex flex-md-column align-items-center flex-row justify-content-center gap-2"
                          >
                            <span className="icon rounded-3">
                              <span className="material-symbols-outlined">
                                person
                              </span>
                            </span>{" "}
                            <p className="mb-0 mt-0 mt-md-3">About</p>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className=" col-12 col-sm-3 ">
                          <Nav.Link
                            href="#pills-friends-tab"
                            eventKey="third"
                            role="button"
                            className="d-flex flex-md-column align-items-center flex-row justify-content-center gap-2"
                          >
                            <span className="icon rounded-3">
                              <span className="material-symbols-outlined">
                                group
                              </span>
                            </span>
                            <p className="mb-0 mt-0 mt-md-3">Friends</p>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="col-12 col-sm-3">
                          <Nav.Link
                            href="#pills-photos-tab"
                            eventKey="forth"
                            role="button"
                            className="d-flex flex-md-column align-items-center flex-row justify-content-center gap-2"
                          >
                            <span className="icon rounded-3">
                              <span className="material-symbols-outlined">
                                image
                              </span>
                            </span>
                            <p className="mb-0 mt-0 mt-md-3">Photos</p>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Card.Body className=" p-0">
                      <Row>
                        <Col lg={4}>
                          <Card>
                            <Card.Body>
                              <Link to="#" className="d-inline-flex align-items-center">
                                <span className="badge badge-pill bg-primary font-weight-normal me-1  material-symbols-outlined md-14 custom-grade">
                                  grade
                                </span>{" "}
                                <span>27 Items for you</span>
                              </Link>
                            </Card.Body>
                          </Card>
                          <Card>
                            <div className="card-header d-flex justify-content-between border-bottom">
                              <div className="header-title">
                                <h4 className="card-title">Life Event</h4>
                              </div>
                              <div className="card-header-toolbar d-flex align-items-center">
                                <p className="m-0">
                                  <Link to="#"> Create </Link>
                                </p>
                              </div>
                            </div>
                            <Card.Body>
                              <Row>
                                <Col sm={12}>
                                  <div className="event-post position-relative">
                                    <Link to="#">
                                      <img
                                        loading="lazy"
                                        src={img9}
                                        alt="gallary1"
                                        className="img-fluid rounded"
                                      />
                                    </Link>
                                    <div className="job-icon-position">
                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle material-symbols-outlined text-white">
                                        local_mall
                                      </div>
                                    </div>
                                    <div className="card-body text-center p-2">
                                      <h5>Started New Job at Apple</h5>
                                      <p>January 24, 2019</p>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm={12}>
                                  <div className="event-post position-relative">
                                    <Link to="#">
                                      <img
                                        loading="lazy"
                                        src={img10}
                                        alt="gallary1"
                                        className="img-fluid rounded"
                                      />
                                    </Link>
                                    <div className="job-icon-position">
                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle material-symbols-outlined text-white">
                                        local_mall
                                      </div>
                                    </div>
                                    <div className="card-body text-center p-2">
                                      <h5>Freelance Photographer</h5>
                                      <p className="mb-0">January 24, 2019</p>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Card>
                          <div className="fixed-suggestion mb-0 mb-lg-4">
                            <Card>
                              <div className="card-header d-flex justify-content-between border-bottom">
                                <div className="header-title">
                                  <h4 className="card-title">Photos</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <p className="m-0">
                                    <Link to="#">Add Photo </Link>
                                  </p>
                                </div>
                              </div>
                              <Card.Body>
                                <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                  <li>
                                    <Link onClick={() => imageOnSlide(1)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g1}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={() => imageOnSlide(2)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g2}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={() => imageOnSlide(3)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g3}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={() => imageOnSlide(4)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g4}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={() => imageOnSlide(5)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g5}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={() => imageOnSlide(6)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g6}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={() => imageOnSlide(7)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g7}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={() => imageOnSlide(8)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g8}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={() => imageOnSlide(9)} to="#">
                                      <img
                                        loading="lazy"
                                        src={g9}
                                        alt="gallary"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </li>
                                </ul>
                              </Card.Body>
                            </Card>
                            <Card>
                              <div className="card-header d-flex justify-content-between border-bottom">
                                <div className="header-title">
                                  <h4 className="card-title">Friends</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <p className="m-0">
                                    <Link to="javacsript:void();">Add New </Link>
                                  </p>
                                </div>
                              </div>
                              <Card.Body>
                                <div className="row row-cols-xl-3 row-cols-md-2 row-cols-2">
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user05} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Anna Rexia</h6>
                                  </div>
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user06} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Tara Zona</h6>
                                  </div>
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user07} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Polly Tech</h6>
                                  </div>
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user08} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Bill Emia</h6>
                                  </div>
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user09} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Moe Fugga</h6>
                                  </div>
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user10} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Hal Appeno </h6>
                                  </div>
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user07} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Zack Lee</h6>
                                  </div>
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user06} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Terry Aki</h6>
                                  </div>
                                  <div className="col mt-2 text-center">
                                    <Link to="#"><img src={user05} alt="gallary-image" loading="lazy" className="img-fluid" /></Link>
                                    <h6 className="mt-2 text-center">Greta Life</h6>
                                  </div>
                                </div>

                              </Card.Body>
                            </Card>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <Row>
                            <Col sm={12}>
                              <CreatePost />
                            </Col>
                            <Col sm={12} className="special-post">
                              <Card className=" card-block card-stretch card-height">
                                <Card.Body>
                                  <div className="user-post-data">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="me-3 flex-shrik-0">
                                        <img
                                          className="border border-2 rounded-circle user-post-profile"
                                          src={user01}
                                          alt=""
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div>
                                            <h6 className="mb-0 d-inline-block">
                                              Anna Sthesia
                                            </h6>{" "}
                                            <span className="d-inline-block text-primary">
                                              <svg
                                                className="align-text-bottom"
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M11.8457 0H4.34822C1.73547 0 0.0974121 1.84995 0.0974121 4.46789V11.5321C0.0974121 14.1501 1.72768 16 4.34822 16H11.8449C14.4663 16 16.0974 14.1501 16.0974 11.5321V4.46789C16.0974 1.84995 14.4663 0 11.8457 0Z"
                                                  fill="currentColor"
                                                />
                                                <path
                                                  d="M5.09741 7.99978L7.09797 9.9995L11.0974 6.00006"
                                                  stroke="white"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                />
                                              </svg>
                                            </span>{" "}
                                            <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                              posted an update
                                            </span>
                                            <p className="mb-0">2 minutes ago</p>
                                          </div>
                                          <Doteddropdown></Doteddropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-4">
                                    <p className="m-0">
                                      "Energy, the tangible expression of pure thought, propels intentions into
                                      powerful actions, bridging the gap between
                                      mind and manifestation."
                                    </p>
                                    <ul className="list-inline m-0 p-0 d-flex flex-wrap gap-1">
                                      <li>
                                        <Link to="#">#friends</Link>
                                      </li>
                                      <li>
                                        <Link to="#">#party</Link>
                                      </li>
                                      <li>
                                        <Link to="#">#birthday</Link>
                                      </li>
                                      <li>
                                        <Link to="#">#together</Link>
                                      </li>
                                      <li>
                                        <Link to="#">#celebration</Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="user-post mt-4">
                                    <Link
                                      onClick={() => imageOnSlide(10)}
                                      to="#"
                                      className="rounded"
                                    >
                                      <img
                                        src={img1}
                                        alt="post-images"
                                        className="img-fluid rounded w-100"
                                        loading="lazy"
                                      />
                                    </Link>
                                  </div>
                                  <div className="post-meta-likes mt-4">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                      <ul className="list-inline m-0 p-0 post-user-liked-list">
                                        <li>
                                          <img
                                            src={user01}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={user02}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={user03}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={img04}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                      </ul>
                                      <div className="d-inline-flex align-items-center gap-1">
                                        <h6 className="m-0 font-size-14">
                                          Aliana Molex
                                        </h6>
                                        <span
                                          className="text-capitalize font-size-14 fw-medium"
                                          type="button"
                                          data-bs-toggle="modal"
                                          data-bs-target="#likemodal"
                                        >
                                          and 208 others liked this
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="comment-area mt-4 pt-4 border-top">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                      <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                        <div className="like-data">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-bs-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <span className="material-symbols-outlined align-text-top font-size-20">
                                                thumb_up
                                              </span>{" "}
                                              <span className="fw-medium">
                                                140 Likes
                                              </span>
                                            </span>
                                            <div className="dropdown-menu py-2 shadow">
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
                                                overlay={
                                                  <Tooltip>Lovely</Tooltip>
                                                }
                                                className="me-2"
                                              >
                                                <img
                                                  src={icon7}
                                                  className="img-fluid me-2"
                                                  alt=""
                                                />
                                              </OverlayTrigger>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                        <div
                                          className="total-comment-block"
                                          type="button"
                                          aria-controls="commentcollapes"
                                          aria-expanded={open}
                                          onClick={() => setOpen(!open)}
                                        >
                                          <span className="material-symbols-outlined align-text-top font-size-20">
                                            comment
                                          </span>{" "}
                                          <span className="fw-medium">
                                            20 Comment
                                          </span>
                                        </div>

                                        <div className="share-block d-flex align-items-center feather-icon">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#share-btn"
                                            onClick={() => setModalShow(true)}
                                            aria-controls="share-btn"
                                            className="d-flex align-items-center"
                                          >
                                            <span className="material-symbols-outlined align-text-top font-size-20">
                                              share
                                            </span>
                                            <span className="ms-1 fw-medium">
                                              99 Share
                                            </span>
                                          </Link>
                                        </div>
                                        <ShareOffcanvasNew
                                          show={modalShow}
                                          onHide={() => setModalShow(false)}
                                        />
                                      </div>
                                    </div>

                                    <Collapse in={open}>
                                      <div id="commentcollapes" className="mt-4 pt-4 border-top">
                                        <ul className="list-inline m-o p-0 comment-list">
                                          <li className="mb-3">
                                            <div className="comment-list-block">
                                              <div className="d-flex align-items-center gap-3">
                                                <div className="comment-list-user-img flex-shrink-0">
                                                  <img
                                                    src={user13}
                                                    alt="userimg"
                                                    className="avatar-48 rounded-circle img-fluid"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                <div className="comment-list-user-data">
                                                  <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                    <h6 className="m-0">
                                                      Bob Frapples
                                                    </h6>
                                                    <span className="d-inline-block text-primary">
                                                      <svg
                                                        className="align-text-bottom"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="17"
                                                        height="17"
                                                        viewBox="0 0 17 17"
                                                        fill="none"
                                                      >
                                                        <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                          fill="currentColor"
                                                        />
                                                        <path
                                                          d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                          stroke="white"
                                                          strokeWidth="1.5"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                        />
                                                      </svg>
                                                    </span>
                                                    <span className="fw-medium small text-capitalize">
                                                      3 min ago
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="comment-list-user-comment">
                                                <div className="comment-list-comment">
                                                  "Just stumbled upon this post
                                                  and it's giving me all the
                                                  feels! 🙌"
                                                </div>
                                                <div className="comment-list-action mt-2">
                                                  <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2">
                                                    <li>
                                                      <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                                        <div className="like-data">
                                                          <div className="dropdown">
                                                            <span
                                                              className="dropdown-toggle"
                                                              data-bs-toggle="dropdown"
                                                              aria-haspopup="true"
                                                              aria-expanded="false"
                                                              role="button"
                                                            >
                                                              <span className="material-symbols-outlined align-text-top font-size-18">
                                                                thumb_up
                                                              </span>{" "}
                                                              <span className="fw-medium small">
                                                                Likes
                                                              </span>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                    <li>
                                                      <span
                                                        className="fw-medium small"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#subcomment-collapse1"
                                                        role="button"
                                                        aria-expanded="false"
                                                        aria-controls="collapseExample"
                                                        onClick={(() => setopen_replay(!open_replay))}
                                                      >
                                                        Reply
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  {/*  */}
                                                  <Collapse in={open_replay}>
                                                    <div
                                                      className="add-comment-form-block mt-3"
                                                      id="subcomment-collapse1"
                                                    >
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                          <img
                                                            src={user1}
                                                            alt="userimg"
                                                            className="avatar-48 rounded-circle img-fluid"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="add-comment-form">
                                                          <form>
                                                            <input
                                                              type="text"
                                                              className="form-control"
                                                              placeholder="Write a Comment..."
                                                            />
                                                            <button
                                                              type="submit"
                                                              className="btn btn-primary font-size-12 text-capitalize px-5"
                                                            >
                                                              post
                                                            </button>
                                                          </form>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </Collapse>
                                                  {/*  */}
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                        <div className="add-comment-form-block">
                                          <div className="d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                              <img
                                                src={user1}
                                                alt="userimg"
                                                className="avatar-48 rounded-circle img-fluid"
                                                loading="lazy"
                                              />
                                            </div>
                                            <div className="add-comment-form">
                                              <form>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Write a Comment..."
                                                />
                                                <button
                                                  type="submit"
                                                  className="btn btn-primary font-size-12 text-capitalize px-5"
                                                >
                                                  post
                                                </button>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Collapse>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col sm={12} className="special-post">
                              <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                  <div className="user-post-data">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="me-3 flex-shrik-0">
                                        <img
                                          className="border border-2 rounded-circle user-post-profile"
                                          src={user03}
                                          alt=""
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex  justify-content-between align-items-center">
                                          <div>
                                            <h6 className="mb-0 d-inline-block">
                                              Barb Ackue
                                            </h6>{" "}
                                            <span className="d-inline-block text-primary">
                                              <svg
                                                className="align-text-bottom"
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M11.8457 0H4.34822C1.73547 0 0.0974121 1.84995 0.0974121 4.46789V11.5321C0.0974121 14.1501 1.72768 16 4.34822 16H11.8449C14.4663 16 16.0974 14.1501 16.0974 11.5321V4.46789C16.0974 1.84995 14.4663 0 11.8457 0Z"
                                                  fill="currentColor"
                                                />
                                                <path
                                                  d="M5.09741 7.99978L7.09797 9.9995L11.0974 6.00006"
                                                  stroke="white"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                />
                                              </svg>
                                            </span>{" "}
                                            <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                              Add A New Post
                                            </span>
                                            <p className="mb-0">
                                              1 Hour ago
                                            </p>
                                          </div>
                                          <Doteddropdown></Doteddropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-4">
                                    <p className="m-0">
                                      "Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Morbi nulla dolor, ornare
                                      at commodo non, feugiat non nisi. Phasellus
                                      faucibus mollis pharetra. Proin blandit ac
                                      massa sed rhoncus"
                                    </p>
                                    <ul className="list-inline m-0 p-0 d-flex flex-wrap gap-1">
                                      <li>
                                        <Link to="#">#family</Link>
                                      </li>
                                      <li>
                                        <Link to="#">#happiness</Link>
                                      </li>
                                      <li>
                                        <Link to="#">#travelling</Link>
                                      </li>
                                      <li>
                                        <Link to="#">#camping</Link>
                                      </li>
                                      <li>
                                        <Link to="#">#climbing</Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="user-post mt-4">
                                    <Row>
                                      <Col md={4}>
                                        <Link
                                          to="#"
                                          onClick={() => imageOnSlide(11)}
                                        >
                                          <img
                                            src={boyImg}
                                            alt="post1"
                                            className="img-fluid rounded w-100"
                                          />
                                        </Link>
                                      </Col>
                                      <Col md={4} className="mt-md-0  mt-3">
                                        <Link
                                          to="#"
                                          onClick={() => imageOnSlide(12)}
                                        >
                                          <img
                                            src={busImg}
                                            alt="post1"
                                            className="img-fluid rounded w-100"
                                          />
                                        </Link>
                                      </Col>
                                      <Col md={4} className="mt-md-0  mt-3">
                                        <Link
                                          to="#"
                                          onClick={() => imageOnSlide(13)}
                                        >
                                          <img
                                            src={img11}
                                            alt="post1"
                                            className="img-fluid rounded w-100"
                                          />
                                        </Link>
                                      </Col>
                                    </Row>
                                    <Row className="mt-3">
                                      <Col md={6}>
                                        <Link
                                          to="#"
                                          onClick={() => imageOnSlide(14)}
                                        >
                                          <img
                                            src={mountain}
                                            alt="post1"
                                            className="img-fluid rounded w-100"
                                          />
                                        </Link>
                                      </Col>
                                      <Col md={6} className="mt-md-0 mt-3">
                                        <div className="post-overlay-box h-100 rounded">
                                          <img
                                            src={pizza}
                                            alt="post-images"
                                            className="img-fluid rounded w-100 h-100 object-cover"
                                            loading="lazy"
                                          />
                                          <Link
                                            to="#"
                                            className="rounded font-size-18"
                                            data-fslightbox="gallery"
                                            onClick={() => imageOnSlide(15)}
                                          >
                                            +2
                                          </Link>
                                        </div>
                                      </Col>
                                    </Row>
                                    <div className="post-meta-likes mt-4">
                                      <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <ul className="list-inline m-0 p-0 post-user-liked-list">
                                          <li>
                                            <img
                                              src={user01}
                                              alt="userimg"
                                              className="rounded-circle img-fluid userimg"
                                              loading="lazy"
                                            />
                                          </li>{" "}
                                          <li>
                                            <img
                                              src={user02}
                                              alt="userimg"
                                              className="rounded-circle img-fluid userimg"
                                              loading="lazy"
                                            />
                                          </li>{" "}
                                          <li>
                                            <img
                                              src={user03}
                                              alt="userimg"
                                              className="rounded-circle img-fluid userimg"
                                              loading="lazy"
                                            />
                                          </li>{" "}
                                          <li>
                                            <img
                                              src={img04}
                                              alt="userimg"
                                              className="rounded-circle img-fluid userimg"
                                              loading="lazy"
                                            />
                                          </li>
                                        </ul>
                                        <div className="d-inline-flex align-items-center gap-1">
                                          <h6 className="m-0 font-size-14">
                                            Aliana Molex
                                          </h6>
                                          <span
                                            className="text-capitalize font-size-14 fw-medium"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#likemodal"
                                          >
                                            and 208 others liked this
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="comment-area mt-4 pt-4 border-top">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                      <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                        <div className="like-data">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-bs-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <span className="material-symbols-outlined align-text-top font-size-20">
                                                thumb_up
                                              </span>{" "}
                                              <span className="fw-medium">
                                                140 Likes
                                              </span>
                                            </span>
                                            <div className="dropdown-menu py-2 shadow">
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
                                                overlay={
                                                  <Tooltip>Lovely</Tooltip>
                                                }
                                                className="me-2"
                                              >
                                                <img
                                                  src={icon7}
                                                  className="img-fluid me-2"
                                                  alt=""
                                                />
                                              </OverlayTrigger>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                        <div
                                          className="total-comment-block"
                                          type="button"
                                          aria-controls="commentcollapes"
                                          aria-expanded={open1}
                                          onClick={() => setOpen1(!open1)}
                                        >
                                          <span className="material-symbols-outlined align-text-top font-size-20">
                                            comment
                                          </span>{" "}
                                          <span className="fw-medium">
                                            20 Comment
                                          </span>
                                        </div>

                                        <div className="share-block d-flex align-items-center feather-icon">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#share-btn"
                                            onClick={() => setModalShow1(true)}
                                            aria-controls="share-btn"
                                            className="d-flex align-items-center"
                                          >
                                            <span className="material-symbols-outlined align-text-top font-size-20">
                                              share
                                            </span>
                                            <span className="ms-1 fw-medium">
                                              99 Share
                                            </span>
                                          </Link>
                                        </div>
                                        <ShareOffcanvasNew
                                          show={modalShow1}
                                          onHide={() => setModalShow1(false)}
                                        />
                                      </div>
                                    </div>

                                    <Collapse in={open1}>
                                      <div id="commentcollapes" className="mt-4 pt-4 border-top">
                                        <ul className="list-inline m-o p-0 comment-list">
                                          <li className="mb-3">
                                            <div className="comment-list-block">
                                              <div className="d-flex align-items-center gap-3">
                                                <div className="comment-list-user-img flex-shrink-0">
                                                  <img
                                                    src={user13}
                                                    alt="userimg"
                                                    className="avatar-48 rounded-circle img-fluid"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                <div className="comment-list-user-data">
                                                  <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                    <h6 className="m-0">
                                                      Bob Frapples
                                                    </h6>
                                                    <span className="d-inline-block text-primary">
                                                      <svg
                                                        className="align-text-bottom"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="17"
                                                        height="17"
                                                        viewBox="0 0 17 17"
                                                        fill="none"
                                                      >
                                                        <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                          fill="currentColor"
                                                        />
                                                        <path
                                                          d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                          stroke="white"
                                                          strokeWidth="1.5"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                        />
                                                      </svg>
                                                    </span>
                                                    <span className="fw-medium small text-capitalize">
                                                      3 min ago
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="comment-list-user-comment">
                                                <div className="comment-list-comment">
                                                  "Just stumbled upon this post
                                                  and it's giving me all the
                                                  feels! 🙌"
                                                </div>
                                                <div className="comment-list-action mt-2">
                                                  <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2">
                                                    <li>
                                                      <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                                        <div className="like-data">
                                                          <div className="dropdown">
                                                            <span
                                                              className="dropdown-toggle"
                                                              data-bs-toggle="dropdown"
                                                              aria-haspopup="true"
                                                              aria-expanded="false"
                                                              role="button"
                                                            >
                                                              <span className="material-symbols-outlined align-text-top font-size-18">
                                                                thumb_up
                                                              </span>{" "}
                                                              <span className="fw-medium small">
                                                                Likes
                                                              </span>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                    <li>
                                                      <span
                                                        className="fw-medium small"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#subcomment-collapse1"
                                                        role="button"
                                                        aria-expanded="false"
                                                        aria-controls="collapseExample"
                                                        onClick={(() => setopen_replay1(!open_replay1))}
                                                      >
                                                        Reply
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  {/*  */}
                                                  <Collapse in={open_replay1}>
                                                    <div
                                                      className="add-comment-form-block mt-3"
                                                      id="subcomment-collapse1"
                                                    >
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                          <img
                                                            src={user1}
                                                            alt="userimg"
                                                            className="avatar-48 rounded-circle img-fluid"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="add-comment-form">
                                                          <form>
                                                            <input
                                                              type="text"
                                                              className="form-control"
                                                              placeholder="Write a Comment..."
                                                            />
                                                            <button
                                                              type="submit"
                                                              className="btn btn-primary font-size-12 text-capitalize px-5"
                                                            >
                                                              post
                                                            </button>
                                                          </form>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </Collapse>
                                                  {/*  */}
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                        <div className="add-comment-form-block">
                                          <div className="d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                              <img
                                                src={user1}
                                                alt="userimg"
                                                className="avatar-48 rounded-circle img-fluid"
                                                loading="lazy"
                                              />
                                            </div>
                                            <div className="add-comment-form">
                                              <form>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Write a Comment..."
                                                />
                                                <button
                                                  type="submit"
                                                  className="btn btn-primary font-size-12 text-capitalize px-5"
                                                >
                                                  post
                                                </button>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Collapse>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm={12} className="special-post">
                              <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                  <div className="user-post-data">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="me-3 flex-shrik-0">
                                        <img
                                          className="border border-2 rounded-circle user-post-profile"
                                          src={img04}
                                          alt=""
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className=" d-flex  justify-content-between align-items-center">
                                          <div>
                                            <h6 className="mb-0 d-inline-block">
                                              Ira Membrit
                                            </h6>{" "}
                                            <span className="d-inline-block text-primary">
                                              <svg
                                                className="align-text-bottom"
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M11.8457 0H4.34822C1.73547 0 0.0974121 1.84995 0.0974121 4.46789V11.5321C0.0974121 14.1501 1.72768 16 4.34822 16H11.8449C14.4663 16 16.0974 14.1501 16.0974 11.5321V4.46789C16.0974 1.84995 14.4663 0 11.8457 0Z"
                                                  fill="currentColor"
                                                ></path>
                                                <path
                                                  d="M5.09741 7.99978L7.09797 9.9995L11.0974 6.00006"
                                                  stroke="white"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                ></path>
                                              </svg>
                                            </span>{" "}
                                            <span className="mb-0 d-inline-block text-capitalize fw-medium">Update her Status </span>
                                            <p className="mb-0">
                                              6 Hours ago
                                            </p>
                                          </div>
                                          <Doteddropdown></Doteddropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-4">
                                    <p className="mb-0">
                                      "Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Morbi nulla dolor, ornare
                                      at commodo non, feugiat non nisi. Phasellus
                                      faucibus mollis pharetra. Proin blandit ac
                                      massa sed rhoncus"
                                    </p>
                                  </div>
                                  <div className="post-meta-likes mt-4">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                      <ul className="list-inline m-0 p-0 post-user-liked-list">
                                        <li>
                                          <img
                                            src={user01}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={user02}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={user03}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={img04}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>
                                      </ul>
                                      <div className="d-inline-flex align-items-center gap-1">
                                        <h6 className="m-0 font-size-14">
                                          Aliana Molex
                                        </h6>
                                        <span
                                          className="text-capitalize font-size-14 fw-medium"
                                          type="button"
                                          data-bs-toggle="modal"
                                          data-bs-target="#likemodal"
                                        >
                                          and 208 others liked this
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="comment-area mt-4 pt-4 border-top">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                      <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                        <div className="like-data">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-bs-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <span className="material-symbols-outlined align-text-top font-size-20">
                                                thumb_up
                                              </span>{" "}
                                              <span className="fw-medium">
                                                140 Likes
                                              </span>
                                            </span>
                                            <div className="dropdown-menu py-2 shadow">
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
                                                overlay={
                                                  <Tooltip>Lovely</Tooltip>
                                                }
                                                className="me-2"
                                              >
                                                <img
                                                  src={icon7}
                                                  className="img-fluid me-2"
                                                  alt=""
                                                />
                                              </OverlayTrigger>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                        <div
                                          className="total-comment-block"
                                          type="button"
                                          aria-controls="commentcollapes"
                                          aria-expanded={open2}
                                          onClick={() => setOpen2(!open2)}
                                        >
                                          <span className="material-symbols-outlined align-text-top font-size-20">
                                            comment
                                          </span>{" "}
                                          <span className="fw-medium">
                                            20 Comment
                                          </span>
                                        </div>

                                        <div className="share-block d-flex align-items-center feather-icon">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#share-btn"
                                            onClick={() => setModalShow2(true)}
                                            aria-controls="share-btn"
                                            className="d-flex align-items-center"
                                          >
                                            <span className="material-symbols-outlined align-text-top font-size-20">
                                              share
                                            </span>
                                            <span className="ms-1 fw-medium">
                                              99 Share
                                            </span>
                                          </Link>
                                        </div>
                                        <ShareOffcanvasNew
                                          show={modalShow2}
                                          onHide={() => setModalShow2(false)}
                                        />
                                      </div>
                                    </div>

                                    <Collapse in={open2}>
                                      <div id="commentcollapes" className="mt-4 pt-4 border-top">
                                        <ul className="list-inline m-o p-0 comment-list">
                                          <li className="mb-3">
                                            <div className="comment-list-block">
                                              <div className="d-flex align-items-center gap-3">
                                                <div className="comment-list-user-img flex-shrink-0">
                                                  <img
                                                    src={user13}
                                                    alt="userimg"
                                                    className="avatar-48 rounded-circle img-fluid"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                <div className="comment-list-user-data">
                                                  <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                    <h6 className="m-0">
                                                      Bob Frapples
                                                    </h6>
                                                    <span className="d-inline-block text-primary">
                                                      <svg
                                                        className="align-text-bottom"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="17"
                                                        height="17"
                                                        viewBox="0 0 17 17"
                                                        fill="none"
                                                      >
                                                        <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                          fill="currentColor"
                                                        />
                                                        <path
                                                          d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                          stroke="white"
                                                          strokeWidth="1.5"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                        />
                                                      </svg>
                                                    </span>
                                                    <span className="fw-medium small text-capitalize">
                                                      3 min ago
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="comment-list-user-comment">
                                                <div className="comment-list-comment">
                                                  "Just stumbled upon this post
                                                  and it's giving me all the
                                                  feels! 🙌"
                                                </div>
                                                <div className="comment-list-action mt-2">
                                                  <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2">
                                                    <li>
                                                      <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                                        <div className="like-data">
                                                          <div className="dropdown">
                                                            <span
                                                              className="dropdown-toggle"
                                                              data-bs-toggle="dropdown"
                                                              aria-haspopup="true"
                                                              aria-expanded="false"
                                                              role="button"
                                                            >
                                                              <span className="material-symbols-outlined align-text-top font-size-18">
                                                                thumb_up
                                                              </span>{" "}
                                                              <span className="fw-medium small">
                                                                Likes
                                                              </span>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                    <li>
                                                      <span
                                                        className="fw-medium small"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#subcomment-collapse1"
                                                        role="button"
                                                        aria-expanded="false"
                                                        aria-controls="collapseExample"
                                                        onClick={() => setopen_replay2(!open_replay2)}
                                                      >
                                                        Reply
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  {/*  */}
                                                  <Collapse in={open_replay2}>
                                                    <div
                                                      className="add-comment-form-block mt-3"
                                                      id="subcomment-collapse1"
                                                    >
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                          <img
                                                            src={user1}
                                                            alt="userimg"
                                                            className="avatar-48 rounded-circle img-fluid"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="add-comment-form">
                                                          <form>
                                                            <input
                                                              type="text"
                                                              className="form-control"
                                                              placeholder="Write a Comment..."
                                                            />
                                                            <button
                                                              type="submit"
                                                              className="btn btn-primary font-size-12 text-capitalize px-5"
                                                            >
                                                              post
                                                            </button>
                                                          </form>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </Collapse>
                                                  {/*  */}
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                        <div className="add-comment-form-block">
                                          <div className="d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                              <img
                                                src={user1}
                                                alt="userimg"
                                                className="avatar-48 rounded-circle img-fluid"
                                                loading="lazy"
                                              />
                                            </div>
                                            <div className="add-comment-form">
                                              <form>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Write a Comment..."
                                                />
                                                <button
                                                  type="submit"
                                                  className="btn btn-primary font-size-12 text-capitalize px-5"
                                                >
                                                  post
                                                </button>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Collapse>
                                  </div>
                                </div>
                              </div>
                            </Col>

                            <Col sm={12} className="special-post">
                              <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                  <div className="user-post-data">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="me-3 flex-shrik-0">
                                        <img
                                          className="border border-2 rounded-circle user-post-profile"
                                          src={user1}
                                          alt=""
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <div>
                                            <h6 className="mb-0 d-inline-block">
                                              Bni Cyst
                                            </h6>{" "}
                                            <span className="d-inline-block text-primary">
                                              <svg
                                                className="align-text-bottom"
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M11.8457 0H4.34822C1.73547 0 0.0974121 1.84995 0.0974121 4.46789V11.5321C0.0974121 14.1501 1.72768 16 4.34822 16H11.8449C14.4663 16 16.0974 14.1501 16.0974 11.5321V4.46789C16.0974 1.84995 14.4663 0 11.8457 0Z"
                                                  fill="currentColor"
                                                ></path>
                                                <path
                                                  d="M5.09741 7.99978L7.09797 9.9995L11.0974 6.00006"
                                                  stroke="white"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                ></path>
                                              </svg>
                                            </span>{" "}
                                            <span className="mb-0 d-inline-block text-capitalize fw-medium">Added New Video in his
                                              Timeline</span>
                                            <p className="mb-0">
                                              8 Hours ago
                                            </p>
                                          </div>
                                          <Doteddropdown></Doteddropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-4">
                                    <p>
                                      "Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Morbi nulla dolor, ornare
                                      at commodo non, feugiat non nisi. Phasellus
                                      faucibus mollis pharetra. Proin blandit ac
                                      massa sed rhoncus"
                                    </p>
                                  </div>
                                  <div className="user-post mt-4">
                                    <div className="ratio ratio-16x9">
                                      <iframe
                                        title="vedio"
                                        // src="https://www.youtube.com/embed/j_GsIanLxZk?rel=0"
                                        src="https://www.youtube.com/embed/oHD33oKbKh4?si=VF-Qcp-pZdzUb3RX"
                                      ></iframe>
                                    </div>
                                  </div>
                                  <div className="post-meta-likes mt-4">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                      <ul className="list-inline m-0 p-0 post-user-liked-list">
                                        <li>
                                          <img
                                            src={user01}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={user02}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={user03}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>{" "}
                                        <li>
                                          <img
                                            src={img04}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        </li>
                                      </ul>
                                      <div className="d-inline-flex align-items-center gap-1">
                                        <h6 className="m-0 font-size-14">
                                          Aliana Molex
                                        </h6>
                                        <span
                                          className="text-capitalize font-size-14 fw-medium"
                                          type="button"
                                          data-bs-toggle="modal"
                                          data-bs-target="#likemodal"
                                        >
                                          and 208 others liked this
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="comment-area mt-4 pt-4 border-top">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                      <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                        <div className="like-data">
                                          <div className="dropdown">
                                            <span
                                              className="dropdown-toggle"
                                              data-bs-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              role="button"
                                            >
                                              <span className="material-symbols-outlined align-text-top font-size-20">
                                                thumb_up
                                              </span>{" "}
                                              <span className="fw-medium">
                                                140 Likes
                                              </span>
                                            </span>
                                            <div className="dropdown-menu py-2 shadow">
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
                                                overlay={
                                                  <Tooltip>Lovely</Tooltip>
                                                }
                                                className="me-2"
                                              >
                                                <img
                                                  src={icon7}
                                                  className="img-fluid me-2"
                                                  alt=""
                                                />
                                              </OverlayTrigger>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                        <div
                                          className="total-comment-block"
                                          type="button"
                                          aria-controls="commentcollapes"
                                          aria-expanded={open3}
                                          onClick={() => setOpen3(!open3)}
                                        >
                                          <span className="material-symbols-outlined align-text-top font-size-20">
                                            comment
                                          </span>{" "}
                                          <span className="fw-medium">
                                            20 Comment
                                          </span>
                                        </div>

                                        <div className="share-block d-flex align-items-center feather-icon">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#share-btn"
                                            onClick={() => setModalShow3(true)}
                                            aria-controls="share-btn"
                                            className="d-flex align-items-center"
                                          >
                                            <span className="material-symbols-outlined align-text-top font-size-20">
                                              share
                                            </span>
                                            <span className="ms-1 fw-medium">
                                              99 Share
                                            </span>
                                          </Link>
                                        </div>
                                        <ShareOffcanvasNew
                                          show={modalShow3}
                                          onHide={() => setModalShow3(false)}
                                        />
                                      </div>
                                    </div>

                                    <Collapse in={open3}>
                                      <div id="commentcollapes" className="mt-4 pt-4 border-top">
                                        <ul className="list-inline m-o p-0 comment-list">
                                          <li className="mb-3">
                                            <div className="comment-list-block">
                                              <div className="d-flex align-items-center gap-3">
                                                <div className="comment-list-user-img flex-shrink-0">
                                                  <img
                                                    src={user13}
                                                    alt="userimg"
                                                    className="avatar-48 rounded-circle img-fluid"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                <div className="comment-list-user-data">
                                                  <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                    <h6 className="m-0">
                                                      Bob Frapples
                                                    </h6>
                                                    <span className="d-inline-block text-primary">
                                                      <svg
                                                        className="align-text-bottom"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="17"
                                                        height="17"
                                                        viewBox="0 0 17 17"
                                                        fill="none"
                                                      >
                                                        <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                          fill="currentColor"
                                                        />
                                                        <path
                                                          d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                          stroke="white"
                                                          strokeWidth="1.5"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                        />
                                                      </svg>
                                                    </span>
                                                    <span className="fw-medium small text-capitalize">
                                                      3 min ago
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="comment-list-user-comment">
                                                <div className="comment-list-comment">
                                                  "Just stumbled upon this post
                                                  and it's giving me all the
                                                  feels! 🙌"
                                                </div>
                                                <div className="comment-list-action mt-2">
                                                  <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2">
                                                    <li>
                                                      <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                                        <div className="like-data">
                                                          <div className="dropdown">
                                                            <span
                                                              className="dropdown-toggle"
                                                              data-bs-toggle="dropdown"
                                                              aria-haspopup="true"
                                                              aria-expanded="false"
                                                              role="button"
                                                            >
                                                              <span className="material-symbols-outlined align-text-top font-size-18">
                                                                thumb_up
                                                              </span>{" "}
                                                              <span className="fw-medium small">
                                                                Likes
                                                              </span>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                    <li>
                                                      <span
                                                        className="fw-medium small"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#subcomment-collapse1"
                                                        role="button"
                                                        aria-expanded="false"
                                                        aria-controls="collapseExample"
                                                        onClick={() => setopen_replay3(!open_replay3)}
                                                      >
                                                        Reply
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  {/*  */}
                                                  <Collapse in={open_replay3}>
                                                    <div
                                                      className="add-comment-form-block mt-3"
                                                      id="subcomment-collapse1"
                                                    >
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="flex-shrink-0">
                                                          <img
                                                            src={user1}
                                                            alt="userimg"
                                                            className="avatar-48 rounded-circle img-fluid"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="add-comment-form">
                                                          <form>
                                                            <input
                                                              type="text"
                                                              className="form-control"
                                                              placeholder="Write a Comment..."
                                                            />
                                                            <button
                                                              type="submit"
                                                              className="btn btn-primary font-size-12 text-capitalize px-5"
                                                            >
                                                              post
                                                            </button>
                                                          </form>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </Collapse>
                                                  {/*  */}
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                        <div className="add-comment-form-block">
                                          <div className="d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                              <img
                                                src={user1}
                                                alt="userimg"
                                                className="avatar-48 rounded-circle img-fluid"
                                                loading="lazy"
                                              />
                                            </div>
                                            <div className="add-comment-form">
                                              <form>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Write a Comment..."
                                                />
                                                <button
                                                  type="submit"
                                                  className="btn btn-primary font-size-12 text-capitalize px-5"
                                                >
                                                  post
                                                </button>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Collapse>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="about1"
                    >
                      <Row>
                        <Col md={4}>
                          <Card>
                            <Card.Body>
                              <Nav
                                variant="pills"
                                className=" basic-info-items list-inline d-block p-0 m-0"
                              >
                                <Nav.Item>
                                  <Nav.Link to="#" eventKey="about1">
                                    Contact and Basic Info
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link to="#" eventKey="about2">
                                    Hobbies and Interests
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link to="#" eventKey="about3">
                                    Family and Relationship
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link to="#" eventKey="about4">
                                    Work and Education
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link to="#" eventKey="about5">
                                    Places You've Lived
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={8} className=" ps-4">
                          <Card>
                            <Card.Body>
                              <Tab.Content>
                                <Tab.Pane eventKey="about1">
                                  <h4>Personal Info</h4>
                                  <hr />
                                  <div className="table-responsive">
                                    <table className="table profile-table">
                                      <tbody>
                                        {aboutData.map((item, index) => {
                                          return (
                                            <tr key={index}>
                                              <td><h6>{item.title}</h6></td>
                                              <td><p className="mb-0">{item.data}</p></td>
                                            </tr>
                                          )
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                  <h4 className="mt-2">
                                    Websites and Social Links
                                  </h4>
                                  <hr />
                                  <div className="table-responsive">
                                    <table className="table profile-table">
                                      <tbody>
                                        {linkData.map((item, index) => {
                                          return (
                                            <tr key={index}>
                                              <td><h6>{item.title}</h6></td>
                                              <td><p className="mb-0">{item.data}</p></td>
                                            </tr>
                                          )
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="about2">
                                  <h4 className="mt-2">Hobbies and Interests</h4>
                                  <hr />
                                  <h6 className="mb-1">Hobbies:</h6>
                                  <p>
                                    Hi, I’m Bni, I’m 26 and I work as a Web
                                    Designer for the iqonicdesign.I like to ride
                                    the bike to work, swimming, and working out. I
                                    also like reading design magazines, go to
                                    museums, and binge watching a good tv show
                                    while it’s raining outside.
                                  </p>
                                  <h6 className="mt-2 mb-1">
                                    Favourite TV Shows:
                                  </h6>
                                  <p>
                                    Breaking Good, RedDevil, People of Interest,
                                    The Running Dead, Found, American Guy.
                                  </p>
                                  <h6 className="mt-2 mb-1">Favourite Movies:</h6>
                                  <p>
                                    Idiocratic, The Scarred Wizard and the Fire
                                    Crown, Crime Squad, Ferrum Man.
                                  </p>
                                  <h6 className="mt-2 mb-1">Favourite Games:</h6>
                                  <p>
                                    The First of Us, Assassin’s Squad, Dark
                                    Assylum, NMAK16, Last Cause 4, Grand Snatch
                                    Auto.
                                  </p>
                                  <h6 className="mt-2 mb-1">
                                    Favourite Music Bands / Artists:
                                  </h6>
                                  <p>
                                    Iron Maid, DC/AC, Megablow, The Ill, Kung
                                    Fighters, System of a Revenge.
                                  </p>
                                  <h6 className="mt-2 mb-1">Favourite Books:</h6>
                                  <p>
                                    The Crime of the Century, Egiptian Mythology
                                    101, The Scarred Wizard, Lord of the Wings,
                                    Amongst Gods, The Oracle, A Tale of Air and
                                    Water.
                                  </p>
                                  <h6 className="mt-2 mb-1">
                                    Favourite Writers:
                                  </h6>
                                  <p>
                                    Martin T. Georgeston, Jhonathan R. Token,
                                    Ivana Rowle, Alexandria Platt, Marcus Roth.
                                  </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="about3">
                                  <h4 className="mb-3">Relationship</h4>
                                  <ul className="suggestions-lists m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center">
                                      <div className="user-img img-fluid">
                                        <span className="material-symbols-outlined md-18">
                                          add
                                        </span>
                                      </div>
                                      <div className="media-support-info ms-3">
                                        <h6>Add Your Relationship Status</h6>
                                      </div>
                                    </li>
                                  </ul>
                                  <h4 className="mt-3 mb-3">Family Members</h4>
                                  <ul className="suggestions-lists m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center">
                                      <div className="user-img img-fluid">
                                        <span className="material-symbols-outlined md-18">
                                          add
                                        </span>
                                      </div>
                                      <div className="media-support-info ms-3">
                                        <h6>Add Family Members</h6>
                                      </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user01}
                                          alt="story1"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                          <div className="ms-3">
                                            <h6>Paul Molive</h6>
                                            <p className="mb-0">Brothe</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link to="#" className="d-flex align-items-center">
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex justify-content-between mb-4  align-items-center">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user02}
                                          alt="story-img"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex flex-wrap justify-content-between">
                                          <div className=" ms-3">
                                            <h6>Anna Mull</h6>
                                            <p className="mb-0">Sister</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link to="#" className="d-flex align-items-center">
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user03}
                                          alt="story-img"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                          <div className="ms-3">
                                            <h6>Paige Turner</h6>
                                            <p className="mb-0">Cousin</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link to="#" className="d-flex align-items-center">
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="about4">
                                  <h4 className="mb-3">Work</h4>
                                  <ul className="suggestions-lists m-0 p-0">
                                    <li className="d-flex justify-content-between mb-4  align-items-center">
                                      <div className="user-img img-fluid">
                                        <span className="material-symbols-outlined md-18">
                                          add
                                        </span>
                                      </div>
                                      <div className="ms-3">
                                        <h6>Add Work Place</h6>
                                      </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user01}
                                          alt="story-img"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                          <div className="ms-3">
                                            <h6>Themeforest</h6>
                                            <p className="mb-0">Web Designer</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link
                                              to="#"
                                              className="d-flex align-items-center"
                                            >
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user02}
                                          alt="story-img"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex flex-wrap justify-content-between">
                                          <div className="ms-3">
                                            <h6>iqonicdesign</h6>
                                            <p className="mb-0">Web Developer</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link
                                              to="#"
                                              className="d-flex align-items-center"
                                            >
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user03}
                                          alt="story-img"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex flex-wrap justify-content-between">
                                          <div className="ms-3">
                                            <h6>W3school</h6>
                                            <p className="mb-0">Designer</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link
                                              to="#"
                                              className="d-flex align-items-center"
                                            >
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <h4 className="mb-3">Professional Skills</h4>
                                  <ul className="suggestions-lists m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center">
                                      <div className="user-img img-fluid">
                                        <span className="material-symbols-outlined md-18">
                                          add
                                        </span>
                                      </div>
                                      <div className="ms-3">
                                        <h6>Add Professional Skills</h6>
                                      </div>
                                    </li>
                                  </ul>
                                  <h4 className="mt-3 mb-3">College</h4>
                                  <ul className="suggestions-lists m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center">
                                      <div className="user-img img-fluid">
                                        <span className="material-symbols-outlined md-18">
                                          add
                                        </span>
                                      </div>
                                      <div className="ms-3">
                                        <h6>Add College</h6>
                                      </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user01}
                                          alt="story-img"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex flex-wrap justify-content-between">
                                          <div className="ms-3">
                                            <h6>Lorem ipsum</h6>
                                            <p className="mb-0">USA</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link
                                              to="#"
                                              className="d-flex align-items-center"
                                            >
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="about5">
                                  <h4 className="mb-3">
                                    Current City and Hometown
                                  </h4>
                                  <ul className="suggestions-lists m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user01}
                                          alt="story-img"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex flex-wrap justify-content-between">
                                          <div className="ms-3">
                                            <h6>Georgia</h6>
                                            <p className="mb-0">Georgia State</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link
                                              to="#"
                                              className="d-flex align-items-center"
                                            >
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-between">
                                      <div className="user-img img-fluid">
                                        <img
                                          loading="lazy"
                                          src={user02}
                                          alt="story-img"
                                          className="rounded-circle avatar-40"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <div className="d-flex flex-wrap justify-content-between">
                                          <div className="ms-3">
                                            <h6>Atlanta</h6>
                                            <p className="mb-0">Atlanta City</p>
                                          </div>
                                          <div className="edit-relation">
                                            <Link
                                              to="#"
                                              className="d-flex align-items-center"
                                            >
                                              <span className="material-symbols-outlined me-2 md-18">
                                                edit
                                              </span>
                                              Edit
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <h4 className="mt-3 mb-3">
                                    Other Places Lived
                                  </h4>
                                  <ul className="suggestions-lists m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center">
                                      <div className="user-img img-fluid">
                                        <span className="material-symbols-outlined md-18">
                                          add
                                        </span>
                                      </div>
                                      <div className="ms-3">
                                        <h6>Add Place</h6>
                                      </div>
                                    </li>
                                  </ul>
                                </Tab.Pane>
                              </Tab.Content>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="all-friends"
                    >
                      <Card>
                        <Card.Body>
                          <h2>Friends</h2>
                          <div className="friend-list-tab mt-2">
                            <Nav
                              variant="pills"
                              as="ul"
                              className=" d-flex align-items-center justify-content-left item-list-tabs  p-0 mb-4"
                            >
                              <Nav.Item>
                                <Nav.Link
                                  href="#pill-all-friends"
                                  eventKey="all-friends"
                                >
                                  All Friends
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  href="#pill-recently-add"
                                  eventKey="recently-add"
                                >
                                  Recently Added
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  href="#pill-closefriends"
                                  eventKey="closefriends"
                                >
                                  {" "}
                                  Close friends
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link to="#pill-home" eventKey="home-town">
                                  {" "}
                                  Home/Town
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link
                                  href="#pill-following"
                                  eventKey="following"
                                >
                                  Following
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                            <Tab.Content>
                              <Tab.Pane eventKey="all-friends">
                                <Card.Body className="p-0">
                                  <Row>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user05}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Petey Cruiser</h5>
                                              <p className="mb-0">15 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user06}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Anna Sthesia</h5>
                                              <p className="mb-0">50 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user07}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Paul Molive</h5>
                                              <p className="mb-0">10 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user08}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Gail Forcewind</h5>
                                              <p className="mb-0">20 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user09}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Paige Turner</h5>
                                              <p className="mb-0">12 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user10}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>b Frapples</h5>
                                              <p className="mb-0">6 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user13}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Walter Melon</h5>
                                              <p className="mb-0">30 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user14}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Barb Ackue</h5>
                                              <p className="mb-0">14 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user15}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Buck Kinnear</h5>
                                              <p className="mb-0">16 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user16}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Ira Membrit</h5>
                                              <p className="mb-0">22 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user17}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Shonda Leer</h5>
                                              <p className="mb-0">10 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user18}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>ock Lee</h5>
                                              <p className="mb-0">18 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user19}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Maya Didas</h5>
                                              <p className="mb-0">40 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user05}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Rick O'Shea</h5>
                                              <p className="mb-0">50 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user06}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Pete Sariya</h5>
                                              <p className="mb-0">5 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user07}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Monty Carlo</h5>
                                              <p className="mb-0">2 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user08}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Sal Monella</h5>
                                              <p className="mb-0">0 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user09}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Sue Vaneer</h5>
                                              <p className="mb-0">25 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user10}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Cliff Hanger</h5>
                                              <p className="mb-0">18 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user05}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Barb Dwyer</h5>
                                              <p className="mb-0">23 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user06}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Terry Aki</h5>
                                              <p className="mb-0">8 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user13}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Cory Ander</h5>
                                              <p className="mb-0">7 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user14}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Robin Banks</h5>
                                              <p className="mb-0">14 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user15}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Jimmy Changa</h5>
                                              <p className="mb-0">10 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user16}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Barry Wine</h5>
                                              <p className="mb-0">18 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user17}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Poppa Cherry</h5>
                                              <p className="mb-0">16 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user18}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Zack Lee</h5>
                                              <p className="mb-0">33 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user19}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Don Stairs</h5>
                                              <p className="mb-0">15 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user05}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Peter Pants</h5>
                                              <p className="mb-0">12 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user06}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Hal Appeno </h5>
                                              <p className="mb-0">13 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Row>
                                </Card.Body>
                              </Tab.Pane>
                              <Tab.Pane eventKey="recently-add">
                                <div className="card-body p-0">
                                  <div className="row">
                                    {/* <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user07}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Otto Matic</h5>
                                              <p className="mb-0">4 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user08}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Moe Fugga</h5>
                                              <p className="mb-0">16 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user09}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Tom Foolery</h5>
                                              <p className="mb-0">14 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user10}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Bud Wiser</h5>
                                              <p className="mb-0">16 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user15}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Polly Tech</h5>
                                              <p className="mb-0">10 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user16}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Holly Graham</h5>
                                              <p className="mb-0">8 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user17}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Tara Zona</h5>
                                              <p className="mb-0">5 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user18}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Barry Cade</h5>
                                              <p className="mb-0">20 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="closefriends">
                                <div className="card-body p-0">
                                  <div className="row">
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user19}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Bud Wiser</h5>
                                              <p className="mb-0">32 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user05}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Otto Matic</h5>
                                              <p className="mb-0">9 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user06}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Peter Pants</h5>
                                              <p className="mb-0">2 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user07}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Zack Lee</h5>
                                              <p className="mb-0">15 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user08}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Barry Wine</h5>
                                              <p className="mb-0">36 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user09}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Robin Banks</h5>
                                              <p className="mb-0">22 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user10}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Cory Ander</h5>
                                              <p className="mb-0">18 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user15}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Moe Fugga</h5>
                                              <p className="mb-0">12 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user16}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Polly Tech</h5>
                                              <p className="mb-0">30 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user17}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Hal Appeno</h5>
                                              <p className="mb-0">25 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="home-town">
                                <div className="card-body p-0">
                                  <div className="row">
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user18}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Paul Molive</h5>
                                              <p className="mb-0">14 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user19}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Paige Turner</h5>
                                              <p className="mb-0">8 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user05}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Barb Ackue</h5>
                                              <p className="mb-0">23 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user06}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Ira Membrit</h5>
                                              <p className="mb-0">16 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user07}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Maya Didas</h5>
                                              <p className="mb-0">12 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="following">
                                <div className="card-body p-0">
                                  <div className="row">
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user05}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Maya Didas</h5>
                                              <p className="mb-0">20 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user06}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Monty Carlo</h5>
                                              <p className="mb-0">3 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user07}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Cliff Hanger</h5>
                                              <p className="mb-0">20 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user08}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>b Ackue</h5>
                                              <p className="mb-0">12 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user09}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Bob Frapples</h5>
                                              <p className="mb-0">12 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user10}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Anna Mull</h5>
                                              <p className="mb-0">6 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user15}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>ry Wine</h5>
                                              <p className="mb-0">15 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user16}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Don Stairs</h5>
                                              <p className="mb-0">12 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user17}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Peter Pants</h5>
                                              <p className="mb-0">8 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user18}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Polly Tech</h5>
                                              <p className="mb-0">18 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user19}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Tara Zona</h5>
                                              <p className="mb-0">30 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user05}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Arty Ficial</h5>
                                              <p className="mb-0">15 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user06}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Bill Emia</h5>
                                              <p className="mb-0">25 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user07}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Bill Yerds</h5>
                                              <p className="mb-0">9 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mb-3">
                                      <div className="iq-friendlist-block">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                            <Link to="#">
                                              <img
                                                loading="lazy"
                                                src={user08}
                                                alt="profile-img"
                                                className="img-fluid"
                                              />
                                            </Link>
                                            <div className="friend-info ms-3">
                                              <h5>Matt Innae</h5>
                                              <p className="mb-0">19 friends</p>
                                            </div>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                              <Dropdown.Toggle as="span" className="btn btn-secondary me-2 d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2">
                                                  done
                                                </i>
                                                Friend
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item href="#">
                                                  Get Notification
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Close Friend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfollow
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Unfriend
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                  Block
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </div>
                        </Card.Body>
                      </Card>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="forth">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="p1">
                      <Card>
                        <Card.Body>
                          <h2>Photos</h2>
                          <div className="friend-list-tab mt-2">
                            <Nav
                              variant="pills"
                              as="ul"
                              className=" d-flex align-items-center justify-content-left item-list-tabs p-0 mb-4"
                            >
                              <li>
                                <Nav.Link eventKey="p1" href="#pill-photosofyou">
                                  Photos of You
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link eventKey="p2" href="#pill-your-photos">
                                  Your Photos
                                </Nav.Link>
                              </li>
                            </Nav>
                            <Tab.Content>
                              <Tab.Pane eventKey="p1">
                                <Card.Body className="p-0">
                                  <div className="d-grid gap-2 d-grid-template-1fr-13">
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(16)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img51}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(17)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img52}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(18)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img53}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(19)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img54}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(20)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img55}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(21)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img56}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(22)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img57}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(23)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img58}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(24)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img59}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(25)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img60}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(26)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img61}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(27)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img62}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(28)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img63}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(29)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img64}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(30)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img65}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(31)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img51}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(32)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img52}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(33)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img53}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(34)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img54}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(35)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img55}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(36)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img56}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(37)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img57}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(38)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img58}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Tab.Pane>
                              <Tab.Pane eventKey="p2">
                                <div className="card-body p-0">
                                  <div className="d-grid gap-2 d-grid-template-1fr-13 ">
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(39)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img51}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(40)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img52}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(41)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img53}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(42)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img54}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(43)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img55}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(44)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img56}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(45)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img57}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(46)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img58}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(47)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img59}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="user-images position-relative overflow-hidden">
                                        <Link
                                          onClick={() => imageOnSlide(48)}
                                          to="#"
                                        >
                                          <img
                                            loading="lazy"
                                            src={img60}
                                            className="img-fluid rounded"
                                            alt="Responsive"
                                          />
                                        </Link>
                                        <div className="image-hover-data">
                                          <div className="product-elements-icon">
                                            <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  60{" "}
                                                  <i className="material-symbols-outlined md-14 ms-1">
                                                    thumb_up
                                                  </i>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  30{" "}
                                                  <span className="material-symbols-outlined  md-14 ms-1">
                                                    chat_bubble_outline
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  to="#"
                                                  className="pe-3 text-white d-flex align-items-center"
                                                >
                                                  {" "}
                                                  10{" "}
                                                  <span className="material-symbols-outlined md-14 ms-1">
                                                    forward
                                                  </span>{" "}
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <OverlayTrigger
                                          placement="top"
                                          overlay={
                                            <Tooltip>Edit or Remove</Tooltip>
                                          }
                                        >
                                          <Link
                                            to="#"
                                            className="image-edit-btn material-symbols-outlined md-16"
                                          >
                                            drive_file_rename_outline
                                          </Link>
                                        </OverlayTrigger>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </div>
                        </Card.Body>
                      </Card>
                    </Tab.Container>
                  </Tab.Pane>
                  {/* <div className="col-sm-12 text-center">
                    <img
                      loading="lazy"
                      src={loader}
                      alt="loader"
                      style={{ height: "100px" }}
                    />
                  </div> */}
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserProfile;
