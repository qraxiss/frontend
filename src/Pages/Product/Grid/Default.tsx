import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import Index from 'Components/Index'

const Defaultgrid = () => {
  return (
    <React.Fragment>
      <section
        className="position-relative section"
        style={{
          paddingTop: '0px'
        }}
      >
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
