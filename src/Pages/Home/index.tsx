import React from 'react'

import { Slider, Products } from 'Components/Product'
import Section from './Section'

import { gql } from '@apollo/client'
import { useQuery } from 'lib/query-wrapper'

const query = gql`
    query {
        products {
            data {
                attributes {
                    name
                    slug
                    price
                    image {
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

const Home = () => {
    document.title = 'Index | Toner - React FrontEnd'

    let { data, loading, error } = useQuery(query)

    return (
        <React.Fragment>
            <Section />
            <Slider items={data || []} />
            <Products items={data || []} />
        </React.Fragment>
    )
}

export default Home
