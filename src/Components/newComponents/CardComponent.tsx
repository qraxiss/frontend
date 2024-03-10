import { useEffect } from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from 'config/config'
import { productListType } from 'models/ProductType'
import { useCart } from 'context/cart-context'

export const CardComponent = ({ data }: { data: productListType }) => {
    let { addItem } = useCart()

    return (
        <Card className="overflow-hidden card product-cart">
            <div className={`rounded-top py-4`}>
                <div className="gallery-product">
                    <Image className="mx-auto d-block" src={data.image} />
                </div>
            </div>
            <Card.Body>
                <div>
                    <Link to={`/product-details/${data.slug}`}>
                        <h6 className="fs-15 lh-base text-truncate mb-0">{data.name}</h6>
                    </Link>
                    <div className="mt-3">
                        <span className="float-end">
                            {'5 '}
                            <i className="ri-star-fill text-warning align-bottom"></i>
                            <i className="ri-star-fill text-warning align-bottom"></i>
                            <i className="ri-star-fill text-warning align-bottom"></i>
                            <i className="ri-star-fill text-warning align-bottom"></i>
                            <i className="ri-star-fill text-warning align-bottom"></i>
                        </span>
                        <h5 className="mb-0">
                            {data.price}
                            {'$'}
                        </h5>
                    </div>
                    <div className="mt-3">
                        <Link to={`/product-details/${data.slug}`} className="btn btn-primary btn-hover w-100 add-btn">
                            <i className="mdi mdi-cart me-1"></i> Select options
                        </Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
