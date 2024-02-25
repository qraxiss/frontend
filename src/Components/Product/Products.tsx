import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { addItemToCart, cartQuery } from 'lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'
import { CardComponent } from 'Components/newComponents'

const Products = ({ items }: any) => {
  let { fn, data, loading, error } = useMutation(addItemToCart)
  let { refetch } = useQuery(cartQuery)

  useEffect(() => {
    refetch()
  }, [loading])

  return (
    <React.Fragment>
      <section className="section pb-0">
        <Container>
          <Row>
            {items.map((item: any) => (
              <Col lg={3} key={item.slug}>
                <CardComponent data={item} fn={fn} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Products
