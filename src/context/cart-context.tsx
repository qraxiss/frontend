import { createContext, useContext, useEffect, useState } from 'react'
import { cartQuery, addItemToCart, deleteItemFromCart, getSingleProductBySlug, addManyProductToCart } from '../lib/common-queries'
import { useQuery, useMutation, useLazyQuery } from '../lib/query-wrapper'
import { useUser } from './user-context'

export function areObjectsEqual(obj1: any, obj2: any) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}


const CartContext = createContext<any>({})

export type cartItem = {
    product: any
    count: number
    options: any
}

export type CartContextType = {
    addItem: (slug: string, options: any, count?: number) => void
    deleteItem: (slug: string, options: any, deleteAll?: boolean) => void
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
    getSingleProduct: Function,
    setCount: Function,
    refecth: any,
    setRefetch: Function,
    setOptions: Function
) {
    return (slug: string, options: any, count: number = 1) => {
        console.log(count)
        setCount(count)
        setOptions(options)

        let item = cartItems.find((product: any) => {
            return product.product.slug === slug
        })

        if (item) {
            let tempCartItems = cartItems.map((product: any) => {
                if (product.product.slug === slug) {
                    return {
                        ...product,
                        count: product.count + count
                    }
                } else {
                    return product
                }
            })

            setCartItems(tempCartItems)
        } else {
            getSingleProduct({
                variables: {
                    slug
                }
            })

            setRefetch(!refecth)
        }

        // TODO: fix backend and frontend

        addItemGqlFn({
            variables: {
                slug,
                count,
                options
            }
        })
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
    return (slug: string, options: any, deleteAll: boolean = false) => {
        let itemIndex = cartItems.findIndex((product: any) => {
            return product.product.slug === slug && areObjectsEqual(product.options, options)
        })

        if (itemIndex === -1) {
            return
        }

        if (deleteAll || cartItems[itemIndex].count <= 1){
            console.log(cartItems.filter((product: any, index: number) => {
                return index !== itemIndex
            }))

            setCartItems(
                cartItems.filter((product: any, index: number) => {
                    return index !== itemIndex
                })
            )
        } else{
            setCartItems(
                cartItems.map((product: any) => {
                    if (product.product.slug === slug && areObjectsEqual(product.options, options)) {
                        return {
                            ...product,
                            count: product.count - 1
                        }
                    } else {
                        return product
                    }
                })
            )
        } 

        deleteGqlFn({
            variables: {
                slug,
                options,
                deleteAll
            }
        })
    }
}

export const CartProvider = ({ children }: any) => {
    let { status, jwt } = useUser()

    let cartData = useQuery(cartQuery)
    let addItem = useMutation(addItemToCart)
    let addManyProduct = useMutation(addManyProductToCart)
    let deleteItem = useMutation(deleteItemFromCart)

    const [cartItems, setCartItems] = useState<cartItem[]>([])

    let [getSingleProduct, singleProduct] = useLazyQuery(getSingleProductBySlug) as any
    let [options, setOptions] = useState<any>({})

    let [count, setCount] = useState(1)
    let [refetch, setRefetch] = useState(true)
    let addItemFn = addItemWrapper(cartItems, setCartItems, addItem.fn, getSingleProduct, setCount, refetch, setRefetch, setOptions)
    let deleteItemFn = deleteItemWrapper(cartItems, setCartItems, deleteItem.fn)
    let deleteAllFn = deleteAll(cartItems, deleteItemFn, setCartItems)

    const addToCart = (newProduct: any, options: any) => {
        setCartItems([...cartItems, { product: newProduct, count, options }])
    }

    // if product dosent exist in cart already, get from backend with useLazyQuery
    useEffect(() => {
        if (singleProduct.data) {
            addToCart(singleProduct.data, options)
        }
    }, [singleProduct.loading, singleProduct.called, refetch])

    // store in local
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        // after register send all data to backend
        if (!jwt) {
            return
        }

        if (status === 'register') {
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
        } 
        //if user have a account, take all data from backend
        else if (status === 'login') {
            cartData.refetch()
        }
    }, [status, jwt])

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
            setRefetch(!refetch)
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
                deleteAll: deleteAllFn
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
