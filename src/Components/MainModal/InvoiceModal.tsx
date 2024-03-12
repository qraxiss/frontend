import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

//component
import DeleteModal from 'Components/MainModal/DeleteModal'

import { useNavigate } from 'react-router-dom'
import { useCart } from 'context/cart-context'

import { Text } from '../Images/Logo'


export const InvoiceModal = ({ modal, handleClose }: any) => {
    const InvoicePrint = () => {
        window.print()
    }
    return (
        <React.Fragment>
            <Modal
                show={modal}
                onHide={handleClose}
                animation={true}
                dialogClassName="modal-custom-size"
                id="invoiceModal"
                aria-labelledby="invoiceModalLabel"
            >
                <Modal.Header closeButton>
                    <h1 className="modal-title fs-5" id="invoiceModalLabel">
                        Invoice #TTB30280001
                    </h1>
                </Modal.Header>
                <Modal.Body>
                    <Card className="mb-0" id="demo">
                        <Row>
                            <Col lg={12}>
                                <Card.Header className="border-bottom-dashed p-4">
                                    <div className="d-sm-flex">
                                        <div className="flex-grow-1">
                                            <Text className="card-logo card-logo-dark" height="26" />
                                            <Text className="card-logo card-logo-light" height="26" />
                                            <div className="mt-sm-5 mt-4">
                                                <h6 className="text-muted text-uppercase fw-semibold fs-14">Address</h6>
                                                <p className="text-muted mb-1" id="address-details">
                                                    Phoenix, USA
                                                </p>
                                                <p className="text-muted mb-0" id="zip-code">
                                                    <span>Zip-code:</span> 90201
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 mt-sm-0 mt-3">
                                            <h6>
                                                <span className="text-muted fw-normal">Legal Registration No:</span>{' '}
                                                <span id="legal-register-no">987654</span>
                                            </h6>
                                            <h6>
                                                <span className="text-muted fw-normal">Email:</span> <span id="email">toner@themesbrand.com</span>
                                            </h6>
                                            <h6>
                                                <span className="text-muted fw-normal">Website:</span>{' '}
                                                <Link to="https://themesbrand.com/" className="link-primary" target="_blank" id="website">
                                                    www.themesbrand.com
                                                </Link>
                                            </h6>
                                            <h6 className="mb-0">
                                                <span className="text-muted fw-normal">Contact No: </span>
                                                <span id="contact-no"> +(314) 234 6789</span>
                                            </h6>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Col lg={12}>
                                    <Card.Body className="p-4">
                                        <Row className="g-3">
                                            <Col lg={3} xs={6}>
                                                <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">Invoice No</p>
                                                <h5 className="fs-15 mb-0">
                                                    #TTB<span id="invoice-no">30280001</span>
                                                </h5>
                                            </Col>

                                            <Col lg={3} xs={6}>
                                                <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">Date</p>
                                                <h5 className="fs-15 mb-0">
                                                    <span id="invoice-date">14 Jan, 2023</span>{' '}
                                                    <small className="text-muted" id="invoice-time">
                                                        12:22PM
                                                    </small>
                                                </h5>
                                            </Col>

                                            <Col lg={3} xs={6}>
                                                <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">Payment Status</p>
                                                <span className="badge bg-success-subtle" id="payment-status">
                                                    Paid
                                                </span>
                                            </Col>

                                            <Col lg={3} xs={6}>
                                                <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">Total Amount</p>
                                                <h5 className="fs-15 mb-0">
                                                    $<span id="total-amount">1406.92</span>
                                                </h5>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Col>
                                <Col lg={12}>
                                    <Card.Body className="p-4 border-top border-top-dashed">
                                        <Row className="g-3">
                                            <Col xs={6}>
                                                <h6 className="text-muted text-uppercase fw-semibold fs-14 mb-3">Billing Address</h6>
                                                <p className="fw-medium mb-2 fs-16" id="billing-name">
                                                    Raquel Murillo
                                                </p>
                                                <p className="text-muted mb-1" id="billing-address-line-1">
                                                    4430 Holt Street, Miami, Florida-33169
                                                </p>
                                                <p className="text-muted mb-1">
                                                    <span>Phone: +</span>
                                                    <span id="billing-phone-no">(123) 561-238-1000</span>
                                                </p>
                                                <p className="text-muted mb-0">
                                                    <span>Tax: </span>
                                                    <span id="billing-tax-no">65-498700</span>{' '}
                                                </p>
                                            </Col>

                                            <Col xs={6}>
                                                <h6 className="text-muted text-uppercase fw-semibold fs-14 mb-3">Shipping Address</h6>
                                                <p className="fw-medium mb-2 fs-16" id="shipping-name">
                                                    Raquel Murillo
                                                </p>
                                                <p className="text-muted mb-1" id="shipping-address-line-1">
                                                    4430 Holt Street, Miami, Florida-33169
                                                </p>
                                                <p className="text-muted mb-1">
                                                    <span>Phone: +</span>
                                                    <span id="shipping-phone-no">(123) 561-238-1000</span>
                                                </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Col>
                                <Col lg={12}>
                                    <Card.Body className="p-4">
                                        <div className="table-responsive">
                                            <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                                <thead>
                                                    <tr className="table-active">
                                                        <th scope="col" style={{ width: '50px' }}>
                                                            #
                                                        </th>
                                                        <th scope="col">Product Details</th>
                                                        <th scope="col">Rate</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col" className="text-end">
                                                            Amount
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody id="products-list">
                                                    <tr>
                                                        <th scope="row">01</th>
                                                        <td className="text-start">
                                                            <span className="fw-medium">World's most expensive t shirt</span>
                                                            <p className="text-muted mb-0">Graphic Print Men &amp; Women Sweatshirt</p>
                                                        </td>
                                                        <td>$266.24</td>
                                                        <td>03</td>
                                                        <td className="text-end">$798.72</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">02</th>
                                                        <td className="text-start">
                                                            <span className="fw-medium">Ninja Pro Max Smartwatch</span>
                                                            <p className="text-muted mb-0">
                                                                large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor
                                                            </p>
                                                        </td>
                                                        <td>$247.27</td>
                                                        <td>01</td>
                                                        <td className="text-end">$247.27</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">03</th>
                                                        <td className="text-start">
                                                            <span className="fw-medium">Girls Mint Green &amp; Off-White Open Toe Flats</span>
                                                            <p className="text-muted mb-0">Fabric:Synthetic · Color:Green · Shoe Type:Sandals</p>
                                                        </td>
                                                        <td>$24.07</td>
                                                        <td>05</td>
                                                        <td className="text-end">$120.35</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">04</th>
                                                        <td className="text-start">
                                                            <span className="fw-medium">Carven Lounge Chair Red</span>
                                                            <p className="text-muted mb-0">Carven Fabric Lounge Chair in Red Color</p>
                                                        </td>
                                                        <td>$209.99</td>
                                                        <td>01</td>
                                                        <td className="text-end">$209.99</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="border-top border-top-dashed mt-2">
                                            <Table className="table-borderless table-nowrap align-middle mb-0 ms-auto" style={{ width: '250px' }}>
                                                <tbody>
                                                    <tr>
                                                        <td>Sub Total</td>
                                                        <td className="text-end">$1376.33</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Estimated Tax (12.5%)</td>
                                                        <td className="text-end">$172.04</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Discount <small className="text-muted">(TONER50)</small>
                                                        </td>
                                                        <td className="text-end">- $206.45</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipping Charge</td>
                                                        <td className="text-end">$65.00</td>
                                                    </tr>
                                                    <tr className="border-top border-top-dashed fs-15">
                                                        <th scope="row">Total Amount</th>
                                                        <th className="text-end">$1406.92</th>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="mt-3">
                                            <h6 className="text-muted text-uppercase fw-semibold mb-3">Payment Details:</h6>
                                            <p className="text-muted mb-1">
                                                Payment Method:{' '}
                                                <span className="fw-medium" id="payment-method">
                                                    Mastercard
                                                </span>
                                            </p>
                                            <p className="text-muted mb-1">
                                                Card Holder:{' '}
                                                <span className="fw-medium" id="card-holder-name">
                                                    Raquel Murillo
                                                </span>
                                            </p>
                                            <p className="text-muted mb-1">
                                                Card Number:{' '}
                                                <span className="fw-medium" id="card-number">
                                                    xxx xxxx xxxx 1234
                                                </span>
                                            </p>
                                            <p className="text-muted">
                                                Total Amount: <span className="fw-medium">$ </span>
                                                <span id="card-total-amount">1406.92</span>
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <div className="alert alert-info">
                                                <p className="mb-0">
                                                    <span className="fw-semibold">NOTES:</span>
                                                    <span id="note">
                                                        All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or
                                                        credit card or direct payment online. If account is not paid within 7 days the credits details
                                                        supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                            <Link to="print()" className="btn btn-success" onClick={InvoicePrint}>
                                                <i className="ri-printer-line align-bottom me-1"></i> Print
                                            </Link>
                                            <Link to="#" className="btn btn-primary">
                                                <i className="ri-download-2-line align-bottom me-1"></i> Download
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Col>
                        </Row>
                    </Card>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
