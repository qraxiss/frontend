import React from 'react'

import { Slider, Products } from 'Components/Product'
import Section from './Section'

import { gql } from '@apollo/client'
import { useQuery } from 'lib/query-wrapper'
import { CommonService } from 'Components/CommonService'
import Collection from './Collection'
import Service from './CollectionService'

const query = gql`
  query {
    products {
      data {
        attributes {
          name
          slug
          price
          images {
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
  let { data, loading, error } = useQuery(query)

  return (
    <React.Fragment>
      <Collection />
      {/* <Section /> */}
      {/* <CommonService /> */}
      <Service />
      <Slider items={data || []} />

      {/* <Products items={data || []} /> */}
    </React.Fragment>
  )
}

export default Home
