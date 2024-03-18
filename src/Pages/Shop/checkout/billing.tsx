import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { useEffect, useState } from 'react'

import { useUser } from 'context/user'
export function Billing() {
    let { recipient } = useUser()
    // let gql = useMutation(updateRecipient)

    const formik = useFormik({
        initialValues: recipient,
        validationSchema: Yup.object({
            name: Yup.string().required('Please Enter Your Name'),
            address1: Yup.string().required('Please Enter Your Address Line'),
            address2: Yup.string(),
            email: Yup.string().email().required('Please Enter Your Email'),
            state_code: Yup.string().required('Please Enter Your State Code'),
            state_name: Yup.string().required('Please Enter Your State Name'),
            country_code: Yup.string().required('Please Enter Your Country Code'),
            country_name: Yup.string().required('Please Enter Your Country Name'),
            zip: Yup.string().required('Please Enter Your Zip Code'),
            city: Yup.string().required('Please Enter Your City'),
            phone: Yup.string().matches(RegExp('[0-9]{7}')).required('Please Enter Your Phone')
        }),
        onSubmit: console.log
    })

    let [check, setCheck] = useState(false)

    useEffect(() => {
        if (!check) {
            Object.keys(recipient).forEach((key) => {
                ;(formik.values as any)[key] = ''
            })
        } else {
            Object.keys(recipient).forEach((key) => {
                ;(formik.values as any)[key] = (recipient as any)[key]
            })
        }
    }, [check])

    useEffect(()=>{
        if (recipient){
            Object.keys(recipient).forEach((key) => {
                ;(formik.values as any)[key] = (recipient as any)[key]
            })
        }
        
    }, [])

    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col lg={6}>
                                    <h5 className="fs-16 text-decoration-underline mb-4">Billing Address</h5>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3 check">
                                        <Form.Check
                                            onChange={(e) => {
                                                setCheck(e.target.checked)
                                            }}
                                            type="switch"
                                        />
                                        <Form.Label>Ship To Different Address?</Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="firstnameInput">Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="firstnameInput"
                                            placeholder="Enter your name"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="phonenumberInput">Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="phonenumberInput"
                                            placeholder="Enter your phone number"
                                            name="phone"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="emailInput">Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            id="emailInput"
                                            placeholder="Enter your email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="cityInput">City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="cityInput"
                                            placeholder="City"
                                            name="city"
                                            value={formik.values.city}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="countryInput">Country</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="countryInput"
                                            placeholder="Country"
                                            name="country_name"
                                            value={formik.values.country_name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="stateInput">State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="stateInput"
                                            placeholder="Enter state"
                                            name="state_name"
                                            value={formik.values.state_name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="zipcodeInput">Zip Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            minLength={5}
                                            maxLength={6}
                                            id="zipcodeInput"
                                            placeholder="Enter zipcode"
                                            name="zip"
                                            value={formik.values.zip}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="streetAddress">Address Line 1</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="streetAddress"
                                            placeholder="Enter address line 1"
                                            name="address1"
                                            rows={3}
                                            as="textarea"
                                            value={formik.values.address1}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        ></Form.Control>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="streetAddress">Address Line 2</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="streetAddress"
                                            placeholder="Enter address line 2"
                                            name="address2"
                                            rows={3}
                                            as="textarea"
                                            value={formik.values.address2}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        ></Form.Control>
                                    </div>
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

                            {/* <div className="text-sm-end">
                                <Button
                                    onClick={() => {
                                        console.log({
                                            variables: {
                                                recipient: {
                                                    name: formik.values.name,
                                                    address1: formik.values.address1,
                                                    address2: formik.values.address2,
                                                    email: formik.values.email,
                                                    state_code: 'CA',
                                                    state_name: formik.values.state_name,
                                                    country_code: 'US',
                                                    country_name: formik.values.country_name,
                                                    zip: formik.values.zip,
                                                    city: formik.values.city,
                                                    phone: formik.values.phone
                                                }
                                            }
                                        })
                                    }}
                                    id="addNewAddress"
                                    className="btn btn-secondary d-block d-sm-inline-block"
                                >
                                    <i className="ri-edit-box-line align-middle me-2"></i> Update Profile
                                </Button>
                            </div> */}
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
