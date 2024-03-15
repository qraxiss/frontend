import React from 'react'
import { Col, Container, Row, Tab, Nav, Card, Table, Form, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'

import { User } from 'Components/Images/Icons'
import { useWishList } from 'context/wishlist'
import { useCart } from 'context/cart'
import { useUser } from 'context/user'

const MyAccount = () => {
    let { section } = useParams()
    let {address} = useUser()

    let { orderGql } = useCart()

    let { wishlist, deleteWishList } = useWishList()

    return (
        <React.Fragment>
            <section className="position-relative">
                {/* <div className="profile-basic position-relative">
                    <div className="bg-overlay bg-primary"></div>
                </div> */}
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="pt-3">
                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                    <User className="avatar-xl p-1 bg-light mt-n3" />
                                    <div>
                                        <h5 className="fs-18">{address.slice(0,6)}...{address.slice(address.length - 6, address.length)} <div className="edit">
                                        <i className="bi bi-pen"></i> <p>
                                        change username</p></div></h5>
                                        <div className="text-muted"> {address.slice(0,6)}...{address.slice(address.length - 6, address.length)}
                                        </div>
                                    </div>
                                    <div className="ms-md-auto">
                                        <Link to="/product-list" className="btn btn-primary btn-hover">
                                            <i className="bi bi-cart4 me-1 align-middle"></i> Shopping Now
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
                    <Tab.Container id="left-tabs-example" defaultActiveKey={section ? section : 'profile'}>
                        <Row>
                            <Col lg={3}>
                                <Card>
                                    <Card.Body>
                                        <Nav variant="pills" className="flex-column gap-3">
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="profile" className="fs-15" role="presentation">
                                                    <i className="bi bi-person-circle align-middle me-1"></i> Account Details
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="list" className="fs-15" role="presentation">
                                                    <i className="bi bi-bookmark-check align-middle me-1"></i> Wish list
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="order" className="fs-15" role="presentation">
                                                    <i className="bi bi-bag align-middle me-1"></i> Orders
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="address" className="fs-15" role="presentation">
                                                    <i className="bi bi-building-add align-middle me-1"></i> Address
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="xp-points" className="fs-15" role="presentation">
                                                    <i className="bi bi-coin align-middle me-1"></i> XP Points
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="stake" className="fs-15" role="presentation">
                                                    <i className="bi bi-piggy-bank align-middle me-1"></i> Stake
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" className="fs-15" href="/logout">
                                                    <i className="bi bi-box-arrow-right align-middle me-1"></i> Logout
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
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
                                                                            <th scope="col">Product</th>
                                                                            <th scope="col">Price</th>
                                                                            <th scope="col">Stock Status</th>
                                                                            <th scope="col">Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {wishlist.map((item, inx) => {
                                                                            return (
                                                                                <tr key={inx}>
                                                                                    <td>
                                                                                        <div className="d-flex gap-3">
                                                                                            <div className="avatar-sm flex-shrink-0">
                                                                                                <div
                                                                                                    className={`avatar-title bg-${item.bg}-subtle rounded`}
                                                                                                >
                                                                                                    <Image
                                                                                                        src={item.image}
                                                                                                        alt=""
                                                                                                        className="avatar-xs"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="flex-grow-1">
                                                                                                <Link to="/product-details">
                                                                                                    <h6 className="fs-16">{item.title}</h6>
                                                                                                </Link>
                                                                                                <p className="mb-0 text-muted fs-13">{item.name}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>${item.price}</td>
                                                                                    <td>
                                                                                        <span>{/* {item.status} */}</span>
                                                                                    </td>
                                                                                    <td>
                                                                                        <ul className="list-unstyled d-flex gap-3 mb-0">
                                                                                            <li>
                                                                                                <Link
                                                                                                    to={`/product-details/${item.slug}`}
                                                                                                    className="btn btn-soft-info btn-icon btn-sm"
                                                                                                >
                                                                                                    <i className="ri-shopping-cart-2-line fs-13"></i>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Button
                                                                                                    onClick={() => {
                                                                                                        deleteWishList(item.slug)
                                                                                                    }}
                                                                                                    className="btn btn-soft-danger btn-icon btn-sm"
                                                                                                >
                                                                                                    <i className="ri-close-line fs-13"></i>
                                                                                                </Button>
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
                                    <Tab.Pane eventKey="profile">
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
                                                                                name="email"
                                                                            />
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={4}>
                                                                        <div className="mb-3">
                                                                            <Form.Label htmlFor="cityInput">City</Form.Label>
                                                                            <Form.Control type="text" id="cityInput" placeholder="City" name="city" />
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={4}>
                                                                        <div className="mb-3">
                                                                            <Form.Label htmlFor="countryInput">Country</Form.Label>
                                                                            <Form.Control
                                                                                type="text"
                                                                                id="countryInput"
                                                                                placeholder="Country"
                                                                                name="country"
                                                                            />
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
                                                                                placeholder="Enter your address"
                                                                                rows={3}
                                                                            ></Form.Control>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </form>

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
            {/* <EmailClothe />
      <CommonService /> */}
        </React.Fragment>
    )
}

export default MyAccount
