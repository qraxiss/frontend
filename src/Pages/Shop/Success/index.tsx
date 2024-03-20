import { Container, Table, Row, Col, Form, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useQuery } from 'lib/query-wrapper'
import { order } from 'lib/common-queries'

import { useState, useEffect } from 'react'

export default function Success() {
    let { id } = useParams()

    let { data, loading, error } = useQuery(order, {
        variables: {
            id
        }
    })

    let [orderData, setOrderData] = useState({
        transaction: '',
        printful: {
            recipient: {
                zip: 'zipCode',
                city: 'city',
                name: 'name surname',
                email: 'email',
                phone: 'phoneNumber',
                address1: 'address1',
                address2: 'address2',
                state_code: 'stateCode',
                state_name: 'stateName',
                country_code: 'countryCode',
                country_name: 'countryName'
            }
        },
        items: [],
        id: id,
        createdAt: new Date().toLocaleDateString(),
        error: null
    })

    let price = 0
    orderData.items.forEach((item: any) => {
        price = price + item.product.price * item.count
    })
    useEffect(() => {
        if (!loading && data) {
            setOrderData(data)
        }
    }, [loading])


    return (
        <section className="section">
            <Container className="success-page">
                {!error && !orderData.error
                    ? [
                          <div className="success-info-box">
                              <div className="top">
                                  <div className="title">Shopping Successful! ✅</div>
                                  <div className="success-message">
                                      Thank You For Your Purchase! Your transaction has been successfully completed.
                                  </div>
                              </div>

                              <div className="tables">
                                  <div className="information-table">
                                      <div className="title">Payment</div>
                                      <Table striped bordered hover responsive>
                                          <tbody>
                                              <tr>
                                                  <td>Order Number</td>
                                                  <td>{orderData.id}</td>
                                              </tr>
                                              <tr>
                                                  <td>Transaction Hash</td>
                                                  <td>{orderData.transaction}</td>
                                              </tr>
                                              <tr>
                                                  <td>Date</td>
                                                  <td>{orderData.createdAt}</td>
                                              </tr>
                                              <tr>
                                                  <td>Discount Rate</td>
                                                  <td>%10</td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <b>Price</b>
                                                  </td>
                                                  <td>
                                                      <b>{price.toFixed(2)}</b>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </Table>
                                  </div>
                                  <div className="information-table products">
                                      <div className="title">Products</div>
                                      <Table striped bordered hover>
                                          <tbody>
                                              {orderData.items.map((item: any) => {
                                                  return (
                                                      <tr key={item.slug + JSON.stringify(item.options)}>
                                                          <td className="image">
                                                              <Image src={item.product.image} className="avatar-md"></Image>
                                                          </td>
                                                          <td>
                                                              <div className="info">{item.product.name}</div>
                                                          </td>
                                                          <td>
                                                              <div className="price">{item.product.price.toFixed(2)}</div>
                                                          </td>
                                                      </tr>
                                                  )
                                              })}
                                          </tbody>
                                      </Table>
                                  </div>
                              </div>
                          </div>,

                          <div className="success-info-box shipping">
                              <div className="title">Shipping Information</div>

                              <Row className="details">
                                  <Col>
                                      <Row>
                                          <div className="detail">
                                              <b>First Name: </b>
                                              {orderData.printful.recipient.name.split(' ')[0]}
                                          </div>
                                      </Row>
                                      <Row>
                                          <div className="detail">
                                              <b>Email Address:</b>
                                              {orderData.printful.recipient.email}
                                          </div>
                                      </Row>
                                      <Row>
                                          <div className="detail">
                                              <b>Country / Region:</b> {orderData.printful.recipient.country_name}
                                          </div>
                                      </Row>
                                      <Row>
                                          <div className="detail">
                                              <b>Town / City:</b> {orderData.printful.recipient.city}
                                          </div>
                                      </Row>
                                      <Row>
                                          <div className="detail">
                                              <b>Postcode / ZIP:</b> {orderData.printful.recipient.zip}{' '}
                                          </div>
                                      </Row>
                                      <Row>
                                          <b>Order Notes:</b>
                                      </Row>
                                      <div className="notes"></div>
                                  </Col>

                                  <Col>
                                      <Row>
                                          <div className="detail">
                                              <b>Last Name:</b>
                                              {orderData.printful.recipient.name.split(' ').length > 1
                                                  ? orderData.printful.recipient.name.split(' ')
                                                  : ''}
                                          </div>
                                      </Row>
                                      <Row>
                                          <div className="detail">
                                              <b>Phone:</b> {orderData.printful.recipient.phone}
                                          </div>
                                      </Row>
                                      <Row>
                                          <div className="detail">
                                              <b>State:</b> {orderData.printful.recipient.state_code}
                                          </div>
                                      </Row>
                                      <Row>
                                          <div className="detail">
                                              <b>Street Adress:</b>{' '}
                                              {orderData.printful.recipient.address1 + ' / ' + orderData.printful.recipient.address2}
                                          </div>
                                      </Row>
                                  </Col>

                                  <Form.Control
                                      className="notes"
                                      name="desc"
                                      as="textarea"
                                      id="exampleFormControlTextarea"
                                      placeholder=""
                                      rows={3}
                                  ></Form.Control>
                              </Row>
                          </div>
                      ]
                    : [
                          <div className="success-info-box">
                              <div className="top">
                                  <div className="title">Shopping Not Successful! ❌</div>
                                  <div className="success-message">Some error occured. {error ? error.message : orderData.error}</div>
                              </div>
                          </div>
                      ]}
            </Container>
        </section>
    )
}
