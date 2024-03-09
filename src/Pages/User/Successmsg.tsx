import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Successmsg = () => {
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
                                                    <Image src="" alt="" className="img-fluid" />
                                                </Col>
                                                <Col lg={8} xs={9}>
                                                    <h1 className="text-white lh-base fw-lighter">Well done !</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body className="text-center">
                                            <div className="avatar-sm mx-auto mb-4">
                                                <div className="avatar-title bg-success-subtle text-success fs-20 rounded">
                                                    <i className="bi bi-check2-circle" />
                                                </div>
                                            </div>
                                            <p className="text-muted fs-15">Aww yeah, you successfully read this important message.</p>
                                            <div>
                                                <Link to="/auth-signin-basic" className="btn btn-success w-100">
                                                    Back to Dashboard
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

export default Successmsg
