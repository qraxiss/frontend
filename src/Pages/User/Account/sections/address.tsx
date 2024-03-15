import { Nav, Tab, Row, Col, Card, Form, FormCheck } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function AddressNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="address" className="fs-15" role="presentation">
                <i className="bi bi-building-add align-middle me-1"></i> Address
            </Nav.Link>
        </Nav.Item>
    )
}

export function AddressTab() {
    return (
        <Tab.Pane eventKey="address">
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
                                                <Form.Control type="text" id="firstnameInput" placeholder="Enter your firstname" name="firstname" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="lastnameInput">Last Name</Form.Label>
                                                <Form.Control type="text" id="lastnameInput" placeholder="Enter your lastname" name="lastname" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="phonenumberInput">Phone Number</Form.Label>
                                                <Form.Control type="text" id="phonenumberInput" placeholder="Enter your phone number" name="phno" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="emailInput">Email Address</Form.Label>
                                                <Form.Control type="email" id="emailInput" placeholder="Enter your email" name="email" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="cityInput">City</Form.Label>
                                                <Form.Control type="text" id="cityInput" placeholder="City" name="city" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="countryInput">Country</Form.Label>
                                                <Form.Control type="text" id="countryInput" placeholder="Country" name="country" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="stateInput">State</Form.Label>
                                                <Form.Control type="text" id="stateInput" placeholder="Enter state" name="state" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
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
                                            <div className="mb-3">
                                                <Form.Label htmlFor="streetAddress">Street Address</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="streetAddress"
                                                    placeholder="Enter street address"
                                                    name="street"
                                                    rows={3}
                                                    as="textarea"
                                                ></Form.Control>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Check label="Ship to different address?" /> 
                                               
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3 pb-2">
                                                <Form.Label htmlFor="exampleFormControlTextarea">Order Notes (Optional)</Form.Label>
                                                <Form.Control
                                                    name="desc"
                                                    as="textarea"
                                                    id="exampleFormControlTextarea"
                                                    placeholder=""
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
    )
}
