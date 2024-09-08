import React, { useState } from "react";
import { Link } from "react-router-dom";

// Image
import img1 from "../../../assets/images/store/product-detail/01.jpg";
import img2 from "../../../assets/images/store/product-detail/02.jpg";
import img3 from "../../../assets/images/store/product-detail/3.jpg";
import img4 from "../../../assets/images/store/product-detail/04.jpg";
import img5 from "../../../assets/images/store/product-detail/05.jpg";
import img6 from "../../../assets/images/store/product-detail/06.jpg";
import img7 from "../../../assets/images/page-img/19.jpg"
import img8 from "../../../assets/images/page-img/22.jpg"
import user1 from "../../../assets/images/user/01.jpg"
import user2 from "../../../assets/images/user/02.jpg"
import user3 from "../../../assets/images/user/03.jpg"
import user4 from "../../../assets/images/user/04.jpg"
import user5 from "../../../assets/images/user/05.jpg"
import user6 from "../../../assets/images/user/06.jpg"
import storeImg1 from "../../../assets/images/store/01.jpg"
import storeImg2 from "../../../assets/images/store/02.jpg"
import storeImg3 from "../../../assets/images/store/03.jpg"
import storeImg4 from "../../../assets/images/store/04.jpg"
import storeImg5 from "../../../assets/images/store/05.jpg"
import storeImg6 from "../../../assets/images/store/06.jpg"
import storeLogo from "../../../assets/images/store/product-detail/store.png"

