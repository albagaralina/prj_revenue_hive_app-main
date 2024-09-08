import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Collapse,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import CreatePost from "../../components/create-post";

//image
import user1 from "../../assets/images/user/1.jpg";
import user01 from "../../assets/images/user/01.jpg";
import user2 from "../../assets/images/user/02.jpg";
import user3 from "../../assets/images/user/03.jpg";
import user4 from "../../assets/images/user/04.jpg";
import user13 from "../../assets/images/user/05.jpg";
import user14 from "../../assets/images/user/06.jpg";
import user15 from "../../assets/images/user/07.jpg";
import user16 from "../../assets/images/user/08.jpg";
import user5 from "../../assets/images/page-img/fun.webp";
import user6 from "../../assets/images/user/13.jpg";
import user7 from "../../assets/images/user/17.jpg";
import user8 from "../../assets/images/user/16.jpg";
import user9 from "../../assets/images/user/09.jpg";
import user10 from "../../assets/images/user/10.jpg";
import user11 from "../../assets/images/user/14.jpg";
import user12 from "../../assets/images/user/15.jpg";
import profileBgImg from "../../assets/images/page-img/profile-bg9.jpg";

import icon1 from "../../assets/images/icon/01.png";
import icon2 from "../../assets/images/icon/02.png";
import icon3 from "../../assets/images/icon/03.png";
import icon4 from "../../assets/images/icon/04.png";
import icon5 from "../../assets/images/icon/05.png";
import icon6 from "../../assets/images/icon/06.png";
import icon7 from "../../assets/images/icon/07.png";
import loader from "../../assets/images/page-img/page-load-loader.gif";
import boyImg from "../../assets/images/page-img/boy.webp";
import busImg from "../../assets/images/page-img/bus.webp";
import img11 from "../../assets/images/page-img/fd.webp";
import mountain from "../../assets/images/page-img/mountain.webp";
import pizza from "../../assets/images/page-img/pizza.webp";
import bootstrapImg from "../../assets/images/icon/bootstrap-5.png";
import adsImg from "../../assets/images/page-img/ads.jpg";

// Story components
import Stories from "../../components/Stories";

// FsLightbox
import ReactFsLightbox from "fslightbox-react";

// Share-offcanvas
import ShareOffcanvasNew from "../../components/ShareOffcanvasNew";

const FsLightbox = ReactFsLightbox.default
  ? ReactFsLightbox.default
  : ReactFsLightbox;

// import img from '../assets/images/user/1.jpg'

