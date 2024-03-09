import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//img
// import { aboutCard, aboutManagement } from 'Common/data'
// import { DefauilOffer } from 'Components/ProductSilde'
// import { CommonService } from 'Components/CommonService'

const About = () => {
    return (
        <React.Fragment>
            <section className="ecommerce-about">
                <div className="effect d-none d-md-block">
                    <div className="ecommerce-effect bg-primary"></div>
                    <div className="ecommerce-effect bg-info"></div>
                </div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h1 className="fw-bold mb-3">👋 About Us</h1>
                            <p className="fs-16 text-muted mb-5 mb-lg-3">
                                We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform,
                                educate and entertain millions of people in the around the world. The thought process that led to the items being
                                created and sold.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <Row className="align-items-center">
                                    <Col mg={6}>
                                        <div className="position-relative">
                                            <Image src={""} alt="" fluid rounded />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="vstack gap-4">
                                            <Image src={""} alt="" fluid rounded />
                                            <Image src={""} alt="" fluid rounded />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="ecommerce-about-team bg-light bg-opacity-50">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center mb-5">
                                <h2 className="mb-3">Expart Management Team</h2>
                                <p className="text-muted fs-15">
                                    An Expert Leader is first and foremost someone who has deep expertise in the area that they are leading.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div>
                                <Image src="" alt="" fluid rounded />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mt-4 mt-lg-0">
                                <p className="text-uppercase fw-medium text-muted">Best Products Sales</p>
                                <h2 className="lh-base fw-semibold mb-3">Desgining Spaces to enahance your business growth</h2>
                                <p className="text-muted fs-16">
                                    A physical office space will promote collaboration and understanding. Having a physical location for your business
                                    allows you to put together the company that you want in an environment where employees can communicate with each
                                    other without having to go through any extra steps.
                                </p>
                                <Link to="#" className="fw-medium link-effect">
                                    Shop Now <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <DefauilOffer />
      <CommonService /> */}
        </React.Fragment>
    )
}

export default About
