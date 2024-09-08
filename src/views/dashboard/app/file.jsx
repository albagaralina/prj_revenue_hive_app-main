import React from 'react'
import {Row,Col,Container,Dropdown,Tooltip,OverlayTrigger} from 'react-bootstrap'
import Card from '../../../components/Card'
import {Link} from 'react-router-dom'

// img
import pageimg1 from '../../../assets/images/page-img/43.png'
import pageimg2 from '../../../assets/images/page-img/44.png'
import pageimg3 from '../../../assets/images/page-img/45.png'
import pageimg4 from '../../../assets/images/page-img/46.png'
import pageimg5 from '../../../assets/images/page-img/47.png'

const File = () => {
   return(
       <>
           <div id='content-page' className='content-inner'>           
            <Container>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <div className="header-title">
                                    <h4 className="card-title">Files</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                            more_horiz
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="dropdownMenuButton5" style={{position: 'absolute',inset: '0px auto auto 0px',margin: '0px',transform: 'translate(0px, 32px)'}}>
                                        <Link className="dropdown-item d-flex align-items-center" href="#"><span className="material-symbols-outlined me-2 md-18">
                                              visibility
                                        </span>View
                                        </Link>
                                        <Link className="dropdown-item d-flex align-items-center" href="#"><span className="material-symbols-outlined me-2 md-18">
                                            delete
                                        </span>Delete</Link>
                                        <Link className="dropdown-item d-flex align-items-center" href="#"><span className="material-symbols-outlined me-2 md-18">
                                            edit
                                        </span>Edit</Link>
                                        <Link className="dropdown-item d-flex align-items-center" href="#"><span className="material-symbols-outlined me-2 md-18">
                                            print
                                        </span>Print</Link>
                                        <Link className="dropdown-item d-flex align-items-center" href="#"><span className="material-symbols-outlined me-2 md-18">
                                            file_download
                                        </span>Download</Link>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body className='pt-0'>
                                    <Row className="justify-content-between d-flex">
                                        <Col sm="12" md="6">
                                            <div id="user_list_datatable_info" className="dataTables_filter">
                                                <form className="me-3 position-relative">
                                                    <div className="form-group mb-0">
                                                        <input type="search" className="form-control" id="exampleInputSearch" placeholder="Search"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </Col>
                                        <Col sm="12" md="6">
                                            <div className="user-list-files d-flex justify-content-end">
                                                <Link to="#" className="chat-icon-phone btn btn-primary-subtle">
                                                Print
                                                </Link>{" "}
                                                <Link to="#" className="chat-icon-video btn btn-primary-subtle">
                                                Excel
                                                </Link>{" "}
                                                <Link to="#" className="cchat-icon-delete btn btn-primary-subtle">
                                                Pdf
                                                </Link>{" "}
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="table-responsive">
                                    <table className="files-lists table table-striped mt-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <div className=" text-center">
                                                        <input type="checkbox" className="form-check-input"/>
                                                    </div>
                                                </th>
                                                <th scope="col">File Name</th>
                                                <th scope="col">File Type</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Size</th>
                                                <th scope="col">Author</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className=" text-center">
                                                        <input type="checkbox" className="form-check-input"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="rounded-circle img-fluid avatar-40 me-2" src={pageimg1} alt="profile"/> post report
                                                </td>
                                                <td>Document</td>
                                                <td>
                                                    Mar 12, 2020
                                                </td>
                                                <td>390 kb</td>
                                                <td>
                                                    Anna Sthesia
                                                </td>
                                                <td>
                                                    <div className="flex align-items-center list-user-action lh-1">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    file_download
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    delete
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className=" text-center">
                                                        <input type="checkbox" className="form-check-input"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="rounded-circle img-fluid avatar-40 me-2" src={pageimg2} alt="profile"/> usages
                                                </td>
                                                <td>Document</td>
                                                <td>
                                                    Mar 18, 2020
                                                </td>
                                                <td>600 kb</td>
                                                <td>
                                                    Paul Molive
                                                </td>
                                                <td>
                                                    <div className="flex align-items-center list-user-action lh-1">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    file_download
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    delete
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className=" text-center">
                                                        <input type="checkbox" className="form-check-input"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="rounded-circle img-fluid avatar-40 me-2" src={pageimg3} alt="profile"/> Images file
                                                </td>
                                                <td>Slide</td>
                                                <td>
                                                    Mar 19, 2020
                                                </td>
                                                <td>800 kb</td>
                                                <td>
                                                    Bob Frapples
                                                </td>
                                                <td>
                                                    <div className="flex align-items-center list-user-action lh-1">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    file_download
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    delete
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className=" text-center">
                                                        <input type="checkbox" className="form-check-input"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="rounded-circle img-fluid avatar-40 me-2" src={pageimg4} alt="profile"/> total comments
                                                </td>
                                                <td>Document</td>
                                                <td>
                                                    Mar 21, 2020
                                                </td>
                                                <td>500 kb</td>
                                                <td>
                                                    Barb Ackue
                                                </td>
                                                <td>
                                                    <div className="flex align-items-center list-user-action lh-1">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    file_download
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    delete
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className=" text-center">
                                                        <input type="checkbox" className="form-check-input"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="rounded-circle img-fluid avatar-40 me-2" src={pageimg5} alt="profile"/> popular events
                                                </td>
                                                <td>Pdf</td>
                                                <td>
                                                    Mar 24, 2020
                                                </td>
                                                <td>320 kb</td>
                                                <td>
                                                    Barb Ackue
                                                </td>
                                                <td>
                                                    <div className="flex align-items-center list-user-action lh-1">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    file_download
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    delete
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className=" text-center">
                                                        <input type="checkbox" className="form-check-input"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="rounded-circle img-fluid avatar-40 me-2" src={pageimg1} alt="profile"/> todo list
                                                </td>
                                                <td>excel</td>
                                                <td>
                                                    Mar 28, 2020
                                                </td>
                                                <td>600 kb</td>
                                                <td>
                                                    Ira Membrit
                                                </td>
                                                <td>
                                                    <div className="flex align-items-center list-user-action lh-1">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    file_download
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    delete
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className=" text-center">
                                                        <input type="checkbox" className="form-check-input"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="rounded-circle img-fluid avatar-40 me-2" src={pageimg3} alt="profile"/> music list
                                                </td>
                                                <td>pdf</td>
                                                <td>
                                                    Mar 30, 2020
                                                </td>
                                                <td>900 kb</td>
                                                <td>
                                                    Pete Sariya
                                                </td>
                                                <td>
                                                    <div className="flex align-items-center list-user-action lh-1">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    file_download
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link to="#">
                                                                <i className="material-symbols-outlined">
                                                                    delete
                                                                </i>
                                                            </Link>
                                                        </OverlayTrigger>{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
               </Container>
            </div>   
        </>
   )
}
export default File