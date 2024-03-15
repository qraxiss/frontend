import { createContext, useContext, useEffect, useState } from 'react'
import { cartQuery, addItemToCart, deleteItemFromCart, addManyProductToCart, newOrder, orders } from '../../lib/common-queries'
import { useQuery, useMutation } from '../../lib/query-wrapper'
import { useUser } from '../user'
import { isArray } from 'lodash'

import { deleteAll, deleteItemWrapper } from './delete'
import { addItemWrapper } from './add'

import { CartContextType } from './types'
export type { CartContextType }

const CartContext = createContext<any>({})

export const useCart = () => {
    return useContext(CartContext) as CartContextType
}

export const CartProvider = ({ children }: any) => {
    let { status, jwt, register, registerWithWallet, login, loginWithWallet } = useUser()

    let cartData = useQuery(cartQuery)

    let addItem = useMutation(addItemToCart)
    let addManyProduct = useMutation(addManyProductToCart)
    let deleteItem = useMutation(deleteItemFromCart)

    let newOrderGql = useMutation(newOrder)
    let [orderStatus, setOrderStatus] = useState(false)

    let orderGql = useQuery(orders)

    useEffect(() => {
        if (!newOrderGql.loading && newOrderGql.data) {
            setOrderStatus(true)
        }
    }, [newOrderGql.loading])

    useEffect(() => {
        if (orderStatus) {
            setCartItems([])
            orderGql.refetch()
        }
    }, [orderStatus])

    const [cartItems, setCartItems] = useState<any[]>([])
    const addToCart = (newItem: any) => {
        setCartItems([...cartItems, newItem])
    }

    // let [getSingleProduct, singleProduct] = useLazyQuery(getSingleProductBySlug) as any
    let [options, setOptions] = useState<any>({})

    let [count, setCount] = useState(1)
    let [refetch, setRefetch] = useState(true)
    let addItemFn = addItemWrapper(cartItems, setCartItems, addItem.fn, addToCart, setCount, setOptions)
    let deleteItemFn = deleteItemWrapper(cartItems, setCartItems, deleteItem.fn)
    let deleteAllFn = deleteAll(cartItems, deleteItemFn, setCartItems)

    // store in local
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    // after register
    useEffect(() => {
        if (!jwt) {
            return
        }

        addManyProduct.fn({
            variables: {
                items: cartItems.map((item) => {
                    return {
                        slug: item.product.slug,
                        count: item.count,
                        options: item.options
                    }
                })
            }
        })
    }, [registerWithWallet?.loading, register?.loading])

    // after login
    useEffect(() => {
        if (!jwt) {
            return
        }
        cartData.refetch()
        setRefetch(!refetch)
    }, [loginWithWallet?.loading, login?.loading])

    // store in localstorage

    // first mount
    useEffect(() => {
        //if logged in get from backend
        if (jwt) {
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
        }
        // if not logged in get from localStorage
        else {
            let items = localStorage.getItem('cartItems')
            if (items) {
                let localCart = JSON.parse(items)
                if (isArray(localCart)) {
                    setCartItems(localCart)
                }
            }
        }
    }, [cartData.loading])

    // if cartData.refecth called, set data
    useEffect(() => {
        if (cartData.data) {
            if (JSON.stringify(cartData.data) !== JSON.stringify(cartItems)) {
                setCartItems(cartData.data)
            }
        }
    }, [refetch])

    return (
        <CartContext.Provider
            value={{
                cartItems,
                deleteItem: deleteItemFn,
                addItem: addItemFn,
                deleteAll: deleteAllFn,
                orderStatus,
                newOrderGql,
                orderGql,
                setOrderStatus
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

// export type {CartContextType}
