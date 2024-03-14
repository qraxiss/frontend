export type cartItem = {
    product: any
    count: number
    options: any
}

export type CartContextType = {
    addItem: (product: cartItem) => void
    deleteItem: (slug: string, options: any, deleteAll?: boolean) => void
    deleteAll: () => void
    cartItems: any[]
}