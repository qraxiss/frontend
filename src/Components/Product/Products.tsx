import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { CardComponent } from 'Components/CardComponent'

import { CommonTitle } from 'Components/CommonTitle'

const Products = ({ items, title }: any) => {
    return (
        <React.Fragment>
            <section className="section pb-0">
                <CommonTitle title={title} />
                <Container>
                    <Row style={{}}>
                        {items.map((item: any) => (
                            <Col key={item.slug}>
                                <CardComponent data={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Products
