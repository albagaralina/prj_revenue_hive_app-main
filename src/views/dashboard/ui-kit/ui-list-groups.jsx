import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UiListGroups = () => {
    return (
        <>
            <div id='content-page' className='content-inner'>
                <Container>
                    <Row>
                        <Col sm="12">
                            <Card className="position-relative inner-page-bg bg-primary" style={{ height: "150px" }}>
                                <div className="inner-page-title">
                                    <h3 className="text-white">List Group Page</h3>
                                    <p className="text-white">lorem ipsum</p>
                                </div>
                            </Card>
                        </Col>
                        <div className='col' sm="6" lg="6">
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">List group</h4>
                                    </div>
                                </Card.Header>
                                <div className='pt-0 card-body'>
                                    <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>
                                    <ListGroup as="ul">
                                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Disabled items</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).</p>
                                    <ListGroup>
                                        <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Flush</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Add <code className="highlighter-rouge">.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Contextual classes</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Use contextual classes to style list items with a stateful background and color.</p>
                                    <ListGroup>
                                        <ListGroup.Item variant="">Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item variant="primary">A simple primary list group item</ListGroup.Item>
                                        <ListGroup.Item variant="secondary">A simple secondary list group item</ListGroup.Item>
                                        <ListGroup.Item variant="success">A simple success list group item</ListGroup.Item>
                                        <ListGroup.Item variant="danger">A simple danger list group item</ListGroup.Item>
                                        <ListGroup.Item variant="warning">A simple warning list group item</ListGroup.Item>
                                        <ListGroup.Item variant="info">A simple info list group item</ListGroup.Item>
                                        <ListGroup.Item variant="light">A simple light list group item</ListGroup.Item>
                                        <ListGroup.Item variant="dark">A simple dark list group item</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">With badges</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <Link to="/docs/5.0/utilities/flex/">utilities</Link>.</p>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cras justo odio
                                            <span className="badge badge-primary badge-pill">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Dapibus ac facilisis in
                                            <span className="badge badge-success badge-pill">2</span>
                                        </li>
                                        <li as="li" className="list-group-item d-flex justify-content-between align-items-center">
                                            Morbi leo risus
                                            <span className="badge badge-success badge-pill">1</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">With badges</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <Link to="/docs/5.0/utilities/flex/">utilities</Link>.</p>
                                    <ListGroup as="ul">
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center" >
                                            A list item
                                            <span className="badge bg-primary rounded-pill">&nbsp;14&nbsp;</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                                            A second list item
                                            <span className="badge bg-primary rounded-pill">&nbsp;&nbsp;2&nbsp;&nbsp;</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                                            A third list item
                                            <span className="badge bg-primary rounded-pill">&nbsp;&nbsp;1&nbsp;&nbsp;</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                        <Col sm="12" lg="6">
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">List Active</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>
                                    <ListGroup as="ul">
                                        <ListGroup.Item as="li" className='bg-primary'>
                                            Cras justo odio
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Dapibus ac facilisis in
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Morbi leo risus
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Porta ac consectetur ac
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            Vestibulum at eros
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Links and buttons</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.</p>
                                    <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
                                    <ListGroup defaultActiveKey="#link1">
                                        <ListGroup.Item href="#" className='bg-primary' >
                                            Cras justo odio
                                        </ListGroup.Item>
                                        <ListGroup.Item href="#">
                                            Dapibus ac facilisis in
                                        </ListGroup.Item>
                                        <ListGroup.Item href="#">
                                            Morbi leo risus
                                        </ListGroup.Item>
                                        <ListGroup.Item href="#">
                                            Porta ac consectetur ac
                                        </ListGroup.Item>
                                        <ListGroup.Item disabled>
                                            Vestibulum at eros
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Horizontal</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Add <code>.list-group-horizontal </code>
                                        to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant<code><br />
                                            .list-group-horizontal-&#123;sm|md|lg|xl&#125;</code>
                                        {" "}to make a list group horizontal starting at that breakpoint’s
                                        <code> min-width</code>.
                                        Currently<strong> horizontal list groups cannot be combined with flush list groups.</strong>
                                    </p>
                                    <p><strong>ProTip:</strong> Want equal-width list group items when horizontal? Add <code>.flex-fill</code> to each list group item.</p>
                                    <div>
                                        {['sm'].map((breakpoint, idx) => (
                                            <ListGroup horizontal={breakpoint} className="list-group list-group-horizontal" key={idx}>
                                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                <ListGroup.Item>Morbi leo risus </ListGroup.Item>
                                            </ListGroup>
                                        ))
                                        }
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Contextual classes Action</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body className='pt-0'>
                                    <p>Use contextual classes to style list items with a stateful background and color.</p>
                                    <ListGroup>
                                        <ListGroup.Item variant="">Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item variant="primary">A simple primary list group item</ListGroup.Item>
                                        <ListGroup.Item variant="secondary">A simple secondary list group item</ListGroup.Item>
                                        <ListGroup.Item variant="success">A simple success list group item</ListGroup.Item>
                                        <ListGroup.Item variant="danger">A simple danger list group item</ListGroup.Item>
                                        <ListGroup.Item variant="warning">A simple warning list group item</ListGroup.Item>
                                        <ListGroup.Item variant="info">A simple info list group item</ListGroup.Item>
                                        <ListGroup.Item variant="light">A simple light list group item</ListGroup.Item>
                                        <ListGroup.Item variant="dark">A simple dark list group item</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Custom content</h4>
                                    </div>
                                </Card.Header>

                                <Card.Body className='pt-0'>
                                    <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <Link to="#">flexbox utilities</Link>.</p>
                                    <ListGroup>
                                        <Link to="#" className="list-group-item list-group-item-action bg-primary">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 text-white">List group item heading</h5>
                                                <small>3 days ago</small>
                                            </div>
                                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                            <small >Donec id elit non mi porta.</small>
                                        </Link>
                                        <Link to="#" className="list-group-item list-group-item-action">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1">List group item heading</h5>
                                                <small className="text-muted">3 days ago</small>
                                            </div>
                                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                            <small className="text-muted">Donec id elit non mi porta.</small>
                                        </Link>
                                        <Link to="#" className="list-group-item list-group-item-action">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1">List group item heading</h5>
                                                <small className="text-muted">3 days ago</small>
                                            </div>
                                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                            <small className="text-muted">Donec id elit non mi porta.</small>

                                        </Link>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default UiListGroups