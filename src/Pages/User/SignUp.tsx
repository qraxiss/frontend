import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Form, Row, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { register } from 'lib/common-queries'
import { useMutation } from 'lib/query-wrapper'

const SignUp = () => {
  const navigate = useNavigate()
  const { fn, loading, error, data } = useMutation(register)

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      navigate('/')
    }

    if (!loading && data && data.jwt) {
      localStorage.setItem('jwt', data.jwt)
      navigate('/')
    }
  }, [loading, data, navigate])

  const [passwordtype, setPasswordtype] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .matches(/^(?!.*@[^,]*,)/, 'Lütfen geçerli bir email giriniz!')
        .required('Email girmek zoruludur!'),
      username: Yup.string().required('Kullanıcı adı girmek zorunludur!'),
      password: Yup.string().min(6, 'Şifreniz en az 6 karakterden oluşmalıdır!').required('Şifre girmek zorunludur!')
    }),
    onSubmit: (values) => {
      fn({ variables: values })
    }
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
                    <Card.Body>
                      <p className="text-muted fs-15">Üye olun</p>
                      <div className="p-2">
                        <Form className="needs-validation" action="#" onSubmit={formik.handleSubmit}>
                          <div className="mb-3">
                            <Form.Label htmlFor="username">
                              Kullanıcı Adı <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="username"
                              name="username"
                              placeholder="Kullanıcı adınızı giriniz"
                              value={formik.values.username}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.errors.username && formik.touched.username ? <span className="text-danger">{formik.errors.username}</span> : null}
                          </div>
                          <div className="mb-3">
                            <Form.Label htmlFor="useremail">
                              Email <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              id="useremail"
                              name="email"
                              placeholder="Email adresinizi giriniz"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                          </div>
                          <div className="mb-3">
                            <Form.Label htmlFor="password-input">
                              Şifre <span className="text-danger">*</span>
                            </Form.Label>
                            <div className="position-relative auth-pass-inputgroup">
                              <Form.Control
                                type={passwordtype ? 'text' : 'password'}
                                className="pe-5 password-input"
                                placeholder="Şifrenizi giriniz"
                                id="password-input"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                autoComplete="off"
                              />
                              <Button
                                variant="link"
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                id="password-addon"
                                onClick={() => setPasswordtype(!passwordtype)}
                              >
                                <i className="ri-eye-fill align-middle" />
                              </Button>
                              {formik.errors.password && formik.touched.password ? (
                                <span className="text-danger">{formik.errors.password}</span>
                              ) : null}
                            </div>
                          </div>

                          <div className="mt-4">
                            <Button variant="primary" className="w-100" type="submit">
                              Üye Ol
                            </Button>
                          </div>
                          {/* <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-13 mb-4 title text-muted">Şununla hesap oluştur</h5>
                            </div>
                            <div className="pt-2 hstack gap-2 justify-content-center">
                              <Button className="btn btn-soft-primary btn-icon">
                                <i className="ri-facebook-fill fs-16" />
                              </Button>
                              <Button className="btn btn-soft-danger btn-icon">
                                <i className="ri-google-fill fs-16" />
                              </Button>
                            </div>
                          </div> */}
                        </Form>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Hesabın mı var ?{' '}
                          <Link to="/signin" className="fw-semibold text-primary text-decoration-underline">
                            {' '}
                            Giriş Yap{' '}
                          </Link>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SignUp
