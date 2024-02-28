import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Form, Row, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useMutation } from 'lib/query-wrapper'
import { login } from 'lib/common-queries'
import { useUser } from 'Components/context/user-context'

const Signin = () => {
    let { jwt, setJwt } = useUser()

    const navigate = useNavigate()
    const { fn, data, loading, error } = useMutation(login)

    useEffect(() => {
        if (jwt) {
            navigate('/')
        }

        if (!loading && data && data.jwt) {
            setJwt(data.jwt)
            navigate('/')
        }
    }, [loading, data, navigate])

    const passwordtype = 'password'
    const [password, setPassword] = useState('')
    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: Yup.object({
            identifier: Yup.string().required('This field is required'),
            password: Yup.string().required('This field is required')
        }),

        onSubmit: (values) => {
            fn({
                variables: {
                    identifier: values.identifier,
                    password: values.password
                }
            })
        }
    })

    const handleToogle = () => {
        passwordtype === password ? setPassword('text') : setPassword('password')
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
                                        <Card.Body>
                                            <p className="text-muted fs-15">Sign in to continue to Shopcek.</p>
                                            <div className="p-2">
                                                <Form action="#" onSubmit={formik.handleSubmit}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="identifier">Username</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="identifier"
                                                            id="identifier"
                                                            placeholder="Enter username"
                                                            value={formik.values.identifier}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                        />
                                                        {formik.errors.identifier && formik.touched.identifier ? (
                                                            <span className="text-danger">{formik.errors.identifier}</span>
                                                        ) : null}
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="float-end">
                                                            <Link to={'/forgot-password'} className="text-muted">
                                                                Forgot password?
                                                            </Link>
                                                        </div>
                                                        <Form.Label htmlFor="password-input">Password</Form.Label>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <Form.Control
                                                                type={password}
                                                                className=" pe-5 password-input"
                                                                name="password"
                                                                placeholder="Enter password"
                                                                id="password-input"
                                                                value={formik.values.password}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                autoComplete="off"
                                                            />
                                                            {formik.errors.password && formik.touched.password ? (
                                                                <span className="text-danger">{formik.errors.password}</span>
                                                            ) : null}
                                                            <Button
                                                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                                id="password-addon"
                                                                onClick={handleToogle}
                                                            >
                                                                <i className="ri-eye-fill align-middle" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <Form.Check type="checkbox" label="Remember me" />
                                                    <div className="mt-4">
                                                        <Button variant="primary" className="w-100" type="submit">
                                                            Sign In
                                                        </Button>
                                                    </div>
                                                    <div className="mt-4 pt-2 text-center">
                                                        <div className="signin-other-title">
                                                            <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                        </div>
                                                        <div className="pt-2 hstack gap-2 justify-content-center">
                                                            <Button className="btn btn-soft-primary btn-icon">
                                                                <i className="ri-facebook-fill fs-16" />
                                                            </Button>
                                                            <Button className="btn btn-soft-danger btn-icon">
                                                                <i className="ri-google-fill fs-16" />
                                                            </Button>
                                                            <Button className="btn btn-soft-dark btn-icon">
                                                                <i className="ri-github-fill fs-16" />
                                                            </Button>
                                                            <Button className="btn btn-soft-info btn-icon">
                                                                <i className="ri-twitter-fill fs-16" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Form>
                                                <div className="text-center mt-5">
                                                    <p className="mb-0">
                                                        Don't have an account ?{' '}
                                                        <Link to="/signup" className="fw-semibold text-secondary text-decoration-underline">
                                                            {' '}
                                                            SignUp
                                                        </Link>{' '}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            {/*end col*/}
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Signin
