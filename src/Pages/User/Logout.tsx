import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//img

import config from 'config/config'

import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'

import { useNavigate } from 'react-router-dom'

import { useUser } from 'Components/context/user-context'

const query = gql`
    query {
        icon {
            data {
                attributes {
                    account {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`

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

    const [icon, setIcon] = useState<string>('')
    const iconRes = useQuery(query)

    useEffect(() => {
        if (iconRes.loading) return
        if (iconRes.error) return
        if (!iconRes.data) return

        setIcon(config.serverUrl + iconRes.data.account.url)
    }, [iconRes.loading])

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
                                                <Image src={icon} alt="" className="avatar-md rounded-circle" />
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
