import { createContext, useContext, useEffect, useState } from 'react'

import { cartQuery, addItemToCart, deleteItemFromCart } from './common-queries'
import { useQuery, useMutation } from './query-wrapper'


const GeneralContext = createContext<any>({})

export const useGeneral = () => {
    return useContext(GeneralContext) as {
        addItem: Function,
        deleteItem: Function,
        cartItems: any
    }
}

export const GeneralProvider = ({ children }: any) => {
    let cartData = useQuery(cartQuery)
    let addItem = useMutation(addItemToCart)
    let deleteItem = useMutation(deleteItemFromCart)

    const [cartItems, setCartItems] = useState<any[]>([])

    useEffect(()=>{
        if (cartData.loading) {
            return
        }
        if (cartData.error) {
            return
        }
        if (!cartData.data) {
            return
        }

        setCartItems(cartData.data)

    }, [cartData.loading])

    useEffect(()=>{
        if (cartData.data) setCartItems(cartData.data)
    }, [cartData.data])

    useEffect(()=>{
        cartData.refetch()
        console.log(cartData.loading, 'refetch')
    }, [deleteItem.loading, addItem.loading])

    return <GeneralContext.Provider value={{ cartItems, deleteItem: deleteItem.fn, addItem: addItem.fn }}>{children}</GeneralContext.Provider>
}
