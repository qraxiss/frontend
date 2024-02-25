import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { CommonService } from 'Components/CommonService'

//img
import img1 from 'assets/images/Carusel/slide2.png'
import { CommonTitle } from 'Components/Homepage'

const Service = () => {
  return (
    <React.Fragment>
      <CommonService />
      <section className="section pt-0">
        <Container>
          <Row>
            <Col lg={6}>
              <Link to="#" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden position-relative d-block">
                <Image src={img1} fluid rounded alt="" />
                <div className="bg-overlay blue"></div>
                <div className="product-content p-4">
                  <p className=" text-white mb-2">Yüzde 50'ye varan indirimler</p>
                  <h1 className="text-white lh-base fw-medium "> Hidrolik Ürünleri</h1>
                  <div className="product-btn mt-4 text-white">
                    Alışveriş Yap <i className="bi bi-arrow-right ms-2"></i>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={6}>
              <Link to="#" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden position-relative d-block">
                <Image src={img1} fluid rounded alt="" />
                <div className="bg-overlay blue"></div>
                <div className="product-content p-4">
                  <p className=" text-white mb-2">Yüzde 50'ye varan indirimler</p>
                  <h1 className="text-white lh-base fw-medium "> Rakor Ürünleri</h1>
                  <div className="product-btn mt-4 text-white">
                    Alışveriş Yap <i className="bi bi-arrow-right ms-2"></i>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <CommonTitle
          title="HAFTANIN EN İYİ ÜRÜNLERİ"
          dicription="This ranges from women and men's outfits to children's clothing, shoes, accessories, and more. People love their clothes, and fashion isn't going anywhere!"
        />
      </Container>
    </React.Fragment>
  )
}

export default Service
