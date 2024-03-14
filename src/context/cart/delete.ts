import { areObjectsEqual } from "../../lib/helpers"

export function deleteItemWrapper(cartItems: any[], setCartItems: Function, deleteGqlFn: Function) {
    return (slug: string, options: any, deleteAll: boolean = false) => {
        let itemIndex = cartItems.findIndex((product: any) => {
            return product.product.slug === slug && areObjectsEqual(product.options, options)
        })

        if (itemIndex === -1) {
            return
        }

        if (deleteAll || cartItems[itemIndex].count <= 1) {
            setCartItems(
                cartItems.filter((product: any, index: number) => {
                    return index !== itemIndex
                })
            )
        } else {
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


export function deleteAll(cartItems: any[], deleteItem: Function, setCartItems: Function) {
    return () => {
        for (let index = 0; index < cartItems.length; index++) {
            const item = cartItems[index]

            for (let indexi = 0; indexi < item.count; indexi++) {
                deleteItem(item.product.slug, item.options, true)
            }
        }

        setCartItems([])
    }
}
