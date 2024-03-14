export type WishListContextType = {
    addWishList: (slug: string) => void
    deleteWishList: (slug: string) => void
    wishlist: any[]
}
