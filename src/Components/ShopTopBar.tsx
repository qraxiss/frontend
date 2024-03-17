import React from 'react'
import { Col, Container, Row, Breadcrumb, Card, Form, Table, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Shoptopbar = ({ title, page }: any) => {
    return (
        <React.Fragment>
            <section className="page-wrapper bg-primary">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center d-flex align-items-center justify-content-between">
                                <h4 className="text-white mb-0">{title}</h4>
                                <Breadcrumb bsPrefix=" breadcrumb breadcrumb-light justify-content-center mb-0 fs-15">
                                    {/* <ol className="breadcrumb breadcrumb-light justify-content-center mb-0 fs-15"> */}
                                    <Breadcrumb.Item href="#">Shop</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">
                                        {page}
                                    </Breadcrumb.Item>
                                    {/* </ol> */}
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export const Shoporder = ({ dic, subtotal, charge, tax, total }: any) => {
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <div className="text-center">
                        <h6 className="mb-3 fs-15">
                            Have a <span className="fw-semibold">promo</span> code ?
                        </h6>
                    </div>
                    <div className="hstack gap-3 px-3 mx-n3">
                        <Form.Control
                            className="me-auto"
                            type="text"
                            placeholder="Enter coupon code"
                            defaultValue="Shopcek"
                            aria-label="Add Promo Code here..."
                        />
                        <button type="button" className="btn btn-primary w-xs">
                            Apply
                        </button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="overflow-hidden">
                <Card.Header className="border-bottom-dashed">
                    <h5 className="card-title mb-0 fs-15">Payment Information</h5>
                </Card.Header>
                <Card.Body className=" pt-4">
                    <div className="table-responsive table-card justify-content-center">
                        <div className="info-text">
                        <ConnectButton />
                        </div>

                        <div className='info-text'>
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes
                        described in our privacy policy.
                        </div>
                        <Form.Check className="info-text" label="I have read and agree to the website terms and conditions" />
                    </div>
                    
                </Card.Body>

                <Button className="btn btn-hover btn-soft-info info-text" onClick={() => {}}>
                            Place Order <i className="ri-arrow-right-line label-icon align-middle ms-1"></i>
                    </Button>
            </Card>
        </React.Fragment>
    )
}

export const BrandedProduct = ({ title }: any) => {
    const handleLike = (event: any) => {
        if (event.closest('button').classList.contains('active')) {
            event.closest('button').classList.remove('active')
        } else {
            event.closest('button').classList.add('active')
        }
    }
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="d-flex align-items-center justify-content-between mb-4 pb-1">
                                <h4 className="flex-grow-1 mb-0">{title}</h4>
                                <div className="flex-shrink-0">
                                    <Link to="#" className="link-effect link-primary">
                                        All Products <i className="ri-arrow-right-line ms-1 align-bottom"></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
