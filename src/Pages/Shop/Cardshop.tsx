import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Button, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Shoporder } from 'Components/ShopTopBar'
import DeleteModal from 'Components/DeleteModal'

import { useNavigate } from 'react-router-dom'

import config from 'config/config'
import { useCart } from 'context/cart-context'

const Cardshop = () => {
    let navigate = useNavigate()

    let { cartItems, addItem, deleteItem, deleteAll } = useCart()

    // const [productcount, setProductcount] = useState(productData)
    const [charge, setCharge] = useState(0)
    const [dis, setDis] = useState(0)
    const [tax, setTax] = useState(0)
    //delete id
    const [id, setId] = useState('')
    //modal
    const [removeModel, setRemovemodel] = useState(false)
    const RemoveModel = (id: any) => {
        setRemovemodel(!removeModel)
        setId(id)
    }

    const deleteData = () => {
        // setProductcount(productData?.filter((delet: any) => delet.id !== id))
    }

    const assinged = cartItems.map((M: any) => M.count * M.product.price)
    let subtotal = 0
    for (let i = 0; i < assinged.length; i++) {
        subtotal += Math.round(assinged[i])
    }

    useEffect(() => {
        let dis: any = (0.15 * subtotal).toFixed(2)
        let tax = 0.125 * subtotal

        if (subtotal !== 0) {
            setCharge(65)
        } else {
            setCharge(0)
        }
        setDis(dis)
        setTax(tax)
    }, [subtotal])

    return (
        <React.Fragment>
            <Col lg={8}>
                <div className="d-flex align-items-center mb-4">
                    <h5 className="mb-0 flex-grow-1 fw-medium">
                        There are <span className="fw-bold product-count">{cartItems.length}</span> products in your cart
                    </h5>
                    <div className="flex-shrink-0">
                        <Button className="text-decoration-underline link-secondary" onClick={deleteAll}>
                            Clear Cart
                        </Button>
                    </div>
                </div>
                {cartItems.map((item: any, inx: number) => {
                    return (
                        <Card key={inx} className="product">
                            <Card.Body className="p-4">
                                <Row className="gy-3">
                                    <Col className="col-sm-auto">
                                        <div className="avatar-lg h-100">
                                            <div className={`avatar-title rounded py-3`}>
                                                <Image src={item.product.image} alt="" className="avatar-md" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-sm">
                                        <Link to="#">
                                            <h5 className="fs-16 lh-base mb-1">{item.product.name}</h5>
                                        </Link>
                                        <ul className="list-inline text-muted fs-13 mb-3"></ul>
                                        <div className="input-step">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    deleteItem(item.product.slug, {})
                                                }}
                                            >
                                                -
                                            </Button>
                                            <Form.Control type="number" className="product-quantity" value={item.count} min="0" max="100" readOnly />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    addItem(item.product.slug, item.options)
                                                }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col className="col-sm-auto">
                                        <div className="text-lg-end">
                                            <p className="text-muted mb-1 fs-12">Item Price:</p>
                                            <h5 className="fs-16">
                                                $<span className="product-price">{item.product.price}</span>
                                            </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <Row className="align-items-center gy-3">
                                    <Col className="col-sm">
                                        <div className="d-flex flex-wrap my-n1">
                                            <div>
                                                <Link
                                                    to="#"
                                                    className="d-block text-body p-1 px-2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#removeItemModal"
                                                    onClick={() => {
                                                        deleteItem(item.product.slug, true)
                                                    }}
                                                >
                                                    <i className="ri-delete-bin-fill text-muted align-bottom me-1"></i> Remove
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="#" className="d-block text-body p-1 px-2">
                                                    <i className="ri-star-fill text-muted align-bottom me-1"></i> Add Wishlist
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-sm-auto">
                                        <div className="d-flex align-items-center gap-2 text-muted">
                                            <div>Total :</div>
                                            <h5 className="fs-14 mb-0">
                                                $<span className="product-line-price">{item.count * item.product.price}</span>
                                            </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    )
                })}
            </Col>
            <div className="col-xl-4">
                <div className="sticky-side-div">
                    <Shoporder subtotal={subtotal} dic={dis} charge={charge} tax={tax} total={subtotal + charge + tax - dis} />
                    <div className="hstack gap-2 justify-content-end">
                        <Button
                            variant="secondary"
                            className="btn btn-hover"
                            onClick={() => {
                                navigate('/')
                            }}
                        >
                            Continue Shopping
                        </Button>
                        <Button
                            variant="primary"
                            className="btn btn-hover"
                            onClick={() => {
                                navigate('/shop/checkout')
                            }}
                        >
                            Check Out <i className="ri-logout-box-r-line align-bottom ms-1"></i>
                        </Button>
                    </div>
                </div>
            </div>
            <DeleteModal removeModel={removeModel} hideModal={RemoveModel} deleteData={deleteData} />
        </React.Fragment>
    )
}

export default Cardshop
