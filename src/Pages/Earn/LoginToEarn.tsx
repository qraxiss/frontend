import { Image, Button } from 'react-bootstrap'

export default function LoginToEarn() {
    let img = <Image src="http://145.239.90.41:8000/uploads/thumbnail_Adsiz_tasarim_3_c6823fee7d.png?updatedAt=2024-03-02T08%3A44%3A47.830Z" />

    let box = (
        <div className="purple-box">
            <h3>Title</h3>
            <div>{img}</div>
            <h3>Day</h3>
        </div>
    )

    return (
        <section className="section pb-0">
            <div className="login-to-earn">
                <div className="top-container">
                    <h1>Login To Earn</h1>
                    <div className="claim">
                        <p>Login 7 days in a row, and your rewards will grow</p>
                        <Button className="btn btn btn-secondary">Claim</Button>
                    </div>
                </div>
                <div className="purple-box-container">
                    {box}
                    {box}
                    {box}
                    {box}
                    {box}
                    {box}
                    {box}
                </div>
            </div>
        </section>
    )
}
