import { createContext, useContext, useEffect, useState } from 'react'

import { addWishList, deleteWishlist, wishlist, getSingleProductBySlug } from 'lib/common-queries'

import { useQuery, useMutation, useLazyQuery } from 'lib/query-wrapper'
import { WishListContextType } from './types'

import { addWishListWrapper } from './add'
import { deleteWishListWrapper } from './delete'

export type { WishListContextType }

const WishListContext = createContext<any>({})

export const useWishList = () => {
    return useContext(WishListContext) as WishListContextType
}

export function WishListProvider({ children }: { children: any }) {
    let [wishlistData, setWishlistData] = useState<any[]>([])
    let wishlistGql = useQuery(wishlist)
    let [getSingleProduct, singleProduct] = useLazyQuery(getSingleProductBySlug) as any

    let addWishListGql = useMutation(addWishList)
    let deleteWishlistGql = useMutation(deleteWishlist)

    // first mount
    useEffect(() => {
        if (!wishlistGql.loading && wishlistGql.data) {
            setWishlistData(wishlistGql.data)
        }
    }, [wishlistGql.loading])

    let [refetch, setRefetch] = useState<boolean>(false)
    useEffect(() => {
        if (!singleProduct.loading && singleProduct.data) {
            setWishlistData([...wishlistData, singleProduct.data])
        }
    }, [singleProduct.loading, singleProduct.called, refetch])

    return (
        <WishListContext.Provider
            value={{
                addWishList: addWishListWrapper({
                    addWishList: addWishListGql,
                    getSingleProduct,
                    wishlistData,
                    setWishlistData,
                    refetch,
                    setRefetch
                }),
                deleteWishList: deleteWishListWrapper({ deleteWishList: deleteWishlistGql, wishlistData, setWishlistData }),
                wishlist: wishlistData
            }}
        >
            {children}
        </WishListContext.Provider>
    )
}
