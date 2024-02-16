import { gql } from '@apollo/client'

export let logo = gql`
    query {
        logo {
            data {
                attributes {
                    text {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`
