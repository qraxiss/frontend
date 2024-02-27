import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import config from 'config/config'
import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'

const query = gql`
    query {
        campaign {
            data {
                attributes {
                    campaigns {
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        heading
                        subHeading
                        btnLink
                        btnText
                    }
                }
            }
        }
    }
`

export default function Section() {
    const { data, loading, error } = useQuery(query)

    const [campaigns, setCampaigns] = useState<any[]>([])

    useEffect(() => {
        if (loading) {
            return
        }

        if (error) {
            return
        }

        if (!data) {
            return
        }

        data.campaigns.forEach((item: any) => {
            item.image.url = config.serverUrl + item.image.url
        })

        setCampaigns(data.campaigns)
    }, [loading])

    return (
        <Container
            style={{
                paddingTop: '15px'
            }}
        >
            <Row className="g-2">
                {/*Sol*/}
                <Col>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end' /* Sağa hizala */,
                            alignItems: 'flex-start' /* Yukarı hizala */
                        }}
                    >
                        <Link to={campaigns[0]?.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                            <Image
                                src={campaigns[0]?.image?.url}
                                className="w-100 section-image"
                                rounded
                                alt=""
                                style={{
                                    width: '420px',
                                    maxWidth: '800px',
                                    height: '490px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div className="product-content p-3 ps-5">
                                <p className="text-uppercase fs-15 text-secondary fw-semibold mb-2">{campaigns[0]?.heading}</p>
                                <h1 className="display-5 lh-base text-dark ff-secondary">{campaigns[0]?.subHeading}</h1>
                                <div className="product-btn mt-4">
                                    {campaigns[0]?.btnText} <i className="bi bi-arrow-right ms-2"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Col>
                <Col>
                    {/*Sağ*/}
                    <Row
                        className="g-2"
                        style={{
                            gap: '10px'
                        }}
                        key={campaigns[1]?.image.url}
                    >
                        <div
                            style={{
                                justifyContent: 'flex-start' /* Sağa hizala */,
                                alignItems: 'flex-start' /* Yukarı hizala */,
                                marginBottom: '10px'
                            }}
                        >
                            <Link to={campaigns[1]?.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                <Image
                                    src={campaigns[1]?.image.url}
                                    className="w-100 section-image"
                                    alt=""
                                    rounded
                                    style={{
                                        width: '420px',
                                        maxWidth: '800px',
                                        height: '280px',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div className="product-content p-3 ps-5">
                                    <p className="text-uppercase fw-semibold fs-14 mb-2">{campaigns[1]?.heading}</p>
                                    <h1 className="lh-base ff-secondary text-dark fw-medium">{campaigns[1]?.subHeading}</h1>
                                </div>
                            </Link>
                        </div>
                    </Row>
                    {/*Sağ alt*/}
                    <Row
                        className="g-2"
                        style={
                            {
                                // gap: '10px'
                            }
                        }
                    >
                        {/*sağ*/}
                        <Col>
                            <div
                                style={{
                                    // display: 'flex',
                                    justifyContent: 'flex-start' /* Sağa hizala */,
                                    alignItems: 'flex-start' /* Yukarı hizala */,
                                    marginBottom: '10px'
                                }}
                            >
                                <Link to={campaigns[2]?.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                    <Image
                                        src={campaigns[2]?.image.url}
                                        className="w-100 section-image"
                                        alt=""
                                        rounded
                                        style={{
                                            width: '420px',
                                            maxWidth: '800px',
                                            height: '200px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div className="product-content p-3 ps-5">
                                        <p className="text-uppercase fw-semibold fs-14 mb-2">{campaigns[2]?.heading}</p>
                                        <h1 className="lh-base ff-secondary text-dark fw-medium">{campaigns[2]?.subHeading}</h1>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                        {/*sol*/}
                        <Col>
                            <div
                                style={{
                                    // display: 'flex',
                                    justifyContent: 'flex-start' /* Sağa hizala */,
                                    alignItems: 'flex-start' /* Yukarı hizala */,
                                    marginBottom: '10px'
                                }}
                            >
                                <Link to={campaigns[3]?.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                    <Image
                                        src={campaigns[3]?.image.url}
                                        className="w-100 section-image"
                                        alt=""
                                        rounded
                                        style={{
                                            width: '420px',
                                            maxWidth: '800px',
                                            height: '200px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div className="product-content p-3 ps-5">
                                        <p className="text-uppercase fw-semibold fs-14 mb-2">{campaigns[3]?.heading}</p>
                                        <h1 className="lh-base ff-secondary text-dark fw-medium">{campaigns[3]?.subHeading}</h1>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
