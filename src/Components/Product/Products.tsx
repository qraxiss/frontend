import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CommonTitle } from 'Components/Homepage'
import config from 'config/config'

const Products = ({ items }: any) => {
    return (
        <React.Fragment>
            <section className="section pb-0">
                <Container>
                    <CommonTitle
                        title="Latest Arrival"
                        dicription="What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language."
                    />
                    <Row>
                        {items.map((item: any) => (
                            <Col lg={3} key={item.slug}>
                                <Card className="mb-4">
                                    <div className={`bg-warning-subtle rounded-top py-4`}>
                                        <div className="gallery-product">
                                            <Image
                                                src={config.serverUrl + item.image.url}
                                                alt=""
                                                style={{ maxHeight: '215px', maxWidth: '100%' }}
                                                className="mx-auto d-block"
                                            ></Image>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div>
                                            <Link to="product-details">
                                                <h6 className="fs-15 lh-base text-truncate mb-0">{item.name}</h6>
                                            </Link>
                                            <div className="mt-3">
                                                <span className="float-end">
                                                    {5}
                                                    <i className="ri-star-half-fill text-warning align-bottom"></i>
                                                </span>
                                                <h5 className="mb-0">
                                                    {item.price}
                                                    {'$'}
                                                </h5>
                                            </div>
                                            <div className="mt-3">
                                                <Link to="/shop/shopingcard" className="btn btn-primary btn-sm">
                                                    <i className="mdi mdi-cart me-1"></i> Add to cart
                                                </Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Products
