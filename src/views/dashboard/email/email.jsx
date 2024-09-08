import React, { useState } from 'react'
import { Row, Col, Container, Nav, Tab, Tooltip, OverlayTrigger, Button, Dropdown, Form, Modal } from 'react-bootstrap'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'
import EmailAppDetail from '../../../components/email-app-detail'
import ChoicesJs from '../../../components/choices'

const Email = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)
    const [show8, setShow8] = useState(false)
    const [show9, setShow9] = useState(false)
    const [show10, setShow10] = useState(false)
    const [show11, setShow11] = useState(false)
    const [show12, setShow12] = useState(false)
    const [show13, setShow13] = useState(false)
    const [show14, setShow14] = useState(false)
    const [show15, setShow15] = useState(false)
    const [show16, setShow16] = useState(false)
    const [show17, setShow17] = useState(false)
    const [show18, setShow18] = useState(false)
    const [show, setShow] = useState(false)
    const [modalShow, setModalShow] = useState(false)

    //select
    const options = [
        { value: "Petey Cruiser", label: "Petey Cruiser" },
        { value: "Bob Frapples", label: "Bob Frapples" },
        { value: "Barb Ackue", label: "Barb Ackue" },
        { value: "Greta Life", label: "Greta Life" },
    ];

    const options1 = [
        { value: "Brock Lee", label: "Brock Lee" },
        { value: "Rick O'Shea", label: "Rick O'Shea" },
        { value: "Cliff Hanger", label: "Cliff Hanger" },
        { value: "Barb Dwyer", label: "Barb Dwyer" },
    ];

    return (
        <>
            <div id='content-page' className='content-inner'>
                <Container className="position-relative overflow-hidden">
                    <Row>
                        <Tab.Container defaultActiveKey="first">
                            <Col lg="3">
                                <Card>
                                    <Card.Body>
                                        <div>
                                            <div className="iq-email-list">
                                                <Button variant="primary" className="btn-lg btn-block mb-3 p-2 w-100 d-flex align-items-center" onClick={() => setModalShow(true)}><i className="material-symbols-outlined me-2 writ-icon">send</i>New Message</Button>
                                                <Nav variant="pills" className="iq-email-ui nav flex-column ">
                                                    <Nav.Link role="button" eventKey="first" to="#mail-inbox"><div className="d-flex align-items-center justify-content-between"><span className="d-flex align-items-center"><i className="material-symbols-outlined md-18">mail</i>Inbox</span><span className="badge bg-primary ms-2">4</span></div></Nav.Link>
                                                    <Nav.Link role="button" eventKey="second" to="#mail-starred" className="d-flex align-items-center"><i className="material-symbols-outlined md-18">star_border</i>Starred</Nav.Link>
                                                    <Nav.Link role="button" eventKey="third" to="#mail-snoozed" className="d-flex align-items-center"><i className="material-symbols-outlined md-18">watch_later</i>Snoozed</Nav.Link>
                                                    <Nav.Link role="button" eventKey="forth" to="#mail-draft" className="d-flex align-items-center"><i className="material-symbols-outlined md-18">article</i>Draft</Nav.Link>
                                                    <Nav.Link role="button" eventKey="fifth" to="#mail-sent" className="d-flex align-items-center"><i className="material-symbols-outlined md-18">forward_to_inbox</i>Sent Mail</Nav.Link>
                                                    <Nav.Link role="button" eventKey="six" to="#mail-trash" className="d-flex align-items-center"><i className="material-symbols-outlined md-18">delete_outline</i>Trash</Nav.Link>
                                                    <Nav.Link role="button" eventKey="seven" to="#mail-important" className="d-flex align-items-center"><i className="material-symbols-outlined md-18">turned_in_not</i>Important</Nav.Link>
                                                    <Nav.Link role="button" eventKey="eight" to="#mail-spam" className="d-flex align-items-center"><i className="material-symbols-outlined md-18">report_gmailerrorred</i>Spam</Nav.Link>
                                                </Nav>
                                                <h6 className="mt-4 mb-3">Labels</h6>
                                                <ul className="iq-email-ui iq-email-label list-inline p-0 m-0">
                                                    <li><Link to="#" className="d-flex align-items-center"><i className="material-symbols-outlined md-18 text-primary">trip_origin</i>Personal</Link></li>
                                                    <li><Link to="#" className="d-flex align-items-center"><i className="material-symbols-outlined md-18 text-danger">trip_origin</i>Company</Link></li>
                                                    <li><Link to="#" className="d-flex align-items-center"><i className="material-symbols-outlined md-18 text-success">trip_origin</i>Important</Link></li>
                                                    <li><Link to="#" className="d-flex align-items-center"><i className="material-symbols-outlined md-18 text-info">trip_origin</i>Private</Link></li>
                                                    <li><Link to="#" className="d-flex align-items-center"><i className="material-symbols-outlined md-18 text-warning">trip_origin</i>Private</Link></li>
                                                    <li><Link to="#" className="d-flex align-items-center"><i className="material-symbols-outlined md-18">add_circle_outline</i>Add New Labels</Link></li>
                                                </ul>
                                                <div className="iq-progress-bar-linear d-inline-block w-100">
                                                    <h6 className="mt-4 mb-3">Storage</h6>
                                                    <div className="iq-progress-bar">
                                                        <span className="bg-danger" data-percent="90"></span>
                                                    </div>
                                                    <span className="mt-1 d-inline-block w-100">7.02 GB (46%) of 15 GB used</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="9" className="mail-box-detail">
                                <Card>
                                    <Card.Body className="p-0">
                                        <div>
                                            <div className="iq-email-to-list p-3">
                                                <div className="iq-email-to-list-detail d-flex justify-content-between gap-3">
                                                    <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0 flex-shrink-0">
                                                        <li className="me-1">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as="span" bsPrefix=' ' className="d-flex align-items-center" variant="white" style={{ cursor: 'pointer' }}>
                                                                    <Form.Check className="d-flex align-items-center form-check">
                                                                        <Form.Check.Input type="checkbox" className="form-check-input" id="customCheck1" />
                                                                        <Form.Check.Label className="d-flex align-items-center" htmlFor="customCheck1">
                                                                            <i className="material-symbols-outlined">expand_more</i>
                                                                        </Form.Check.Label>
                                                                    </Form.Check>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">None</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Read</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-1">Unread</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Starred</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Unstarred</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </li>
                                                        <li className="me-1">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Reload</Tooltip>} >
                                                                <Link to="#" className="d-flex align-items-center justify-content-center"><i className="material-symbols-outlined md-16">refresh</i></Link>
                                                            </OverlayTrigger>
                                                        </li>
                                                        <li className="me-1">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Archive</Tooltip>} className="me-1">
                                                                <Link to="#" className="d-flex align-items-center justify-content-center"><i className="material-symbols-outlined md-16">drafts</i></Link>
                                                            </OverlayTrigger>
                                                        </li>
                                                        <li className="me-1">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>} className="me-1">
                                                                <Link to="#" className="d-flex align-items-center justify-content-center"><i className="material-symbols-outlined md-16">delete</i></Link>
                                                            </OverlayTrigger>
                                                        </li>
                                                        <li className="me-1">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Inbox</Tooltip>} className="me-1">
                                                                <Link to="#" className="d-flex align-items-center justify-content-center"><i className="material-symbols-outlined md-16">mark_email_unread</i></Link>
                                                            </OverlayTrigger>
                                                        </li>
                                                        <li>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Zoom</Tooltip>} >
                                                                <Link to="#" className="d-flex align-items-center justify-content-center"><i className="material-symbols-outlined md-16">zoom_out_map</i></Link>
                                                            </OverlayTrigger>
                                                        </li>
                                                    </ul>
                                                    <div className="iq-email-search d-flex flex-shrink-0">
                                                        <Form className="me-2 position-relative searchbox">
                                                            <Form.Group className="form-group mb-0">
                                                                <Form.Control type="email" className="form-control search-input" id="exampleInputEmail1" placeholder="Search" />
                                                                <Link className="search-link" href="#">
                                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="7.82491" cy="7.82495" r="6.74142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                                                        <path d="M12.5137 12.8638L15.1567 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </Link>
                                                            </Form.Group>
                                                        </Form>
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-2">
                                                                <Link className="font-size-14" to="#" id="navbarDropdown1" data-bs-toggle="dropdown">
                                                                    1 - 50 of 505
                                                                </Link>
                                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                                    <Link className="dropdown-item" to="#">20 per page</Link>
                                                                    <Link className="dropdown-item" to="#">50 per page</Link>
                                                                    <Link className="dropdown-item" to="#">100 per page</Link>
                                                                </div>
                                                            </li>
                                                            <li className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Previous"><Link to="#" className="material-symbols-outlined icon-rtl">
                                                                keyboard_arrow_left
                                                            </Link>
                                                            </li>
                                                            <li className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Next"><Link to="#" className="material-symbols-outlined icon-rtl">
                                                                keyboard_arrow_right
                                                            </Link>
                                                            </li>
                                                            <li className="me-0" >
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Setting</Tooltip>} className="me-1">
                                                                    <Link to="#" className="material-symbols-outlined">settings</Link>
                                                                </OverlayTrigger>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-email-listbox">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="first" id="mail-inbox" role="tabpanel">
                                                        <ul className="iq-email-sender-list">
                                                            <li className="iq-unread">
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow1('1') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle text-warning md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@MackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@MackenzieBnio - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">08:00 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show1 === '1' ? 'true' : ''} onclick={setShow1} />
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow2('2') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk1" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk1"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Deray Billings (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Megan Allen (@meganallen) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">08:15 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show2 === '2' ? 'true' : ''} onclick={setShow2} />
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow3('3') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk2" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk2"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Lauren Drury (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Dixa Horton (@dixahorton) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show3 === '3' ? 'true' : ''} onclick={setShow3} />
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow4('4') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk3" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk3"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show4 === '4' ? 'true' : ''} onclick={setShow4} />
                                                            </li>
                                                            <li>
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow5('5') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk4" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk4"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Let Hunre (@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show5 === '5' ? 'true' : ''} onclick={setShow5} />
                                                            </li>
                                                            <li className="iq-unread" >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow6('6') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk017" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk017"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20 text-warning">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show6 === '6' ? 'true' : ''} onclick={setShow6} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow7('7') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check>
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk6" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk6"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show7 === '7' ? 'true' : ''} onclick={setShow7} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow8('8') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk7" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk7"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Deray Billings (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show8 === '8' ? 'true' : ''} onclick={setShow8} />
                                                            </li>
                                                            <li className="iq-unread" >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow9('9') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk8" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk8"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20 text-warning">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Lauren Drury (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Let Hunre (@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show9 === '9' ? 'true' : ''} onclick={setShow9} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow10('10') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check>
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk9" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk9"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show10 === '10' ? 'true' : ''} onclick={setShow10} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow11('11') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk011" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk011"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show11 === '11' ? 'true' : ''} onclick={setShow11} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow12('12') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk11" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk11"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show12 === '12' ? 'true' : ''} onclick={setShow12} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow13('13') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk12" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk12"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show13 === '13' ? 'true' : ''} onclick={setShow13} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow14('14') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk13" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk13"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Deray Billings (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg(@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show14 === '14' ? 'true' : ''} onclick={setShow14} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow15('15') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk14" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk14"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Lauren Drury (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show15 === '15' ? 'true' : ''} onclick={setShow15} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow16('16') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk15" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk15"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Let Hunre(@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show16 === '16' ? 'true' : ''} onclick={setShow16} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow17('17') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk16" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk16"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show17 === '17' ? 'true' : ''} onclick={setShow17} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow18('18') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk17" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk17"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show18 === '18' ? 'true' : ''} onclick={setShow18} />
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second" id="mail-starred" role="tabpanel">
                                                        <ul className="iq-email-sender-list">
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk02" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk02"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Lauren Drury (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Dixa Horton (@dixahorton) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk03" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk03"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk04" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk04"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Let Hunre (@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li className="iq-unread" >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk5" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk5"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20 text-warning">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk018" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk018"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="third" id="mail-snoozed" role="tabpanel">
                                                        <ul className="iq-email-sender-list">
                                                            <li>
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk004" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk004"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Let Hunre (@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li className="iq-unread" >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk012" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk012"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20 text-warning">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk024" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk024"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="forth" id="mail-draft" role="tabpanel">
                                                        <ul className="iq-email-sender-list">
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk09" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk09"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk013" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk013"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk014" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk014"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk019" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk019"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk025" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk025"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Deray Billings (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg(@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="fifth" id="mail-sent" role="tabpanel">
                                                        <ul className="iq-email-sender-list">
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk015" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk015"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk020" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk020"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk026" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk026"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Deray Billings (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg(@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk027" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk027"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Lauren Drury (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk032" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk032"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Let Hunre(@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk037" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk037"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="six" id="mail-trash" role="tabpanel">
                                                        <ul className="iq-email-sender-list">
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk028" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk028"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Lauren Drury (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk033" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk033"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Let Hunre(@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk038" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk038"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="seven" id="mail-important" role="tabpanel">
                                                        <ul className="iq-email-sender-list">
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk029" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk029"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk034" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk034"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Deray Billings (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li className="iq-unread" >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk035" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk035"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20 text-warning">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Lauren Drury (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Let Hunre (@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk009" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk009"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk010" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk010"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#"><i className="material-symbols-outlined">delete_forever</i></Link></li>
                                                                        <li><Link to="#"><i className="material-symbols-outlined">mail_outline</i></Link></li>
                                                                        <li><Link to="#"><i className="material-symbols-outlined">article</i></Link></li>
                                                                        <li><Link to="#"><i className="material-symbols-outlined">watch_later</i></Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk016" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk016"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="eight" id="mail-spam" role="tabpanel">
                                                        <ul className="iq-email-sender-list">
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk021" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk021"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Jopour Xiong (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Mackenzie Bnio (@mackenzieBnio) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk023" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk023"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Deray Billings (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk030" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk030"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Lauren Drury (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk031" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk031"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Fabian Ros (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">Let Hunre(@lethunre) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk036" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk036"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Dixa Horton (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Eb Begg (@ebbegg) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                            <li >
                                                                <div className="d-flex align-self-center iq-unread-inner" onClick={() => { setShow('true') }} >
                                                                    <div className="iq-email-sender-info">
                                                                        <div className="iq-checkbox-mail">
                                                                            <Form.Check className="form-check">
                                                                                <Form.Check.Input type="checkbox" className="form-check-input" id="mailk040" />
                                                                                <Form.Check.Label className="form-check-label" htmlFor="mailk040"></Form.Check.Label>
                                                                            </Form.Check>
                                                                        </div>
                                                                        <span className="material-symbols-outlined iq-star-toggle md-20">star_border</span>
                                                                        <Link to="#" className="iq-email-title">Megan Allen (Me)</Link>
                                                                    </div>
                                                                    <div className="iq-email-content">
                                                                        <Link to="#" className="iq-email-subject">
                                                                            Jecno Mac (@jecnomac) has sent
                                                                            you a direct message on Twitter! &nbsp;–&nbsp;
                                                                            <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                                        </Link>
                                                                        <div className="iq-email-date">11:49 am</div>
                                                                    </div>
                                                                    <ul className="iq-social-media list-inline">
                                                                        <li><Link to="#" className="material-symbols-outlined">delete_forever</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">mail_outline</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">article</Link></li>
                                                                        <li><Link to="#" className="material-symbols-outlined">watch_later</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <EmailAppDetail show={show} onclick={setShow} />
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Tab.Container>
                        <Modal show={modalShow} onHide={() => setModalShow(false)} className="compose-popup modal-sticky-bottom-right modal-sticky-lg custom-email-popup">
                            <Modal.Header className="border-0 pb-0">

                                <h5 className="text-primary float-left d-flex align-items-center"><i className="material-symbols-outlined md-18 me-1">mode_edit</i> Compose Message</h5>
                                <button type="submit" className="close-popup float-right text-body" onClick={() => setModalShow(false)}><span className="material-symbols-outlined">clear</span></button>
                            </Modal.Header>
                            <Modal.Body>
                                <form className="email-form">
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">To:</label>
                                        <div className="col-sm-10">
                                            <ChoicesJs options={options} className="js-choice select-multiple" select="one" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="cc" className="col-sm-2 col-form-label">Cc:</label>
                                        <div className="col-sm-10">
                                            <ChoicesJs options={options1} className="js-choice select-multiple" select="one" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="subject" className="col-sm-2 col-form-label">Subject:</label>
                                        <div className="col-sm-10">
                                            <input type="text" id="subject" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="subject" className="col-sm-2 col-form-label">Your Message:</label>
                                        <div className="col-md-10">
                                            <textarea className="textarea form-control" rows="5" defaultValue="Next, use our Get Started docs to setup Tiny!" />
                                        </div>
                                    </div>
                                    <div className="form-group d-flex justify-content-between align-items-center compose-bottom pt-3 m-0">
                                        <div className="d-flex flex-grow-1 align-items-center">
                                            <div className="send-btn">
                                                <button type="submit" className="btn btn-primary">Send</button>
                                            </div>
                                            <div className="send-panel">
                                                <label className="ms-2 mb-0 bg-primary-subtle rounded" htmlFor="file"> <input type="file" id="file" style={{ display: "none" }} /><Link to="#" className="material-symbols-outlined writ-icon text-primary">attachment</Link> </label>{" "}
                                                <label className="ms-2 mb-0 bg-primary-subtle rounded">  <Link to="#" className="material-symbols-outlined text-primary">place</Link>  </label>{" "}
                                                <label className="ms-2 mb-0 bg-primary-subtle rounded">  <Link to="#" className="material-symbols-outlined text-primary">add_to_drive</Link>  </label>{" "}
                                                <label className="ms-2 mb-0 bg-primary-subtle rounded">  <Link to="#" className="material-symbols-outlined text-primary">photo_camera</Link>  </label>{" "}
                                                <label className="ms-2 mb-0 bg-primary-subtle rounded">  <Link to="#" className="material-symbols-outlined text-primary">sentiment_satisfied</Link>  </label>{" "}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="send-panel">
                                                <label className="ms-2 mb-0 bg-primary-subtle rounded" ><Link to="#" className="material-symbols-outlined text-primary">settings</Link></label>{" "}
                                                <label className="ms-2 mb-0 bg-primary-subtle rounded"><Link to="#" className="material-symbols-outlined text-primary">delete</Link>  </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Email