const Index = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);

  const [loadContent, setLoadContent] = useState(true);

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


  useEffect(() => {
    function handleScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

        setTimeout(() => {
          setLoadContent(false);
        }, 2000);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // stories
  const stories = [
    {
      id: "yourstory",
      photo: user8,
      name: "Your Story",
      link: "https://ramon.codes",
      preview: [
        {
          storyid: "yourstory-1",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "yourstory-12",
          type: "video",
          length: 0,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "ali",
      photo: user1,
      name: "Ali",
      link: "",
      preview: [
        {
          storyid: "ali-1",
          type: "video",
          length: 0,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "ali-2",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },

        {
          storyid: "ali-3",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
          link: "https://ramon.codes",
          linkText: "Visit my Portfolio",
          seen: "false",
        },
      ],
    },
    {
      id: "ammy",
      photo: user12,
      name: "Ammy",
      link: "",
      preview: [
        {
          storyid: "ammy-1",
          type: "photo",
          length: 5,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "ammy-2",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          link: "http://ladygaga.com",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "roger-1",
      photo: user3,
      name: "Roger",
      link: "",
      preview: [
        {
          storyid: "roger-1",
          type: "photo",
          length: 5,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "justin",
      photo: user11,
      name: "Justin",
      link: "",
      preview: [
        {
          storyid: "justin-1",
          type: "photo",
          length: 10,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "sado",
      photo: user3,
      name: "Sado",
      link: "",
      preview: [
        {
          storyid: "sado-1",
          type: "photo",
          length: 10,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
  ];

  return (
    <>
      <div id="content-page" className="content-inner">
        <FsLightbox
          toggler={imageController.toggler}
          sources={[user5, boyImg, busImg, img11, mountain, pizza]}
          slide={imageController.slide}
        />
        <Container>
          <Row className="gx-4">
            <Col lg={8}>
              <div id="content">
                <Row>
                  <Col sm={12}>
                    <div className="mb-5">
                      <Stories stories={stories} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <CreatePost className="card-block card-stretch card-height" />
                  </Col>
                </Row>
                <Row className="special-post-container">
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

                                <div className="card-post-toolbar">
                                  <Dropdown>
                                    <Dropdown.Toggle id="post-option" as="span" >
                                      <span className="material-symbols-outlined">more_horiz</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="m-0 p-0">
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            save
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Save Post</h6>
                                            <p className="mb-0">
                                              Add this to your saved items
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className="p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            cancel
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Hide Post</h6>
                                            <p className="mb-0">
                                              See fewer posts like this.
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            person_remove
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Unfollow User</h6>
                                            <p className="mb-0">
                                              Stop seeing posts but stay
                                              friends.
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            notifications
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Notifications</h6>
                                            <p className="mb-0">
                                              Turn on notifications for this
                                              post
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
                        <div className="mt-4">
                          <p className="m-0">
                            "Energy, the tangible expression of pure thought, propels intentions into powerful actions, bridging the gap between mind and manifestation."
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
                            onClick={() => imageOnSlide(1)}
                            to="#"
                            className="rounded"
                          >
                            <img
                              src={user5}
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
                                  src={user2}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                              <li>
                                <img
                                  src={user3}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                              <li>
                                <img
                                  src={user4}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                            </ul>
                            <div className="d-inline-flex align-items-center gap-1">
                              <h6 className="m-0 font-size-14">Aliana Molex</h6>
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
                                    <span className="fw-medium">140 Likes</span>
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
                                      overlay={<Tooltip>Lovely</Tooltip>}
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
                                <span className="fw-medium">20 Comment</span>
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
                            <div id="commentcollapes" className="border-top mt-4 pt-4">
                              <ul className="list-inline m-o p-0 comment-list">
                                <li className="mb-3">
                                  <div className="comment-list-block">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="comment-list-user-img flex-shrink-0">
                                        <img
                                          src={user6}
                                          alt="userimg"
                                          className="avatar-48 rounded-circle img-fluid"
                                          loading="lazy"
                                        />
                                      </div>
                                      <div className="comment-list-user-data">
                                        <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                          <h6 className="m-0">Bob Frapples</h6>
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
                                        "Just stumbled upon this post and it's
                                        giving me all the feels! 🙌"
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
                                            >
                                              Reply
                                            </span>
                                          </li>
                                        </ul>
                                        <div
                                          className="add-comment-form-block collapse mt-3"
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
                                src={user3}
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
                                <div className="card-post-toolbar">
                                  <Dropdown>
                                    <Dropdown.Toggle variant="lh-1" id="post-option" as="span" >
                                      <span className="material-symbols-outlined" >more_horiz</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <div className="material-symbols-outlined">
                                            save
                                          </div>
                                          <div className="data ms-2">
                                            <h6>Save Post</h6>
                                            <p className="mb-0">
                                              Add this to your saved items
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className="p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            cancel
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Hide Post</h6>
                                            <p className="mb-0">
                                              See fewer posts like this.
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            person_remove
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Unfollow User</h6>
                                            <p className="mb-0">
                                              Stop seeing posts but stay
                                              friends.
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            notifications
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Notifications</h6>
                                            <p className="mb-0">
                                              Turn on notifications for this
                                              post
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
                        <div className="mt-4">
                          <p className="m-0">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus"
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
                              <Link to="#" onClick={() => imageOnSlide(2)}>
                                <img
                                  src={boyImg}
                                  alt="post1"
                                  className="img-fluid rounded w-100"
                                />
                              </Link>
                            </Col>
                            <Col md={4} className="mt-md-0  mt-3">
                              <Link to="#" onClick={() => imageOnSlide(3)}>
                                <img
                                  src={busImg}
                                  alt="post1"
                                  className="img-fluid rounded w-100"
                                />
                              </Link>
                            </Col>
                            <Col md={4} className="mt-md-0  mt-3">
                              <Link to="#" onClick={() => imageOnSlide(4)}>
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
                              <Link to="#" onClick={() => imageOnSlide(5)}>
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
                                  onClick={() => imageOnSlide(6)}
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
                                    src={user2}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                  />
                                </li>{" "}
                                <li>
                                  <img
                                    src={user3}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                  />
                                </li>{" "}
                                <li>
                                  <img
                                    src={user4}
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
                                    <span className="fw-medium">140 Likes</span>
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
                                      overlay={<Tooltip>Lovely</Tooltip>}
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
                                <span className="fw-medium">20 Comment</span>
                              </div>

                              <div className="share-block d-flex align-items-center feather-icon">
                                <Link
                                  to="#"
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

                          <Collapse in={open1} >
                            <div id="commentcollapes" className="border-top mt-4 pt-4">
                              <ul className="list-inline m-o p-0 comment-list">
                                <li className="mb-3">
                                  <div className="comment-list-block">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="comment-list-user-img flex-shrink-0">
                                        <img
                                          src={user3}
                                          alt="userimg"
                                          className="avatar-48 rounded-circle img-fluid"
                                          loading="lazy"
                                        />
                                      </div>
                                      <div className="comment-list-user-data">
                                        <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                          <h6 className="m-0">Bob Frapples</h6>
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
                                        "Just stumbled upon this post and it's
                                        giving me all the feels! 🙌"
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
                                                    </span>
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
                                            >
                                              Reply
                                            </span>
                                          </li>
                                        </ul>
                                        <div
                                          className="add-comment-form-block collapse mt-3"
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
                                src={user4}
                                alt=""
                              />
                            </div>
                            <div className="w-100">
                              <div className=" d-flex align-items-center justify-content-between">
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
                                  <p className="mb-0 d-inline-block text-capitalize fw-medium">
                                    Update her Status
                                  </p>
                                  <p className="mb-0">
                                    6 Hours ago
                                  </p>
                                </div>
                                <div className="card-post-toolbar">
                                  <Dropdown>
                                    <Dropdown.Toggle variant="lh-1" id="post-option" as="span" bsPrefix=" ">
                                      <span className="material-symbols-outlined" >more_horiz</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            save
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Save Post</h6>
                                            <p className="mb-0">
                                              Add this to your saved items
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className="p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            cancel
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Hide Post</h6>
                                            <p className="mb-0">
                                              See fewer posts like this.
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            person_remove
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Unfollow User</h6>
                                            <p className="mb-0">
                                              Stop seeing posts but stay
                                              friends.
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            notifications
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Notifications</h6>
                                            <p className="mb-0">
                                              Turn on notifications for this
                                              post
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
                        <div className="mt-4">
                          <p className="mb-0">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi nulla dolor, ornare at commodo non,
                            feugiat non nisi. Phasellus faucibus mollis
                            pharetra. Proin blandit ac massa sed rhoncus"
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
                                  src={user2}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                              <li>
                                <img
                                  src={user3}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                              <li>
                                <img
                                  src={user4}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                            </ul>
                            <div className="d-inline-flex align-items-center gap-1">
                              <h6 className="m-0 font-size-14">Aliana Molex</h6>
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
                                    <span className="fw-medium">140 Likes</span>
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
                                      overlay={<Tooltip>Lovely</Tooltip>}
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
                                <span className="fw-medium">20 Comment</span>
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
                            <div id="commentcollapes" className="border-top mt-4 pt-4">
                              <ul className="list-inline m-o p-0 comment-list">
                                <li className="mb-3">
                                  <div className="comment-list-block">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="comment-list-user-img flex-shrink-0">
                                        <img
                                          src={user3}
                                          alt="userimg"
                                          className="avatar-48 rounded-circle img-fluid"
                                          loading="lazy"
                                        />
                                      </div>
                                      <div className="comment-list-user-data">
                                        <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                          <h6 className="m-0">Bob Frapples</h6>
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
                                        "Just stumbled upon this post and it's
                                        giving me all the feels! 🙌"
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
                                                    </span>
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
                                            >
                                              Reply
                                            </span>
                                          </li>
                                        </ul>
                                        <div
                                          className="add-comment-form-block collapse mt-3"
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
                                    </svg>{" "}
                                  </span>{" "}
                                  <p className="mb-0 d-inline-block text-capitalize fw-medium">
                                    Added New Video in his Timeline
                                  </p>
                                  <p className="mb-0">8 Hours ago</p>
                                </div>
                                <div className="card-post-toolbar">
                                  <Dropdown>
                                    <Dropdown.Toggle id="post-option" as="span" className="material-symbols-outlined lh-1">
                                      more_horiz
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="m-0 p-0">
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            save
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Save Post</h6>
                                            <p className="mb-0">
                                              Add this to your saved items
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className="p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            cancel
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Hide Post</h6>
                                            <p className="mb-0">
                                              See fewer posts like this.
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            person_remove
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Unfollow User</h6>
                                            <p className="mb-0">
                                              Stop seeing posts but stay
                                              friends.
                                            </p>
                                          </div>
                                        </div>
                                      </Dropdown.Item>
                                      <Dropdown.Item className=" p-3" to="#">
                                        <div className="d-flex align-items-top">
                                          <span className="material-symbols-outlined">
                                            notifications
                                          </span>
                                          <div className="data ms-2">
                                            <h6>Notifications</h6>
                                            <p className="mb-0">
                                              Turn on notifications for this
                                              post
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
                        <div className="mt-4">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus"
                          </p>
                        </div>
                        <div className="user-post mt-4">
                          <div className="ratio ratio-16x9">
                            <iframe
                              title="vedio"
                              src="https://www.youtube.com/embed/j_GsIanLxZk?rel=0"
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
                                  src={user2}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                              <li>
                                <img
                                  src={user3}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                              <li>
                                <img
                                  src={user4}
                                  alt="userimg"
                                  className="rounded-circle img-fluid userimg"
                                  loading="lazy"
                                />
                              </li>{" "}
                            </ul>
                            <div className="d-inline-flex align-items-center gap-1">
                              <h6 className="m-0 font-size-14">Aliana Molex</h6>
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
                                    <span className="fw-medium">140 Likes</span>
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
                                      overlay={<Tooltip>Lovely</Tooltip>}
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
                                <span className="fw-medium">20 Comment</span>
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
                            <div id="commentcollapes" className="border-top mt-4 pt-4">
                              <ul className="list-inline m-o p-0 comment-list">
                                <li className="mb-3">
                                  <div className="comment-list-block">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="comment-list-user-img flex-shrink-0">
                                        <img
                                          src={user3}
                                          alt="userimg"
                                          className="avatar-48 rounded-circle img-fluid"
                                          loading="lazy"
                                        />
                                      </div>
                                      <div className="comment-list-user-data">
                                        <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                          <h6 className="m-0">Bob Frapples</h6>
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
                                        "Just stumbled upon this post and it's
                                        giving me all the feels! 🙌"
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
                                                    </span>
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
                                            >
                                              Reply
                                            </span>
                                          </li>
                                        </ul>
                                        <div
                                          className="add-comment-form-block collapse mt-3"
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

                  {loadContent ? <div className="col-sm-12 text-center">
                    <img src={loader} alt="loader" style={{ height: "100px" }} />
                  </div> : <>
                    <Col sm={12} className="special-post">
                      <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                          <div className="user-post-data">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="me-3 flex-shrik-0">
                                <img
                                  className="border border-2 rounded-circle user-post-profile"
                                  src={user6}
                                  alt=""
                                />
                              </div>
                              <div className="w-100">
                                <div className=" d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="mb-0 d-inline-block">
                                      Bob Frapples
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
                                    <p className="mb-0 d-inline-block text-capitalize fw-medium">
                                      Shared This Post In His Timeline
                                    </p>
                                    <p className="mb-0">9 Hours ago</p>
                                  </div>
                                  <div className="card-post-toolbar">
                                    <Dropdown>
                                      <Dropdown.Toggle variant="lh-1" id="post-option" as="span" >
                                        <span className="material-symbols-outlined" >more_horiz</span>
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              save
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Save Post</h6>
                                              <p className="mb-0">
                                                Add this to your saved items
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              cancel
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Hide Post</h6>
                                              <p className="mb-0">
                                                See fewer posts like this.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              person_remove
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Unfollow User</h6>
                                              <p className="mb-0">
                                                Stop seeing posts but stay
                                                friends.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              notifications
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Notifications</h6>
                                              <p className="mb-0">
                                                Turn on notifications for this
                                                post
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
                          <div className="mt-4">
                            <p className="mb-0">
                              "Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi nulla dolor, ornare at commodo non,
                              feugiat non nisi. Phasellus faucibus mollis
                              pharetra. Proin blandit ac massa sed rhoncus"
                            </p>
                            <ul className="list-inline m-0 p-0 d-flex flex-wrap gap-1">
                              <li>
                                <Link
                                  to="#"
                                  // contentEditable="false"
                                  style={{ cursor: "pointer" }}
                                >
                                  #bootstrap
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  // contentEditable="false"
                                  style={{ cursor: "pointer" }}
                                >
                                  #framework
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  // contentEditable="false"
                                  style={{ cursor: "pointer" }}
                                >
                                  #responsive
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="user-post mt-4">
                            <div className="p-3 rounded-3 bg-light-subtle">
                              <div className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <img
                                    src={bootstrapImg}
                                    alt="bootstrap-icon"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <h5 className="mb-2">
                                    About Bootstrap Framework
                                  </h5>
                                  <p className="m-0 text-body font-size-12 fw-medium">
                                    Morbi nulla dolor, ornare at commodo non,
                                    feugiat non nisi. Phasellus faucibus mollis
                                    pharetra. Proin blandit ac massa sed rhoncus
                                  </p>
                                </div>
                              </div>
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
                                    src={user2}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                  />
                                </li>{" "}
                                <li>
                                  <img
                                    src={user3}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                  />
                                </li>{" "}
                                <li>
                                  <img
                                    src={user4}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                  />
                                </li>{" "}
                              </ul>
                              <div className="d-inline-flex align-items-center gap-1">
                                <h6 className="m-0 font-size-14">Aliana Molex</h6>
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
                                      <span className="fw-medium">140 Likes</span>
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
                                        overlay={<Tooltip>Lovely</Tooltip>}
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
                                  aria-expanded={open4}
                                  onClick={() => setOpen4(!open4)}
                                >
                                  <span className="material-symbols-outlined align-text-top font-size-20">
                                    comment
                                  </span>{" "}
                                  <span className="fw-medium">20 Comment</span>
                                </div>

                                <div className="share-block d-flex align-items-center feather-icon">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#share-btn"
                                    onClick={() => setModalShow4(true)}
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
                                  show={modalShow4}
                                  onHide={() => setModalShow4(false)}
                                />
                              </div>
                            </div>

                            <Collapse in={open4}>
                              <div id="commentcollapes" className="border-top mt-4 pt-4">
                                <ul className="list-inline m-o p-0 comment-list">
                                  <li className="mb-3">
                                    <div className="comment-list-block">
                                      <div className="d-flex align-items-center gap-3">
                                        <div className="comment-list-user-img flex-shrink-0">
                                          <img
                                            src={user3}
                                            alt="userimg"
                                            className="avatar-48 rounded-circle img-fluid"
                                            loading="lazy"
                                          />
                                        </div>
                                        <div className="comment-list-user-data">
                                          <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                            <h6 className="m-0">Bob Frapples</h6>
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
                                          "Just stumbled upon this post and it's
                                          giving me all the feels! 🙌"
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
                                                      </span>
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
                                              >
                                                Reply
                                              </span>
                                            </li>
                                          </ul>
                                          <div
                                            className="add-comment-form-block collapse mt-3"
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
                                  src={user11}
                                  alt=""
                                />
                              </div>
                              <div className="w-100">
                                <div className=" d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="mb-0 d-inline-block">
                                      Greta Life
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
                                    <p className="mb-0">12 Hours ago</p>
                                  </div>
                                  <div className="card-post-toolbar">
                                    <Dropdown>
                                      <Dropdown.Toggle variant="lh-1" id="post-option" as="span" >
                                        <span className="material-symbols-outlined" >more_horiz</span>
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className=" m-0 p-0">
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              save
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Save Post</h6>
                                              <p className="mb-0">
                                                Add this to your saved items
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              cancel
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Hide Post</h6>
                                              <p className="mb-0">
                                                See fewer posts like this.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              person_remove
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Unfollow User</h6>
                                              <p className="mb-0">
                                                Stop seeing posts but stay
                                                friends.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              notifications
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Notifications</h6>
                                              <p className="mb-0">
                                                Turn on notifications for this
                                                post
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
                          <div className="user-post mt-4">
                            <div className="text-center">
                              <img src={adsImg} alt="ads" className="img-fluid" />
                              <Link
                                to="#"
                                className="btn btn-primary w-100 rounded-top-0"
                              >
                                <span className="d-flex align-items-center justify-content-between gap-1">
                                  <span>Shop Now</span>
                                  <span className="material-symbols-outlined">
                                    chevron_right
                                  </span>
                                </span>
                              </Link>
                            </div>
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
                                  src={user12}
                                  alt=""
                                />
                              </div>
                              <div className="w-100">
                                <div className=" d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="mb-0 d-inline-block">
                                      Pete Sariya
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
                                    <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                      created a poll
                                    </span>
                                    <p className="mb-0 text-gray">15 Hours ago</p>
                                  </div>
                                  <div className="card-post-toolbar">
                                    <Dropdown>
                                      <Dropdown.Toggle variant="lh-1" id="post-option" as="span" >
                                        <span className="material-symbols-outlined" >more_horiz</span>
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              save
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Save Post</h6>
                                              <p className="mb-0">
                                                Add this to your saved items
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              cancel
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Hide Post</h6>
                                              <p className="mb-0">
                                                See fewer posts like this.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              person_remove
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Unfollow User</h6>
                                              <p className="mb-0">
                                                Stop seeing posts but stay
                                                friends.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              notifications
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Notifications</h6>
                                              <p className="mb-0">
                                                Turn on notifications for this
                                                post
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
                          <div className="user-post mt-4">
                            <h5 className="mb-4 text-capitalize">
                              which programming language should i learn?
                            </h5>
                            <ul className="list-inline m-0 p-0">
                              <li className="mb-4">
                                <div className="d-flex gap-3">
                                  <div className="flex-shrink-0">
                                    <h6 className="mb-0">75%</h6>
                                  </div>
                                  <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-between gap-3 w-100 mb-1">
                                      <h6>Python</h6>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="poll"
                                          id="python"
                                        />
                                      </div>
                                    </div>
                                    <ProgressBar
                                      now={75}
                                      style={{ height: ".5rem" }}
                                    />
                                  </div>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div className="d-flex gap-3">
                                  <div className="flex-shrink-0">
                                    <h6 className="mb-0">50%</h6>
                                  </div>
                                  <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-between gap-3 w-100 mb-1">
                                      <h6>Javascript</h6>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="poll"
                                          id="javascript"
                                        />
                                      </div>
                                    </div>
                                    <ProgressBar
                                      now={50}
                                      style={{ height: ".5rem" }}
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex gap-3">
                                  <div className="flex-shrink-0">
                                    <h6 className="mb-0">25%</h6>
                                  </div>
                                  <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-between gap-3 w-100 mb-1">
                                      <h6>C++</h6>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="poll"
                                          id="c"
                                        />
                                      </div>
                                    </div>
                                    <ProgressBar
                                      now={25}
                                      style={{ height: ".5rem" }}
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="post-meta-likes mt-4 pt-4 border-top">
                            <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
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
                                      src={user2}
                                      alt="userimg"
                                      className="rounded-circle img-fluid userimg"
                                      loading="lazy"
                                    />
                                  </li>{" "}
                                  <li>
                                    <img
                                      src={user3}
                                      alt="userimg"
                                      className="rounded-circle img-fluid userimg"
                                      loading="lazy"
                                    />
                                  </li>{" "}
                                  <li>
                                    <img
                                      src={user4}
                                      alt="userimg"
                                      className="rounded-circle img-fluid userimg"
                                      loading="lazy"
                                    />
                                  </li>{" "}
                                </ul>
                                <h6 className="m-0 font-size-14 lh-lg">
                                  Total Votes: <b>25</b>
                                </h6>
                              </div>
                              <Button type="submit" className="btn btn-primary">
                                Vote
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col sm={12} className=" social-post">
                      <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                          <div className="user-post-data">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="me-3 flex-shrik-0">
                                <img
                                  className="border border-2 rounded-circle user-post-profile"
                                  src={user7}
                                  alt="user-images"
                                  loading="lazy"
                                />
                              </div>
                              <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="mb-0 d-inline-block">
                                      Marcum Shaw
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
                                    <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                      Shared This Post
                                    </span>
                                    <p className="mb-0">24 Hours ago</p>
                                  </div>
                                  <div className="card-post-toolbar">
                                    <Dropdown>
                                      <Dropdown.Toggle variant="lh-1" id="post-option" as="span" >
                                        <span className="material-symbols-outlined" >more_horiz</span>
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">save</span>
                                            <div className="data ms-2">
                                              <h6>Save Post</h6>
                                              <p className="mb-0">
                                                Add this to your saved items
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">cancel</span>
                                            <div className="data ms-2">
                                              <h6>Hide Post</h6>
                                              <p className="mb-0">
                                                See fewer posts like this.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">person_remove</span>
                                            <div className="data ms-2">
                                              <h6>Unfollow User</h6>
                                              <p className="mb-0">
                                                Stop seeing posts but stay
                                                friends.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">notifications</span>
                                            <div className="data ms-2">
                                              <h6>Notifications</h6>
                                              <p className="mb-0">
                                                Turn on notifications for this
                                                post
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
                          <div className="user-post mt-4">
                            <div className="card shadow mb-0">
                              <div className="card-body">
                                <div className="user-post-data">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="me-3 flex-shrik-0">
                                      <img
                                        className="border border-2 rounded-circle user-post-profile"
                                        src={user8}
                                        alt="user-images"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <h6 className="mb-0 d-inline-block">
                                        Paige Turner
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
                                      <p className="mb-0">9 Hours ago</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <p className="m-0">
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Morbi nulla dolor, ornare at
                                    commodo non, feugiat non nisi. Phasellus
                                    faucibus mollis pharetra. Proin blandit ac
                                    massa sed rhoncus"
                                  </p>
                                  <ul className="list-inline m-0 p-0 d-flex flex-wrap gap-1">
                                    <li>
                                      <Link
                                        to="#"
                                        // contenteditable="false"
                                        style={{ cursor: "pointer" }}
                                      >
                                        #design
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        // contenteditable="false"
                                        style={{ cursor: "pointer" }}
                                      >
                                        #themes
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        // contenteditable="false"
                                        style={{ cursor: "pointer" }}
                                      >
                                        #ui/ux
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="user-post mt-4">
                                  <div className="card shadow overflow-hidden mb-0">
                                    <img
                                      src={profileBgImg}
                                      className="card-img-top w-100 object-cover"
                                      alt="group-images"
                                      height="250"
                                    />
                                    <div className="card-body text-center">
                                      <h5 className="card-title">Themes</h5>
                                      <p className="card-text">
                                        It is a long established fact that a
                                        reader will be distracted by the readable
                                        content of a page when looking at its
                                        layout.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                                    src={user2}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                  />
                                </li>{" "}
                                <li>
                                  <img
                                    src={user3}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                  />
                                </li>{" "}
                                <li>
                                  <img
                                    src={user4}
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                  />
                                </li>{" "}
                              </ul>
                              <div className="d-inline-flex align-items-center gap-1">
                                <h6 className="m-0 font-size-14">Aliana Molex</h6>
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
                                      <span className="fw-medium">140 Likes</span>
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
                                        overlay={<Tooltip>Lovely</Tooltip>}
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
                                  aria-expanded={open5}
                                  onClick={() => setOpen5(!open5)}
                                >
                                  <span className="material-symbols-outlined align-text-top font-size-20">
                                    comment
                                  </span>{" "}
                                  <span className="fw-medium">20 Comment</span>
                                </div>

                                <div className="share-block d-flex align-items-center feather-icon">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#share-btn"
                                    onClick={() => setModalShow5(true)}
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
                                  show={modalShow5}
                                  onHide={() => setModalShow5(false)}
                                />
                              </div>
                            </div>

                            <Collapse in={open5}>
                              <div id="commentcollapes" className="border-top mt-4 pt-4">
                                <ul className="list-inline m-o p-0 comment-list">
                                  <li className="mb-3">
                                    <div className="comment-list-block">
                                      <div className="d-flex align-items-center gap-3">
                                        <div className="comment-list-user-img flex-shrink-0">
                                          <img
                                            src={user6}
                                            alt="userimg"
                                            className="avatar-48 rounded-circle img-fluid"
                                            loading="lazy"
                                          />
                                        </div>
                                        <div className="comment-list-user-data">
                                          <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                            <h6 className="m-0">Bob Frapples</h6>
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
                                          "Just stumbled upon this post and it's
                                          giving me all the feels! 🙌"
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
                                                      </span>
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
                                              >
                                                Reply
                                              </span>
                                            </li>
                                          </ul>
                                          <div
                                            className="add-comment-form-block collapse mt-3"
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
                    </Col></>}
                </Row>
              </div>
            </Col>

            <Col lg={4}>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title text-capitalize">active users</h4>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <ul className="list-inline m-0 p-0">
                    <li className="d-flex align-items-center gap-3 mb-3">
                      <img
                        src={user01}
                        alt="story-img"
                        className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                      />
                      <div>
                        <h5 className="d-inline-block">Arina Event</h5>
                        <span className="profile-status-online"></span>
                        <small className="text-capitalize d-block">
                          Active
                        </small>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-3 mb-3">
                      <img
                        src={user2}
                        alt="story-img"
                        className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                      />
                      <div>
                        <h5 className="d-inline-block">Darlene Robertson</h5>
                        <span className="profile-status-online"></span>
                        <small className="text-capitalize d-block">
                          Active
                        </small>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-3 mb-3">
                      <img
                        src={user3}
                        alt="story-img"
                        className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                      />
                      <div>
                        <h5 className="d-inline-block">Jerome Bell</h5>
                        <span className="profile-status-offline"></span>
                        <small className="text-capitalize d-block">
                          7 hours ago
                        </small>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-3">
                      <img
                        src={user13}
                        alt="story-img"
                        className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                      />
                      <div>
                        <h5 className="d-inline-block">Arlene McCoy</h5>
                        <span className="profile-status-offline"></span>
                        <small className="text-capitalize d-block">
                          4 days ago
                        </small>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <div className="fixed-suggestion mb-0 mb-lg-4">
                <Card>
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Suggestions for you</h4>
                    </div>
                    <small className="fw-500 text-capitalize">See all</small>
                  </div>
                  <Card.Body className="pt-0">
                    <ul className="list-inline m-0 p-0">
                      <li className="mb-3">
                        <div className="d-flex align-items-center gap-2 justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={user14}
                              alt="story-img"
                              className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                            />
                            <div>
                              <h5>Annette Black</h5>
                              <div className="d-flex align-items-center justify-content-between gap-2">
                              </div>
                              <small className="text-capitalize">
                                Followed by dribbble + 2 more
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-center flex-shrink-0 gap-2">
                            <button className="btn btn-primary-subtle p-1 lh-1">
                              <i className="material-symbols-outlined font-size-14">
                                add
                              </i>
                            </button>
                            <button className="btn btn-danger-subtle p-1 lh-1">
                              <i className="material-symbols-outlined font-size-14">
                                close
                              </i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="mb-3">
                        <div className="d-flex align-items-center gap-2 justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={user15}
                              alt="story-img"
                              className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                            />
                            <div>
                              <div className="d-flex align-items-center justify-content-between gap-2">
                                <div>
                                  <h5>Christopher Plessis</h5>
                                  <small className="text-capitalize">
                                    Followed by dribbble + 2 more
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center flex-shrink-0 gap-2">
                            <button className="btn btn-primary-subtle p-1 lh-1">
                              <i className="material-symbols-outlined font-size-14">
                                add
                              </i>
                            </button>
                            <button className="btn btn-danger-subtle p-1 lh-1">
                              <i className="material-symbols-outlined font-size-14">
                                close
                              </i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="d-flex align-items-center gap-2 justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={user16}
                              alt="story-img"
                              className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                            />
                            <div>
                              <div className="d-flex align-items-center justify-content-between gap-2">
                                <h5>Ellyse Perry</h5>
                              </div>
                              <small className="text-capitalize">
                                Followed by dribbble + 2 more
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-center flex-shrink-0 gap-2">
                            <button className="btn btn-primary-subtle p-1 lh-1">
                              <i className="material-symbols-outlined font-size-14">
                                add
                              </i>
                            </button>
                            <button className="btn btn-danger-subtle p-1 lh-1">
                              <i className="material-symbols-outlined font-size-14">
                                close
                              </i>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>

                <Card>
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Latest Activities</h4>
                    </div>
                  </div>
                  <Card.Body className="pt-0">
                    <ul className="list-inline m-0 p-0">
                      <li className="d-flex mb-3 pb-3 border-bottom">
                        <img
                          src={user9}
                          alt="story-img"
                          className="avatar-32 avatar-rounded object-cover img-fluid"
                        />
                        <div className="stories-data ms-3">
                          <h6 className="font-size-14">
                            Esther Howard{" "}
                            <span className="fw-normal text-body">
                              reacted comment in to your
                            </span>{" "}
                            <span className="fw-normal">post.</span>
                          </h6>
                          <small className="text-capitalize">19 min ago</small>
                        </div>
                      </li>
                      <li className="d-flex mb-3 pb-3 border-bottom">
                        <img
                          src={user10}
                          alt="story-img"
                          className="avatar-32 avatar-rounded object-cover img-fluid"
                        />
                        <div className="stories-data ms-3">
                          <h6 className="font-size-14">
                            Monty Carlo{" "}
                            <span className="text-body fw-normal">
                              followed you.
                            </span>
                          </h6>
                          <small className="text-capitalize">7 day ago</small>
                        </div>
                      </li>
                      <li className="d-flex mb-3 pb-3 border-bottom">
                        <img
                          src={user6}
                          alt="story-img"
                          className="avatar-32 avatar-rounded object-cover img-fluid"
                        />
                        <div className="stories-data ms-3">
                          <h6 className="font-size-14">
                            Pete Sariya
                            <span className="text-body fw-normal"> Voted for</span>{" "}
                            Combination of colors from your brand palette
                          </h6>
                          <small className="text-capitalize">1 month ago</small>
                        </div>
                      </li>
                      <li className="d-flex">
                        <img
                          src={user11}
                          alt="story-img"
                          className="avatar-32 avatar-rounded object-cover img-fluid"
                        />
                        <div className="stories-data ms-3">
                          <h6 className="font-size-14">
                            Dima Davydov{" "}
                            <span className="text-body fw-normal">
                              replied to your comment
                            </span>
                          </h6>
                          <small className="text-capitalize">1 month ago</small>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
};

export default Index;
