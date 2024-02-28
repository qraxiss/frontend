import { createContext, useContext, useEffect, useState } from 'react'

import { cartQuery, addItemToCart, deleteItemFromCart, getSingleProductBySlug } from '../../lib/common-queries'
import { useQuery, useMutation, useLazyQuery } from '../../lib/query-wrapper'
import { useUser } from './user-context'

const CartContext = createContext<any>({})

export type CartContextType = {
    addItem: Function
    deleteItem: Function
    cartItems: any
}

export const useCart = () => {
    return useContext(CartContext) as CartContextType
}

export const CartProvider = ({ children }: any) => {
    let {jwt} = useUser()


    let cartData = useQuery(cartQuery)
    let addItem = useMutation(addItemToCart)
    let deleteItem = useMutation(deleteItemFromCart)

    const [cartItems, setCartItems] = useState<any[]>([])

    const addToCart = (newProduct: any) => {
        setCartItems([...cartItems, { product: newProduct, count: 1 }])
    }

    let [getSingleProduct, singleProduct] = useLazyQuery(getSingleProductBySlug) as any
    function addItemLocal(variables: any) {
        let item = cartItems.find((product: any) => {
            return product.product.slug === variables.variables.slug
        })

        if (item) {
            setCartItems(
                cartItems.map((product: any) => {
                    if (product.product.slug === variables.variables.slug) {
                        return {
                            ...product,
                            count: product.count + 1
                        }
                    } else {
                        return product
                    }
                })
            )
        } else {
            getSingleProduct(variables)
        }
    }

    useEffect(() => {
        if (singleProduct.data) {
            addToCart(singleProduct.data)
        }
    }, [singleProduct.loading, singleProduct.called])

    function deleteItemLocal(variables: any) {
        let item = cartItems.find((product: any) => {
            return product.product.slug === variables.variables.slug
        })

        if (!item) {
            return
        }

        if (item.count > 1) {
            setCartItems(
                cartItems.map((product: any) => {
                    if (product.product.slug === variables.variables.slug) {
                        return {
                            ...product,
                            count: product.count - 1
                        }
                    } else {
                        return product
                    }
                })
            )
        } else {
            setCartItems(
                cartItems.filter((product: any) => {
                    return product.product.slug !== variables.variables.slug
                })
            )
        }
    }

    let addItemFn = jwt ? addItem.fn : addItemLocal
    let deleteItemFn = jwt ? deleteItem.fn : deleteItemLocal

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
    useEffect(() => {
        if (cartData.data) {
            if (JSON.stringify(cartData.data) !== JSON.stringify(cartItems)) {
                setCartItems(cartData.data)
            }
            console.log(cartData.data)
        }
    }, [cartData.data])

    //if addItem or deleteItem called get card again.
    useEffect(() => {
        if (!jwt) {
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

    return <CartContext.Provider value={{ cartItems, deleteItem: deleteItemFn, addItem: addItemFn }}>{children}</CartContext.Provider>
}
