import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'

//img
import img1 from 'assets/images/Carusel/slide1.png'
import img2 from 'assets/images/Carusel/slide2.png'
import img3 from 'assets/images/Carusel/slide3-2.png'

const Collection = () => {
  return (
    <React.Fragment>
      <section className="position-relative">
        <Carousel id="ecommerceHero" data-bs-ride="carousel">
          <Carousel.Item>
            <div className="ecommerce-home bg-danger-subtle" style={{ backgroundImage: `url(${img1})` }}>
              <Container>
                <Row className="justify-content-end text-white">
                  <Col lg={7}>
                    <div className="text-sm-end text-white">
                      <p className="fs-15 fw-semibold text-uppercase text-white">
                        {/* <i className="ri-flashlight-fill text-primary align-bottom me-1 text-white"></i> */}
                        Rekor ve Hidrolik parça üretiminde
                      </p>
                      <h1 className="display-4 fw-bold lh-base  mb-3 text-white">BENZERSİZ KALİTE VE FİYAT İMKANI</h1>
                      <p className="fs-20 mb-4 text-white">ŞİMDİ E-TİCARET SİTEMİZDE</p>
                      <Button variant="ot-blue" className="btn-hover ">
                        <i className="ph-shopping-cart align-middle me-1"></i> Alışveriş Yap
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="ecommerce-home bg-primary-subtle" style={{ backgroundImage: `url(${img2})` }}>
              <Container>
                <Row>
                  <Col lg={6}>
                    <div>
                      <p className="fs-15 fw-semibold text-uppercase text-white">
                        Rekor ve Hidrolik parça üretiminde
                        {/* <i className="ri-flashlight-fill text-info align-bottom me-1 text-white"></i> Save up to{' '}
                        <span className="text-danger">50%</span> off */}
                      </p>
                      <h1 className="display-4 fw-semibold  lh-base text-white">BENZERSİZ KALİTE VE FİYAT İMKANI</h1>
                      <p className="fs-18 mb-4 text-white">ŞİMDİ E-TİCARET SİTEMİZDE</p>
                      <Button variant="primary" className="btn-hover ">
                        <i className="ph-shopping-cart align-middle me-1"></i> Alışveriş Yap
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="ecommerce-home" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover' }}>
              <Container>
                <Row className="justify-content-end text-white">
                  <Col lg={7}>
                    <div className="text-sm-end text-white">
                      <p className="fs-15 fw-semibold text-uppercase text-white">
                        {/* <i className="ri-flashlight-fill text-primary align-bottom me-1 text-white"></i> */}
                        Rekor ve Hidrolik parça üretiminde
                      </p>
                      <h1 className="display-4 fw-bold lh-base text-capitalize mb-3 text-white">BENZERSİZ KALİTE VE FİYAT İMKANI</h1>
                      <p className="fs-20 mb-4 text-white">ŞİMDİ E-TİCARET SİTEMİZDE</p>
                      <Button variant="primary" className="btn-hover ">
                        <i className="ph-shopping-cart align-middle me-1"></i> Alışveriş Yap
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </React.Fragment>
  )
}

export default Collection
