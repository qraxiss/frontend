import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Shoporder } from 'Pages/Shop/checkout/sidebar'

import { Products } from './products'
import { Billing } from './billing'

import { useNavigate } from 'react-router-dom'
import { useCart } from 'context/cart'

const Checkout = () => {
    let { orderStatus, setOrderStatus, newOrderGql } = useCart()
    let navigate = useNavigate()

    useEffect(() => {
        if (orderStatus) {
            setOrderStatus(false)
            navigate('/account/order')
        }
    }, [orderStatus, newOrderGql.loading])

    document.title = 'Shopcek'
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Billing />
                        </Col>
                        <Col lg={4}>
                            <Products />
                            <Shoporder />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Checkout
