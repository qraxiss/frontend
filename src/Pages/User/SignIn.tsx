import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

//img


import auth1 from 'assets/images/auth/img-1.png'

import { gql } from '@apollo/client'
import { useMutation, handle } from 'lib/query-wrapper'

const mutation = gql`
    mutation LOGIN($identifier: String!, $password: String!) {
        login(input: { identifier: $identifier, password: $password }) {
            jwt
        }
    }
`

const Signin = () => {
    const { fn, data, loading, error } = useMutation(mutation)
    console.log(data)
    if (!loading && !!data) {
        localStorage.setItem('jwt', data.jwt)
        console.log(localStorage.getItem('jwt'))
    }

    const passwordtype = 'password'
    const [password, setPassword] = useState('')
    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: Yup.object({
            identifier: Yup.string().required('This field is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
                .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
                .matches(RegExp('(.*[0-9].*)'), 'At least one number')
                .required('This field is required')
        }),

        onSubmit: (values) => {
            console.log('value', values)
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
                                        <Card.Header className="bg-primary border-0">
                                            <Row>
                                                <Col lg={4} xs={3}>
                                                    <Image src={auth1} alt="" className="img-fluid" />
                                                </Col>
                                                <Col lg={8} xs={9}>
                                                    <h1 className="text-white lh-base fw-lighter">Join Our Toner Store</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body>
                                            <p className="text-muted fs-15">Sign in to continue to Toner.</p>
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
                                                            <Link to={'/auth-pass-reset-basic'} className="text-muted">
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
                                                        <Button
                                                            variant="primary"
                                                            className="w-100"
                                                            type="submit"
                                                            onClick={() => {
                                                                fn({
                                                                    variables: {
                                                                        identifier: formik.values.identifier,
                                                                        password: formik.values.password
                                                                    }
                                                                })
                                                            }}
                                                        >
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
                                                        <Link
                                                            to="/auth-signup-basic"
                                                            className="fw-semibold text-secondary text-decoration-underline"
                                                        >
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

export default Signin
