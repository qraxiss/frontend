import { createContext, useContext, useEffect, useState } from 'react'

import { addWishList, deleteWishlist, wishlist, getSingleProductBySlug } from 'lib/common-queries'

import { useQuery, useMutation, useLazyQuery } from 'lib/query-wrapper'

const WishListContext = createContext<any>({})

export type WishListContextType = {
    addWishList: (slug: string) => void
    deleteWishList: (slug: string) => void
    wishlist: any[]
}

export const useWishList = () => {
    return useContext(WishListContext) as WishListContextType
}

function addWishListWrapper({
    addWishList,
    getSingleProduct,
    wishlistData,
    setWishlistData,
    refetch,
    setRefetch
}: {
    addWishList: any
    getSingleProduct: Function
    wishlistData: string[]
    setWishlistData: Function
    refetch: boolean
    setRefetch: Function
}) {
    return (slug: string) => {
        let index = wishlistData.findIndex((item: any) => {
            return slug === item.slug
        })

        if (index !== -1) {
            return
        }

        getSingleProduct({
            variables: {slug}
        })

        setRefetch(!refetch)

        addWishList.fn({
            variables: {
                slug
            }
        })
    }
}

function deleteWishListWrapper({
    deleteWishList,
    wishlistData,
    setWishlistData
}: {
    deleteWishList: any
    wishlistData: string[]
    setWishlistData: Function
}) {
    return (slug: string) => {
        let index = wishlistData.findIndex((item: any) => {
            return slug === item.slug
        })

        if (index === -1) {
            return
        }

        setWishlistData(
            wishlistData.filter((item: any, idx: number) => {
                return idx !== index
            })
        )

        deleteWishList.fn({
            variables: {
                slug
            }
        })
    }
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
