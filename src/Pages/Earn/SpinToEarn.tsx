import { Button, Image } from 'react-bootstrap'

import wheel from '../../assets/images/earn/wheel.png'

// @ts-ignore
import WheelComponent from 'react-wheel-of-prizes'
import { useState } from 'react'
import { useEarn } from 'context/earn'

export default function SpinToEarn() {
    const segments = ['10 XP', '20 XP', '30 XP', '40 XP', '50 XP', '60 XP']
    const segColors = ['#13c5f0', '#f556b7', '#13c5f0', '#f556b7', '#13c5f0', '#f556b7']

    const [prize, setPrize] = useState<string | undefined>(undefined)
    const [claimAvailable, setClaimAvailable] = useState<boolean>(false)

    let { spinRES } = useEarn()

    return (
        <section className="section pb-0">
            <div className="spin-to-earn">
                <div className="top-container">
                    <div className="title">
                        <h1>Spin To Earn</h1>
                    </div>
                    <div className="claim">
                        <Button
                            disabled={!claimAvailable}
                            className="btn btn btn-secondary"
                            onClick={() => {
                                if (prize) {
                                    spinRES.fn({
                                        variables: {
                                            point: Number(prize.replace(' XP', ''))
                                        }
                                    })
                                    setClaimAvailable(false)
                                }
                            }}
                        >
                            Claim
                        </Button>
                        <p>Spin the wheel and win the prize.</p>
                    </div>

                    <div className="box">
                        <div className="rules">
                            <p>You can turn it once in 24 hours</p>
                        </div>

                        <div className="wheel">
                            <WheelComponent
                                segments={segments}
                                segColors={segColors}
                                onFinished={(winner: any) => {
                                    setPrize(winner)
                                    setClaimAvailable(true)
                                }}
                                primaryColor="white"
                                contrastColor="#faca30"
                                isOnlyOnce={false}
                                size={200}
                                upDuration={500}
                                downDuration={600}
                                fontFamily="Helvetica"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
