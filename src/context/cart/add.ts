import { areObjectsEqual } from 'lib/helpers'
import { cartItem } from './types'

export function addItemWrapper(
    cartItems: cartItem[],
    setCartItems: Function,
    addItemGqlFn: Function,
    addToCart: Function,
    setCount: Function,
    setOptions: Function
) {
    return (product: cartItem) => {
        setCount(product.count)
        setOptions(product.options)

        let item = cartItems.findIndex((cartItem: any) => {
            return cartItem.product.slug === product.product.slug && areObjectsEqual(product.options, cartItem.options)
        })

        if (item !== -1) {
            let tempCartItems = structuredClone(cartItems)
            tempCartItems[item].count = tempCartItems[item].count + product.count
            setCartItems(tempCartItems)
        } else {
            addToCart(product)
        }

        addItemGqlFn({
            variables: {
                slug: product.product.slug,
                count: product.count,
                options: product.options
            }
        })
    }
}
