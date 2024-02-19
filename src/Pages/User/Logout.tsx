import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//img


import auth1 from 'assets/images/auth/img-1.png'
import avatar1 from 'assets/images/users/avatar-1.jpg'

const Logout = () => {
    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="w-100">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="auth-card mx-lg-3">
                                    <Card className="border-0 mb-0">
                                        <Card.Header className="bg-primary border-0">
                                            <Row>
                                                <Col lg={4} xs={3}>
                                                    <Image src={auth1} alt="" className="img-fluid" />
                                                </Col>
                                                <Col lg={8} xs={9}>
                                                    <h1 className="text-white lh-base fw-lighter">You are Logged Out</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body className="text-center">
                                            <div className="mb-4">
                                                <Image src={avatar1} alt="" className="avatar-md rounded-circle" />
                                            </div>
                                            <p className="text-muted fs-15">
                                                Thank you for using <span className="fw-semibold">Toner</span> admin template
                                            </p>
                                            <div>
                                                <Link to="/auth-signin-basic" className="btn btn-primary w-100">
                                                    Sign In
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            {/*end col*/}
                        </Row>
                        {/*end row*/}
                    </Container>
                    {/*end container*/}
                    <footer className="footer">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center">
                                        <p className="mb-0 text-muted">
                                            ©{new Date().getFullYear()} Toner. Crafted with <i className="mdi mdi-heart text-danger" /> by
                                            Themesbrand
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </footer>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Logout
