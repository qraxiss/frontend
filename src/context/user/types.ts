export type recipientTpye = {
    name: string
    address1: string
    address2: string
    city: string
    state_code: string
    state_name: string
    country_code: string
    country_name: string
    zip: string
    phone: string
    email: string
}

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
    recipient: recipientTpye
    me: any
}
