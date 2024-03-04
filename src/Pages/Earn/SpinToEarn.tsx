import { Button, Image } from 'react-bootstrap'

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
                        <p>
                            You can turn it once in 24 hours
                        </p><p>
                            You can turn it once in 24 hours
                        </p><p>
                            You can turn it once in 24 hours
                        </p><p>
                            You can turn it once in 24 hours
                        </p>

                        </div>

                        <Image className='wheel' src="http://145.239.90.41:8000/uploads/thumbnail_lucky_wheel_c807a72256.png?updatedAt=2024-03-04T09%3A26%3A34.443Z" />
                    </div>
                </div>
            </div>
        </section>
    )
}
