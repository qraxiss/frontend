export function addWishListWrapper({
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
            variables: { slug }
        })

        setRefetch(!refetch)

        addWishList.fn({
            variables: {
                slug
            }
        })
    }
}
