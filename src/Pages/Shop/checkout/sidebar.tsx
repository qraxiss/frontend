import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { ConnectButton } from '@rainbow-me/rainbowkit'

import { useBinance } from 'context/binance'
import { useCart } from 'context/cart'
import { buyWithWallet } from 'lib/rainbow'

export const Shoporder = () => {
    let navigate = useNavigate()

    let { bnb } = useBinance()
    let { cartItems } = useCart()

    let total: number = 0
    cartItems.forEach((item) => {
        total = total + item.count * item.product.price
    })

    let price = (total / bnb) * (103 / 100)

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

                        <div className="info-text">
                            Your personal data will be used to process your order, support your experience throughout this website, and for other
                            purposes described in our privacy policy.
                        </div>
                        <Form.Check className="info-text" label="I have read and agree to the website terms and conditions" />
                    </div>
                </Card.Body>

                <Button
                    className="btn btn-hover btn-soft-info info-text"
                    onClick={() => {
                        buyWithWallet(() => {
                            console.log('success')
                        }, price)
                    }}
                >
                    Pay {price.toFixed(3)} BNB <i className="ri-arrow-right-line label-icon align-middle ms-1"></i>
                </Button>
            </Card>
        </React.Fragment>
    )
}
