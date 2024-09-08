import React from 'react'
import { Container, Col, Row, Card, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UiProgressbars = () => {
    return (
        <>
            <div id='content-page' className='content-inner'>
                <Container>
                    <Row>
                        <Col sm="12">
                            <Card className="position-relative inner-page-bg bg-primary" style={{ height: "150px" }}>
                                <div className="inner-page-title">
                                    <h3 className="text-white">Progressbars Page</h3>
                                    <p className="text-white">lorem ipsum</p>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12" lg="6">
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Examples</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 <code>&lt;progress&gt;</code> element</Link>, ensuring you can stack progress bars, animate them, and place text labels over them.</p>
                                    <ul>
                                        <li>We use the <code>.progress</code> as a wrapper to indicate the max value of the progress bar.</li>
                                        <li>We use the inner <code>.progress-bar</code> to indicate the progress so far.</li>
                                        <li>The <code>.progress-bar</code> requires an inline style, utility class, or custom CSS to set their width.</li>
                                        <li>The <code>.progress-bar</code> also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</li>
                                    </ul>
                                    <p>Put that all together, and you have the following examples.</p>
                                    <div className="progress mb-3">
                                        <ProgressBar now={0}></ProgressBar>
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar style={{ width: "100%" }} now={25}></ProgressBar>
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar style={{ width: "50%" }} now={100}></ProgressBar>
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar style={{ width: "75%" }} now={100}></ProgressBar>
                                    </div>
                                    <div className="progress">
                                        <ProgressBar style={{ width: "100%" }} now={100}></ProgressBar>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Height</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will automatically resize accordingly.</p>
                                    <div className="progress mb-3" style={{ height: '3px' }}>
                                        <ProgressBar variant="primary" style={{ width: "100%", }} now={25} label={'25%'} />
                                    </div>
                                    <div className="progress mb-3" >
                                        <ProgressBar variant="primary" style={{ width: "100%" }} now={50} label={'50%'} />
                                    </div>
                                    <div className="progress mb-3" >
                                        <ProgressBar variant="primary" style={{ width: "100%" }} now={75} label={'75%'} />
                                    </div>
                                    <div className="progress">
                                        <ProgressBar variant="primary" style={{ width: "100%" }} now={99} label={'99%'} />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Animated stripes</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>The striped gradient can also be animated.
                                        Add <code>.progress-bar-animated </code>
                                        to <code>.progress-bar </code>
                                        to animate the stripes right to left via CSS3 animations.</p>
                                    <div className="progress mb-3">
                                        <ProgressBar animated striped now={75} style={{ width: "100%" }}></ProgressBar>
                                    </div>
                                    <div className="progress">
                                        <ProgressBar animated striped variant="success" now={75} style={{ width: "100%" }}></ProgressBar>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" lg="6">
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Labels</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>
                                    <div className="progress mb-3">
                                        <ProgressBar style={{ width: "100%" }} now={25} label={'25%'} />
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar style={{ width: "100%" }} label={'50%'} now={50} />
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar style={{ width: "100%" }} label={'75%'} now={75} />
                                    </div>
                                    <div className="progress">
                                        <ProgressBar style={{ width: "100%" }} label={'99%'} now={99} />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Backgrounds</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Use background utility classes to change the appearance of individual progress bars.</p>
                                    <div className="progress mb-3">
                                        <ProgressBar variant="success" role="progressbar" style={{ width: "30%" }} now={83}></ProgressBar>
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar variant="info" role="progressbar" style={{ width: "65%" }} now={77}></ProgressBar>
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar variant="warning" role="progressbar" style={{ width: "80%" }} now={94}></ProgressBar>
                                    </div>
                                    <div className="progress">
                                        <ProgressBar variant="danger" role="progressbar" style={{ width: "100%" }} now={100}></ProgressBar>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Multiple bars</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Include multiple progress bars in a progress component if you need.</p>
                                    <ProgressBar>
                                        <ProgressBar variant="primary" now={15} key={1} />
                                        <ProgressBar variant="success" now={30} key={2} />
                                        <ProgressBar variant="info" now={20} key={3} />
                                    </ProgressBar>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Striped</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p>
                                    <div className="progress mb-3">
                                        <ProgressBar striped style={{ width: "100%" }} now={10} ></ProgressBar>
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar striped variant="success" style={{ width: "100%" }} now={25}></ProgressBar>
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar striped variant="info" style={{ width: "100%" }} now={50}></ProgressBar>
                                    </div>
                                    <div className="progress mb-3">
                                        <ProgressBar striped variant="warning" style={{ width: "100%" }} now={75}></ProgressBar>
                                    </div>
                                    <div className="progress">
                                        <ProgressBar striped variant="danger" style={{ width: "100%" }} now={100}></ProgressBar>
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

export default UiProgressbars