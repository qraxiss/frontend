import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext<any>({})

export type UserContextType = {
    jwt: string | undefined | null
    setJwt: Function
    deleteJwt: Function
}

export const useUser = () => {
    return useContext(UserContext) as UserContextType
}

export const UserProvider = ({ children }: any) => {
    let [jwt, setJwt] = useState<string | undefined | null>(localStorage.getItem('jwt'))

    let deleteJwt = () => {
        localStorage.removeItem('jwt')
        setJwt(null)
    }

    return <UserContext.Provider value={{ jwt, setJwt, deleteJwt }}>{children}</UserContext.Provider>
}
