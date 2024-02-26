import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from 'config/config'
import { productListType } from 'models/ProductType'

export const CardComponent = ({ data, fn }: { data: productListType; fn?: any }) => {
  return (
    <Card className="overflow-hidden">
      <div className={` rounded-top py-4`}>
        <div className="gallery-product">
          <div
            className="mx-auto d-block"
            style={{
              backgroundImage: `url(${config.serverUrl + data.images[0].url})`,
              height: '190px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain'
            }}
          />
          {/* <Image src={config.serverUrl + data.images[0].url} alt="" style={{}}></Image> */}
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
              <i className="ri-star-fill text-warning align-bottom"></i>
              <i className="ri-star-fill text-warning align-bottom"></i>
              <i className="ri-star-fill text-warning align-bottom"></i>
              <i className="ri-star-fill text-warning align-bottom"></i>
              <i className="ri-star-fill text-warning align-bottom"></i>
            </span>
            <h5 className="mb-0">
              {data.price}
              {'₺'}
            </h5>
          </div>
          <div className="mt-3">
            <Button
              className="btn btn-primary btn-hover w-100 add-btn"
              onClick={() => {
                fn({
                  variables: {
                    slug: data.slug
                  }
                })
              }}
            >
              <i className="mdi mdi-cart me-1"></i> Sepete ekle
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
