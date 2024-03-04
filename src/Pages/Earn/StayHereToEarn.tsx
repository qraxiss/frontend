import { Button } from 'react-bootstrap'

export default function StayHereToEarn() {
    let box = 
       <div className='col'>
         <div className="blue-box divider">
            <p>00</p>
        </div>
        <p className="time">Days</p>
       </div>
    

    return (
        <section className="section pb-0">
            <div className="stay-here-to-earn">
                <div className="top-container">
                    <div className="title">
                        <h1>Stay Here To Earn</h1>
                    </div>
                    <div className="claim">
                        <Button className="btn btn btn-primary">Claim</Button>
                        <p>Earn rewards based on the time you spend here</p>
                    </div>

                    <div className="blue-box-container">
                        {box}
                        <div className="divider">:</div>
                        {box}
                        <div className="divider">:</div>
                        {box}
                        <div className="divider">:</div>
                        {box}
                    </div>
                </div>
            </div>
        </section>
    )
}