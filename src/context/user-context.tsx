import { createContext, useContext, useEffect, useState } from 'react'
import { useAccount, useSignMessage } from 'wagmi'



const UserContext = createContext<any>({})

export type UserContextType = {
    jwt: string | undefined | null
    setJwt: Function
    deleteJwt: Function
    walletAddress: string
    isConnected: boolean
}

export const useUser = () => {
    return useContext(UserContext) as UserContextType
}

export const UserProvider = ({ children }: any) => {



    let [jwt, setJwt] = useState<string | undefined | null>(localStorage.getItem('jwt'))

    const { isConnected, address } = useAccount()
    useEffect(() => {
        // console.log(address, mainnet.id, signMessageData, variables, signMessage)
    }, [isConnected, address])

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

    return <UserContext.Provider value={{ jwt, setJwt, deleteJwt, walletAddress: address, isConnected }}>{children}</UserContext.Provider>
}
