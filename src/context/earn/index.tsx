import { createContext, useContext, useEffect, useState } from 'react'

import { xp as xpGQL, addXp as addXpGQL } from '../../lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'

import type { EarnContextType } from './types'
export type { EarnContextType }

export const EarnContext = createContext<EarnContextType>({
    xpGQL: {},
    xpRES: {},
    xp: 0,
    addXpGQL: {},
    addXpRES: {},
    addXp: 0
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
                addXpRES
            }}
        >
            {children}
        </EarnContext.Provider>
    )
}
