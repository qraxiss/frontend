export function deleteWishListWrapper({
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
