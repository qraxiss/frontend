import React from 'react'
import { Card, Col, Container, Row, Tab, Nav, Button } from 'react-bootstrap'
import { Shoporder } from 'Components/ShopTopBar'

import { ConnectButton } from '@rainbow-me/rainbowkit'

import { buyWithWallet } from 'lib/rainbow'

import { useMutation } from 'lib/query-wrapper'
import { newOrder } from 'lib/common-queries'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    document.title = 'Shopcek'

    let newOrderGql = useMutation(newOrder)
    let navigate = useNavigate()

    return (
        <React.Fragment>
            <section className="section pb-4">
                <Container>
                    <Row className="product-list">
                        <Col xl={8}>
                            <h5 className="mb-0 flex-grow-1">Payment Selection</h5>

                            <Tab.Container defaultActiveKey="paypal">
                                <Nav
                                    variant="pills"
                                    className="arrow-navtabs nav-success bg-light mb-3 mt-4 nav-justified custom-nav"
                                    as="ul"
                                    role="tablist"
                                >
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="paypal" className="py-3">
                                            <span className="d-block d-sm-none">
                                                <i className="ri-paypal-fill align-bottom"></i>
                                            </span>
                                            <span className="d-none d-sm-block">
                                                <i className="ri-paypal-fill align-bottom pe-2"></i> Crypto
                                            </span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="paypal">
                                        <Card>
                                            <Card.Body>
                                                <Row className="gy-3">
                                                    <Col md={12}>
                                                        <label htmlFor="cc-name" className="form-label">
                                                            Buyers First Name
                                                        </label>
                                                        <input type="text" className="form-control" id="bname" placeholder="Enter Name" />
                                                    </Col>

                                                    <Col md={6}>
                                                        <label htmlFor="cc-number" className="form-label">
                                                            Buyers Last Name
                                                        </label>
                                                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" />
                                                    </Col>

                                                    <Col md={6}>
                                                        <label htmlFor="cc-expiration" className="form-label">
                                                            Email Address
                                                        </label>
                                                        <input type="email" className="form-control" id="email" placeholder="Enter Email Address" />
                                                    </Col>
                                                </Row>

                                                <div className="hstack gap-2 justify-content-end pt-4">
                                                    <ConnectButton label="Connect Wallet" />
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => {
                                                            buyWithWallet(async () => {
                                                                await newOrderGql.fn({})
                                                                navigate('/account/order')
                                                            })
                                                        }}
                                                    >
                                                        Pay 0.1
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                        <Col lg={4}>
                            <Shoporder />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Payment
