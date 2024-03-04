import config from 'config/config'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
type MyComponentProps = {
  props: {
    item: any
    removeProduct: () => void
    minusProduct: () => void
    plusProduct: () => void
  }
}
export const CartCard = (props: MyComponentProps) => {
  const { item, plusProduct, minusProduct, removeProduct } = props.props

  return (
    <li key={item.product.slug} className="list-group-item product">
      <div className="d-flex gap-3">
        {/* ürün Fotoğrafı */}
        <div className="flex-shrink-0">
          <div className={`avatar-md  `} style={{ height: '100%' }}>
            <div className={`avatar-title bg-white  rounded-3`}>
              <div
                style={{
                  backgroundImage: `url(${config.serverUrl + item.product.images[0].url})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '100%'
                }}
                className="avatar-sm"
              />
            </div>
          </div>
        </div>
        {/* Ürün bilgisi */}
        <div className="flex-grow-1">
          <Link to={`/product-details/${item.product.slug}`}>
            <h5 className="fs-15">{item.product.name}</h5>
          </Link>
          <div className="d-flex mb-3 gap-2">
            <div className="text-muted fw-medium mb-0">
              ₺<span className="product-price">{item.product.price}</span>
            </div>
            <div className="vr"></div>
            <span className="text-success fw-medium">Stokta var</span>
          </div>
          <div className="input-step">
            <Button
              className="minus"
              onClick={() => {
                // deleteItem.fn({
                //   variables: {
                //     slug: item.product.slug
                //   }
                // })
                minusProduct()
              }}
            >
              -
            </Button>
            <Form.Control type="number" className="product-quantity" value={item.count} min="0" max="100" readOnly />
            <Button
              className="plus"
              onClick={() => {
                // addItem.fn({
                //   variables: {
                //     slug: item.product.slug
                //   }
                // })
                plusProduct()
              }}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 d-flex flex-column justify-content-between align-items-end">
          <Button
            className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
            onClick={() => {
              //   RemoveModel(item.product.slug)
              //   console.log(item)
              removeProduct()
            }}
          >
            <i className="ri-close-fill fs-16"></i>
          </Button>
          <div className="fw-medium mb-0 fs-16">{/* $<span className="product-line-price">{item.Total.toFixed(2)}</span> */}</div>
        </div>
      </div>
    </li>
  )
}
