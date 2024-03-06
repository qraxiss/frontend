import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Tab, Nav, Table, Form, Image } from 'react-bootstrap'

import { Link } from 'react-router-dom'
//scss
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'

import { useParams } from 'react-router-dom'
import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'
import config from 'config/config'

import { Slider } from 'Components/Product'
import { products } from 'lib/common-queries'
import { useCart } from 'context/cart-context'

import { getSingleProductBySlug } from 'lib/common-queries'

const socials = gql`
    query {
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

type resultType = {
    name: string
    slug: string
    price: number
    descripton: string
    images: { url: string }[]
}

function Information(props: { text: string; icon?: string }) {
    const { text, icon } = props

    return (
        <div className="information">
            <i className={icon ? icon : ''}></i>
            <p>{text}</p>
        </div>
    )
}

function AddToCart(props: { addItem: Function; setCount: Function; count: number; slug: string }) {
    const { addItem, setCount, count, slug } = props

    return (
        <div className="hstack gap-2 add-to-cart">
            <div className="input-step ms-2">
                <Button className="minus" onClick={() => setCount(count - 1)}>
                    -
                </Button>
                <Form.Control type="number" className="product-quantity1" value={count > 0 ? count : 0} min={0} max={100} readOnly />
                <Button className="plus" onClick={() => setCount(count + 1)}>
                    +
                </Button>
            </div>

            <Button
                variant="primary"
                className="btn btn-hover w-100"
                onClick={() => {
                    console.log(count, 'onClick')
                    addItem(slug, count)
                }}
            >
                Add To Cart
            </Button>
            <Button variant="secondary" className="btn btn-hover w-100 h-10">
                Buy Now
            </Button>
        </div>
    )
}

function Colors() {
    return (
        <div className="colors">
            <ul className="clothe-colors list-unstyled hstack gap-1 mb-0 flex-wrap ms-2">
                <li className="color">
                    <Form.Control type="radio" name="sizes" id="product-color-2" />
                    <Form.Label
                        className="avatar-xs btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle"
                        htmlFor="product-color-2"
                    />
                </li>
                <li className="color">
                    <Form.Control type="radio" name="sizes" id="product-color-3" />
                    <Form.Label
                        className="avatar-xs btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle"
                        htmlFor="product-color-3"
                    />
                </li>
                <li className="color">
                    <Form.Control type="radio" name="sizes" id="product-color-4" defaultChecked />
                    <Form.Label
                        className="avatar-xs btn btn-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                        htmlFor="product-color-4"
                    />
                </li>
            </ul>
        </div>
    )
}

function Socials(props: { socialState: any[] }) {
    const { socialState } = props

    return (
        <div className="socials">
            <p>Share:</p>
            {socialState.map((item: any, index: number) => (
                <Link to={item.url}>
                    <Image src={config.serverUrl + item.icon.url} className="social-icon" />
                </Link>
            ))}
        </div>
    )
}

function Categories(props: { categories: any[] }) {
    const { categories } = props

    return (
        <div className="categories">
            <p>Categories:</p>
            {categories.map((item: any, index: number) => {
                return <Link to={`/category/${item.slug}`}>{' ' + item.name + ','}</Link>
            })}
        </div>
    )
}

function ProductInfo(props: { price: string; name: string }) {
    const { name, price } = props

    return (
        <div className="info">
            <span className="lh-base mb-1">{name}</span>
            <h5 className="text-primary">${price}</h5>
        </div>
    )
}

function AddToWishList() {
    return (
        <div className="wishlist">
            <i className="bi bi-arrow-through-heart" />
            <p>Add to wishlist!</p>
        </div>
    )
}

const Productdetails = () => {
    let { slug } = useParams()
    let { data, loading } = useQuery(getSingleProductBySlug, {
        variables: { slug }
    })
    let socialData = useQuery(socials)
    let [socialState, setSocialState] = useState<any>([])

    useEffect(() => {
        if (!socialData.loading) {
            setSocialState(socialData.data.socials)
        }
    }, [socialData.loading])

    let { addItem } = useCart()

    let productsData = useQuery(products)
    const [productsList, setProductsList] = useState<any[]>([])
    useEffect(() => {
        if (JSON.stringify(productsData.data) !== JSON.stringify(productsList) && !productsData.loading && !productsData.error) {
            setProductsList(productsData.data)
        }
    }, [productsData.data])

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

    useEffect(() => {
        handleSetImg(1)
    }, [loading])

    const [sliderImg, setSliderImg] = useState(sliderProduct)
    const [sliderId, setSliderId] = useState(0)
    const [count, setCount] = useState(0)

    const handleSetImg = (id: any) => {
        setSliderId(id)
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
            <section className="section">
                <Container className="product-details-container">
                    <div className="pictures">
                        <div className="small-pictures">
                            {sliderProduct?.map((item: any, idx: number) => {
                                return <Image src={item.img} onClick={() => handleSetImg(item.id)} />
                            })}
                            <div className="buttons">
                                <Button
                                    onClick={() => {
                                        handleSetImg(sliderId - 1)
                                    }}
                                    className="btn-primary"
                                >
                                    <i className="bi bi-arrow-down"></i>
                                </Button>
                                <Button
                                    onClick={() => {
                                        handleSetImg(sliderId + 1)
                                    }}
                                    className="btn-secondary"
                                >
                                    <i className="bi bi-arrow-up"></i>
                                </Button>
                            </div>
                        </div>
                        <div className="big-picture">
                            {sliderImg.map((item: any) => {
                                return <Image src={item.img} />
                            })}
                        </div>
                    </div>

                    <div className="product-details">
                        <ProductInfo price={data.price} name={data.name} />

                        <Information text="4 Item sold in last 24 hours!" icon="bi bi-fire" />

                        <Colors />

                        <AddToCart addItem={addItem} count={count} setCount={setCount} slug={slug!} />

                        <Information text="6 People watching this product now!" icon="bi bi-eye" />

                        <AddToWishList />

                        <Socials socialState={socialState} />

                        <Categories categories={!loading ? data.categories : []} />
                    </div>
                </Container>
            </section>

            <section className="section pt-0">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="Description">
                                <Row>
                                    <Col sm={12}>
                                        <Nav variant="underline" className="nav-tabs-custom mb-3">
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="Information">
                                                    {' '}
                                                    Additional Information
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="Description">
                                                    {' '}
                                                    Description
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="Reviews">
                                                    {' '}
                                                    Reviews
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="Shipping">
                                                    {' '}
                                                    Shipping
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="Information">
                                                <div className="tab-pane active show" id="profile1" role="tabpanel">
                                                    <Table className="table-sm table-borderless align-middle">
                                                        <tbody>
                                                            {(
                                                                [
                                                                    {
                                                                        thead: 'Size',
                                                                        tdata: 'XL'
                                                                    },
                                                                    {
                                                                        thead: 'Color',
                                                                        tdata: 'Blue'
                                                                    }
                                                                ] as any[]
                                                            ).map((item: any, idx) => {
                                                                return (
                                                                    <tr key={idx}>
                                                                        <th>{item.thead}</th>
                                                                        <td>{item.tdata}</td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="Description">{data.description}</Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            <section className="section pt-0">
                <Slider items={productsList} title="Related Products"></Slider> {/*end row*/}
            </section>
        </React.Fragment>
    )
}

export default Productdetails
