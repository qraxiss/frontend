import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Tab, Tooltip, Nav, Table, ProgressBar, Breadcrumb, Form, Image, Card } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
//scss
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'

import { useParams } from 'react-router-dom'
import { gql } from '@apollo/client'
import { useQuery } from 'lib/query-wrapper'

import config from 'config/config'

const query = gql`
    query GET_PRODUCT($slug: String!) {
        productBySlug(slug: $slug) {
            name
            slug
            price
            description
            images {
                data {
                    attributes {
                        url
                    }
                }
            }
        }
    }
`

type resultType = {
    name: string
    slug: string
    price: number
    descripton: string
    images: { url: string }[]
}

const Productdetails = () => {
    let { slug } = useParams()
    let { data, loading } = useQuery(query, {
        variables: { slug }
    })

    data = (data || {
        name: '',
        slug: '',
        price: 0,
        description: '',
        images: []
    }) as resultType

    let sliderProduct = data.images.map((image: any, index: number) => {
        return {
            id: index + 1,
            img: config.serverUrl + image.url
        }
    })

    useEffect(()=>{
        handleSetImg(1)
    }, [sliderProduct])


    const [sliderImg, setSliderImg] = useState(sliderProduct)
    const [count, setCount] = useState(0)

    const handleSetImg = (id: any) => {
        setSliderImg(sliderProduct.filter((selectImg: any) => selectImg.id === id))
    }

    //like button
    const handleLikeIcone = (event: any) => {
        if (event.closest('button').classList.contains('active')) {
            event.closest('button').classList.remove('active')
        } else {
            event.closest('button').classList.add('active')
        }
    }

    return (
        <React.Fragment>
            <section className="section"></section>
            <section className="section">
                <Container>
                    <Row className="gx-2">
                        <Col lg={6}>
                            <Row>
                                <Col md={2}>
                                    <div className="swiper productSwiper mb-3 mb-lg-0 swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs">
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-6100bf53c3db1675b"
                                            aria-live="polite"
                                            style={{
                                                transform: 'translate3d(0px, 0px, 0px)',
                                                transitionDuration: '0ms'
                                            }}
                                        >
                                            {sliderProduct?.map((item: any, idx: number) => {
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-next"
                                                        role="group"
                                                        aria-label={`${item.id} / 5 `}
                                                        style={{ height: '105px', marginBottom: '10px' }}
                                                    >
                                                        <div className="product-thumb rounded cursor-pointer">
                                                            <Image src={item.img} alt="" fluid onClick={() => handleSetImg(item.id)} />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                                    </div>
                                </Col>
                                {/*end col*/}
                                <Col md={10}>
                                    <div className="bg-light rounded-2 position-relative ribbon-box overflow-hidden">
                                        <div className="ribbon ribbon-danger ribbon-shape trending-ribbon">
                                            <span className="trending-ribbon-text">Trending</span>
                                            <i className="ri-flashlight-fill text-white align-bottom float-end ms-1" />
                                        </div>

                                        <Swiper
                                            // onSwiper={setThumbsSwiper}
                                            rewind={true}
                                            navigation={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="swiper productSwiper2 swiper-backface-hidden"
                                        >
                                            {sliderImg.map((item: any) => {
                                                return (
                                                    <SwiperSlide key={item.id}>
                                                        <div
                                                            className="swiper-slide swiper-slide-duplicate"
                                                            data-swiper-slide-index={item.id}
                                                            role="group"
                                                            aria-label={`${item.id} / 5`}
                                                            style={{ width: '458px', marginRight: '10px' }}
                                                        >
                                                            <Image src={item.img} alt="" fluid />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                </Col>
                                {/*end col*/}
                                <Col lg={12}>
                                    <div className="mt-3">
                                        <div className="hstack gap-2">
                                            <Button variant="success" className="btn btn-hover w-100">
                                                {' '}
                                                <i className="bi bi-basket2 me-2" /> Add To Cart
                                            </Button>
                                            <Button variant="primary" className="btn btn-hover w-100">
                                                {' '}
                                                <i className="bi bi-cart2 me-2" /> Buy Now
                                            </Button>
                                            <Button
                                                className="btn btn-soft-danger custom-toggle btn-hover"
                                                data-bs-toggle="button"
                                                aria-pressed="false"
                                                onClick={(ele: any) => handleLikeIcone(ele.target)}
                                            >
                                                <span className="icon-on">
                                                    <i className="ri-heart-line" />
                                                </span>
                                                <span className="icon-off">
                                                    <i className="ri-heart-fill" />
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                                {/*end col*/}
                            </Row>
                            {/*end row*/}
                        </Col>
                        {/*end col*/}
                        <Col lg={5} className="ms-auto">
                            <div className="ecommerce-product-widgets mt-4 mt-lg-0">
                                <div className="mb-4">
                                    <h4 className="lh-base mb-1">{data.name}</h4>
                                    <p className="text-muted mb-4">{data.description}</p>
                                    <h5 className="fs-24 mb-4">${data.price}</h5>
                                    <ul className="list-unstyled vstack gap-2">
                                        <li>
                                            <i className="bi bi-check2-circle me-2 align-middle text-success" />
                                            In stock
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="fs-15 mb-0">Quantity:</h5>
                                    <div className="input-step ms-2">
                                        <Button className="minus" onClick={() => setCount(count - 1)}>
                                            -
                                        </Button>
                                        <Form.Control
                                            type="number"
                                            className="product-quantity1"
                                            value={count > 0 ? count : 0}
                                            min={0}
                                            max={100}
                                            readOnly
                                        />
                                        <Button className="plus" onClick={() => setCount(count + 1)}>
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <Row className="gy-3">
                                    <Col md={6}>
                                        <div>
                                            <h6 className="fs-14 fw-medium text-muted">Sizes:</h6>
                                            <ul className="clothe-size list-unstyled hstack gap-2 mb-0 flex-wrap">
                                                <li>
                                                    <Form.Control type="radio" name="sizes7" id="product-color-72" />
                                                    <Form.Label
                                                        className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                        htmlFor="product-color-72"
                                                    >
                                                        s
                                                    </Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes7" id="product-color-73" />
                                                    <Form.Label
                                                        className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                        htmlFor="product-color-73"
                                                    >
                                                        m
                                                    </Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes7" defaultChecked id="product-color-74" />
                                                    <Form.Label
                                                        className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                        htmlFor="product-color-74"
                                                    >
                                                        l
                                                    </Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes7" id="product-color-75" />
                                                    <Form.Label
                                                        className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                        htmlFor="product-color-75"
                                                    >
                                                        xl
                                                    </Form.Label>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h6 className="fs-14 fw-medium text-muted">Colors: </h6>
                                        <ul className="clothe-colors list-unstyled hstack gap-1 mb-0 flex-wrap ms-2">
                                            <li>
                                                <Form.Control type="radio" name="sizes" id="product-color-2" />
                                                <Form.Label
                                                    className="avatar-xs btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                    htmlFor="product-color-2"
                                                />
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="sizes" id="product-color-3" />
                                                <Form.Label
                                                    className="avatar-xs btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                    htmlFor="product-color-3"
                                                />
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="sizes" id="product-color-4" defaultChecked />
                                                <Form.Label
                                                    className="avatar-xs btn btn-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                    htmlFor="product-color-4"
                                                />
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/*end col*/}
                    </Row>
                    {/*end row*/}
                </Container>
                {/*end container*/}
            </section>
        </React.Fragment>
    )
}

export default Productdetails
