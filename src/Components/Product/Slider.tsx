import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { addItemToCart, cartQuery } from 'lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'
import { CardComponent } from 'Components/newComponents'
import { productListType } from 'models/ProductType'

const Slider = ({ items }: { items: productListType[] }) => {
  let { fn, data, loading, error } = useMutation(addItemToCart)
  let { refetch } = useQuery(cartQuery)

  useEffect(() => {
    refetch()
  }, [loading])

  return (
    <React.Fragment>
      <section className="section pb-0">
        <Container>
          <Row>
            <Col lg={12}>
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  }
                }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="latest-slider pt-5 swiper-pointer-events"
              >
                {/* Slider sağ sol butonları */}
                <div
                  className="swiper-button-next h-auto"
                  aria-controls="swiper-wrapper-2aa67f756d27c1eb"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                ></div>
                <div
                  className="swiper-button-prev h-auto"
                  aria-controls="swiper-wrapper-2aa67f756d27c1eb"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                ></div>
                {/* Slieder'in kendisi */}
                <div className="swiper-wrapper">
                  {items.map((item: any) => {
                    return (
                      <SwiperSlide className="swiper-slide" key={item.slug}>
                        <CardComponent data={item} fn={fn} />
                      </SwiperSlide>
                    )
                  })}
                </div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Slider
