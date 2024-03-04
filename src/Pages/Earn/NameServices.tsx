import { Form, Button } from 'react-bootstrap'

export default function NameService() {
    return (
        <section className="section pb-0">
            <div className="name-services">
                <div className="top-container">
                    <h1>.shpc Name Services</h1>
                    <div className="claim">
                        <p>Increase XP Gain multiplier</p>
                    </div>
                </div>

                <div className="input">
                    <Form.Control size="lg" type="text" placeholder="Enter a Handle" />
                    <Button className="btn btn btn-secondary">Buy</Button>
                </div>

                <div className="payment">
                    <div className="prices">
                        <div className="price">
                            <p>8 - 11 digits:</p>
                            <p className="lined-text">000000000</p>
                            <p>4.99USDT</p>
                        </div>
                        <div className="price">
                            <p>8 - 11 digits:</p>
                            <p className="lined-text">000000000</p>
                            <p>4.99USDT</p>
                        </div>
                        <div className="price">
                            <p>8 - 11 digits:</p>
                            <p className="lined-text">000000000</p>
                            <p>4.99USDT</p>
                        </div>
                    </div>

                    <div className="vl" />

                    <div className="method">
                        <p>Payment Method</p>
                        <p>BNB (Binance Smart Chain)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
