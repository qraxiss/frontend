import { Container, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

import { Campaign1, Campaign2, Campaign3, Campaign4, Campaign5 } from 'Components/Images/Campaign'

const Collection = () => {
    return (
        <React.Fragment>
            <section className="position-relative section-image">
                <Carousel id="ecommerceHero" data-bs-ride="carousel">
                    <Carousel.Item>
                        <Campaign1 className="w-100 section-image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Campaign2 className="w-100 section-image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Campaign3 className="w-100 section-image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Campaign4 className="w-100 section-image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Campaign5 className="w-100 section-image" />
                    </Carousel.Item>
                </Carousel>
            </section>
        </React.Fragment>
    )
}

export default function Section() {
    return (
        <Container>
            <section className="section-slider">
                <div className="left">
                    <Link to="/" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                        <Collection />
                    </Link>
                </div>
                <div className="right">
                    <Link to="/" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                        <Campaign1 className="w-100 section-image" />
                    </Link>

                    <div className="down">
                        <div className="right">
                            <Link to="/" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                <Campaign2 className="w-100 section-image" />
                            </Link>
                        </div>
                        <div className="left">
                            <Link to="/" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                <Campaign3 className="w-100 section-image" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}
