import { createContext, useContext, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { disconnect } from '@wagmi/core'
import { wagmiConfig } from 'lib/rainbow'

import { useNavigate } from 'react-router-dom'

import {
    loginWithWallet as loginWithWalletMutation,
    registerWithWallet as registerWithWalletMutation,
    login as loginMutation,
    register as registerMutation
} from 'lib/common-queries'

import { useMutation } from 'lib/query-wrapper'

const UserContext = createContext<any>({})

export type UserContextType = {
    jwt: string | undefined | null
    setJwt: Function
    deleteJwt: Function
    isConnected: boolean
    status: 'login' | 'logout' | 'register' | 'public'
    setStatus: Function
    address: string
    loginWithWallet: any
    registerWithWallet: any
    login: any
    register: any
}

export const useUser = () => {
    return useContext(UserContext) as UserContextType
}

export const UserProvider = ({ children }: any) => {
    let navigate = useNavigate()

    let [jwt, setJwt] = useState<string | undefined | null>(localStorage.getItem('jwt'))
    let [status, setStatus] = useState<'login' | 'logout' | 'register' | 'public'>('public')

    let { address, isConnected } = useAccount({
        config: wagmiConfig
    })

    let loginWithWallet = useMutation(loginWithWalletMutation)
    let registerWithWallet = useMutation(registerWithWalletMutation)
    let login = useMutation(loginMutation)
    let register = useMutation(registerMutation)

    let deleteJwt = () => {
        disconnect(wagmiConfig)
        localStorage.removeItem('jwt')
        setJwt(null)
        setStatus('public')
    }

    useEffect(() => {
        if (jwt) {
            localStorage.setItem('jwt', jwt)
            setStatus('login')
        }
    }, [jwt])

    useEffect(() => {
        if (isConnected && status === 'public') {
            loginWithWallet.fn({
                variables: {
                    walletAddress: address
                }
            })
        }

        if (isConnected && status === 'register') {
            registerWithWallet.fn({
                variables: {
                    walletAddress: address
                }
            })
        }
    }, [isConnected, status])

    useEffect(() => {
        if (!loginWithWallet.data) {
            return
        }
        if (!isConnected) {
            return
        }
        if (loginWithWallet.data.jwt === null) {
            console.log('null geldi')
            console.log(loginWithWallet.data)
            disconnect(wagmiConfig)
            return
        }

        setJwt(loginWithWallet.data.jwt)
        setStatus('login')
    }, [loginWithWallet.loading])

    useEffect(() => {
        if (!login.loading && login.data && login.data.jwt) {
            setJwt(login.data.jwt)
            setStatus('login')
        }
    }, [login.loading, login.data])

    useEffect(() => {
        if (registerWithWallet.error){
            disconnect(wagmiConfig)
            return 
        }

        if (registerWithWallet.data?.jwt) {
            setJwt(registerWithWallet.data.jwt)
            setStatus('login')
        }
    }, [registerWithWallet.loading])

    useEffect(() => {
        if (!register.loading && register.data && register.data.jwt) {
            setJwt(register.data.jwt)
            setStatus('login')
        }
    }, [register.loading, register.data])

    return (
        <UserContext.Provider value={{ jwt, setJwt, deleteJwt, isConnected, address, login, loginWithWallet, register, registerWithWallet, status, setStatus }}>
            {children}
        </UserContext.Provider>
    )
}
