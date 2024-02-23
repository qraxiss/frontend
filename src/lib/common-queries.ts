import { gql } from '@apollo/client'

export let cartQuery = gql`
    query {
        cart {
            product {
                name
                price
                slug
                images {
                    data {
                        attributes {
                            url
                        }
                    }
                }
            }
            count
        }
    }
`

export let addItemToCart = gql`
    mutation ($slug: String!) {
        addProductToCart(slug: $slug)
    }
`

export let deleteItemFromCart = gql`
    mutation DELETE_PRODUCT_FROM_CART($slug: String!) {
        deleteProductFromCart(slug: $slug)
    }
`
