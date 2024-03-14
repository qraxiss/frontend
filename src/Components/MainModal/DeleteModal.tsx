import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useCart } from 'context/cart'
import { useUser } from 'context/user'
import { useMutation } from 'lib/query-wrapper'
import { updateRecipient } from 'lib/common-queries'

//delete modal
export const DeleteModal = ({ removeModel, hideModal, slug, options }: any) => {
    const handleDelete = () => {
        hideModal()
    }

    let { deleteItem } = useCart()

    return (
        <Modal show={removeModel} onHide={hideModal} centered id="removeItemModal" className="zoomIn">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className="mt-2 text-center">
                    {/* <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger=" loop" colors={'primary:#f7b84b,secondary:#f06548'} style={{ width: "100px", height: "100px" }}></lord-icon> */}
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you sure ?</h4>
                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this product ?</p>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <Button className="btn w-sm btn-secondary" data-bs-dismiss="modal" onClick={hideModal}>
                        Close
                    </Button>
                    <Button
                        className="btn w-sm btn-primary"
                        id="remove-product"
                        onClick={() => {
                            deleteItem(slug, options, true)
                            handleDelete()
                        }}
                    >
                        Yes, Delete It!
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteModal

//=================================================================

//add addres modal
export const ModalAdd = ({ addressModal, handleClose }: any) => {
    let { recipient } = useUser()
    let gql = useMutation(updateRecipient)


    const formik = useFormik({
        initialValues: recipient,
        validationSchema: Yup.object({
            name: Yup.string().required('Please Enter Your Name'),
            address1: Yup.string().required('Please Enter Your Address'),
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
        onSubmit: (values) => {
            gql.fn({
                variables: {
                    recipient: values
                }
            })
        }
    })

    return (
        <React.Fragment>
            <Modal show={addressModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <h1 className="modal-title fs-5" id="addAddressModalLabel">
                        Add New Address
                    </h1>
                </Modal.Header>
                <Modal.Body>
                    <Form className="needs-validation createAddress-form" id="createAddress-form" onSubmit={formik.handleSubmit}>
                        <Form.Control type="hidden" id="addressid-Form.Control" defaultValue="" />
                        <div>
                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && formik.touched.name ? <span className="text-danger">{formik.errors.name}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">Address Line 1</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter address 1"
                                    name="address1"
                                    value={formik.values.address1}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.address1 && formik.touched.address1 ? <span className="text-danger">{formik.errors.address1}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">Address Line 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter address 2"
                                    name="address2"
                                    value={formik.values.address2}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.address2 && formik.touched.address2 ? <span className="text-danger">{formik.errors.address2}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">state_code</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter state_code"
                                    name="state_code"
                                    value={formik.values.state_code}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.state_code && formik.touched.state_code ? <span className="text-danger">{formik.errors.state_code}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">state_code</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter state_name"
                                    name="state_name"
                                    value={formik.values.state_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.state_name && formik.touched.state_name ? <span className="text-danger">{formik.errors.state_name}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">country_code</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter country_code"
                                    name="country_code"
                                    value={formik.values.country_code}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.country_code && formik.touched.country_code ? <span className="text-danger">{formik.errors.country_code}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">country_name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter country_name"
                                    name="country_name"
                                    value={formik.values.country_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.country_name && formik.touched.country_name ? <span className="text-danger">{formik.errors.country_name}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter zip"
                                    name="zip"
                                    value={formik.values.zip}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.zip && formik.touched.zip ? <span className="text-danger">{formik.errors.zip}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">City</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="city"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.city && formik.touched.city ? <span className="text-danger">{formik.errors.city}</span> : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.phone && formik.touched.phone ? <span className="text-danger">{formik.errors.phone}</span> : null}
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-4">
                            <Button className="btn btn-light" data-bs-dismiss="modal" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" id="addNewAddress" className="btn btn-primary">
                                Add
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
