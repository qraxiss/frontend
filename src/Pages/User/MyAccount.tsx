import React from 'react'
import { Col, Container, Row, Tab, Nav, Card, Table, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import profilebg from 'assets/images/profile-bg.jpg'
import { orderHistorys, wishlishProduct } from 'Common/data'
import EmailClothe from 'Pages/Catalog/EmailClothe'
import { CommonService } from 'Components/CommonService'

import { useQuery } from 'lib/query-wrapper'
import config from 'config/config'
import { gql } from '@apollo/client'

const query = gql`
  query {
    profilePicture {
      url
    }
    accountInformation {
      addresses
      name
      surname
      email
    }
  }
`

const MyAccount = () => {
  const { data, loading } = useQuery(query)

  return (
    <React.Fragment>
      <section className="position-relative">
        <div
          className="profile-basic position-relative"
          style={{ backgroundImage: `url(${profilebg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
        >
          <div className="bg-overlay bg-primary"></div>
        </div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="pt-3">
                <div className="mt-n5 d-flex gap-3 flex-wrap align-items-end">
                  <Image src={config.serverUrl + data?.profilePicture?.url} alt="" className="avatar-xl p-1 bg-light mt-n3" rounded />
                  <div>
                    <h5 className="fs-18">{`${data?.accountInformation.name} ${data?.accountInformation.surname}`}</h5>
                    <div className="text-muted">
                      <i className="bi bi-geo-alt"></i> Ankara, Türkiye
                    </div>
                  </div>
                  <div className="ms-md-auto">
                    <Link to="/product-list" className="btn btn-success btn-hover">
                      <i className="bi bi-cart4 me-1 align-middle"></i> Şimdi Alışveriş Yap
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
            <Row>
              <Col lg={3}>
                <Card>
                  <Card.Body>
                    <Nav variant="pills" className="flex-column gap-3">
                      <Nav.Item as="li">
                        <Nav.Link as="a" eventKey="profile" className="fs-15" role="presentation">
                          <i className="bi bi-person-circle align-middle me-1"></i> Hesap Bilgileri
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" eventKey="list" className="fs-15" role="presentation">
                          <i className="bi bi-bookmark-check align-middle me-1"></i> İstek listesi
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" eventKey="order" className="fs-15" role="presentation">
                          <i className="bi bi-bag align-middle me-1"></i> Siparişler
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" eventKey="setting" className="fs-15" role="presentation">
                          <i className="bi bi-gear align-middle me-1"></i> Ayarlar
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" className="fs-15" href="/logout">
                          <i className="bi bi-box-arrow-right align-middle me-1"></i> Çıkış yap
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="profile">
                    <div className="tab-pane fade show active" id="custom-v-pills-profile" role="tabpanel">
                      <Row>
                        <Col lg={12}>
                          <Card>
                            <Card.Body>
                              <div className="d-flex mb-4">
                                <h6 className="fs-16 text-decoration-underline flex-grow-1 mb-0">Kişisel Bilgiler</h6>
                                <div className="flex-shrink-0">
                                  <Link to="#" className="badge bg-dark-subtle text-body">
                                    Düzenle
                                  </Link>
                                </div>
                              </div>

                              <div className="table-responsive table-card px-1">
                                <Table className="table-borderless table-sm">
                                  <tbody>
                                    <tr>
                                      <td>Müşteri İsmi</td>
                                      <td className="fw-medium">{`${data?.accountInformation?.name} ${data?.accountInformation?.surname}`}</td>
                                    </tr>
                                    <tr>
                                      <td>Email Adresi</td>
                                      <td className="fw-medium">{`${data?.accountInformation?.email}`}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>

                              <div className="mt-4">
                                <h6 className="fs-16 text-decoration-underline">Fatura &amp; Teslimat Adresi</h6>
                              </div>
                              <Row className="mt-4">
                                {data?.accountInformation?.addresses?.map((address: any) => {
                                  return (
                                    <Col md={6} key={address.id}>
                                      <Card className="mb-0">
                                        <Card.Body>
                                          <div className="float-end clearfix">
                                            {' '}
                                            <Link to="/shop/address" className="badge bg-primary-subtle text-primary">
                                              <i className="ri-pencil-fill align-bottom me-1"></i> Düzenle
                                            </Link>{' '}
                                          </div>
                                          <div>
                                            <p className="mb-3 fw-semibold fs-12 d-block text-muted text-uppercase">{address.addressName}</p>
                                            <h6 className="fs-14 mb-2 d-block">{`${data?.accountInformation?.name} ${data?.accountInformation?.surname}`}</h6>
                                            <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                              {`${address.country}/ ${address.city}/ ${address.zipCode}/ ${address.addressLine1}/ ${address.addressLine2}`}
                                            </span>
                                          </div>
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                  )
                                })}
                              </Row>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="list">
                    <div className="tab-pane fade show" id="custom-v-pills-list" role="tabpanel">
                      <Row>
                        <Col lg={12}>
                          <Card className="overflow-hidden">
                            <Card.Body>
                              <div className="table-responsive table-card">
                                <Table className="fs-15 align-middle">
                                  <thead>
                                    <tr>
                                      <th scope="col">Ürün</th>
                                      <th scope="col">Fiyat</th>
                                      <th scope="col">Stok Bilgisi</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {(wishlishProduct || [])?.map((item, inx) => {
                                      return (
                                        <tr key={inx}>
                                          <td>
                                            <div className="d-flex gap-3">
                                              <div className="avatar-sm flex-shrink-0">
                                                <div className={`avatar-title bg-${item.bg}-subtle rounded`}>
                                                  <Image src={item.img} alt="" className="avatar-xs" />
                                                </div>
                                              </div>
                                              <div className="flex-grow-1">
                                                <Link to="/product-details">
                                                  <h6 className="fs-16">{item.title}</h6>
                                                </Link>
                                                <p className="mb-0 text-muted fs-13">{item.text}</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>${item.price}</td>
                                          <td>
                                            <span className={`badge bg-${item.color}-subtle text-${item.color}`}>{item.status}</span>
                                          </td>
                                          <td>
                                            <ul className="list-unstyled d-flex gap-3 mb-0">
                                              <li>
                                                <Link to="/shop/shopingcard" className="btn btn-soft-info btn-icon btn-sm">
                                                  <i className="ri-shopping-cart-2-line fs-13"></i>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link to="#" className="btn btn-soft-danger btn-icon btn-sm">
                                                  <i className="ri-close-line fs-13"></i>
                                                </Link>
                                              </li>
                                            </ul>
                                          </td>
                                        </tr>
                                      )
                                    })}
                                  </tbody>
                                </Table>
                              </div>
                              <div className="hstack gap-2 justify-content-end mt-4">
                                <Link to="/product-list" className="btn btn-hover btn-secondary">
                                  Continue Shopping <i className="ri-arrow-right-line align-bottom"></i>
                                </Link>
                                <Link to="/shop/checkout" className="btn btn-hover btn-primary">
                                  Check Out <i className="ri-arrow-right-line align-bottom"></i>
                                </Link>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="order">
                    <div className="tab-pane fade show" id="custom-v-pills-order" role="tabpanel">
                      <Card>
                        <Card.Body>
                          <div className="table-responsive table-card">
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
                                {(orderHistorys || [])?.map((item, inx) => {
                                  return (
                                    <tr key={inx}>
                                      <td>
                                        <Link to="#" className="text-body">
                                          {item.orderId}
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="/product-details">
                                          <h6 className="fs-15 mb-1">{item.title}</h6>
                                        </Link>
                                        <p className="mb-0 text-muted fs-13">{item.text}</p>
                                      </td>
                                      <td>
                                        <span className="text-muted">{item.data}</span>
                                      </td>
                                      <td className="fw-medium">${item.amount}</td>
                                      <td>
                                        <span className={`badge bg-${item.bg}-subtle text-${item.bg}`}>{item.status}</span>
                                      </td>
                                      <td>
                                        <Link to="/invoice" data-bs-toggle="modal" className="btn btn-secondary btn-sm">
                                          Invoice
                                        </Link>
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
                  <Tab.Pane eventKey="setting">
                    <div className="tab-pane fade show" id="custom-v-pills-setting" role="tabpanel">
                      <Row>
                        <Col lg={12}>
                          <Card>
                            <Card.Body>
                              <form action="#">
                                <Row>
                                  <Col lg={12}>
                                    <h5 className="fs-16 text-decoration-underline mb-4">Personal Details</h5>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="firstnameInput">First Name</Form.Label>
                                      <Form.Control
                                        type="text"
                                        id="firstnameInput"
                                        placeholder="Enter your firstname"
                                        defaultValue="Raquel"
                                        name="firstname"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="lastnameInput">Last Name</Form.Label>
                                      <Form.Control
                                        type="text"
                                        id="lastnameInput"
                                        placeholder="Enter your lastname"
                                        defaultValue="Murillo"
                                        name="lastname"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="phonenumberInput">Phone Number</Form.Label>
                                      <Form.Control
                                        type="text"
                                        id="phonenumberInput"
                                        placeholder="Enter your phone number"
                                        defaultValue="+(253) 01234 5678"
                                        name="phno"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="emailInput">Email Address</Form.Label>
                                      <Form.Control
                                        type="email"
                                        id="emailInput"
                                        placeholder="Enter your email"
                                        defaultValue="raque@toner.com"
                                        name="email"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="cityInput">City</Form.Label>
                                      <Form.Control type="text" id="cityInput" placeholder="City" defaultValue="Phoenix" name="city" />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="countryInput">Country</Form.Label>
                                      <Form.Control type="text" id="countryInput" placeholder="Country" defaultValue="USA" name="country" />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="zipcodeInput">Zip Code</Form.Label>
                                      <Form.Control
                                        type="text"
                                        minLength={5}
                                        maxLength={6}
                                        id="zipcodeInput"
                                        placeholder="Enter zipcode"
                                        defaultValue="90011"
                                        name="zip"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12}>
                                    <div className="mb-3 pb-2">
                                      <Form.Label htmlFor="exampleFormControlTextarea">Description</Form.Label>
                                      <Form.Control
                                        name="desc"
                                        as="textarea"
                                        id="exampleFormControlTextarea"
                                        placeholder="Enter your description"
                                        rows={3}
                                        defaultValue="Hi I'm Raquel Murillo, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family."
                                      ></Form.Control>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                              <div className="mb-3" id="changePassword">
                                <h5 className="fs-16 text-decoration-underline mb-4">Change Password</h5>
                                <form action="#">
                                  <Row className="g-2">
                                    <Col lg={4}>
                                      <div>
                                        <Form.Label htmlFor="oldpasswordInput">Old Password*</Form.Label>
                                        <Form.Control
                                          type="password"
                                          id="oldpasswordInput"
                                          placeholder="Enter current password"
                                          name="opassword"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={4}>
                                      <div>
                                        <Form.Label htmlFor="newpasswordInput">New Password*</Form.Label>
                                        <Form.Control
                                          type="password"
                                          id="newpasswordInput"
                                          placeholder="Enter new password"
                                          name="npassword"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={4}>
                                      <div>
                                        <Form.Label htmlFor="confirmpasswordInput">Confirm Password*</Form.Label>
                                        <Form.Control
                                          type="password"
                                          id="confirmpasswordInput"
                                          placeholder="Confirm password"
                                          name="cpassword"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={12}>
                                      <div className="mb-3">
                                        <Link to="/auth-pass-reset-basic" className="link-primary text-decoration-underline">
                                          Forgot Password ?
                                        </Link>
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </div>
                              <div className="mb-3" id="privacy">
                                <h5 className="fs-16 text-decoration-underline mb-4">Privacy Policy</h5>
                                <div className="mb-3">
                                  <h5 className="fs-15 mb-2">Security:</h5>
                                  <div className="d-flex flex-column align-items-center flex-sm-row mb-sm-0">
                                    <div className="flex-grow-1">
                                      <p className="text-muted fs-14 mb-0">Two-factor Authentication</p>
                                    </div>
                                    <div className="flex-shrink-0 ms-sm-3">
                                      <Link to="#" className="btn btn-sm btn-primary">
                                        Enable Two-facor Authentication
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column align-items-center flex-sm-row mb-sm-0 mt-2">
                                    <div className="flex-grow-1">
                                      <p className="text-muted fs-14 mb-0">Secondary Verification</p>
                                    </div>
                                    <div className="flex-shrink-0 ms-sm-3">
                                      <Link to="#" className="btn btn-sm btn-primary">
                                        Set up secondary method
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column align-items-center flex-sm-row mb-sm-0 mt-2">
                                    <div className="flex-grow-1">
                                      <p className="text-muted fs-14 mb-0">Backup Codes</p>
                                    </div>
                                    <div className="flex-shrink-0 ms-sm-3">
                                      <Link to="#" className="btn btn-sm btn-primary">
                                        Generate backup codes
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <h5 className="fs-15 mb-2">Application Notifications:</h5>
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex">
                                      <div className="flex-grow-1">
                                        <Form.Label htmlFor="directMessage" className="form-check-label fs-14">
                                          Direct messages
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mt-2">
                                      <div className="flex-grow-1">
                                        <Form.Label className="form-check-label fs-14" htmlFor="desktopNotification">
                                          Show desktop notifications
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mt-2">
                                      <div className="flex-grow-1">
                                        <Form.Label className="form-check-label fs-14" htmlFor="emailNotification">
                                          Show email notifications
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mt-2">
                                      <div className="flex-grow-1">
                                        <Form.Label className="form-check-label fs-14" htmlFor="chatNotification">
                                          Show chat notifications
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mt-2">
                                      <div className="flex-grow-1">
                                        <Form.Label className="form-check-label fs-14" htmlFor="purchaesNotification">
                                          Show purchase notifications
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="text-sm-end">
                                <Link to="#" className="btn btn-secondary d-block d-sm-inline-block">
                                  <i className="ri-edit-box-line align-middle me-2"></i> Update Profile
                                </Link>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
      {/* <EmailClothe /> */}
      <CommonService />
    </React.Fragment>
  )
}

export default MyAccount
