import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Row, Card, Offcanvas, Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
//img

import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/user-context'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const SignMethod = ({ children, label }: { children: any; label: string }) => {
    return (
        <div className="mt-4 pt-2 text-center sign-with">
            <div className="signin-other-title">
                <h5 className="fs-13 mb-4 title">{label}</h5>
            </div>

            <div className="pt-2 hstack gap-2 justify-content-center">{children}</div>
        </div>
    )
}

const SignIn = ({ setSign, show, setShow }: { setSign: Function; show: boolean; setShow: Function }) => {
    let { status, setStatus, isConnected, login } = useUser()

    setStatus('public')

    useEffect(() => {
        if (status === 'login') {
            setShow(false)
        }
    }, [status, isConnected])

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
            login.fn({
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
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <div className="auth-card mx-lg-3">
                        <Card className="border-0 mb-0">
                            <Card.Body>
                                <p className="text-muted fs-15">Welcome to Shopcek</p>
                                <ConnectButton></ConnectButton>
                                <SignMethod label="Sign in with">
                                    <div className="p-2">
                                        <Form action="#" onSubmit={formik.handleSubmit}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="identifier">Username</Form.Label>
                                                <Form.Control
                                                    className="radius-15"
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
                                                        className="radius-15 pe-5 password-input"
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
                                                <Button variant="primary" className="w-100 radius-15" type="submit">
                                                    Sign In
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="text-center mt-5">
                                            <p className="mb-0">
                                                Don't have an account ?
                                                <div
                                                    className="fw-semibold text-secondary text-decoration-underline"
                                                    onClick={() => {
                                                        setSign(false)
                                                    }}
                                                >
                                                    SignUp
                                                </div>
                                            </p>
                                        </div>
                                        <SignMethod label="Sign in">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </SignMethod>
                                    </div>
                                </SignMethod>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const SignUp = ({ setSign, show, setShow }: { setSign: Function; show: boolean; setShow: Function }) => {
    let { register, setStatus } = useUser()

    setStatus('register')

    const [passwordtype, setPasswordtype] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: 'user@shopcek.com',
            username: 'iLoveCrypto',
            password: 'highSecurityPass@123'
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email()
                .matches(/^(?!.*@[^,]*,)/)
                .required('Please Enter Your Email'),
            username: Yup.string().required('This field is required'),
            password: Yup.string().required('This field is required')
        }),
        onSubmit: (values) => {
            register.fn({ variables: values })
        }
    })

    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <div className="auth-card mx-lg-3">
                        <Card className="border-0 mb-0">
                            <Card.Body>
                                <p className="text-muted fs-15">Join Shopcek</p>
                                <ConnectButton></ConnectButton>
                                <SignMethod label="Sign up">
                                    <div className="p-2">
                                        <Form className="needs-validation" action="#" onSubmit={formik.handleSubmit}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="useremail">
                                                    Email <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    id="useremail"
                                                    name="email"
                                                    placeholder="Enter email address"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className="radius-15"
                                                />
                                                {formik.errors.email && formik.touched.email ? (
                                                    <span className="text-danger">{formik.errors.email}</span>
                                                ) : null}
                                            </div>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="username">
                                                    Username <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    placeholder="Enter username"
                                                    value={formik.values.username}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className="radius-15"
                                                />

                                                {formik.errors.username && formik.touched.username ? (
                                                    <span className="text-danger">{formik.errors.username}</span>
                                                ) : null}
                                            </div>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="password-input">Password</Form.Label>
                                                <div className="position-relative auth-pass-inputgroup">
                                                    <Form.Control
                                                        type={passwordtype ? 'text' : 'password'}
                                                        className="radius-15 pe-5 password-input"
                                                        placeholder="Enter password"
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
                                                <Button variant="primary" className="radius-15 w-100" type="submit">
                                                    Sign Up
                                                </Button>
                                            </div>

                                            <div className="text-center mt-5">
                                                <p className="mb-0">
                                                    Already have an account ?
                                                    <div
                                                        className="fw-semibold text-secondary text-decoration-underline"
                                                        onClick={() => {
                                                            setSign(true)
                                                        }}
                                                    >
                                                        Sign In
                                                    </div>
                                                </p>
                                            </div>

                                            <SignMethod label="or Sign Up with">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </SignMethod>
                                        </Form>
                                    </div>
                                </SignMethod>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export const AccountModal = ({ show, setShow, handleClose }: any) => {
    const [sign, setSign] = useState<boolean>(true)

    let { isConnected } = useUser()

    useEffect(() => {
        setTimeout(() => {
            if (!isConnected) {
                const buttonElement = document.querySelector('button._12cbo8i6')
                if (buttonElement) {
                    buttonElement.classList.add('btn', 'btn-primary', 'radius-15', 'connect-button')
                }
            }
        }, 10)
    }, [show, isConnected, sign])

    return (
        <React.Fragment>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title id="ecommerceCartLabel" as="h5">
                        {sign ? 'Login' : 'Register'}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className=" px-0">
                    <SimpleBar className="h-100">
                        {sign ? (
                            <SignIn setSign={setSign} setShow={setShow} show={show} />
                        ) : (
                            <SignUp setSign={setSign} setShow={setShow} show={show} />
                        )}
                    </SimpleBar>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}
