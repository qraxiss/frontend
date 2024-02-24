import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import Index from 'Components/Index'

import { useParams, useSearchParams } from 'react-router-dom'
import { params } from 'lib/getQueryVariables'

const Defaultgrid = () => {
  let obj = useSearchParams()
  console.log(params(obj[0]))

  return (
    <React.Fragment>
      <section className="position-relative section">
        <div className="section pb-0 mt-4" />
        <Container>
          <div className="ecommerce-product gap-4">
            <Index name="sidebar small-sidebar flex-shrink-0" cxxl="4" clg="4" cmd="6" cheight="200px" />
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Defaultgrid
