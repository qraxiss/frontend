import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { addItemToCart, cartQuery } from 'lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'
import { CardComponent } from 'Components/newComponents'

import { CommonTitle } from 'Components/Homepage'

const Products = ({ items, title }: any) => {
    let { fn } = useMutation(addItemToCart)
    let { refetch } = useQuery(cartQuery)

    return (
        <React.Fragment>
            <section className="section pb-0">
                <CommonTitle title={title} />
                <Container>
                    <Row>
                        {items.map((item: any) => (
                            <Col lg={3} key={item.slug}>
                                <CardComponent data={item} fn={fn} refetchCart={refetch} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Products
