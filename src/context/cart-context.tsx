import { createContext, useContext, useEffect, useState } from 'react'

import { cartQuery, addItemToCart, deleteItemFromCart, getSingleProductBySlug } from '../lib/common-queries'
import { useQuery, useMutation, useLazyQuery } from '../lib/query-wrapper'
import { useUser } from './user-context'

const CartContext = createContext<any>({})

export type CartContextType = {
    addItem: (slug: string, count?: number) => void
    deleteItem: (slug: string, all?: boolean) => void
    deleteAll: () => void
    cartItems: any[]
}

export const useCart = () => {
    return useContext(CartContext) as CartContextType
}

function addItemWrapper(
    cartItems: any[],
    setCartItems: Function,
    addItemGqlFn: Function,
    singleProduct: any,
    getSingleProduct: Function,
    setCount: Function,
    refecth: any,
    setRefetch: Function
) {
    return (slug: string, count: number = 1) => {
        setCount(count)
        let item = cartItems.find((product: any) => {
            return product.product.slug === slug
        })

        if (item) {
            setCartItems(
                cartItems.map((product: any) => {
                    if (product.product.slug === slug) {
                        return {
                            ...product,
                            count: product.count + count
                        }
                    } else {
                        return product
                    }
                })
            )
        } else {
            getSingleProduct({
                variables: {
                    slug
                }
            })

            setRefetch(!refecth)
        }

        // TODO: fix backend and frontend
        for (let index = 0; index < count; index++) {
            addItemGqlFn({
                variables: {
                    slug
                }
            })
        }
    }
}

function deleteAll(cartItems: any[], deleteItem: Function, setCartItems: Function) {
    return () => {
        for (let index = 0; index < cartItems.length; index++) {
            const item = cartItems[index]

            for (let indexi = 0; indexi < item.count; indexi++) {
                deleteItem(item.product.slug, true)
            }
        }

        setCartItems([])
    }
}

function deleteItemWrapper(cartItems: any[], setCartItems: Function, deleteGqlFn: Function) {
    return (slug: string, all: boolean = false) => {
        let item = cartItems.find((product: any) => {
            return product.product.slug === slug
        })

        if (!item) {
            return
        }

        if (item.count > 1 && !all) {
            setCartItems(
                cartItems.map((product: any) => {
                    if (product.product.slug === slug) {
                        return {
                            ...product,
                            count: product.count - 1
                        }
                    } else {
                        return product
                    }
                })
            )

            deleteGqlFn({
                variables: {
                    slug
                }
            })
        } else {
            setCartItems(
                cartItems.filter((product: any) => {
                    return product.product.slug !== slug
                })
            )

            for (let index = 0; index < item.count; index++) {
                deleteGqlFn({
                    variables: {
                        slug
                    }
                })
            }
        }
    }
}

export const CartProvider = ({ children }: any) => {
    let { jwt } = useUser()

    let cartData = useQuery(cartQuery)
    let addItem = useMutation(addItemToCart)
    let deleteItem = useMutation(deleteItemFromCart)

    const [cartItems, setCartItems] = useState<any[]>([])

    let [getSingleProduct, singleProduct] = useLazyQuery(getSingleProductBySlug) as any

    let [count, setCount] = useState(1)
    let [refetch, setRefetch] = useState(true)
    let addItemFn = addItemWrapper(cartItems, setCartItems, addItem.fn, singleProduct, getSingleProduct, setCount, refetch, setRefetch)
    let deleteItemFn = deleteItemWrapper(cartItems, setCartItems, deleteItem.fn)
    let deleteAllFn = deleteAll(cartItems, deleteItemFn, setCartItems)

    const addToCart = (newProduct: any) => {
        setCartItems([...cartItems, { product: newProduct, count }])
    }

    useEffect(() => {

        if (singleProduct.data) {
            addToCart(singleProduct.data)
        }
    }, [singleProduct.loading, singleProduct.called, refetch])

    //after login send all data to backend
    useEffect(() => {
        if (jwt) {
            cartItems.forEach((item: any) => {
                addItem.fn({
                    variables: {
                        slug: item.product.slug
                    }
                })
            })
        }
    }, [jwt])

    // store in localstorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

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
                setCartItems(JSON.parse(items))
            }
        }
    }, [cartData.loading])

    // if cartData.refecth called, set data
    // useEffect(() => {
    //     if (cartData.data) {
    //         if (JSON.stringify(cartData.data) !== JSON.stringify(cartItems)) {
    //             setCartItems(cartData.data)
    //         }
    //     }
    // }, [cartData.data])

    //if addItem or deleteItem called get card again.
    // useEffect(() => {
    //     if (!jwt) {
    //         return
    //     }
    //     if (!deleteItem.loading && !addItem.loading) {
    //         cartData.refetch().then(() => {
    //             if (cartData.data) {
    //                 setCartItems(cartData.data)
    //             }
    //         })
    //     }
    // }, [deleteItem.loading, addItem.loading])

    return (
        <CartContext.Provider
            value={{
                cartItems,
                deleteItem: deleteItemFn,
                addItem: addItemFn,
                deleteAll: deleteAllFn
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
