import { createContext, useContext, useEffect, useState } from 'react'

import { BinanceContextType } from './types'

import axios from 'axios'
export type { BinanceContextType }

export const BinanceContext = createContext<BinanceContextType>({
    bnb: 0
})

export const useBinance = () => {
    return useContext(BinanceContext) as BinanceContextType
}

export async function callPrice({ setBnb, call, setCall }: { setBnb: Function; call: boolean; setCall: Function }) {
    const bnburl = 'https://api.binance.com/api/v3/klines'

    let res = await axios.get(bnburl, {
        params: {
            limit: '1',
            interval: '1s',
            symbol: 'BNBUSDT'
        }
    })
    setBnb(Number(res.data[0][4]))

    setTimeout(() => {
        setCall(!call)
    }, 3000)
}

export function BinanceProvider({ children }: { children: any }) {
    let [bnb, setBnb] = useState(0)
    let [call, setCall] = useState(false)

    useEffect(() => {
        callPrice({ setBnb, call, setCall })
    }, [call])

    return <BinanceContext.Provider value={{ bnb }}>{children}</BinanceContext.Provider>
}
