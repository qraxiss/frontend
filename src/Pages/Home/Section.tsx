import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import config from 'config/config'
import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'

import { Carousel } from 'react-bootstrap'

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

const Collection = ({ data }: any) => {
    return (
        <React.Fragment>
            <section className="position-relative section-image">
                <Carousel id="ecommerceHero" data-bs-ride="carousel">
                    {data.map((item: any) => {
                        return (
                            <Carousel.Item>
                                <Image
                                    src={item.image.url}
                                    className="w-100 section-image"
                                    rounded
                                    alt=""
                                ></Image>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </section>
        </React.Fragment>
    )
}

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
        <Container>
            <section className="section-slider">
                <div className="left">
                    <Link to={campaigns[0]?.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                        <Collection data={campaigns} />
                        <div className="product-content p-3 ps-5">
                            <p className="text-uppercase fs-15 text-secondary fw-semibold mb-2">{campaigns[0]?.heading}</p>
                            <h1 className="display-5 lh-base text-dark ff-secondary">{campaigns[0]?.subHeading}</h1>
                            <div className="product-btn mt-4">
                                {campaigns[0]?.btnText} <i className="bi bi-arrow-right ms-2"></i>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="right">
                    <Link to={campaigns[1]?.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                        <Image src={campaigns[1]?.image.url} className="w-100 section-image" alt="" rounded />
                        <div className="product-content p-3 ps-5">
                            <p className="text-uppercase fw-semibold fs-14 mb-2">{campaigns[1]?.heading}</p>
                            <h1 className="lh-base ff-secondary text-dark fw-medium">{campaigns[1]?.subHeading}</h1>
                        </div>
                    </Link>

                    <div className='down'>
                        <div className="right">
                            <Link to={campaigns[2]?.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                <Image src={campaigns[2]?.image.url} className="w-100 section-image" alt="" rounded />
                                <div className="product-content p-3 ps-5">
                                    <p className="text-uppercase fw-semibold fs-14 mb-2">{campaigns[2]?.heading}</p>
                                    <h1 className="lh-base ff-secondary text-dark fw-medium">{campaigns[2]?.subHeading}</h1>
                                </div>
                            </Link>
                        </div>
                        <div className="left">
                            <Link to={campaigns[3]?.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                <Image src={campaigns[3]?.image.url} className="w-100 section-image" alt="" rounded />
                                <div className="product-content p-3 ps-5">
                                    <p className="text-uppercase fw-semibold fs-14 mb-2">{campaigns[3]?.heading}</p>
                                    <h1 className="lh-base ff-secondary text-dark fw-medium">{campaigns[3]?.subHeading}</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}
