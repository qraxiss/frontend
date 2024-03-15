import React from 'react'
import { Col, Container, Row, Tab, Nav, Card, Table, Form, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'

import { User } from 'Components/Images/Icons'
import { useUser } from 'context/user'

import { OrdersNav, OrdersTab, WishListNav, WishListTab, ProfileNav, ProfileTab, XpNav, AddressNav, LogoutNav, StakeNav } from './sections'

const Account = () => {
    let { section } = useParams()
    let { address } = useUser()

    return (
        <React.Fragment>
            <section className="position-relative">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="pt-3">
                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                    <User className="avatar-xl p-1 bg-light mt-n3" />
                                    <div>
                                        <h5 className="fs-18">
                                            {address.slice(0, 6)}...{address.slice(address.length - 6, address.length)}{' '}
                                            <div className="edit">
                                                <i className="bi bi-pen"></i> <p>change username</p>
                                            </div>
                                        </h5>
                                        <div className="text-muted">
                                            {' '}
                                            {address.slice(0, 6)}...{address.slice(address.length - 6, address.length)}
                                        </div>
                                    </div>
                                    <div className="ms-md-auto">
                                        <Link to="/product-list" className="btn btn-primary btn-hover">
                                            <i className="bi bi-cart4 me-1 align-middle"></i> Shopping Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={section ? section : 'profile'}>
                        <Row>
                            <Col lg={3}>
                                <Card>
                                    <Card.Body>
                                        <Nav variant="pills" className="flex-column gap-3">
                                            <ProfileNav />
                                            <WishListNav />
                                            <OrdersNav />
                                            <XpNav />
                                            <StakeNav />
                                            <AddressNav />
                                            <LogoutNav />
                                        </Nav>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <ProfileTab />
                                    <WishListTab />
                                    <OrdersTab />
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Account
