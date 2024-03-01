import React from 'react'
import { Alert, Card, Col, Container, Form, Row, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

//img

import auth1 from 'assets/images/auth/img-1.png'

const Passwordreset = () => {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .matches(RegExp(/^(?!.*@[^,]*,)/), 'Geçerli bir email giriniz!')
        .required('Bu alanı doldurmak zorunludur!')
    }),
    onSubmit: (values) => {}
  })
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
                          <h1 className="text-white lh-base fw-lighter">Şifremi Unuttum?</h1>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-muted fs-15">Şifremi Sıfırla</p>
                      <Alert className="alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                        Email adresini gir ve gelen talimatları takip et
                      </Alert>
                      <div className="p-2">
                        <Form onSubmit={formik.handleSubmit}>
                          <div className="mb-4">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Email adresinizi giriniz"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              autoComplete="off"
                            />
                            {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                          </div>
                          <div className="text-center mt-4">
                            <Button variant="primary" className="w-100" type="submit">
                              Şifreyi Sıfırla
                            </Button>
                          </div>
                        </Form>
                        {/* end form */}
                      </div>
                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Beklei, Şifremi hatırladım...{' '}
                          <Link to="/auth-signin-basic" className="fw-semibold text-primary text-decoration-underline">
                            {' '}
                            Buraya tıkla{' '}
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
        </div>
      </section>
    </React.Fragment>
  )
}

export default Passwordreset
