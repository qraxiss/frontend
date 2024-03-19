import { Button, Image } from 'react-bootstrap'

import wheel from '../../assets/images/earn/wheel.png'

export default function SpinToEarn() {
    return (
        <section className="section pb-0">
            <div className="spin-to-earn">
                <div className="top-container">
                    <div className="title">
                        <h1>Spin To Earn</h1>
                    </div>
                    <div className="claim">
                        <Button className="btn btn btn-secondary">Spin</Button>
                        <p>Spin the wheel and win the prize.</p>
                    </div>

                    <div className="box">
                        <div className="rules">
                            <p>You can turn it once in 24 hours</p>
                        </div>

                        <Image
                            className="wheel"
                            src={wheel}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
