import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'
import config from 'config/config'

const query = gql`
  query {
    parentCategories {
      data {
        attributes {
          name
          slug
          childs {
            data {
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
    logo {
      data {
        attributes {
          text {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    footer {
      data {
        attributes {
          shopcek {
            name
            url
          }
          legal {
            name
            url
          }
          about
        }
      }
    }

    social {
      data {
        attributes {
          socials {
            name
            url
            icon {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

const groupList = <T extends any>(list: T[], groupSize: number): T[][] => {
  return list.reduce((acc, item, index) => {
    const groupIndex = index % groupSize

    if (!acc[groupIndex]) {
      acc[groupIndex] = []
    }

    acc[groupIndex].push(item)

    return acc
  }, [] as T[][])
}

const Footer = () => {
  const { data, loading } = useQuery(query)
  let logodark = !loading ? config.serverUrl + data.logo.text.url : ''
  let logolight = !loading ? config.serverUrl + data.logo.text.url : ''

  let groupedList
  if (!loading) {
    groupedList = groupList(data.social.socials, 1)
  }

  return (
    <React.Fragment>
      <section className="section footer-landing pb-0 px-2">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="footer-info">
                <Image src={logolight} alt="" height="50" className="logo-light" />
                <Image src={logodark} alt="" height="50" className="logo-dark" />
                <p className="footer-desc mt-4 mb-2 me-3">{!loading ? data.footer.about : ''}</p>
              </div>
              {/* <div className="footer-social mt-4">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <Link to="#" className="text-reset">
                      <i className="mdi mdi-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-reset">
                      <i className="mdi mdi-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-reset">
                      <i className="mdi mdi-google"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-reset">
                      <i className="mdi mdi-pinterest"></i>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </Col>

            <Col lg={6}>
              <Row className="pl-0 pl-lg-3">
                <Col md={7}>
                  <div className="mt-lg-0 mt-4">
                    <h5 className="footer-title">Kategoriler</h5>
                    <ul className="list-unstyled footer-link mt-3">
                      {(!loading ? data.parentCategories : []).map((category: any) => {
                        return (
                          <li key={category.slug}>
                            <Link to={`/category/${category.slug}`}>{category.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Col>

                {/* <Col md={3}>
                  <div className="mt-lg-0 mt-4">
                    <h5 className="footer-title">Shopcek</h5>
                    <ul className="list-unstyled footer-link mt-3">
                      {(!loading ? data.footer.shopcek : []).map((item: any) => {
                        return (
                          <li key={item.url}>
                            <Link to={item.url}>{item.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Col> */}

                {/* Legal */}
                {/* <Col md={3}>
                  <div className="mt-lg-0 mt-4">
                    <h5 className="footer-title">Legal</h5>
                    <ul className="list-unstyled footer-link mt-3">
                      {(!loading ? data.footer.legal : []).map((item: any) => {
                        return (
                          <li key={item.url}>
                            <Link to={item.url}>{item.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Col> */}

                {/* Sosyal medya */}
                <Col md={4}>
                  <div className="my-lg-0 mt-4">
                    <h5 className="footer-title">Bizi takip et</h5>
                    {(!loading ? groupedList! : []).map((group, index) => (
                      <Row md={2} key={index} className="footer-socials">
                        {group.map((item: any, itemIndex) => {
                          return (
                            <Col key={itemIndex} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Link to={item.url}>
                                <Image src={config.serverUrl + item.icon.url} className="footer-social-icon" width={36} />
                              </Link>
                            </Col>
                          )
                        })}
                      </Row>
                    ))}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Footer
