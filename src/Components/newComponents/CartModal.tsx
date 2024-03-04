import { addItemToCart, cartQuery, deleteItemFromCart } from 'lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'
import React, { useEffect, useState } from 'react'
import { Col, Offcanvas, Row, Table } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'
import { CartCard } from './CartCard'
import { Link } from 'react-router-dom'
import { DeleteModal } from '.'

export const CartModal = ({ show, handleClose }: any) => {
  let cartData = useQuery(cartQuery)
  let addItem = useMutation(addItemToCart)
  let deleteItem = useMutation(deleteItemFromCart)

  const [productSlug, setProductSlug] = useState('')
  const [deleteModalShow, setDeleteModalShow] = useState(false)

  useEffect(() => {
    cartData.refetch()
  }, [addItem.loading, deleteItem.loading])

  // kargo
  const [charge, setCharge] = useState(0)
  //   indirim
  const [dis, setDis] = useState(0)
  //   vergi
  const [tax, setTax] = useState(0)
  // Sepet tutarı
  let subtotal = 0
  //   Sepetteki Ürünlerin fiyatını toplayan kod
  if (!cartData?.loading && !cartData.error) {
    for (let i = 0; i < cartData.data.length; i++) {
      subtotal += cartData.data[i].product.price * cartData.data[i].count
    }
  }
  //  İndirim, Kargo ve Vergi fiyatlarını ayarlayan kod
  useEffect(() => {
    let dis: any = (0.15 * subtotal).toFixed(2)
    let tax = 0.125 * subtotal

    if (subtotal !== 0) {
      setCharge(65)
    } else {
      setCharge(0)
    }
    setDis(dis)
    setTax(tax)
  }, [subtotal])

  //   Ürünü listeden tamamen silen ve güncel sepeti çeken fonksiyon
  const removeCartProduct = (productSlug: string) => {
    deleteItem
      .fn({
        variables: {
          slug: productSlug
        }
      })
      .then(() => {
        cartData.refetch()
      })
  }
  //   Fiyatlandırma detayları
  const priceDetails = () => {
    return (
      <div className="table-responsive mx-2 border-top border-top-dashed">
        <Table className="table table-borderless mb-0 fs-14 fw-semibold">
          <tbody>
            <tr>
              <td>Sepet tutarı :</td>
              <td className="text-end cart-subtotal">₺{subtotal || '0.00'}</td>
            </tr>
            <tr>
              <td>
                İndirim <span className="text-muted">(OT-15)</span>:
              </td>
              <td className="text-end cart-discount">-₺{dis || '0.00'}</td>
            </tr>
            <tr>
              <td>Kargo Ücreti :</td>
              <td className="text-end cart-shipping">₺{charge || '0.00'}</td>
            </tr>
            <tr>
              <td>KDV (20%) : </td>
              <td className="text-end cart-tax">₺{tax || '0.00'}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
  //   Alışveriş sepeti footer kısmı
  const cartFooter = () => {
    return (
      <div className="offcanvas-footer border-top p-3 text-center">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="m-0 fs-16 text-muted">Ödenecek tutar:</h6>
          <div className="px-2">
            <h6 className="m-0 fs-16 cart-total">₺{subtotal + charge + tax - dis || '0.00'}</h6>
          </div>
        </div>
        <Row className="g-2">
          <Col xs={12}>
            <Link to="/shop/shopingcard" target="_blank" className="btn btn-primary w-100">
              Sepete git
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
  //   Sepeteki ürünlerin komponentinin propsları
  const cartCardProps = (item: any) => {
    let slug = item.product.slug
    return {
      item: item,
      removeProduct: () => {
        setDeleteModalShow(true)
        setProductSlug(slug)
      },
      minusProduct: () => {
        deleteItem.fn({
          variables: {
            slug: slug
          }
        })
      },
      plusProduct: () => {
        addItem.fn({
          variables: {
            slug: slug
          }
        })
      }
    }
  }

  return (
    <React.Fragment>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title id="ecommerceCartLabel" as="h5">
            Sepetim <span className="badge bg-danger align-middle ms-1 cartitem-badge">{cartData.data?.length}</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=" px-0">
          <SimpleBar className="h-100">
            <ul className="list-group list-group-flush cartlist">
              {(!cartData?.loading && !cartData.error ? cartData?.data : []).map((item: any) => {
                return <CartCard props={cartCardProps(item)} />
              })}
            </ul>
            {priceDetails()}
          </SimpleBar>
        </Offcanvas.Body>
        {cartFooter()}
      </Offcanvas>
      <DeleteModal
        hideModal={() => setDeleteModalShow(false)}
        modalShow={deleteModalShow}
        deleteData={() => {
          removeCartProduct(productSlug)
        }}
      />
    </React.Fragment>
  )
}
