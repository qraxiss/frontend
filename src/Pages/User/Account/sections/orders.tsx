import { Tab, Card, Table, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useCart } from 'context/cart'

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
    return (
        <Tab.Pane eventKey="order">
            <div className="tab-pane fade show" id="custom-v-pills-order" role="tabpanel">
                <Card>
                    <Card.Body>
                        <div className="table-responsive table-card">
                            <Table className="fs-15 align-middle table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Count</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(orderGql.data || []).map((item: any, inx: any) => {
                                        return item.map((item2: any, inx2: any) => {
                                            return (
                                                <tr key={inx}>
                                                    <td>
                                                        <h6 className="text-body">{item2.product.name}</h6>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">{item2.options.size}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-muted">{item2.options.color} </span>
                                                    </td>
                                                    <td>
                                                        <span>Draft</span>
                                                    </td>
                                                    <td className="fw-medium">{item2.count}</td>
                                                    <td>${item2.count * item2.product.price}</td>
                                                </tr>
                                            )
                                        })
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
