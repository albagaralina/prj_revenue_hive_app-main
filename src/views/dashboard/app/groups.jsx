import React from "react";
import { Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import ProfileHeader from "../../../components/profile-header";

// images
import gi1 from "../../../assets/images/page-img/gi-1.jpg";
import gi2 from "../../../assets/images/page-img/gi-2.jpg";
import gi3 from "../../../assets/images/page-img/gi-3.jpg";
import gi4 from "../../../assets/images/page-img/gi-4.jpg";
import gi5 from "../../../assets/images/page-img/gi-5.jpg";
import gi6 from "../../../assets/images/page-img/gi-6.jpg";
import gi7 from "../../../assets/images/page-img/gi-7.jpg";
import gi8 from "../../../assets/images/page-img/gi-8.jpg";
import gi9 from "../../../assets/images/page-img/gi-9.jpg";
import user05 from "../../../assets/images/user/05.jpg";
import user06 from "../../../assets/images/user/06.jpg";
import user07 from "../../../assets/images/user/07.jpg";
import user08 from "../../../assets/images/user/08.jpg";
import user09 from "../../../assets/images/user/09.jpg";
import user10 from "../../../assets/images/user/10.jpg";
import img1 from "../../../assets/images/page-img/profile-bg1.jpg";
import img2 from "../../../assets/images/page-img/profile-bg2.jpg";
import img3 from "../../../assets/images/page-img/profile-bg3.jpg";
import img4 from "../../../assets/images/page-img/profile-bg4.jpg";
import img5 from "../../../assets/images/page-img/profile-bg5.jpg";
import img6 from "../../../assets/images/page-img/profile-bg6.jpg";
import img7 from "../../../assets/images/page-img/profile-bg7.jpg";
import img9 from "../../../assets/images/page-img/profile-bg9.jpg";

const Groups = () => {
  return (
    <>
      <ProfileHeader img={img7} title="Groups" />
      <div id="content-page" className="content-inner">
        <Container>
          <div className="d-grid gap-3 d-grid-template-1fr-19">
            <Card className="group-box mb-0">
              <div className="top-bg-image">
                <img src={img1} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi1}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <Link to="/dashboards/app/group-detail" className="h4">
                    Designer
                  </Link>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">1 posts</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary-subtle fw-semibold px-3"
                >
                  Join Group
                </button>
              </Card.Body>
            </Card>
            <Card className="group-box mb-0">
              <div className="top-bg-image">
                <img src={img2} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi2}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <h4>
                    <Link to="/dashboards/app/group-detail" className="h4">
                      R & D
                    </Link>
                  </h4>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">0 post</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members 10</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary-subtle fw-semibold px-3"
                >
                  Join Group
                </button>
              </Card.Body>
            </Card>
            <Card className="group-box mb-0">
              <div className="top-bg-image">
                <img src={img3} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi3}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <Link to="/dashboards/app/group-detail" className="h4">
                    Graphics
                  </Link>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">50+ posts</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members 100+</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger-subtle fw-semibold px-3"
                >
                  Leave Group
                </button>
              </Card.Body>
            </Card>
            <Card className="group-box mb-0">
              <div className="top-bg-image">
                <img src={img4} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi4}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <Link to="/dashboards/app/group-detail" className="h4">
                    Developer
                  </Link>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">30 posts</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members 48</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary-subtle fw-semibold px-3"
                >
                  Join Group
                </button>
              </Card.Body>
            </Card>
            <Card className="group-box mb-0">
              <div className="top-bg-image">
                <img src={img5} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi5}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <Link to="/dashboards/app/group-detail" className="h4">
                    Tester
                  </Link>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">4 posts</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members 24</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success-subtle fw-semibold px-3"
                >
                  Manage Group
                </button>
              </Card.Body>
            </Card>
            <Card className="group-box mb-0">
              <div className="top-bg-image">
                <img src={img6} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi6}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <Link to="/dashboards/app/group-detail" className="h4">
                    Events
                  </Link>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">8 posts</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members 30</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary-subtle fw-semibold px-3"
                >
                  Join Group
                </button>
              </Card.Body>
            </Card>
            <Card className="group-box">
              <div className="top-bg-image">
                <img src={img7} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi7}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <Link to="/dashboards/app/group-detail" className="h4">
                    Coder
                  </Link>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">19 posts</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members 15</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary-subtle fw-semibold px-3"
                >
                  Join Group
                </button>
              </Card.Body>
            </Card>
            <Card className="group-box">
              <div className="top-bg-image">
                <img src={img9} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi8}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <Link to="/dashboards/app/group-detail" className="h4">
                    Themes
                  </Link>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">27 posts</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members 70</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger-subtle fw-semibold px-3"
                >
                  Leave Group
                </button>
              </Card.Body>
            </Card>
            <Card className="group-box">
              <div className="top-bg-image">
                <img src={img1} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi9}
                    alt="profile-img"
                    className="rounded-2 img-fluid avatar-90 border border-4"
                  />
                </div>
                <div className="group-info mt-3 mb-2">
                  <Link to="/dashboards/app/group-detail" className="h4">
                    Review
                  </Link>
                </div>
                <div className="group-details pb-4 mb-4 border-bottom">
                  <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          description
                        </span>
                        <span className="text-capitalize">32 posts</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-symbols-outlined font-size-18">
                          group
                        </span>
                        <span className="text-capitalize">Members 12</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-4">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-30 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success-subtle fw-semibold px-3"
                >
                  Manage Group
                </button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Groups;
