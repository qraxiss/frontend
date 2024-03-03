import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//img

import config from 'config/config'

import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'

const query = gql`
  query {
    profilePicture {
      url
    }
  }
`

let originalPp: string

const Logout = () => {
  let { data, loading, error } = useQuery(query)

  if (!loading && !!localStorage.getItem('jwt')) {
    originalPp = data.url
    localStorage.removeItem('jwt')
  }

  return (
    <React.Fragment>
      <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
        <div className="w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="auth-card mx-lg-3">
                  <Card className="border-0 mb-0">
                    <Card.Body className="text-center">
                      <div className="mb-4">
                        <Image src={config.serverUrl + (originalPp || data?.url)} alt="" className="avatar-md rounded-circle" />
                      </div>
                      <div>
                        <Link to="/signin" className="btn btn-primary w-100">
                          Giriş Yap
                        </Link>
                        <Link to="/" className="btn btn-blue mt-3 w-100">
                          Anasayfaya Dön
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default Logout
