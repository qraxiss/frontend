import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'
import config from 'config/config'

const query = gql`
    query {
        parentCategories {
            data {
                attributes {
                    name
                    slug
                    childs {
                        data {
                            attributes {
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
        logo {
            data {
                attributes {
                    text {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    icon {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
        footer {
            data {
                attributes {
                    shopcek {
                        name
                        url
                    }
                    legal {
                        name
                        url
                    }
                    about
                }
            }
        }

        social {
            data {
                attributes {
                    socials {
                        name
                        url
                        icon {
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
    }
`

const groupList = <T extends any>(list: T[], groupSize: number): T[][] => {
    return list.reduce((acc, item, index) => {
        const groupIndex = index % groupSize

        if (!acc[groupIndex]) {
            acc[groupIndex] = []
        }

        acc[groupIndex].push(item)

        return acc
    }, [] as T[][])
}

const Footer = () => {
    const { data, loading } = useQuery(query)
    let logodark = !loading ? config.serverUrl + data.logo.icon.url : ''
    let logolight = !loading ? config.serverUrl + data.logo.icon.url : ''

    let groupedList
    if (!loading) {
        groupedList = groupList(data.social.socials, 3)
    }

    return (
        <React.Fragment>
            <section className="section footer-landing pb-0">
                <Container
                // style={{
                //     marginLeft: '15px',
                //     marginRight: '15px'
                // }}
                >
                    <Row>
                        <Col lg={3}>
                            <div className="footer-info">
                                <Image src={logolight} className="logo" />
                                {/* <Image src={logodark} alt="" height="300" className="logo-dark" /> */}
                                {/* <p className="footer-desc mt-4 mb-2 me-3">{!loading ? data.footer.about : ''}</p> */}
                            </div>
                        </Col>

                        <Col lg={8}>
                            <Row className="pl-0 pl-lg-3">
                                <Col md={2}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Categories</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            {(!loading ? data.parentCategories : []).map((category: any) => {
                                                return (
                                                    <li key={category.slug}>
                                                        <Link to={`/category/${category.slug}`}>{category.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={2}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Shopcek</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            {(!loading ? data.footer.shopcek : []).map((item: any) => {
                                                return (
                                                    <li key={item.url}>
                                                        <Link to={item.url}>{item.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={2}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Legal</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            {(!loading ? data.footer.legal : []).map((item: any) => {
                                                return (
                                                    <li key={item.url}>
                                                        <Link to={item.url}>{item.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Col>

                                <Col
                                    md={5}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'right'
                                    }}
                                >
                                    <div className="my-lg-0 mt-4">
                                        <h5 className="footer-title">Subscribe Our Newsletter</h5>
                                        {/* <Container> */}
                                        <Form
                                            style={{
                                                right: '-10rem'
                                            }}
                                        >
                                            <Row sm={2}>
                                                <div className="mb-4">
                                                    <Form.Control
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter your email..."
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </Row>

                                            <Row sm={3}>
                                                <div
                                                    className="text-center mt-4"
                                                    style={{
                                                        top: '-30px',
                                                        right: '-4rem'
                                                    }}
                                                >
                                                    <Button variant="primary" className="w-100" type="submit">
                                                        Subscribe
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Form>

                                        <Row lg={6}>
                                            {(!loading ? data.social.socials! : []).map((item: any, index: number) => (
                                                <Col key={index}>
                                                    <Link to={item.url}>
                                                        <Image src={config.serverUrl + item.icon.url} className="footer-social-icon" width={48} />
                                                    </Link>
                                                </Col>
                                            ))}
                                        </Row>

                                        {/* </Container> */}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <hr className="solid"></hr>
                    <Row>
                        <Col>Copyright 2024 SHOPCEK-All Rights Reserved</Col>
                        <Col
                            style={{
                                textAlign: 'right'
                            }}
                        >
                            Made with one mission: to accelerate the next billion's onboarding to crypto
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Footer
