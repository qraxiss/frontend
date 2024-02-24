import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CommonTitle } from 'Components/Homepage'
import config from 'config/config'

import { addItemToCart, cartQuery } from 'lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'

const Products = ({ items }: any) => {
    let { fn, data, loading, error } = useMutation(addItemToCart)
    let { refetch } = useQuery(cartQuery)

    useEffect(() => {
        refetch()
    }, [loading])

    return (
        <React.Fragment>
            <section className="section pb-0">
                <Container>
                    <Row>
                        {items.map((item: any) => (
                            <Col lg={3} key={item.slug}>
                                <Card className="mb-4">
                                    <div className={`bg-warning-subtle rounded-top py-4`}>
                                        <div className="gallery-product">
                                            <Image
                                                src={config.serverUrl + item.images[0].url}
                                                alt=""
                                                style={{ maxHeight: '215px', maxWidth: '100%' }}
                                                className="mx-auto d-block"
                                            ></Image>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div>
                                            <Link to={`/product-details/${item.slug}`}>
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
                                                <Button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => {
                                                        fn({
                                                            variables: {
                                                                slug: item.slug
                                                            }
                                                        })
                                                    }}
                                                >
                                                    <i className="mdi mdi-cart me-1"></i> Add to cart
                                                </Button>
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
