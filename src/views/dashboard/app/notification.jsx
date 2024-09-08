import React, { useEffect } from 'react'
import { Row, Col, Container, Dropdown } from 'react-bootstrap'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'

// img
import user1 from '../../../assets/images/user/01.jpg'
import user2 from '../../../assets/images/user/02.jpg'
import user3 from '../../../assets/images/user/03.jpg'
import user04 from '../../../assets/images/user/04.jpg'
import user5 from '../../../assets/images/user/05.jpg'
import user6 from '../../../assets/images/user/06.jpg'
import user7 from '../../../assets/images/user/07.jpg'
import user8 from '../../../assets/images/user/08.jpg'
import user9 from '../../../assets/images/user/09.jpg'
import user10 from '../../../assets/images/user/10.jpg'
import user11 from '../../../assets/images/user/11.jpg'
import user12 from '../../../assets/images/user/12.jpg'
import user13 from '../../../assets/images/user/13.jpg'
import user14 from '../../../assets/images/user/14.jpg'
import user4 from '../../../assets/images/user/4.jpg'


const Notification = () => {

   useEffect(() => {
      document.body.classList.add('notification')
      return () => {
         document.body.classList.remove("notification");
      };
   })
   return (
      <>
         <div id='content-page' className='content-inner'>
            <Container>
               <Row>
                  <Col sm="12">
                     <h4 className="card-title mb-3">Notification</h4>
                  </Col>
                  <Col sm="12">
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user1} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className=" ms-3">
                                          <h6>Paige Turner Posted in UI/UX Community</h6>
                                          <p className="mb-0">30 minute ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-primary-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined md-18 font-size-16">
                                                   military_tech
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user2} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className=" ms-3">
                                          <h6>Anne Fibbiyon Like Your Post</h6>
                                          <p className="mb-0">1 hour ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-danger-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined md-18 font-size-16">
                                                   favorite_border
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user3} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Barry Cuda add Story</h6>
                                          <p className="mb-0">40 days ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-primary-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined md-18 font-size-16">
                                                   military_tech
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user04} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Cliff Hanger posted a comment on your status update</h6>
                                          <p className="mb-0">42 days  ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-success-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   chat_bubble_outline
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user4} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Rick O'Shea posted a comment on your photo</h6>
                                          <p className="mb-0">50 days ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-success-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   chat_bubble_outline
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user5} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Brock Lee Sent a Friend Request</h6>
                                          <p className="mb-0">1 hour ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-warning-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   reply
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user6} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className=" ms-3">
                                          <h6>Ira Membrit shared your status update</h6>
                                          <p className="mb-0">1 hour ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-warning-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   share
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user11} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Paul Molive and 3 ther have Birthday Today</h6>
                                          <p className="mb-0">1 week, 1 day ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-danger-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   cake
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user7} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Petey Cruiser Sent a Friend request</h6>
                                          <p className="mb-0">1 day ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-warning-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   reply
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user8} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Bob Frapples and 45 other Like Your Pst on timeline</h6>
                                          <p className="mb-0">1 week ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-danger-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   favorite_border
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user12} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Maya Didas share Your Post</h6>
                                          <p className="mb-0">1 month ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-info-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   share
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user9} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className=" ms-3">
                                          <h6>Sal Monella Add Photo with You</h6>
                                          <p className="mb-0">1 month ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-primary-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   military_tech
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user10} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="ms-3">
                                          <h6>Barb Dwyer commented on your new profile status</h6>
                                          <p className="mb-0">2 month ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-success-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   chat_bubble_outline
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user13} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className="info ms-3">
                                          <h6>Terry Aki commented on your new profile status</h6>
                                          <p className="mb-0">2 month ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-success-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   chat_bubble_outline
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Body>
                           <ul className="notification-list m-0 p-0">
                              <li className="d-flex align-items-center justify-content-between">
                                 <div className="user-img img-fluid">
                                    <img src={user14} alt="story-img" className="rounded-circle avatar-40" />
                                 </div>
                                 <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                       <div className=" ms-3">
                                          <h6>Paige Turner Posted in Development Community</h6>
                                          <p className="mb-0">3 month ago</p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                          <Link to="#" className="btn btn-icon btn-primary-subtle btn-sm me-3">
                                             <span className="btn-inner">
                                                <i className="material-symbols-outlined font-size-16">
                                                   military_tech
                                                </i>
                                             </span>
                                          </Link>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <Dropdown>
                                                <div to="#">
                                                   <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                      more_horiz
                                                   </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className="dropdown-menu-right">
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         visibility
                                                      </span>
                                                      View
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         delete
                                                      </span>
                                                      Delete
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         edit
                                                      </span>
                                                      Edit
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         print
                                                      </span>
                                                      Print
                                                   </Dropdown.Item>
                                                   <Dropdown.Item to="#" className='dropdown-item d-flex align-items-center'>
                                                      <span className="material-symbols-outlined me-2 md-18">
                                                         file_download
                                                      </span>
                                                      Download
                                                   </Dropdown.Item>
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   )
}

export default Notification