
import React from 'react'
import { Row, Col, Container, Breadcrumb } from 'react-bootstrap'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'

const UiBreadcrumbs = () => {
   return (
      <>
         <div id='content-page' className='content-inner'>
            <Container>
               <Row>
                  <Col sm="12">
                     <div className="card position-relative inner-page-bg bg-primary" style={{ height: "150px" }}>
                        <div className="inner-page-title">
                           <h3 className="text-white">Breadcrumb Page</h3>
                           <p className="text-white">lorem ipsum</p>
                        </div>
                     </div>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Breadcrumb</h4>
                           </div>
                        </Card.Header>
                        <Card.Body className="pt-0">
                           <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code></p>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item active>Home</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                              <Breadcrumb.Item active>Library</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                              <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                              <Breadcrumb.Item active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Breadcrumb With Icon</h4>
                           </div>
                        </Card.Header>
                        <Card.Body className="pt-0">
                           <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code> with Icon</p>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item active className='d-flex'>
                                 <i className="material-symbols-outlined me-1">home</i>
                                 Home</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item active className='d-flex'>
                                 <Link to="#"><i className="material-symbols-outlined me-1">home</i></Link>
                                 Library</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item>
                                 <Breadcrumb.Item active className='d-flex'><Link to="#"><i className="material-symbols-outlined me-1">home</i></Link><Link to="#">Library</Link></Breadcrumb.Item>
                              </Breadcrumb.Item>
                              <Breadcrumb.Item active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Breadcrumb</h4>
                           </div>
                        </Card.Header>
                        <Card.Body className="pt-0">
                           <p>use class <code>.breadcrumb .bg-primary</code></p>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary">
                              <Breadcrumb.Item active className="text-white">Home</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary">
                              <Breadcrumb.Item active className="text-white">Home</Breadcrumb.Item>
                              <Breadcrumb.Item active className="text-white">Library</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary mb-0">
                              <Breadcrumb.Item active className="text-white">Home</Breadcrumb.Item>
                              <Breadcrumb.Item active className="text-white">Library</Breadcrumb.Item>
                              <Breadcrumb.Item active className="text-white">Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Breadcrumb With Icon</h4>
                           </div>
                        </Card.Header>
                        <Card.Body className="pt-0">
                           <p>use class <code>.breadcrumb .bg-primary</code> With Icon</p>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary">
                              <Breadcrumb.Item active>
                                 <Breadcrumb.Item active className='d-flex'><i className="material-symbols-outlined me-1 text-white">home</i><Link to="#" className='text-white'>Home</Link></Breadcrumb.Item>
                              </Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary">
                              <Breadcrumb.Item className="text-danger">
                                 <Breadcrumb.Item active className='d-flex'><Link to="#" className="text-white"><i className="material-symbols-outlined me-1 text-white">home</i></Link><Link to="#" className='text-white'>Library</Link></Breadcrumb.Item>
                              </Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary mb-0">
                              <Breadcrumb.Item className="text-danger">
                                 <Breadcrumb.Item active className='d-flex'><Link to="#" className="text-white"><i className="material-symbols-outlined me-1 text-white">home</i></Link><Link to="#" className="text-white">Library</Link></Breadcrumb.Item>
                              </Breadcrumb.Item>
                              <Breadcrumb.Item className="text-white" active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Breadcrumb With Icon</h4>
                           </div>
                        </Card.Header>
                        <Card.Body className="pt-0">
                           <p>use class <code>.breadcrumb .iq-bg-primary</code></p>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item active>
                                 <Breadcrumb.Item active className='d-flex'><i className="material-symbols-outlined me-1">home</i>Home</Breadcrumb.Item>
                              </Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item className="text-danger">
                                 <Breadcrumb.Item active className='d-flex'><Link to="#" className="text-primary"><i className="material-symbols-outlined me-1">home</i></Link>Library</Breadcrumb.Item>
                              </Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary-subtle">
                              <Breadcrumb.Item className="text-danger">
                                 <Breadcrumb.Item active className='d-flex'><Link to="#" className="text-primary"><i className="material-symbols-outlined me-1">home</i></Link><Link to="#" className="text-primary">Library</Link></Breadcrumb.Item>
                              </Breadcrumb.Item>
                              <Breadcrumb.Item className="" active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Breadcrumb With Icon</h4>
                           </div>
                        </Card.Header>
                        <Card.Body className="pt-0">
                           <p>use class <code>.breadcrumb .iq-bg-danger</code></p>
                           <Breadcrumb bsPrefix="breadcrumb bg-danger-subtle">
                              <Breadcrumb.Item active>
                                 <Breadcrumb.Item active className='d-flex'><i className="material-symbols-outlined me-1">home</i>Home</Breadcrumb.Item>
                              </Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-danger-subtle">
                              <Breadcrumb.Item className="text-danger">
                                 <Breadcrumb.Item active className='d-flex'><Link to="#" className="text-danger"><i className="material-symbols-outlined me-1">home</i></Link>Library</Breadcrumb.Item>
                              </Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-danger-subtle">
                              <Breadcrumb.Item className="text-danger">
                                 <Breadcrumb.Item active className='d-flex'><Link to="#" className="text-danger"><i className="material-symbols-outlined me-1">home</i></Link><Link to="#" className="text-danger">Library</Link></Breadcrumb.Item>
                              </Breadcrumb.Item>
                              <Breadcrumb.Item active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   )
}

export default UiBreadcrumbs
