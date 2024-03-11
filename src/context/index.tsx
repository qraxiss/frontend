import { createContext, useContext } from 'react'
import { UserProvider, UserContextType, useUser } from './user-context'
import { CartProvider, CartContextType, useCart } from './cart-context'
import { WishListProvider, WishListContextType, useWishList } from './wishlist'

const AllContext = createContext<any>({})

interface AllContextValue {
    user: UserContextType
    cart: CartContextType
    wishlist: WishListContextType
}

export const useAll = (): AllContextValue => {
    return useContext(AllContext)
}

export const Context = ({ children }: any) => {
    const allContextValue: AllContextValue = {
        user: useUser(),
        cart: useCart(),
        wishlist: useWishList()
    }

    return (
        <AllContext.Provider value={allContextValue}>
            <UserProvider>
                <CartProvider>
                    <UserProvider>
                        <WishListProvider>{children}</WishListProvider>
                    </UserProvider>
                </CartProvider>
            </UserProvider>
        </AllContext.Provider>
    )
}
