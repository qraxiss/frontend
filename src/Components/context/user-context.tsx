import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext<any>({})

export type UserContextType = {
    jwt: string | undefined | null
    setJwt: Function
}

export const useUser = () => {
    return useContext(UserContext) as UserContextType
}

export const UserProvider = ({ children }: any) => {
    let [jwt, setJwt] = useState<string | undefined | null>(localStorage.getItem('jwt'))
    let tempJwt = localStorage.getItem('jwt')

    if (jwt !== tempJwt){
        setJwt(tempJwt)
    }

    return <UserContext.Provider value={{ jwt, setJwt }}>{children}</UserContext.Provider>
}
