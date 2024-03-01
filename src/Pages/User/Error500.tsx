import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//img

import error500 from 'assets/images/error500.png'

const Error500 = () => {
  return (
    <React.Fragment>
      <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
        <div className="w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="auth-card mx-lg-3">
                  <Card className="border-0 mb-0">
                    <Card.Body className="text-center p-4">
                      <div className="text-center px-sm-5 mx-5">
                        <Image src={error500} className="img-fluid" alt="" />
                      </div>
                      <div className="mt-4 text-center pt-3">
                        <div className="position-relative">
                          <h4 className="fs-18 error-subtitle text-uppercase mb-0">Internal Server Error</h4>
                          <p className="fs-15 text-muted mt-3">It will be as simple as Occidental in fact, it will Occidental to an English person</p>
                          <div className="mt-4">
                            <Link to="/" className="btn btn-primary">
                              <i className="mdi mdi-home me-1" />
                              Back to home
                            </Link>
                          </div>
                        </div>
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
        </div>
      </section>
    </React.Fragment>
  )
}

export default Error500
