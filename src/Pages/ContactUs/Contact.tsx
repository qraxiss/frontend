import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { contactdetails } from 'Common/data'

import { gql } from '@apollo/client'
import { useMutation } from 'lib/query-wrapper'

const query = gql`
  mutation ($name: String!, $email: String!, $subject: String!, $message: String!) {
    createContact(data: { name: $name, email: $email, subject: $subject, message: $message }) {
      data {
        attributes {
          name
          email
          subject
          message
        }
      }
    }
  }
`

const ContactUs = () => {
  let { fn, data, loading } = useMutation(query)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Bu alanı doldurmak zorunludur!'),
      email: Yup.string()
        .email()
        .matches(/^(?!.*@[^,]*,)/)
        .required('Bu alanı doldurmak zorunludur!'),
      subject: Yup.string().required('Bu alanı doldurmak zorunludur!'),
      message: Yup.string().required('Bu alanı doldurmak zorunludur!')
    }),
    onSubmit: (values) => {
      fn({
        variables: values
      })
    }
  })

  return (
    <React.Fragment>
      <section className="ecommerce-about bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col lg={5}>
              <div className="text-center">
                <h1 className="text-white">Bizimle İletişime Geçin</h1>
                {/* <p className="fs-16 mb-0 text-white-75">Let's start something great together. Get in touch with one of the team today!</p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Row>
            <Col lg={4}>
              {(contactdetails || [])?.map((item, idx) => {
                return (
                  <Card key={idx} className="border border-opacity-25">
                    <Card.Body className="p-4">
                      <div className="d-flex">
                        <div className="avatar-sm flex-shrink-0">
                          <div className={`avatar-title bg-${item.color}-subtle text-${item.color} rounded fs-17`}>
                            <i className={`${item.icon}`}></i>
                          </div>
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <h5 className="fs-17 lh-base mb-2">{item.title}</h5>
                          <p className="text-muted fs-14 mb-2">{item.describe}</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                )
              })}
            </Col>

            <Col lg={8}>
              <div className="custom-form card p-4 p-lg-5">
                <Form name="myForm" action="#" onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div className="text-center mb-4">
                        <h3 className="text-capitalize">Bilgi Almak İçin Bize Ulaşın</h3>
                      </div>
                    </Col>
                    <Col lgt={6}>
                      <div className="form-group mt-3">
                        <Form.Label htmlFor="nameInput">
                          İsim<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          name="name"
                          id="nameInput"
                          type="text"
                          placeholder="İsminizi giriniz"
                          value={formik.values.name}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.name && formik.touched.name ? <span className="text-danger">{formik.errors.name}</span> : null}
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group mt-3">
                        <Form.Label htmlFor="emailInput">
                          Email<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          name="email"
                          id="emailInput"
                          type="email"
                          placeholder="Email adresinizi giriniz"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group mt-3">
                        <Form.Label htmlFor="subjectInput">
                          Konu<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="subjectInput"
                          placeholder="Bahsetmek istediğiniz konuyu giriniz"
                          name="subject"
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.subject && formik.touched.subject ? <span className="text-danger">{formik.errors.subject}</span> : null}
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group mt-3">
                        <Form.Label htmlFor="messageInput">
                          Mesaj<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          id="messageInput"
                          rows={4}
                          placeholder="Mesajınızı giriniz"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          {formik.errors.message && formik.touched.message ? <span className="text-danger">{formik.errors.message}</span> : null}
                        </Form.Control>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="text-end mt-4">
                        <Button type="submit" id="submit" name="submit" variant="primary">
                          Gönder <i className="bi bi-arrow-right-short align-middle fs-16 ms-1"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default ContactUs
