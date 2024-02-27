import React, { useEffect } from 'react'
import { Row, Col, Alert, Container } from 'react-bootstrap'
import Cardshop from './Cardshop'

import { Shoptopbar } from 'Components/ShopTopBar'

import { cartQuery, addItemToCart, deleteItemFromCart } from 'lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'

const Shopingcard = () => {
  let cart = useQuery(cartQuery)
  let addItem = useMutation(addItemToCart)
  let deleteItem = useMutation(deleteItemFromCart)

  useEffect(() => {
    cart.refetch()
  }, [addItem.loading, deleteItem.loading])

  document.title = 'Shop Cart | Toner - React Frontend'
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="product-list justify-content-center">
            <Cardshop />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Shopingcard
