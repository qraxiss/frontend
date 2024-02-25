import React from 'react'

import { Slider, Products } from 'Components/Product'
import Section from './Section'

import { gql } from '@apollo/client'
import { useQuery } from 'lib/query-wrapper'
import { CommonService } from 'Components/CommonService'

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
      <Section />
      <Slider items={data || []} />
      <CommonService />

      <Products items={data || []} />
    </React.Fragment>
  )
}

export default Home
