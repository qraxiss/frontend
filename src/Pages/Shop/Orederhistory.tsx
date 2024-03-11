import React, { useState } from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import { Shoptopbar } from 'Components/ShopTopBar'
import { InvoiceModal } from 'Components/MainModal'

const Orderhistory = () => {
    document.title = 'Order History | Toner - React FrontEnd'
    //modal
    const [modal, setModal] = useState(false)
    const handleClose = () => setModal(false)

    return (
        <React.Fragment>
            <Shoptopbar title="Order History" page="Order History" />
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <div className="table-responsive">
                                    <Table className="fs-15 align-middle table-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Total Amount</th>
                                                <th scope="col">Status</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {(orderHistorys || [])?.map((item, inx) => {
                        return (
                          <tr key={inx}>
                            <td>
                              <Link to="#" className="text-body">
                                {item.orderId}
                              </Link>
                            </td>
                            <td>
                              <div className="d-flex gap-3">
                                <div className="avatar-sm flex-shrink-0">
                                  <div className={`avatar-title bg-${item.avatar} rounded`}>
                                    <Image src={item.img} alt="" className="avatar-xs " />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <Link to="/product-details">
                                    <h6 className="fs-15 mb-1">{item.title}</h6>
                                  </Link>
                                  <p className="mb-0 text-muted fs-13">{item.text}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">{item.data}</span>
                            </td>
                            <td className="fw-medium">${item.amount}</td>
                            <td>
                              <span className={`badge bg-${item.bg}-subtle text-${item.bg}`}>{item.status}</span>
                            </td>
                            <td>
                              <Link to="#invoiceModal" data-bs-toggle="modal" className="btn btn-secondary btn-sm" onClick={handleInvoice}>
                                Invoice
                              </Link>
                            </td>
                          </tr>
                        )
                      })} */}
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="text-end">
                                    <Button variant="primary" className="btn btn-hover">
                                        Continue Shopping <i className="ri-arrow-right-line align-middle ms-1"></i>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <InvoiceModal modal={modal} handleClose={handleClose} />
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Orderhistory
