import { createContext, useContext, useEffect, useState } from 'react'

import {
    xp as xpGQL,
    addXp as addXpGQL,
    loginData as loginDataGQL,
    spinData as spinDataGQL,
    spin as spinGQL,
    loginStreak as loginStreakGQL
} from '../../lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'

import type { EarnContextType } from './types'
export type { EarnContextType }

export const EarnContext = createContext<EarnContextType>({
    xpGQL: {},
    xpRES: {},
    xp: 0,

    addXpGQL: {},
    addXpRES: {},
    addXp: 0,

    spinGQL: {},
    spinRES: {},
    spin: 0,

    spinDataGQL: {},
    spinDataRES: {},
    spinData: 0,

    loginStreakGQL: {},
    loginStreakRES: {},
    loginStreak: 0,

    loginDataGQL: {},
    loginDataRES: {},
    loginData: {
        lastLogin: 0,
        loginCount: 0
    }
})

export function useEarn() {
    return useContext(EarnContext) as EarnContextType
}

export function EarnProvider({ children }: { children: any }) {
    let xpRES = useQuery(xpGQL)
    let [xp, setXp] = useState(0)

    useEffect(() => {
        if (xpRES.data && !xpRES.loading) {
            setXp(xpRES.data)
        }
    }, [xpRES.loading])

    ///////
    let spinRES = useQuery(spinGQL)
    let [spin, setSpin] = useState(0)

    useEffect(() => {
        if (spinRES.data && !spinRES.loading) {
            setSpin(spinRES.data)
        }
    }, [spinRES.loading])

    //////
    let spinDataRES = useQuery(spinDataGQL)
    let [spinData, setSpinData] = useState(0)

    useEffect(() => {
        if (spinDataRES.data && !spinDataRES.loading) {
            setSpinData(spinDataRES.data)
        }
    }, [spinDataRES.loading])

    //////
    let loginStreakRES = useQuery(loginStreakGQL)
    let [loginStreak, setLoginStreak] = useState(0)

    useEffect(() => {
        if (loginStreakRES.data && !loginStreakRES.loading) {
            setLoginStreak(loginStreakRES.data)
        }
    }, [loginStreakRES.loading])

    //////
    let loginDataRES = useQuery(loginDataGQL)
    let [loginData, setLoginData] = useState(0)

    useEffect(() => {
        if (loginDataRES.data && !loginDataRES.loading) {
            setLoginData(loginDataRES.data)
        }
    }, [loginDataRES.loading])

    //////
    let addXpRES = useMutation(addXpGQL)
    let [addXp, setAddXp] = useState(0)

    useEffect(() => {
        if (addXpRES.data && !addXpRES.loading) {
            setAddXp(addXpRES.data)
        }
    }, [addXpRES.loading])

    return (
        <EarnContext.Provider
            value={{
                xp,
                xpGQL,
                xpRES,
                addXp,
                addXpGQL,
                addXpRES,
                loginData,
                loginDataGQL,
                loginDataRES,
                loginStreak,
                loginStreakGQL,
                loginStreakRES,
                spin,
                spinData,
                spinDataGQL,
                spinDataRES,
                spinGQL,
                spinRES
            }}
        >
            {children}
        </EarnContext.Provider>
    )
}
