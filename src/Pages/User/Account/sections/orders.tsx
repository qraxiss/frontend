import { Tab, Card, Table, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import { useCart } from 'context/cart'

import { useEffect, useState } from 'react'

export function OrdersNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="order" className="fs-15" role="presentation">
                <i className="bi bi-bag align-middle me-1"></i> Orders
            </Nav.Link>
        </Nav.Item>
    )
}

export function OrdersTab() {
    let { orderGql } = useCart()
    let { loading, data, refetch, error } = orderGql
    let [order, setOrder] = useState([])
    useEffect(() => {
        if (!loading && data) {
            setOrder(data)
        }
    }, [loading])

    let navigate = useNavigate()

    return (
        <Tab.Pane eventKey="order">
            <div className="tab-pane fade show" id="custom-v-pills-order" role="tabpanel">
                <Card>
                    <Card.Body>
                        <div className="table-responsive table-card">
                            <Table className="fs-15 align-middle table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Order Id</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.map((item: any, inx: any) => {
                                        let total = 0

                                        item.items.forEach((product: any) => {
                                            total = total + product.product.price
                                        })

                                        return (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.createdAt.slice(0, 10)}</td>
                                                <td className={`text-${item.printful ? 'success' : 'danger'}`}>
                                                    {item.printful ? 'success' : 'failed'}
                                                </td>
                                                <td>
                                                    <span className="text-primary">{total.toFixed(2)}$</span> for {item.items.length} item.
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() => {
                                                            navigate(`/shop/success/${item.id}`)
                                                        }}
                                                        className="btn btn-primary w-100"
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                        <div className="text-end mt-4">
                            <Link to={'/products-grid'} className="btn btn-hover btn-primary">
                                Continue Shopping <i className="ri-arrow-right-line align-middle ms-1"></i>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Tab.Pane>
    )
}
