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
    },

    time: 0
})

export function useEarn() {
    return useContext(EarnContext) as EarnContextType
}

export function EarnProvider({ children }: { children: any }) {
    let xpRES = useQuery(xpGQL)
    let [xp, setXp] = useState(0)

    useEffect(() => {
        if (xpRES.data && !xpRES.loading && JSON.stringify(xpRES.data) !== JSON.stringify(xp)) {
            setXp(xpRES.data)
        }
    }, [xpRES.loading, xpRES.data])

    ///////
    let spinRES = useMutation(spinGQL)
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
    let loginStreakRES = useMutation(loginStreakGQL)
    let [loginStreak, setLoginStreak] = useState(0)

    useEffect(() => {

        if (loginStreakRES.data && !loginStreakRES.loading) {
            setLoginStreak(loginStreakRES.data)
            loginDataRES.refetch()
        }
    }, [loginStreakRES.loading])

    //////
    let loginDataRES = useQuery(loginDataGQL)
    let [loginData, setLoginData] = useState(0)

    useEffect(() => {
        ('loading')

        if (loginDataRES.data && !loginDataRES.loading && JSON.stringify(loginDataRES.data) !== JSON.stringify(loginData)) {
            setLoginData(loginDataRES.data)
        }
    }, [loginDataRES.loading, loginDataRES.data])

    //////
    let addXpRES = useMutation(addXpGQL)
    let [addXp, setAddXp] = useState(0)

    useEffect(() => {
        if (addXpRES.data && !addXpRES.loading) {
            setAddXp(addXpRES.data)
        }
    }, [addXpRES.loading])


    let [firstTime, setTime] = useState(0)


    
    useEffect(()=>{
        setTime(new Date().valueOf())
    }, [])


    useEffect(()=>{
        xpRES.refetch()
    }, [loginStreakRES.loading, spinRES.loading])

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
                spinRES,
                time:firstTime
            }}
        >
            {children}
        </EarnContext.Provider>
    )
}
