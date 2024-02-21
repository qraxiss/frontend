import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Features5 from 'assets/images/ecommerce/features/img-5.jpg'
import Features4 from 'assets/images/ecommerce/features/img-4.jpg'
import Features1 from 'assets/images/ecommerce/features/img-1.jpg'
import EmailClothe from 'Pages/Catalog/EmailClothe'
import { CommonService } from 'Components/CommonService'
import Index from 'Components/Index'

import { useParams } from 'react-router-dom'

const Defaultgrid = () => {
    let { parent, child } = useParams()

    return (
        <React.Fragment>
            <section className="position-relative section">
                <div className="section pb-0 mt-4" />
                <Container>
                    <div className="ecommerce-product gap-4">
                        <Index name="sidebar small-sidebar flex-shrink-0" cxxl="4" clg="4" cmd="6" cheight="200px" />
                    </div>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )
}

export default Defaultgrid
