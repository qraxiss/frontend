import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Text } from 'Components/Images/Logo'

import { Facebook, Twitter, Medium, Linkedin, Instagram, Telegram } from 'Components/Images/Social'

const groupList = <T extends any>(list: T[], groupSize: number): T[][] => {
    return list.reduce((acc, item, index) => {
        const groupIndex = index % groupSize

        if (!acc[groupIndex]) {
            acc[groupIndex] = []
        }

        acc[groupIndex].push(item)

        return acc
    }, [] as T[][])
}

function Socials() {
    return (
        <div>
            <Link to={'/'}>
                <Facebook className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Twitter className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Instagram className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Medium className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Linkedin className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Telegram className="footer-social-icon" width={48} />
            </Link>
        </div>
    )
}

const Footer = () => {
    return (
        <React.Fragment>
            <section className="section footer-landing pb-0">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="footer-info">
                                <Text className="logo" />
                            </div>
                        </Col>

                        <Col lg={8}>
                            <Row className="pl-0 pl-lg-3">
                                <Col md={2}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Categories</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            // Categories
                                            <li key="category-slug">
                                                <Link to={`/category/${'category-slug'}`}>{'category.name'}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={2}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Shopcek</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li key={'item.url'}>
                                                <Link to={'item.url'}>{'item.name'}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={2}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Legal</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li key={'item.url'}>
                                                <Link to={'item.url'}>{'item.name'}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col
                                    md={5}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'right'
                                    }}
                                >
                                    <div className="my-lg-0 mt-4">
                                        <h5 className="footer-title">Subscribe Our Newsletter</h5>
                                        <Form
                                            style={{
                                                right: '-10rem'
                                            }}
                                        >
                                            <Row sm={2}>
                                                <div className="mb-4">
                                                    <Form.Control
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter your email..."
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </Row>

                                            <Row sm={3}>
                                                <div
                                                    className="text-center mt-4"
                                                    style={{
                                                        top: '-30px',
                                                        right: '-4rem'
                                                    }}
                                                >
                                                    <Button variant="primary" className="w-100" type="submit">
                                                        Subscribe
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <hr className="solid"></hr>
                    <Row>
                        <Col>Copyright 2024 SHOPCEK-All Rights Reserved</Col>
                        <Col
                            style={{
                                textAlign: 'right'
                            }}
                        >
                            Made with one mission: to accelerate the next billion's onboarding to crypto
                        </Col>
                    </Row>

                    <Row
                        style={{
                            opacity: 0
                        }}
                    >
                        s
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Footer
