import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Shoporder } from 'Components/ShopTopBar'
import DeleteModal, { ModalAdd } from 'Components/MainModal/DeleteModal'

import { useNavigate } from 'react-router-dom'

const Selectaddress = () => {
    document.title = 'Shopcek'

    let navigate = useNavigate()

    const [id, setId] = useState('')

    const [removeModel, setRemovemodel] = useState(false)
    const RemoveModel = (id: any) => {
        setRemovemodel(!removeModel)
        setId(id)
    }

    const [addressModal, setAddressModal] = useState(false)
    const handleClose = () => setAddressModal(false)
    const handleShow = () => setAddressModal(true)

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col xl={8}>
                            <div>
                                <h4 className="fs-18 mb-4">Select or add an address</h4>
                                <Row className="mt-4">
                                    <Col lg={6}>
                                        <div className="text-center p-4 rounded-3 border border-2 border-dashed">
                                            <div className="avatar-md mx-auto mb-4">
                                                <div className="avatar-title bg-success-subtle text-success rounded-circle display-6">
                                                    <i className="bi bi-house-add"></i>
                                                </div>
                                            </div>
                                            <h5 className="fs-16 mb-3">Add New Address</h5>
                                            <Button
                                                variant="primary"
                                                className="btn-sm w-xs stretched-link addAddress-modal"
                                                data-bs-toggle="modal"
                                                data-bs-target="#addAddressModal"
                                                onClick={handleShow}
                                            >
                                                Add
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="hstack gap-2 justify-content-start mt-3">
                                    <Button onClick={()=>{
                                      navigate('/')
                                    }} variant="secondary" className="btn btn-hover">
                                        Continue Shopping
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="sticky-side-div">
                                <Shoporder />
                            </div>
                        </Col>
                    </Row>
                    <DeleteModal removeModel={removeModel} hideModal={RemoveModel} deleteData={"deleteData"} />
                    <ModalAdd addressModal={addressModal} handleClose={handleClose} />
                </Container>
            </section>
        </React.Fragment>
    )
}
export default Selectaddress
