import React, { Fragment } from 'react'
import { Dropdown, Form, Modal } from 'react-bootstrap'

// images

import user1 from "../assets/images/page-img/19.jpg";
import user2 from "../assets/images/page-img/18.jpg";
import user3 from "../assets/images/page-img/20.jpg";
import user4 from "../assets/images/user/06.jpg";
import user5 from "../assets/images/user/08.jpg";
import user6 from "../assets/images/user/15.jpg";
import user7 from "../assets/images/user/13.jpg";
import { Link } from 'react-router-dom';

const SearchModal = () => {
    return (
        <Fragment>
            <Dropdown.Menu bsPrefix=' ' className={`search-modal-custom`} >

                <div className="search-modal-content">
                    <div className="px-3 py-2">
                        <div className="d-lg-none w-100">
                            <Form
                                action="#"
                                className="searchbox"
                            >
                                <Link className="search-link" to="/">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.82491" cy="7.82495" r="6.74142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                        <path d="M12.5137 12.8638L15.1567 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>

                                <Form.Control
                                    type="text"
                                    className="text search-input bg-primary-subtle"
                                    placeholder="Search here..."
                                />
                            </Form>
                        </div>
                        {/* <Modal.Title> */}
                        <div className="d-none d-lg-flex align-items-center justify-content-between w-100">
                            <h4
                                className="modal-title"
                                id="exampleModalFullscreenLabel"
                            >
                                Recent
                            </h4>

                            <Link to="/" className="text-dark">
                                Clear All
                            </Link>
                        </div>
                        {/* </Modal.Title> */}
                    </div>
                    <Modal.Body className=" p-0">
                        <div className="item-header-scroll">
                            <div className="search-modal-body">
                                <div className="d-flex d-lg-none align-items-center justify-content-between w-100 p-3 pb-0">
                                    <h5
                                        className="modal-title h4"
                                        id="exampleModalFullscreenLabel"
                                    >
                                        Recent
                                    </h5>
                                    <Link to="#" className="text-dark">
                                        Clear All
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center search-hover py-2 px-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={user1}
                                            className="align-self-center img-fluid avatar-50 rounded-pill"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="d-flex ms-3 w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <div>
                                                <Link to="#" className="h6">
                                                    Paige Turner
                                                </Link>
                                                <span className="profile-status-online"></span>
                                            </div>
                                            <span className="mb-0">Paige001</span>
                                        </div>
                                        <Link
                                            to="#"
                                            className="material-symbols-outlined text-dark font-size-16"
                                        >
                                            close
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center search-hover py-2 px-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={user2}
                                            className="align-self-center img-fluid avatar-50 rounded-pill"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="d-flex ms-3 w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <div>
                                                <Link to="#" className="h6">
                                                    Monty Carlo
                                                </Link>
                                                <span className="profile-status-online"></span>
                                            </div>
                                            <span>Carlo.m</span>
                                        </div>
                                        <Link
                                            to="#"
                                            className="material-symbols-outlined text-dark font-size-16"
                                        >
                                            close
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center search-hover py-2 px-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={user3}
                                            className="align-self-center img-fluid avatar-50 rounded-pill"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="d-flex ms-3 w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <div>
                                                <Link to="#" className="h6">
                                                    Paul Molive
                                                </Link>
                                                <span className="profile-status-offline"></span>
                                            </div>
                                            <span>Paul.45</span>
                                        </div>
                                        <Link
                                            to="#"
                                            className="material-symbols-outlined text-dark font-size-16"
                                        >
                                            close
                                        </Link>
                                    </div>
                                </div>
                                <div className="py-2 px-3">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalFullscreenLabel"
                                    >
                                        Suggestion
                                    </h5>
                                </div>
                                <div className="d-flex align-items-center search-hover py-2 px-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={user4}
                                            className="align-self-center img-fluid avatar-50 rounded-pill"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="d-flex ms-3 w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <Link to="#" className="h6">
                                                Annette Black
                                            </Link>
                                            <span>Followed by Jerome_bell + 2 more</span>
                                        </div>
                                        <Link
                                            to="#"
                                            className="material-symbols-outlined text-dark font-size-16"
                                        >
                                            close
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center search-hover py-2 px-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={user5}
                                            className="align-self-center img-fluid avatar-50 rounded-pill"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="d-flex ms-3 w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <Link to="#" className="h6">
                                                Ellyse Perry
                                            </Link>
                                            <span>Followed by _@rina</span>
                                        </div>
                                        <Link
                                            to="#"
                                            className="material-symbols-outlined text-dark font-size-16"
                                        >
                                            close
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center search-hover py-2 px-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={user6}
                                            className="align-self-center img-fluid avatar-50 rounded-pill"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="d-flex ms-3 w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <Link to="#" className="h6">
                                                Pete Sariya
                                            </Link>
                                            <span>Followed by chris_18 + 5 more</span>
                                        </div>
                                        <Link
                                            to="#"
                                            className="material-symbols-outlined text-dark font-size-16"
                                        >
                                            close
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center search-hover py-2 px-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={user7}
                                            className="align-self-center img-fluid avatar-50 rounded-pill"
                                            alt="#"
                                        />
                                    </div>
                                    <div className="d-flex ms-3 w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <Link to="#" className="h6">
                                                Aman Verma
                                            </Link>
                                            <span>
                                                Followed by Jerome_bell and _@rina{" "}
                                            </span>
                                        </div>
                                        <Link
                                            to="#"
                                            className="material-symbols-outlined text-dark font-size-16"
                                        >
                                            close
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Dropdown.Menu>
        </Fragment>
    )
}

export default SearchModal