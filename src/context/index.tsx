import { createContext, useContext } from 'react'
import { UserProvider, UserContextType, useUser } from './user'
import { CartProvider, CartContextType, useCart } from './cart'
import { WishListProvider, WishListContextType, useWishList } from './wishlist'
import { BinanceProvider, BinanceContextType, useBinance } from './binance'
import { OrderProvider, OrderContextType, useOrder } from './order'

const AllContext = createContext<any>({})

interface AllContextValue {
    user: UserContextType
    cart: CartContextType
    wishlist: WishListContextType
    binance: BinanceContextType
    order: OrderContextType
}

export const useAll = (): AllContextValue => {
    return useContext(AllContext)
}

export const Context = ({ children }: any) => {
    const allContextValue: AllContextValue = {
        user: useUser(),
        cart: useCart(),
        wishlist: useWishList(),
        binance: useBinance(),
        order: useOrder()
    }

    return (
        <AllContext.Provider value={allContextValue}>
            <BinanceProvider>
                <CartProvider>
                    <UserProvider>
                        <OrderProvider>
                            <CartProvider>
                                <UserProvider>
                                    <WishListProvider>{children}</WishListProvider>
                                </UserProvider>
                            </CartProvider>
                        </OrderProvider>
                    </UserProvider>
                </CartProvider>
            </BinanceProvider>
        </AllContext.Provider>
    )
}
