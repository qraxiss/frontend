import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//img

import { useNavigate } from 'react-router-dom'

import { useUser } from 'context/user-context'

import { User } from 'Components/Images/Icons'

const Logout = () => {
    let { jwt, deleteJwt } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!jwt) {
            navigate('/')
        } else {
            deleteJwt()
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [])

    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="w-100">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="auth-card mx-lg-3">
                                    <Card className="border-0 mb-0">
                                        <Card.Body className="text-center">
                                            <div className="mb-4">
                                                <User className="avatar-md rounded-circle" />
                                            </div>
                                            <div>
                                                <Link to="/signin" className="btn btn-primary w-100">
                                                    Sign In
                                                </Link>
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
export default Logout
