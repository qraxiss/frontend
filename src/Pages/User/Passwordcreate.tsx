import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

//img

import auth1 from 'assets/images/auth/img-1.png'

const Passwordcreate = () => {
  const passwordtype = 'password'
  const confirmPasswordtype = 'password'

  const [password, setPassword] = useState('password')
  const [confirmpassword, setConfirmpassword] = useState('password')

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Şifre 8 karakterden uzun olmalıdır!')
        .matches(RegExp('(.*[a-z].*)'), 'Küçük karakter içermelidir!')
        .matches(RegExp('(.*[A-Z].*)'), 'Büyük karakter içermelidir')
        .matches(RegExp('(.*[0-9].*)'), 'Sayı içermelidir')
        .required('Bu alan zorunludur!'),
      confirmPassword: Yup.string()
        .required('Bu alan zorunludur!')
        .oneOf([Yup.ref('password')], 'Şifre eşleşmedi')
    }),
    onSubmit: (values) => {}
  })
  const handleTooglePassword = () => {
    passwordtype === password ? setPassword('text') : setPassword('password')
  }
  const handleConfirmPassword = () => {
    confirmPasswordtype === confirmpassword ? setConfirmpassword('text') : setConfirmpassword('password')
  }
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
                          <h1 className="text-white lh-base fw-lighter">Yeni Şifre Oluştur</h1>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-muted fs-15">Yeni şifren eski şifrelerden farklı olmalıdır.</p>
                      <div className="p-2">
                        <Form action="/auth-signin-basic" onSubmit={formik.handleSubmit}>
                          <div className="mb-3">
                            <Form.Label htmlFor="password-input">Şifre</Form.Label>
                            <div className="position-relative auth-pass-inputgroup">
                              <Form.Control
                                type={password}
                                autoComplete="off"
                                className="pe-5 password-input"
                                placeholder="Şifre giriniz"
                                id="password-input"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                              />
                              {formik.errors.password && formik.touched.password ? (
                                <span className="text-danger">{formik.errors.password}</span>
                              ) : null}
                              <Button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                id="password-addon"
                                bsPrefix="btn btn-none"
                                onClick={handleTooglePassword}
                              >
                                <i className="ri-eye-fill align-middle" />
                              </Button>
                            </div>
                            <div id="passwordInput" className="form-text">
                              Şifre uzunluğu 8 - 20 karakter arasında olmalıdır.
                            </div>
                          </div>
                          <div className="mb-3">
                            <Form.Label htmlFor="confirm-password-input">Şifreyi Doğrula</Form.Label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <Form.Control
                                type={confirmpassword}
                                className="pe-5 password-input"
                                autoComplete="off"
                                placeholder="Girmiş olduğunuz şifrenizi doğrulayınız"
                                id="confirm-password-input"
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                                <span className="text-danger">{formik.errors.confirmPassword}</span>
                              ) : null}
                              <Button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                id="confirm-password-input"
                                bsPrefix="btn btn-none"
                                onClick={handleConfirmPassword}
                              >
                                <i className="ri-eye-fill align-middle" />
                              </Button>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="form-check form-check-primary">
                            <Form.Control className="form-check-input" type="checkbox" id="auth-remember-check" />
                            <Form.Label className="form-check-label" htmlFor="auth-remember-check">
                              Beni hatırla
                            </Form.Label>
                          </div>
                          <div className="mt-4">
                            <Button variant="primary" className="w-100" type="submit">
                              Şifreyi Değiştir
                            </Button>
                          </div>
                        </Form>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Bekle, Şifremi hatırladım...{' '}
                          <Link to="/signin" className="fw-semibold text-primary text-decoration-underline">
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

export default Passwordcreate