//Counter
import Counter from "../../../components/counter";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ShareOffcanvasNew from "../../../components/ShareOffcanvasNew";
import { Card, Col, Container, Nav, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div id="content-page" className="content-inner">
        <Container>
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col lg={7}>
                  <div className="product-vertical-slider">
                    <div className="slider__flex">
                      <div className="slider__col">
                        <div className="slider__thumbs">
                          <Swiper
                            className="swiper-container"
                            // direction={'horizontal'}
                            breakpoints={{
                              0: {
                                direction: 'horizontal',
                                slidesPerView: 3,
                                spaceBetween: 10,
                              },
                              768: {
                                direction: 'vertical',
                                slidesPerView: 4,
                              }
                            }}
                            slidesPerView={3}
                            spaceBetween={24}
                            slideToClickedSlide={true}
                            loop={true}
                            loopedslides={5}
                            freeMode={true}
                            onSwiper={setThumbsSwiper}
                            mousewheel={true}
                            modules={[FreeMode, Thumbs]}
                          >
                            <SwiperSlide>
                              <div className="slider__image">
                                <img src={img1} alt="" loading="lazy" />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="slider__image">
                                <img src={img2} alt="" loading="lazy" />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="slider__image">
                                <img src={img3} alt="" loading="lazy" />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="slider__image">
                                <img src={img4} alt="" loading="lazy" />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="slider__image">
                                <img src={img5} alt="" loading="lazy" />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="slider__image">
                                <img src={img6} alt="" loading="lazy" />
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div className="slider__images bg-light-subtle">
                        <Swiper
                          className="swiper-container"
                          // direction={"vertical"}
                          slidesPerView={1}
                          spaceBetween={32}
                          loopedslides={5}
                          breakpoints={{
                            0: {
                              direction: 'horizontal',

                            },
                            768: {
                              direction: 'vertical',
                            }
                          }}
                          thumbs={{
                            swiper:
                              thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                          }}
                          mousewheel={true}
                          modules={[FreeMode, Thumbs, Mousewheel]}
                          loop={true}
                        >
                          <SwiperSlide className="swiper-slide">
                            <div className="slider__image">
                              <img src={img1} alt="" loading="lazy" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="slider__image">
                              <img src={img2} alt="" loading="lazy" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="slider__image">
                              <img src={img3} alt="" loading="lazy" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="slider__image">
                              <img src={img4} alt="" loading="lazy" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="slider__image">
                              <img src={img5} alt="" loading="lazy" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="slider__image">
                              <img src={img6} alt="" loading="lazy" />
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className="border-bottom pb-3 mb-3 pt-5 pt-lg-0">
                    <div className="d-flex flex-column align-content-between justify-items-center mb-2">
                      <div className="d-flex justify-content-between">
                        <h3 className="mb-0 fw-semibold">Leather Bags</h3>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#share-btn"
                          aria-controls="share-btn"
                          onClick={() => setModalShow(true)}
                        >
                          <span className="material-symbols-outlined align-text-top font-size-20 bg-light-subtle text-dark rounded p-2">
                            share
                          </span>
                        </Link>
                        <ShareOffcanvasNew show={modalShow}
                          onHide={() => setModalShow(false)} />
                      </div>
                      <div className=" d-flex align-items-center w-100">
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                            fill="#FFD329"
                          ></path>
                        </svg>
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                            fill="#FFD329"
                          ></path>
                        </svg>
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                            fill="#FFD329"
                          ></path>
                        </svg>
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                            fill="#FFD329"
                          ></path>
                        </svg>
                        <svg
                          className="icon-24"
                          width="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                            fill="#FFD329"
                          ></path>
                        </svg>
                        <span className="ms-1 font-size-14 fw-semibold text-capitalize">
                          (4 customer review)
                        </span>
                      </div>
                    </div>
                    <h4 className="fw-semibold font-size-18 mb-3">$49.99</h4>
                    <p className="text-body fw-semibold text-capitalize mb-0">
                      availability:{" "}
                      <span className="text-success">in stock</span>
                    </p>
                  </div>
                  <div className="border-bottom pb-4 mb-4">
                    <h6 className="fw-semibold mb-2">Size:</h6>
                    <div className="d-flex mb-4">
                      <Link to="#" className="product-size active">
                        S
                      </Link>
                      <Link to="#" className="product-size">
                        M
                      </Link>
                      <Link to="#" className="product-size">
                        L
                      </Link>
                      <Link to="#" className="product-size">
                        XL
                      </Link>
                      <Link to="#" className="product-size">
                        XXL
                      </Link>
                    </div>
                    <h6 className="fw-semibold mb-2">
                      Color:<span className="ms-1 fw-normal">Green</span>
                    </h6>
                    <ul className="d-flex list-inline mb-4">
                      <li className="border rounded-circle me-3">
                        <Link
                          to="#"
                          className="product-color bg-secondary"
                        ></Link>
                      </li>
                      <li className="border rounded-circle me-3">
                        <Link
                          to="#"
                          className="product-color bg-primary"
                        ></Link>
                      </li>
                      <li className="border rounded-circle me-3">
                        <Link
                          to="#"
                          className="product-color bg-success"
                        ></Link>
                      </li>
                      <li className="border rounded-circle me-3">
                        <Link to="#" className="product-color bg-danger"></Link>
                      </li>
                      <li className="border rounded-circle me-3">
                        <Link
                          to="#"
                          className="product-color bg-warning"
                        ></Link>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center gap-3">
                      <Counter counter="2" />
                      <button
                        type="button"
                        className="btn btn-primary fw-semibold font-size-14 w-50"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <Link
                      to="#"
                      className="d-flex align-items-center gap-1 font-size-14 fw-semibold text-body text-capitalize"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.8337 11.6667C17.0753 10.45 18.3337 8.99167 18.3337 7.08333C18.3337 5.86776 17.8508 4.70197 16.9912 3.84243C16.1317 2.98289 14.9659 2.5 13.7503 2.5C12.2837 2.5 11.2503 2.91667 10.0003 4.16667C8.75033 2.91667 7.71699 2.5 6.25033 2.5C5.03475 2.5 3.86896 2.98289 3.00942 3.84243C2.14988 4.70197 1.66699 5.86776 1.66699 7.08333C1.66699 9 2.91699 10.4583 4.16699 11.6667L10.0003 17.5L15.8337 11.6667Z"
                          stroke="#2B2D42"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Add to Wishlist</span>
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center gap-1 font-size-14 fw-semibold text-body text-capitalize"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M2.5 2.5V17.5H17.5"
                          stroke="#2B2D42"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 14.1667V7.5"
                          stroke="#2B2D42"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.833 14.1667V4.16666"
                          stroke="#2B2D42"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66699 14.1667V11.6667"
                          stroke="#2B2D42"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Add to compare</span>
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center gap-1 font-size-14 fw-semibold text-body text-capitalize"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>ask about product</span>
                    </Link>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 pt-4">
                <Col lg={12}>
                  <div className="product-detail-tabs">
                    <TabContainer defaultActiveKey={'description'}>
                      <Nav
                        as="ul"
                        className="nav nav-tabs justify-content-center gap-4 mb-3 gap-lg-5 border-bottom"
                        id="product-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <Nav.Link
                            to="#"
                            className="nav-link bg-transparent px-0 py-2 fs-5 rounded-0"
                            data-bs-toggle="tab"
                            data-bs-target="#description"
                            eventKey={'description'}
                            role="tab"
                            aria-selected="true"
                          >
                            Description
                          </Nav.Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Nav.Link
                            to="#"
                            className="nav-link bg-transparent px-0 py-2 fs-5 rounded-0"
                            data-bs-toggle="tab"
                            data-bs-target="#additional-information"
                            role="tab"
                            aria-selected="false"
                            eventKey={'additional-information'}
                          >
                            Additional information
                          </Nav.Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Nav.Link
                            to="#"
                            className="nav-link bg-transparent px-0 py-2 fs-5 rounded-0"
                            data-bs-toggle="tab"
                            data-bs-target="#reviews"
                            role="tab"
                            aria-selected="false"
                            eventKey={'reviews'}
                          >
                            Reviews(2)
                          </Nav.Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Nav.Link
                            to="#"
                            className="nav-link bg-transparent px-0 py-2 fs-5 rounded-0"
                            data-bs-toggle="tab"
                            data-bs-target="#storedetail"
                            role="tab"
                            aria-selected="false"
                            eventKey={'storedetail'}
                          >
                            Store Detail
                          </Nav.Link>
                        </li>
                      </Nav>
                      <TabContent id="product-tab-content">
                        <TabPane
                          className="tab-pane fade show"
                          id="description"
                          eventKey={'description'}
                          role="tabpanel"
                        >
                          <p className="m-0">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words
                            which don't look even slightly believable. If you are
                            going to use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the
                            middle of text. All the Lorem Ipsum generators on the
                            Internet tend to repeat predefined chunks as
                            necessary.
                          </p>
                        </TabPane>
                        <TabPane
                          className="tab-pane fade"
                          id="additional-information"
                          role="tabpanel"
                          eventKey={'additional-information'}
                        >
                          <div className="table-responsive">
                            <table className="table table-bordered mb-0">
                              <tbody>
                                <tr className="text-body">
                                  <th className="fw-semibold">Type</th>
                                  <td>Backpack</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">Ideal For</th>
                                  <td>Men & Women</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">Trolley Support</th>
                                  <td>No</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">Laptop Sleeve</th>
                                  <td>No</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">With Rain Cover</th>
                                  <td>No</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">Style Code</th>
                                  <td>Provogue_Day_002</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">Color Code</th>
                                  <td>Grey, Black</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">
                                    Material, Waterproof
                                  </th>
                                  <td>Material: Polyester, Waterproof: Yes</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">
                                    Number of Compartments
                                  </th>
                                  <td>2</td>
                                </tr>
                                <tr className="text-body">
                                  <th className="fw-semibold">Self Design</th>
                                  <td>No</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </TabPane>
                        <TabPane
                          className="tab-pane fade"
                          id="reviews"
                          role="tabpanel"
                          eventKey={'reviews'}
                        >
                          <h4 className="mb-4">Reviews For </h4>
                          <div className="product-review-list">
                            <ul className="list-inline m-0 p-0">
                              <li className="p-4 border rounded mb-4">
                                <div className="d-flex flex-sm-row flex-column gap-3">
                                  <div className="user-image flex-shrink-0">
                                    <img
                                      src={img7}
                                      className="avatar-120"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="about-user">
                                    <div className="d-flex justify-content-between align-items-center my-2 my-lg-0">
                                      <h6 className="mb-0 fw-500">
                                        Jackson Jones
                                      </h6>
                                      <Link className="text-dark " to="#">
                                        Reply
                                      </Link>
                                    </div>
                                    <small to="#" className="text-primary">
                                      March 01st 2021
                                    </small>
                                    <p className="mt-1 mb-0">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Aliquam ut eu morbi
                                      tincidunt erat egestas quisque ultrices ut.
                                      Vel elementum blandit et tellus sit
                                      tincidunt.
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="p-4 border rounded">
                                <div className="d-flex flex-sm-row flex-column gap-3">
                                  <div className="user-image flex-shrink-0">
                                    <img
                                      src={img8}
                                      className="avatar-120"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="about-user">
                                    <div className="d-flex justify-content-between align-items-center my-2 my-lg-0">
                                      <h6 className="mb-0 fw-500">Emma Jones</h6>
                                      <Link className="text-dark " to="#">
                                        Reply
                                      </Link>
                                    </div>
                                    <small to="#" className="text-primary">
                                      March 20th 2021
                                    </small>
                                    <p className="mt-1">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Aliquam ut eu morbi
                                      tincidunt erat egestas quisque ultrices ut.
                                      Vel elementum blandit et tellus sit
                                      tincidunt.
                                    </p>
                                    <div className="d-flex mb-3">
                                      <Link className="" to="#">
                                        Reply To Jackson Jones
                                      </Link>
                                      <Link className="text-body ms-3" to="#">
                                        Cancel Reply
                                      </Link>
                                    </div>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=" Hi there, I love your blog "
                                      />
                                      <button
                                        type="submit"
                                        className="btn btn-primary rounded mt-3"
                                      >
                                        Get Started
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <p className="my-4">- There are no reviews yet</p>
                            <h4 className="mb-3">Be the first to Review</h4>
                          </div>
                          <form>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label
                                    htmlFor="full-name"
                                    className="form-label"
                                  >
                                    First Name
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control w-100"
                                    id="full-name"
                                    placeholder=" John"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label
                                    htmlFor="last-name"
                                    className="form-label"
                                  >
                                    Email ID<span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control w-100"
                                    id="last-name"
                                    placeholder="XYZ@exampleemail.com "
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label htmlFor="message" className="form-label">
                                    Enter your Review
                                    <span className="text-danger">*</span>
                                  </label>
                                  <textarea
                                    className="form-control"
                                    rows="5"
                                    id="message"
                                    aria-label="With textarea"
                                    spellCheck="false"
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-lg-12 d-flex justify-content-between">
                                <div className="form-check mb-3">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="customCheck1"
                                  >
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
                                    <span className="text-danger">*</span>
                                  </label>
                                </div>
                              </div>
                              <div className="d-flex">
                                <button type="submit" className="btn btn-primary">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </TabPane>
                        <TabPane
                          eventKey={'storedetail'}
                          className="tab-pane fade"
                          id="storedetail"
                          role="tabpanel"
                        >
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={storeLogo}
                              alt=""
                              loading="lazy"
                            />
                            <div>
                              <h5 className="text capitalize fw-semibold">
                                voltt scale store
                              </h5>
                              <div className="d-flex align-items-center w-100 mt-2 flex-wrap">
                                <svg
                                  className="icon-24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                                    fill="#FFD329"
                                  ></path>
                                </svg>
                                <svg
                                  className="icon-24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                                    fill="#FFD329"
                                  ></path>
                                </svg>
                                <svg
                                  className="icon-24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                                    fill="#FFD329"
                                  ></path>
                                </svg>
                                <svg
                                  className="icon-24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                                    fill="#FFD329"
                                  ></path>
                                </svg>
                                <svg
                                  className="icon-24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                                    fill="#6c757d"
                                  ></path>
                                </svg>
                                <span className="ms-1 font-size-14 fw-semibold text-capitalize">
                                  (4 customer review)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="table-responsive store-detail-table">
                            <table className="mt-5 pt-2">
                              <tbody>
                                <tr>
                                  <th className="w-25">
                                    <h6 className="text-capitalize fw-semibold">
                                      address:
                                    </h6>
                                  </th>
                                  <td className="w-75">
                                    492 Devon StreetMissoula, MT 59801, united
                                    states
                                  </td>
                                </tr>
                                <tr>
                                  <th className="w-25">
                                    <h6 className="text-capitalize fw-semibold">
                                      time:
                                    </h6>
                                  </th>
                                  <td className="w-75">
                                    <h6 className="text-capitalize fw-normal mb-2">
                                      mon to fri:
                                      <span className="text-body ms-2">
                                        08:00 AM - 16:00 PM
                                      </span>
                                    </h6>
                                    <h6 className="text-capitalize fw-normal">
                                      Weekends:
                                      <span className="text-body ms-2">Closed</span>
                                    </h6>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="w-25">
                                    <h6 className="text-capitalize fw-semibold">
                                      number:
                                    </h6>
                                  </th>
                                  <td className="w-75 text-primary">
                                    (+16) 813 021 021
                                  </td>
                                </tr>
                                <tr>
                                  <th className="w-25">
                                    <h6 className="text-capitalize fw-semibold">
                                      Follow Us:
                                    </h6>
                                  </th>
                                  <td className="w-75">
                                    <ul className="list-inline d-flex align-items-center gap-2 mb-0">
                                      <li>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="32"
                                          height="32"
                                          viewBox="0 0 32 32"
                                          fill="none"
                                        >
                                          <path
                                            d="M14 27.8667C8.33333 26.8667 4 21.9333 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 21.9333 23.6667 26.8667 18 27.8667L17.3333 27.3333H14.6667L14 27.8667Z"
                                            fill="url(#paint0_linear_963_723)"
                                          />
                                          <path
                                            d="M20.6667 19.3334L21.2 16H18V13.6667C18 12.7334 18.3333 12 19.8 12H21.3333V8.93335C20.4667 8.80002 19.5333 8.66669 18.6667 8.66669C15.9333 8.66669 14 10.3334 14 13.3334V16H11V19.3334H14V27.8C14.6667 27.9334 15.3333 28 16 28C16.6667 28 17.3333 27.9334 18 27.8V19.3334H20.6667Z"
                                            fill="white"
                                          />
                                          <defs>
                                            <linearGradient
                                              id="paint0_linear_963_723"
                                              x1="16"
                                              y1="27.1693"
                                              x2="16"
                                              y2="4"
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop stopColor="#0062E0" />
                                              <stop
                                                offset="1"
                                                stopColor="#19AFFF"
                                              />
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="32"
                                          height="32"
                                          viewBox="0 0 32 32"
                                          fill="none"
                                        >
                                          <path
                                            d="M16.0003 4.36365C12.8401 4.36365 12.4435 4.37747 11.2023 4.43395C9.9636 4.49068 9.11805 4.6868 8.37819 4.97456C7.61288 5.27177 6.96369 5.66934 6.31692 6.31637C5.66967 6.96316 5.2721 7.61237 4.97393 8.37747C4.68545 9.11759 4.4891 9.96341 4.43334 11.2017C4.37783 12.4429 4.36328 12.8398 4.36328 16C4.36328 19.1603 4.37734 19.5556 4.43358 20.7969C4.49055 22.0356 4.68667 22.8812 4.97417 23.6211C5.27162 24.3864 5.66918 25.0356 6.31619 25.6824C6.96272 26.3297 7.61191 26.7283 8.37674 27.0255C9.11708 27.3132 9.96287 27.5093 11.2014 27.5661C12.4426 27.6226 12.8389 27.6364 15.9988 27.6364C19.1592 27.6364 19.5546 27.6226 20.7958 27.5661C22.0345 27.5093 22.881 27.3132 23.6214 27.0255C24.3864 26.7283 25.0347 26.3297 25.6812 25.6824C26.3284 25.0356 26.726 24.3864 27.0242 23.6213C27.3102 22.8812 27.5066 22.0354 27.5648 20.7971C27.6205 19.5559 27.6351 19.1603 27.6351 16C27.6351 12.8398 27.6205 12.4432 27.5648 11.202C27.5066 9.96316 27.3102 9.11759 27.0242 8.37771C26.726 7.61237 26.3284 6.96316 25.6812 6.31637C25.0339 5.6691 24.3867 5.27153 23.6206 4.97456C22.8788 4.6868 22.0328 4.49068 20.7941 4.43395C19.5529 4.37747 19.1577 4.36365 15.9966 4.36365H16.0003ZM14.9564 6.46062C15.2662 6.46013 15.6119 6.46062 16.0003 6.46062C19.1071 6.46062 19.4753 6.47177 20.7022 6.52753C21.8367 6.57941 22.4524 6.76898 22.8626 6.92825C23.4056 7.13916 23.7928 7.39128 24.1998 7.79856C24.607 8.20583 24.8591 8.59371 25.0705 9.13674C25.2298 9.54643 25.4196 10.1622 25.4712 11.2967C25.527 12.5234 25.5391 12.8919 25.5391 15.9973C25.5391 19.1028 25.527 19.4713 25.4712 20.698C25.4194 21.8325 25.2298 22.4483 25.0705 22.858C24.8596 23.401 24.607 23.7876 24.1998 24.1947C23.7925 24.6019 23.4059 24.8541 22.8626 25.065C22.4529 25.225 21.8367 25.4141 20.7022 25.466C19.4756 25.5217 19.1071 25.5338 16.0003 25.5338C12.8932 25.5338 12.525 25.5217 11.2983 25.466C10.1638 25.4136 9.54809 25.224 9.13768 25.0647C8.59467 24.8538 8.2068 24.6017 7.79954 24.1944C7.39228 23.7872 7.14017 23.4003 6.92878 22.857C6.76951 22.4473 6.5797 21.8315 6.52806 20.697C6.47231 19.4703 6.46116 19.1018 6.46116 15.9944C6.46116 12.887 6.47231 12.5205 6.52806 11.2938C6.57994 10.1593 6.76951 9.54353 6.92878 9.13334C7.13968 8.59031 7.39228 8.20244 7.79954 7.79516C8.2068 7.38789 8.59467 7.13577 9.13768 6.92437C9.54785 6.76437 10.1638 6.57528 11.2983 6.52316C12.3718 6.47468 12.7878 6.46013 14.9564 6.45771V6.46062ZM22.2115 8.39274C21.4406 8.39274 20.8151 9.01747 20.8151 9.78862C20.8151 10.5595 21.4406 11.185 22.2115 11.185C22.9824 11.185 23.6078 10.5595 23.6078 9.78862C23.6078 9.01771 22.9824 8.39225 22.2115 8.39225V8.39274ZM16.0003 10.0243C12.7002 10.0243 10.0247 12.6999 10.0247 16C10.0247 19.3001 12.7002 21.9746 16.0003 21.9746C19.3003 21.9746 21.9749 19.3001 21.9749 16C21.9749 12.6999 19.3 10.0243 16 10.0243H16.0003ZM16.0003 12.1212C18.1423 12.1212 19.8789 13.8577 19.8789 16C19.8789 18.1421 18.1423 19.8788 16.0003 19.8788C13.858 19.8788 12.1216 18.1421 12.1216 16C12.1216 13.8577 13.858 12.1212 16.0003 12.1212Z"
                                            fill="url(#paint0_radial_963_724)"
                                          />
                                          <path
                                            d="M16.0003 4.36365C12.8401 4.36365 12.4435 4.37747 11.2023 4.43395C9.9636 4.49068 9.11805 4.6868 8.37819 4.97456C7.61288 5.27177 6.96369 5.66934 6.31692 6.31637C5.66967 6.96316 5.2721 7.61237 4.97393 8.37747C4.68545 9.11759 4.4891 9.96341 4.43334 11.2017C4.37783 12.4429 4.36328 12.8398 4.36328 16C4.36328 19.1603 4.37734 19.5556 4.43358 20.7969C4.49055 22.0356 4.68667 22.8812 4.97417 23.6211C5.27162 24.3864 5.66918 25.0356 6.31619 25.6824C6.96272 26.3297 7.61191 26.7283 8.37674 27.0255C9.11708 27.3132 9.96287 27.5093 11.2014 27.5661C12.4426 27.6226 12.8389 27.6364 15.9988 27.6364C19.1592 27.6364 19.5546 27.6226 20.7958 27.5661C22.0345 27.5093 22.881 27.3132 23.6214 27.0255C24.3864 26.7283 25.0347 26.3297 25.6812 25.6824C26.3284 25.0356 26.726 24.3864 27.0242 23.6213C27.3102 22.8812 27.5066 22.0354 27.5648 20.7971C27.6205 19.5559 27.6351 19.1603 27.6351 16C27.6351 12.8398 27.6205 12.4432 27.5648 11.202C27.5066 9.96316 27.3102 9.11759 27.0242 8.37771C26.726 7.61237 26.3284 6.96316 25.6812 6.31637C25.0339 5.6691 24.3867 5.27153 23.6206 4.97456C22.8788 4.6868 22.0328 4.49068 20.7941 4.43395C19.5529 4.37747 19.1577 4.36365 15.9966 4.36365H16.0003ZM14.9564 6.46062C15.2662 6.46013 15.6119 6.46062 16.0003 6.46062C19.1071 6.46062 19.4753 6.47177 20.7022 6.52753C21.8367 6.57941 22.4524 6.76898 22.8626 6.92825C23.4056 7.13916 23.7928 7.39128 24.1998 7.79856C24.607 8.20583 24.8591 8.59371 25.0705 9.13674C25.2298 9.54643 25.4196 10.1622 25.4712 11.2967C25.527 12.5234 25.5391 12.8919 25.5391 15.9973C25.5391 19.1028 25.527 19.4713 25.4712 20.698C25.4194 21.8325 25.2298 22.4483 25.0705 22.858C24.8596 23.401 24.607 23.7876 24.1998 24.1947C23.7925 24.6019 23.4059 24.8541 22.8626 25.065C22.4529 25.225 21.8367 25.4141 20.7022 25.466C19.4756 25.5217 19.1071 25.5338 16.0003 25.5338C12.8932 25.5338 12.525 25.5217 11.2983 25.466C10.1638 25.4136 9.54809 25.224 9.13768 25.0647C8.59467 24.8538 8.2068 24.6017 7.79954 24.1944C7.39228 23.7872 7.14017 23.4003 6.92878 22.857C6.76951 22.4473 6.5797 21.8315 6.52806 20.697C6.47231 19.4703 6.46116 19.1018 6.46116 15.9944C6.46116 12.887 6.47231 12.5205 6.52806 11.2938C6.57994 10.1593 6.76951 9.54353 6.92878 9.13334C7.13968 8.59031 7.39228 8.20244 7.79954 7.79516C8.2068 7.38789 8.59467 7.13577 9.13768 6.92437C9.54785 6.76437 10.1638 6.57528 11.2983 6.52316C12.3718 6.47468 12.7878 6.46013 14.9564 6.45771V6.46062ZM22.2115 8.39274C21.4406 8.39274 20.8151 9.01747 20.8151 9.78862C20.8151 10.5595 21.4406 11.185 22.2115 11.185C22.9824 11.185 23.6078 10.5595 23.6078 9.78862C23.6078 9.01771 22.9824 8.39225 22.2115 8.39225V8.39274ZM16.0003 10.0243C12.7002 10.0243 10.0247 12.6999 10.0247 16C10.0247 19.3001 12.7002 21.9746 16.0003 21.9746C19.3003 21.9746 21.9749 19.3001 21.9749 16C21.9749 12.6999 19.3 10.0243 16 10.0243H16.0003ZM16.0003 12.1212C18.1423 12.1212 19.8789 13.8577 19.8789 16C19.8789 18.1421 18.1423 19.8788 16.0003 19.8788C13.858 19.8788 12.1216 18.1421 12.1216 16C12.1216 13.8577 13.858 12.1212 16.0003 12.1212Z"
                                            fill="url(#paint1_radial_963_724)"
                                          />
                                          <defs>
                                            <radialGradient
                                              id="paint0_radial_963_724"
                                              cx="0"
                                              cy="0"
                                              r="1"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="translate(10.5449 29.4289) rotate(-90) scale(23.065 21.4514)"
                                            >
                                              <stop stopColor="#FFDD55" />
                                              <stop
                                                offset="0.1"
                                                stopColor="#FFDD55"
                                              />
                                              <stop
                                                offset="0.5"
                                                stopColor="#FF543E"
                                              />
                                              <stop
                                                offset="1"
                                                stopColor="#C837AB"
                                              />
                                            </radialGradient>
                                            <radialGradient
                                              id="paint1_radial_963_724"
                                              cx="0"
                                              cy="0"
                                              r="1"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="translate(0.465135 6.04018) rotate(78.6811) scale(10.3101 42.4972)"
                                            >
                                              <stop stopColor="#3771C8" />
                                              <stop
                                                offset="0.128"
                                                stopColor="#3771C8"
                                              />
                                              <stop
                                                offset="1"
                                                stopColor="#6600FF"
                                                stopOpacity="0"
                                              />
                                            </radialGradient>
                                          </defs>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="32"
                                          height="32"
                                          viewBox="0 0 32 32"
                                          fill="none"
                                        >
                                          <path
                                            d="M4.66699 6.27557C4.66699 5.38701 5.38732 4.66669 6.27588 4.66669H25.7248C26.6133 4.66669 27.3337 5.38701 27.3337 6.27557V25.7244C27.3337 26.613 26.6133 27.3333 25.7248 27.3333H6.27588C5.38732 27.3333 4.66699 26.613 4.66699 25.7244V6.27557Z"
                                            fill="#0A66C2"
                                          />
                                          <path
                                            d="M9.75441 11.7059C10.8404 11.7059 11.7207 10.8255 11.7207 9.73952C11.7207 8.65355 10.8404 7.77319 9.75441 7.77319C8.66844 7.77319 7.78809 8.65355 7.78809 9.73952C7.78809 10.8255 8.66844 11.7059 9.75441 11.7059Z"
                                            fill="white"
                                          />
                                          <path
                                            d="M13.5216 13.159H16.7804V14.6519C16.7804 14.6519 17.6647 12.8833 20.0709 12.8833C22.2173 12.8833 23.9953 13.9406 23.9953 17.1635V23.9597H20.6182V17.987C20.6182 16.0858 19.6032 15.8767 18.8297 15.8767C17.2246 15.8767 16.9498 17.2613 16.9498 18.235V23.9597H13.5216V13.159Z"
                                            fill="white"
                                          />
                                          <path
                                            d="M8.04032 13.159H11.4685V23.9597H8.04032V13.159Z"
                                            fill="white"
                                          />
                                        </svg>
                                      </li>
                                      <li>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="32"
                                          height="32"
                                          viewBox="0 0 32 32"
                                          fill="none"
                                        >
                                          <path
                                            d="M17.6372 4.112C14.7664 3.71708 11.8497 4.37422 9.42555 5.96205C7.00144 7.54988 5.23369 9.96118 4.44872 12.7507C3.66374 15.5402 3.91457 18.5195 5.15488 21.1385C6.39519 23.7575 8.54121 25.8393 11.1967 26.9995C11.1249 26.0779 11.1908 25.1506 11.3922 24.2484C11.6142 23.2417 12.9472 17.6938 12.9472 17.6938C12.6818 17.0988 12.5491 16.4532 12.5585 15.8017C12.5585 14.02 13.5867 12.6906 14.8657 12.6906C15.0955 12.6873 15.3233 12.7334 15.5336 12.826C15.7439 12.9185 15.9319 13.0553 16.0846 13.227C16.2374 13.3986 16.3514 13.6012 16.4189 13.8208C16.4864 14.0405 16.5058 14.2721 16.4758 14.4999C16.4758 15.5798 15.7823 17.2139 15.42 18.7473C15.3484 19.0285 15.3438 19.3226 15.4067 19.6059C15.4696 19.8891 15.5982 20.1537 15.7821 20.3782C15.9659 20.6027 16.2 20.7809 16.4653 20.8983C16.7307 21.0158 17.0199 21.0693 17.3097 21.0545C19.5869 21.0545 21.1131 18.1378 21.1131 14.6943C21.1131 12.0547 19.365 10.0774 16.1423 10.0774C15.3713 10.0475 14.6022 10.1745 13.8818 10.4509C13.1613 10.7272 12.5046 11.1471 11.9514 11.685C11.3982 12.223 10.9601 12.8677 10.6637 13.5801C10.3674 14.2925 10.2188 15.0578 10.2272 15.8293C10.1929 16.6852 10.469 17.5246 11.0047 18.1929C11.1048 18.2677 11.1779 18.3729 11.213 18.4928C11.248 18.6127 11.2431 18.7408 11.1991 18.8576C11.1439 19.0784 11.0047 19.6051 10.9495 19.7983C10.938 19.8638 10.9113 19.9257 10.8716 19.979C10.8318 20.0323 10.78 20.0755 10.7205 20.1052C10.661 20.1348 10.5953 20.1501 10.5288 20.1497C10.4623 20.1493 10.3968 20.1333 10.3376 20.103C8.67708 19.4383 7.8948 17.611 7.8948 15.5246C7.8948 12.1087 10.7551 8.01977 16.4782 8.01977C21.0327 8.01977 24.061 11.3516 24.061 14.9151C24.061 19.6051 21.449 23.1314 17.5893 23.1314C17.0124 23.1498 16.4402 23.0225 15.9255 22.7612C15.4109 22.4999 14.9704 22.113 14.6449 21.6364C14.6449 21.6364 13.9514 24.4151 13.8147 24.9407C13.5355 25.8486 13.1235 26.7101 12.5921 27.4975C13.6995 27.8334 14.8501 28.0014 16.0067 27.9966C17.5827 27.9978 19.1436 27.6882 20.5998 27.0854C22.056 26.4826 23.379 25.5985 24.493 24.4837C25.6071 23.3688 26.4903 22.0452 27.092 20.5886C27.6938 19.132 28.0024 17.5709 28 15.9949C27.9985 13.0974 26.9487 10.2982 25.0444 8.11429C23.1401 5.93038 20.51 4.50921 17.6396 4.1132L17.6372 4.112Z"
                                            fill="#BB0F23"
                                          />
                                        </svg>
                                      </li>
                                      <li>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="32"
                                          height="32"
                                          viewBox="0 0 32 32"
                                          fill="none"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M26.3625 10.785C26.3715 11.0182 26.3745 11.2513 26.3745 11.4845C26.3745 18.5541 21.4014 26.7155 12.3073 26.7155C9.51376 26.7155 6.91616 25.8252 4.72754 24.3095C5.11442 24.3519 5.50733 24.3838 5.90626 24.3838C8.2225 24.3838 10.3558 23.5251 12.0481 22.0836C9.88456 22.0518 8.05771 20.4937 7.42765 18.3739C7.73012 18.4375 8.04161 18.4694 8.36015 18.4694C8.80933 18.4694 9.24544 18.4059 9.66347 18.2787C7.39949 17.7911 5.69423 15.629 5.69423 13.0322C5.69423 13.0004 5.69423 12.9897 5.69423 12.9685C6.36147 13.3607 7.12516 13.6043 7.9361 13.6361C6.60765 12.6716 5.73441 11.0288 5.73441 9.17396C5.73441 8.19884 5.97759 7.27668 6.40566 6.48175C8.84349 9.72507 12.4882 11.8555 16.5971 12.0781C16.5127 11.6859 16.4695 11.2727 16.4695 10.8593C16.4695 7.90216 18.6832 5.50671 21.4145 5.50671C22.8364 5.50671 24.1206 6.15335 25.022 7.19206C26.1504 6.95888 27.2076 6.51375 28.1642 5.899C27.7934 7.1497 27.0106 8.19879 25.9877 8.85594C26.9885 8.72875 27.9432 8.44279 28.8285 8.01883C28.1642 9.08933 27.3282 10.0325 26.3625 10.785Z"
                                            fill="#1EA1F2"
                                          />
                                        </svg>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </TabPane>
                      </TabContent>

                    </TabContainer>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <div className="py-4">
            <h4>Similar Products</h4>
          </div>
          <Swiper
            className="swiper swiper-general overflow-hidden "
            slidesPerView={3}
            autoplay={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: '1'
              },
              576: {
                slidesPerView: '1'
              },
              768: {
                slidesPerView: '1'
              },
              1025: {
                slidesPerView: '2'
              },
              1500: {
                slidesPerView: '3'
              },
            }}
            spaceBetween={16}
          >
            <ul className="swiper-wrapper list-inline m-0 p-0">
              <SwiperSlide className="swiper-slide">
                <div className="card card-block card-stretch card-height product">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle avatar-30"
                          src={user1}
                          alt=""
                          loading="lazy"
                        />
                        <div className="media-body ms-2">
                          <p className="mb-0 line-height">Posted By</p>
                          <h6>
                            <Link to="#">Paul Molive</Link>
                          </h6>
                        </div>
                      </div>
                      <span className="text-warning d-block line-height">
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                      </span>
                    </div>
                    <div className="image-block position-relative">
                      <img
                        src={storeImg1}
                        className="img-fluid w-100 rounded"
                        alt="product-img"
                        loading="lazy"
                      />
                      <div className="offer">
                        <div className="offer-title">30%</div>
                      </div>
                      <h6 className="price">
                        <span className="regular-price text-dark pr-2">
                          $87.00
                        </span>
                        $75.00
                      </h6>
                    </div>
                    <div className="product-description mt-3">
                      <Link
                        to="#"
                        className="mb-1"
                      >
                        Flaming Skull Team Logo
                      </Link>
                      <p className="categry text-primary ps-3 mb-0 position-relative mb-0">
                        Logo and badges
                      </p>
                      <p className="mb-0">
                        Success in containing the virus comes slowing activity.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="card card-block card-stretch card-height product">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle avatar-30"
                          src={user2}
                          alt=""
                          loading="lazy"
                        />
                        <div className="media-body ms-2">
                          <p className="mb-0 line-height">Posted By</p>
                          <h6>
                            <Link to="#">Paul Molive</Link>
                          </h6>
                        </div>
                      </div>
                      <span className="text-warning d-block line-height">
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                      </span>
                    </div>
                    <div className="image-block position-relative">
                      <img
                        src={storeImg2}
                        className="img-fluid w-100 rounded"
                        alt="product-img"
                        loading="lazy"
                      />
                      <div className="offer">
                        <div className="offer-title">30%</div>
                      </div>
                      <h6 className="price">
                        <span className="regular-price text-dark pr-2">
                          $87.00
                        </span>
                        $75.00
                      </h6>
                    </div>
                    <div className="product-description mt-3">
                      <Link
                        to="#"
                        className="mb-1"
                      >
                        Flaming Skull Team Logo
                      </Link>
                      <p className="categry text-primary ps-3 mb-0 position-relative mb-0">
                        Logo and badges
                      </p>
                      <p className="mb-0">
                        Success in containing the virus comes slowing activity.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="card card-block card-stretch card-height product">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle avatar-30"
                          src={user3}
                          alt=""
                          loading="lazy"
                        />
                        <div className="media-body ms-2">
                          <p className="mb-0 line-height">Posted By</p>
                          <h6>
                            <Link to="#">Anna Mull</Link>
                          </h6>
                        </div>
                      </div>
                      <span className="text-warning d-block line-height">
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                      </span>
                    </div>
                    <div className="image-block position-relative">
                      <img
                        src={storeImg3}
                        className="img-fluid w-100 rounded"
                        alt="product-img"
                        loading="lazy"
                      />
                      <div className="offer bg-danger">
                        <div className="offer-title">50%</div>
                      </div>
                      <h6 className="price">
                        <span className="regular-price text-dark pr-2">
                          $87.00
                        </span>
                        $75.00
                      </h6>
                    </div>
                    <div className="product-description mt-3">
                      <Link
                        to="#"
                        className="mb-1"
                      >
                        Flaming Skull Team Logo
                      </Link>
                      <p className="categry text-primary ps-3 mb-0 position-relative mb-0">
                        Logo and badges
                      </p>
                      <p className="mb-0">
                        Success in containing the virus comes slowing activity.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="card card-block card-stretch card-height product">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle avatar-30"
                          src={user4}
                          alt=""
                          loading="lazy"
                        />
                        <div className="media-body ms-2">
                          <p className="mb-0 line-height">Posted By</p>
                          <h6>
                            <Link to="#">Terry Aki</Link>
                          </h6>
                        </div>
                      </div>
                      <span className="text-warning d-block line-height">
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                      </span>
                    </div>
                    <div className="image-block position-relative">
                      <img
                        src={storeImg4}
                        className="img-fluid w-100 rounded"
                        alt="product-img"
                      />
                      <div className="offer">
                        <div className="offer-title">30%</div>
                      </div>
                      <h6 className="price">
                        <span className="regular-price text-dark pr-2">
                          $87.00
                        </span>
                        $75.00
                      </h6>
                    </div>
                    <div className="product-description mt-3">
                      <Link
                        to="#"
                        className="mb-1"
                      >
                        Flaming Skull Team Logo
                      </Link>
                      <p className="categry text-primary ps-3 mb-0 position-relative mb-0">
                        Logo and badges
                      </p>
                      <p className="mb-0">
                        Success in containing the virus comes slowing activity.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="card card-block card-stretch card-height product">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle avatar-30"
                          src={user5}
                          alt=""
                          loading="lazy"
                        />
                        <div className="media-body ms-2">
                          <p className="mb-0 line-height">Posted By</p>
                          <h6>
                            <Link to="#">Rock lai</Link>
                          </h6>
                        </div>
                      </div>
                      <span className="text-warning d-block line-height">
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                      </span>
                    </div>
                    <div className="image-block position-relative">
                      <img
                        src={storeImg5}
                        className="img-fluid w-100 rounded"
                        alt="product-img"
                        loading="lazy"
                      />
                      <div className="offer">
                        <div className="offer-title">20%</div>
                      </div>
                      <h6 className="price">
                        <span className="regular-price text-dark pr-2">
                          $87.00
                        </span>
                        $75.00
                      </h6>
                    </div>
                    <div className="product-description mt-3">
                      <Link
                        to="#"
                        className="mb-1"
                      >
                        Flaming Skull Team Logo
                      </Link>
                      <p className="categry text-primary ps-3 mb-0 position-relative mb-0">
                        Logo and badges
                      </p>
                      <p className="mb-0">
                        Success in containing the virus comes slowing activity.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="card card-block card-stretch card-height product">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle avatar-30"
                          src={user6}
                          alt=""
                          loading="lazy"
                        />
                        <div className="media-body ms-2">
                          <p className="mb-0 line-height">Posted By</p>
                          <h6>
                            <Link to="#">Cliff Hanger</Link>
                          </h6>
                        </div>
                      </div>
                      <span className="text-warning d-block line-height">
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                        <i className="material-symbols-outlined md-18">star</i>{" "}
                      </span>
                    </div>
                    <div className="image-block position-relative">
                      <img
                        src={storeImg6}
                        className="img-fluid w-100 rounded"
                        alt="product-img"
                        loading="lazy"
                      />
                      <div className="offer">
                        <div className="offer-title">40%</div>
                      </div>
                      <h6 className="price">
                        <span className="regular-price text-dark pr-2">
                          $87.00
                        </span>
                        $75.00
                      </h6>
                    </div>
                    <div className="product-description mt-3">
                      <Link
                        to="#"
                        className="mb-1"
                      >
                        Flaming Skull Team Logo
                      </Link>
                      <p className="categry text-primary ps-3 mb-0 position-relative mb-0">
                        Logo and badges
                      </p>
                      <p className="mb-0">
                        Success in containing the virus comes slowing activity.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </ul>
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default ProductDetail;
