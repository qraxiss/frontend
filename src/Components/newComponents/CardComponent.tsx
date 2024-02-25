import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from 'config/config'
import { productListType } from 'models/ProductType'

export const CardComponent = ({ data, fn }: { data: productListType; fn: any }) => {
  return (
    <Card className="overflow-hidden">
      <div className={`bg-warning-subtle rounded-top py-4`}>
        <div className="gallery-product">
          <Image
            src={config.serverUrl + data.images[0].url}
            alt=""
            style={{ maxHeight: '215px', maxWidth: '100%' }}
            className="mx-auto d-block"
          ></Image>
        </div>
      </div>
      <Card.Body>
        <div>
          <Link to={`/product-details/${data.slug}`}>
            <h6 className="fs-15 lh-base text-truncate mb-0">{data.name}</h6>
          </Link>
          <div className="mt-3">
            <span className="float-end">
              {5}
              <i className="ri-star-half-fill text-warning align-bottom"></i>
            </span>
            <h5 className="mb-0">
              {data.price}
              {'$'}
            </h5>
          </div>
          <div className="mt-3">
            <Button
              className="btn btn-primary btn-sm"
              onClick={() => {
                fn({
                  variables: {
                    slug: data.slug
                  }
                })
              }}
            >
              <i className="mdi mdi-cart me-1"></i> Add to cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
