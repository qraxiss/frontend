import { Form, Button, Image } from 'react-bootstrap'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useEffect, useState } from 'react'

import { checkDomain as checkDomainGQL } from 'lib/common-queries'
import { useQuery } from 'lib/query-wrapper'

import length3 from '../../assets/images/earn/domain/3.png'
import length4 from '../../assets/images/earn/domain/4.png'
import length5 from '../../assets/images/earn/domain/5.png'
import length6 from '../../assets/images/earn/domain/6.png'
import length7 from '../../assets/images/earn/domain/7.png'
import length8 from '../../assets/images/earn/domain/8.png'
import length9 from '../../assets/images/earn/domain/9.png'

import { useBinance } from 'context/binance'

import { buyWithWallet } from 'lib/rainbow'
import { useEarn } from 'context/earn'
import { useNavigate } from 'react-router-dom'

let images = {
    1: length3,
    2: length3,
    3: length3,
    4: length4,
    5: length5,
    6: length6,
    7: length7,
    8: length8,
    9: length9,
    10: length9,
    11: length9,
    12: length9,
    13: length9,
    14: length9,
    15: length9
}

let prices = [
    { min: 3, max: 4, price: 69.99, xp: 6000 },
    { min: 5, max: 7, price: 39.99, xp: 4500 },
    { min: 8, max: 15, price: 6.99, xp: 3000 }
]

export function DomainModal({ domain, setClose }: { domain: string; setClose: Function }) {
    //@ts-ignore
    let { bnb } = useBinance()

    let navigate = useNavigate()

    let { addNewDomainToUserRES, addXpRES } = useEarn()

    let checkDomainRES = useQuery(checkDomainGQL, {
        fetchPolicy: 'no-cache', // Used for first execution
        nextFetchPolicy: 'no-cache', // Used for subsequent executions
        initialFetchPolicy: 'no-cache',
        variables: {
            domain
        }
    })

    let [checkDomain, setCheckDomain] = useState(false)

    useEffect(() => {
        if (!checkDomainRES.loading) {
            setCheckDomain(checkDomainRES.data)
        }
    }, [checkDomainRES.loading])

    let price = prices.find((price) => {
        return price.min <= domain.length && price.max >= domain.length
    }) || { min: 0, max: 0, price: 0, xp: 0 }


    let bnbPrice = price.price / bnb

    return (
        <div className="domain-modal">
            <div className="payment">
                <div className="prices">
                    <div className="top">
                        <Image className="length" src={(images as any)[domain.length]} />
                        <div className="text">
                            <div className="domain">{domain}</div>
                            <div className="info">Username is {checkDomain ? 'locked, please complete payment' : 'already buyed.'}</div>
                        </div>
                    </div>
                    <div className="price">
                        <p>
                            {price!.min} - {price!.max} digits:
                        </p>
                        <p className="lined-text">00000000000</p>
                        <p>{price!.price} USD</p>
                    </div>
                </div>

                <div className="vl" />

                <div className="method">
                    <p>Payment Method</p>
                    <ConnectButton />
                    <div className="actions">
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                setClose(true)
                            }}
                        >
                            Cancel
                        </button>
                        {checkDomain ? (
                            <button
                                className="btn btn-primary"
                                onClick={ () => {
                                    buyWithWallet(async() => {
                                        await addNewDomainToUserRES.fn({
                                            variables: {
                                                domain
                                            }
                                        })

                                        await addXpRES.fn({
                                            variables: {
                                                point: price.xp
                                            }
                                        })

                                        navigate('/account/domains')

                                    }, bnbPrice)
                                }}
                            >
                                Pay {bnbPrice.toFixed(5)} BNB
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function NameService() {
    let [close, setClose] = useState(true)
    let [domain, setDomain] = useState('')

    return (
        <section className="section pb-0">
            <div className="name-services">
                <div className="top-container">
                    <h1>Shopcek Domain Service</h1>
                    <div className="claim">
                        <p>Increase XP Gain multiplier</p>
                    </div>
                </div>

                <div className="input">
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter a Handle"
                        value={domain}
                        onChange={(e) => {
                            setDomain(e.target.value)
                        }}
                    />
                    <Button
                        className="btn btn btn-secondary"
                        onClick={() => {
                            setClose(false)
                        }}
                        disabled={!(domain.length >= 3 && domain.length <= 15)}
                    >
                        SEARCH
                    </Button>
                </div>

                {!close ? (
                    <DomainModal domain={domain} setClose={setClose} />
                ) : (
                    <div className="payment">
                        <div className="prices">
                            {prices.map((price) => {
                                return (
                                    <div className="price">
                                        <p>
                                            {price.min} - {price.max} digits:
                                        </p>
                                        <p className="lined-text">00000000000</p>
                                        <p>{price.price} USD</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="vl" />

                        <div className="method">
                            <p>Payment Method</p>
                            <ConnectButton />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
