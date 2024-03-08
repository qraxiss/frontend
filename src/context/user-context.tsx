import { createContext, useContext, useEffect, useState } from 'react'
import { useCart } from './cart-context'
import { useAccount } from 'wagmi'

const UserContext = createContext<any>({})

export type UserContextType = {
    jwt: string | undefined | null
    setJwt: Function
    deleteJwt: Function
    isConnected: boolean
    address: string
}

export const useUser = () => {
    return useContext(UserContext) as UserContextType
}

export const UserProvider = ({ children }: any) => {
    let [jwt, setJwt] = useState<string | undefined | null>(localStorage.getItem('jwt'))
    let { address, isConnected } = useAccount()

    let deleteJwt = () => {
        localStorage.removeItem('jwt')
        setJwt(null)
    }

    useEffect(() => {
        //login | register
        if (jwt) {
            localStorage.setItem('jwt', jwt)
        }
    }, [jwt])

    return <UserContext.Provider value={{ jwt, setJwt, deleteJwt, isConnected, address }}>{children}</UserContext.Provider>
}
