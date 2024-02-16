import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'
import config from 'config/config'

const query = gql`
    query {
        getParentCategories {
            attributes {
                name
                slug
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
                }
            }
        }
        about {
            data {
                attributes {
                    footerAbout
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
    let logodark = !loading ? config.serverUrl + data.logo.text.url : ''
    let logolight = !loading ? config.serverUrl + data.logo.text.url : ''

    console.log(data)
    let groupedList
    if (!loading) {
        groupedList = groupList(data.social.socials, 3)
    }

    return (
        <React.Fragment>
            <section className="section footer-landing pb-0">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="footer-info">
                                <Image src={logolight} alt="" height="40" className="logo-light" />
                                <Image src={logodark} alt="" height="40" className="logo-dark" />
                                <p className="footer-desc mt-4 mb-2 me-3">{!loading ? data.about.footerAbout : ''}</p>

                                {/* <div className="footer-social mt-4">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset">
                                                <i className="mdi mdi-facebook"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset">
                                                <i className="mdi mdi-twitter"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset">
                                                <i className="mdi mdi-google"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset">
                                                <i className="mdi mdi-pinterest"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </Col>

                        <Col lg={8}>
                            <Row className="pl-0 pl-lg-3">
                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Categories</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            {(!loading ? data.getParentCategories : []).map((category: any) => {
                                                return (
                                                    <li>
                                                        <Link to="#">{category.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Shopcek</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            {(!loading ? data.footer.shopcek : []).map((item: any) => {
                                                return (
                                                    <li>
                                                        <Link to={item.url}>{item.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Legal</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            {(!loading ? data.footer.legal : []).map((item: any) => {
                                                return (
                                                    <li>
                                                        <Link to={item.url}>{item.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="my-lg-0 mt-4">
                                        <h5 className="footer-title">Follow Us</h5>
                                        {(!loading ? groupedList! : []).map((group, index) => (
                                            <Row key={index}>
                                                {group.map((item: any, itemIndex) => {
                                                    return (
                                                        <Col key={itemIndex}>
                                                            <Link to={item.url}>
                                                                <Image src={config.serverUrl + item.icon.url} />
                                                            </Link>
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Footer
