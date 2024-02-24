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

export let getProductsByCategorySlug = gql`
  query CATEGORY_BY_SLUG($slug: String!) {
    categoryBySlug(slug: $slug) {
      category {
        products {
          data {
            attributes {
              price
              name
              slug
              images {
								data {
                  attributes {
                    url
                  }
                }
              }
              variants {
                options {
                  value
                }
                name
              }
            }
          }
        }
      }
      variants
    }
  }
`
