import { createContext, useContext } from 'react'
import { UserProvider, UserContextType, useUser } from './user-context'
import { CartProvider, CartContextType, useCart } from './cart-context'

const AllContext = createContext<any>({})

interface AllContextValue {
    user: UserContextType
    cart: CartContextType
}

export const useAll = (): AllContextValue => {
    return useContext(AllContext)
}

export const Context = ({ children }: any) => {
    const userContextValue = useUser()
    const cartContextValue = useCart()
  
    const allContextValue: AllContextValue = {
      user: userContextValue,
      cart: cartContextValue,
    };
  
    return (
      <AllContext.Provider value={allContextValue}>
        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </AllContext.Provider>
    );
  };
  