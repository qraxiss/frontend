import React, { useEffect } from 'react'
import { Row, Col, Alert, Container } from 'react-bootstrap'
import Cardshop from './Cardshop'

import { BrandedProduct, Shoptopbar } from 'Components/ShopTopBar'
import EmailClothe from 'Pages/Catalog/EmailClothe'
import { CommonService } from 'Components/CommonService'

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
      <Shoptopbar title="Alışveriş Sepetim" page="Shopping Cart" />
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <Alert className="alert-danger text-center  mb-4 fs-14">
                <b>30%</b> , <b>40%</b> Bu nee! <b>İndirimlerden</b> faydalanmak için hemen alışveriş yap!
              </Alert>
            </Col>
          </Row>
          <Row className="product-list justify-content-center">
            <Cardshop />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Shopingcard
