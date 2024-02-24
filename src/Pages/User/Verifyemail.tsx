import React from 'react'
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap'

//img

import auth1 from 'assets/images/auth/img-1.png'
import { Link } from 'react-router-dom'

const Verifyemail = () => {
  const moveToNext = (index: any) => {}

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
                          <h1 className="text-white lh-base fw-lighter">Verify Your Email</h1>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body className="text-center">
                      <p className="text-muted fs-15">
                        Please enter the 4 digit code sent to <span className="fw-semibold">example@abc.com</span>
                      </p>
                      <div className="p-2">
                        <Form autoComplete="off">
                          <Row>
                            <Col xs={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="digit1-input" className="visually-hidden">
                                  Digit 1
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  className="form-control-lg bg-light border-light text-center"
                                  onKeyUp={(e) => moveToNext(e.target)}
                                  maxLength={1}
                                  id="digit1-input"
                                />
                              </div>
                            </Col>
                            {/* end col */}
                            <Col xs={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="digit2-input" className="visually-hidden">
                                  Digit 2
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  className="form-control-lg bg-light border-light text-center"
                                  onKeyUp={(e) => moveToNext(e.target)}
                                  maxLength={1}
                                  id="digit2-input"
                                />
                              </div>
                            </Col>
                            {/* end col */}
                            <Col xs={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="digit3-input" className="visually-hidden">
                                  Digit 3
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  className="form-control-lg bg-light border-light text-center"
                                  onKeyUp={(e) => moveToNext(e.target)}
                                  maxLength={1}
                                  id="digit3-input"
                                />
                              </div>
                            </Col>
                            {/* end col */}
                            <Col xs={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="digit4-input" className="visually-hidden">
                                  Digit 4
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  className="form-control-lg bg-light border-light text-center"
                                  onKeyUp={(e) => moveToNext(e.target)}
                                  maxLength={1}
                                  id="digit4-input"
                                />
                              </div>
                            </Col>
                            {/* end col */}
                          </Row>
                        </Form>
                        {/* end form */}
                        <div className="mt-3">
                          <Button variant="primary" className="w-100">
                            Confirm
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Didn't receive a code ?{' '}
                          <Link to="/auth-pass-reset-basic" className="fw-semibold text-primary text-decoration-underline">
                            Resend
                          </Link>{' '}
                        </p>
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
                      ©{new Date().getFullYear()} Toner. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand
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

export default Verifyemail
