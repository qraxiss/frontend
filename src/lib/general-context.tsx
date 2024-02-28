import { createContext, useContext, useEffect, useState } from 'react'

import { cartQuery, addItemToCart, deleteItemFromCart } from './common-queries'
import { useQuery, useMutation } from './query-wrapper'

const GeneralContext = createContext<any>({})

export const useGeneral = () => {
    return useContext(GeneralContext) as {
        addItem: Function
        deleteItem: Function
        cartItems: any
    }
}

export const GeneralProvider = ({ children }: any) => {
    let cartData = useQuery(cartQuery)
    let addItem = useMutation(addItemToCart)
    let deleteItem = useMutation(deleteItemFromCart)

    const [cartItems, setCartItems] = useState<any[]>([])

    // store in localstorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        //if logged in
        if (localStorage.getItem('jwt')) {
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
        } else {
            let items = localStorage.getItem('cartItems')
            if (items) {
                setCartItems(JSON.parse(items))
            }
        }
    }, [cartData.loading])

    useEffect(() => {
        if (cartData.data) {
            // Eğer cartItems mevcut değerle aynı değilse set et
            if (JSON.stringify(cartData.data) !== JSON.stringify(cartItems)) {
                setCartItems(cartData.data)
            }
            console.log(cartData.data)
        }
    }, [cartData.data])
    useEffect(() => {
        console.log('delete', deleteItem.loading, 'add', addItem.loading)

        if (!localStorage.getItem('jwt')) {
            return
        }
        if (!deleteItem.loading && !addItem.loading) {
            cartData.refetch().then(() => {
                if (cartData.data) {
                    setCartItems(cartData.data)
                    console.log(cartData.data)
                }
            })
        }
    }, [deleteItem.loading, addItem.loading])

    return <GeneralContext.Provider value={{ cartItems, deleteItem: deleteItem.fn, addItem: addItem.fn }}>{children}</GeneralContext.Provider>
}
