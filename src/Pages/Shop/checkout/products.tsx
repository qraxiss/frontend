import { useCart } from 'context/cart'
import { Table, Image, Card } from 'react-bootstrap'
;<Products />

export function Products() {
    let { cartItems } = useCart()

    let price = 0

    cartItems.forEach((item) => {
        price += item.count * item.product.price
    })

    return (
        <Card>
            <Card.Body>
                <div className="table-responsive table-card">
                    <Table className="table-borderless table-nowrap mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item: any, inx: number) => {
                                return (
                                    <tr key={inx}>
                                        <td className="justify-center-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <Image src={item.product.image} alt="" className="cart-img" />
                                                <h6>
                                                    {item.product.name} x {item.count}
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="justify-center-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <Image src={item.product.image} alt="" className="invisible" />
                                                <h6>${(item.product.price * item.count).toFixed(2)}</h6>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                    <Table className="table-borderless mb-0 fs-15">
                        <tbody>
                            <tr className="table-active">
                                <th>Shipping</th>
                                <td className="text-end">
                                    <span className="fw-semibold cart-total">${((price / 100) * 5).toFixed(2)}</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table className="table-borderless mb-0 fs-15">
                        <tbody>
                            <tr className="table-active">
                                <th>Subtotal</th>
                                <td className="text-end">
                                    <span className="fw-semibold cart-total">${price.toFixed(2)}</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <hr />

                    <Table className="table-borderless mb-0 fs-15">
                        <tbody>
                            <tr className="table-active">
                                <th>
                                    <h6>Total</h6>
                                </th>
                                <td className="text-end">
                                    <span className="fw-semibold cart-total">${(price + (price / 100) * 5).toFixed(2)}</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    )
}
