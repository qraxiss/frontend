import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Cardshop from './Cardshop'


const Shopingcard = () => {
    document.title = 'Shop Cart | Toner - React Frontend'
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="product-list justify-content-center">
                        <Cardshop />
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Shopingcard
