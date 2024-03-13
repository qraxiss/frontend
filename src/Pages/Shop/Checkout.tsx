import React from 'react'
import { Col, Container, Row, Card, Button, Table, Image } from 'react-bootstrap'
import { Shoporder } from 'Components/ShopTopBar'
import { ShopingAddress } from './ShoppingAddress'

import { useNavigate } from 'react-router-dom'
import { useCart } from 'context/cart-context'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { buyWithWallet } from 'lib/rainbow'

const Checkout = () => {
    const navigate = useNavigate()
    let { cartItems } = useCart()

    document.title = 'Shopcek'
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Card>
                                <Card.Body>
                                    <div className="table-responsive table-card">
                                        <Table className="align-middle table-borderless table-nowrap text-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Count</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map((item, inx) => {
                                                    return (
                                                        <tr key={inx}>
                                                            <td className="justify-center-center">
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <div className={`avatar-title bg-${item.bg}-subtle rounded-3`}>
                                                                            <Image src={item.product.image} alt="" className="avatar-xs" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <h6>{item.product.name}</h6>
                                                                        {/* <p className="text-muted mb-0">{item.discription}</p> */}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td> ${item.product.price}</td>
                                                            <td className="text-center">{item.count}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                            <ShopingAddress title="Billing Address" />
                        </Col>
                        <Col lg={4}>
                            <div className="sticky-side-div">
                                <Shoporder subtotal="510.50" dic="18.00" charge="2.4" tax="1.6" total="630.25" />

                                
                            
                                <div className="hstack gap-2 justify-content-between justify-content-end">
                                    <Button
                                        className="btn btn-hover btn-soft-info w-100"
                                        onClick={() => {
                                            navigate('/shop/shopingcard')
                                        }}
                                    >
                                        Back To Cart <i className="ri-arrow-right-line label-icon align-middle ms-1"></i>
                                    </Button>
                                    
                                    <Button
                                        className="btn btn-hover btn-primary w-100"
                                        onClick={buyWithWallet}
                                    >
                                        Pay
                                    </Button>
                                </div>
                                
                            </div>

                            <ConnectButton label='Connect Wallet'></ConnectButton>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Checkout
