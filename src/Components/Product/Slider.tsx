import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { CardComponent } from 'Components/newComponents'
import { productListType } from 'models/ProductType'

import { CommonTitle } from 'Components/Homepage'

const Slider = ({ items, title }: { items: productListType[]; title: string }) => {
    return (
        <React.Fragment>
            <Container>
                <section className="section pb-0">
                    <CommonTitle title={title} />
                    <Row>
                        <Col lg={12}>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                slidesPerView={5}
                                spaceBetween={30}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev'
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    768: {
                                        slidesPerView: 3,
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
                                                <CardComponent data={item} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </div>
                            </Swiper>
                        </Col>
                    </Row>
                </section>
            </Container>
        </React.Fragment>
    )
}

export default Slider
