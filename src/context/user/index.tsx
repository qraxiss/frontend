import { createContext, useContext, useEffect, useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { wagmiConfig } from 'lib/rainbow'

import {
    loginWithWallet as loginWithWalletMutation,
    registerWithWallet as registerWithWalletMutation,
    login as loginMutation,
    register as registerMutation,
    recipient as recipientQuery,
    me as meQuery,
    connectWallet as connectWalletMutation,
    choosenDomain as choosenDomainGQL
} from 'lib/common-queries'

import { useMutation, useQuery } from 'lib/query-wrapper'
import { UserContextType } from './types'

export type { UserContextType }

const UserContext = createContext<any>({})

export const useUser = () => {
    return useContext(UserContext) as UserContextType
}

export const UserProvider = ({ children }: any) => {
    let [jwt, setJwt] = useState<string | undefined | null>(localStorage.getItem('jwt'))
    let [status, setStatus] = useState<'login' | 'logout' | 'register' | 'public'>('public')

    let { disconnect } = useDisconnect({
        config: wagmiConfig
    })

    let { address, isConnected } = useAccount({
        config: wagmiConfig
    })

    ///////
    let choosenDomainRES = useQuery(choosenDomainGQL)
    let [choosenDomain, setChoosenDomainGQL] = useState('')

    useEffect(() => {
        if (choosenDomainRES.data && !choosenDomainRES.loading && JSON.stringify(choosenDomainRES.data) !== JSON.stringify(choosenDomain)) {
            setChoosenDomainGQL(choosenDomainRES.data.domain)
        }
    }, [choosenDomainRES.loading, choosenDomainRES.data])

    let loginWithWallet = useMutation(loginWithWalletMutation)
    let registerWithWallet = useMutation(registerWithWalletMutation)
    let connectWallet = useMutation(connectWalletMutation)

    let login = useMutation(loginMutation)
    let register = useMutation(registerMutation)

    let [recipientState, setRecipientState] = useState({
        name: '',
        address1: '',
        address2: '',
        city: '',
        state_code: '',
        state_name: '',
        country_code: '',
        country_name: '',
        zip: '',
        phone: '',
        email: ''
    })
    let recipient = useQuery(recipientQuery)
    useEffect(() => {
        if (recipient.data && !recipient.loading) {
            setRecipientState(recipient.data)
        }
    }, [recipient.loading])

    let [meState, setMeState] = useState({
        username: '',
        email: ''
    })

    let me = useQuery(meQuery)
    useEffect(() => {
        if (me.data && !me.loading) {
            setMeState(me.data)
        }
    }, [me.loading])

    let deleteJwt = () => {
        disconnect()
        localStorage.removeItem('jwt')
        setJwt(null)
    }

    useEffect(() => {
        if (jwt) {
            localStorage.setItem('jwt', jwt)
        }
    }, [jwt])

    useEffect(() => {
        if (isConnected) {
            connectWallet.fn({
                variables: {
                    walletAddress: address
                }
            })
        } else {
            deleteJwt()
        }
    }, [isConnected])

    useEffect(() => {
        if (!connectWallet.data) {
            return
        }
        if (!isConnected) {
            return
        }

        setJwt(connectWallet.data.jwt)
    }, [connectWallet.loading])

    return (
        <UserContext.Provider
            value={{
                jwt,
                setJwt,
                deleteJwt,
                isConnected,
                address: isConnected ? address : '',
                login,
                loginWithWallet,
                register,
                registerWithWallet,
                status,
                setStatus,
                recipient: recipientState,
                me: meState,
                choosenDomain: {
                    choosenDomain,
                    choosenDomainRES
                }
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
