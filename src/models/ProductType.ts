export type filterSettingsType = { name: string; options: { value: string; id: number }[]; choosen: string[]; open: boolean }

export type productListType = {
    price: number
    slug: string
    image: string
    name: string
    variants: productVariant[]
}
export type productVariant = {
    options: { value: string }[]
    name: string
    id?: number
}
