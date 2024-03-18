import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

//component
import DeleteModal from 'Components/Modals/DeleteModal'

import { useNavigate } from 'react-router-dom'
import { useCart } from 'context/cart'

import { Text } from '../Images/Logo'

export const MainModal = ({ location }: any) => {
    const [show, setShow] = useState(false)
    const modalhide = () => setShow(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }, [location])

    return (
        <React.Fragment>
            <Modal show={show} onHide={modalhide} id="subscribeModal" contentClassName="border-0" size="lg" centered>
                <Modal.Body className="p-0 bg-info-subtle rounded">
                    <Row className="g-0 align-items-center">
                        <Col lg={6}>
                            <div className="p-4 h-100">
                                <span className="badge bg-info-subtle text-info fs-13">GET 10% SALE OFF</span>
                                <h2 className="display-6 mt-2 mb-3">
                                    Subscribe & Get <b>50% Special</b> Discount On Email
                                </h2>
                                <p className="mb-4 pb-lg-2 fs-16">Join our newsletter to receive the latest updates and promotion</p>
                                <Form action="#">
                                    <div className="position-relative ecommerce-subscript">
                                        <Form.Control type="email" className="rounded-pill border-0" placeholder="Enter your email" />
                                        <Button type="submit" className="btn btn-info btn-hover rounded-pill">
                                            Subscript
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="p-4 pb-0">
                                <Image src={''} alt="" fluid />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
