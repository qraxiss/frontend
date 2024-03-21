import { Image, Button, Container } from 'react-bootstrap'

import smallReward from '../../assets/images/earn/small-reward.png'
import mediumReward from '../../assets/images/earn/medium-reward.png'
import largeReward from '../../assets/images/earn/large-reward.png'
import { useEarn } from 'context/earn'
import { check10s } from 'lib/helpers'
import { useState, useEffect } from 'react'

let smallImg = <Image src={smallReward} className="small-image" />
let mediumImg = <Image src={mediumReward} className="medium-image" />
let largeImg = <Image src={largeReward} className="large-image" />

let boxData: { img: any; exp: number }[] = [
    { img: smallImg, exp: 30 },
    { img: smallImg, exp: 30 },
    { img: mediumImg, exp: 50 },
    { img: smallImg, exp: 30 },
    { img: smallImg, exp: 30 },
    { img: mediumImg, exp: 60 },
    { img: largeImg, exp: 80 }
]

export function Box({ exp, img, day }: { exp: number; img: any; day: number }) {
    return (
        <div className="purple-box">
            <p>Day {day}</p>
            <div>{img}</div>
            <p>+{exp} XP</p>
        </div>
    )
}

export default function LoginToEarn() {
    let { loginStreakRES, loginData, loginStreak} = useEarn()
    let [date, setDate] = useState(new Date(loginData.lastLogin))
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        }, 1000)
    }, [])

    return (
        <Container>
            <section className="section pb-0">
                <div className="login-to-earn">
                    <div className="top-container">
                        <h1>Login To Earn</h1>
                        <div className="claim">
                            <p>Login 7 days in a row, and your rewards will grow</p>
                            <Button disabled={!check10s(new Date(loginData.lastLogin))} className="btn btn btn-secondary" onClick={()=>{
                                loginStreakRES.fn({
                                    variables: {
                                        point: boxData[loginData.loginCount].exp
                                    }
                                })
                            }}>Claim</Button>
                        </div>
                    </div>
                    <div className="purple-box-container">
                        {boxData.map((item: any, index: number) => {
                            return (
                                <div className={`purple-box ${loginData.loginCount === index ? 'more-purple': ''}`} >
                                    <p>Day {index + 1}</p>
                                    <div>{item.img}</div>
                                    <p>+{item.exp} XP</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Container>
    )
}
