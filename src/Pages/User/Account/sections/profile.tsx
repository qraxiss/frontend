import { Nav, Tab, Row, Col, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function ProfileNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="profile" className="fs-15" role="presentation">
                <i className="bi bi-person-circle align-middle me-1"></i> Account Details
            </Nav.Link>
        </Nav.Item>
    )
}

export function ProfileTab() {
    return (
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
                                        <Col lg={4}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="cityInput">City</Form.Label>
                                                <Form.Control type="text" id="cityInput" placeholder="City" name="city" />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="countryInput">Country</Form.Label>
                                                <Form.Control type="text" id="countryInput" placeholder="Country" name="country" />
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
    )
}
