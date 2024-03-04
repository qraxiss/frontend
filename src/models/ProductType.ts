export type filterSettingsType = { name: string; options: { value: string; id: number }[]; choosen: string[]; open: boolean }

export type productListType = {
  price: number
  slug: string
  images: { url: string }[]
  name: string
  variants: productVariant[]
}
export type productVariant = {
  options: { value: string }[]
  name: string
  id?: number
}

export const tempProduct = {
  name: '',
  slug: '',
  price: 0,
  description: '',
  images: []
}
