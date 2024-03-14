import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ModalAdd } from 'Components/MainModal/DeleteModal'
import { useUser } from 'context/user'

export const ShopingAddress = ({ title, HomeAdd, officeAdd }: any) => {
    const [addressModal, setAddressModal] = useState(false)
    const handleClose = () => setAddressModal(false)
    const handleShow = () => setAddressModal(true)

    let { recipient } = useUser()
    return (
        <React.Fragment>
            <div className="mt-4 pt-2">
                <div className="d-flex align-items-center mb-4">
                    <div className="flex-grow-1">
                        <h5 className="mb-0">{title || ''}</h5>
                    </div>
                    <div className="flex-shrink-0">
                        <Link to={'/shop/address'} className="badge bg-secondary-subtle text-secondary link-secondary">
                            Add Address
                        </Link>
                    </div>
                </div>
                <Row className="gy-3">
                    <Col lg={6} xs={12}>
                        <div className="form-check card-radio">
                            <Form.Control id="shippingAddress01" name="shippingAddress" type="radio" className="form-check-input" />
                            <Form.Label className="form-check-label" htmlFor="shippingAddress01">
                                <span className="text-muted fw-normal text-wrap mb-1 d-block">Recipient</span>
                                {Object.keys(recipient).map((item) => {
                                    return <span className="text-muted fw-normal text-wrap mb-1 d-block">{(recipient as any)[item]}</span>
                                })}
                            </Form.Label>
                        </div>
                        <div className="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
                            <div>
                                <div onClick={handleShow} className="d-block text-body p-1 px-2">
                                    <i className="ri-pencil-fill text-muted align-bottom me-1"></i> Edit
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <ModalAdd addressModal={addressModal} handleClose={handleClose} />
            </div>
        </React.Fragment>
    )
}
