import React from 'react'
import Collection from './Collection'
import Service from './CollectionService'
import Shopping from './ShopingService'
import TopProducts from './TopProduct'
import Shoping from './Shopping'
import FollowUs from './FollowUs'

import { Slider, Products } from 'Components/Product'

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
    console.log(data)

    return (
        <React.Fragment>
            <Slider items={data || []} />
            <Products items={data || []} />
        </React.Fragment>
    )
}

export default Home
