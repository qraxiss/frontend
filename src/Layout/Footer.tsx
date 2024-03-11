import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Icon } from 'Components/Images/Logo'

import { Facebook, Twitter, Medium, Linkedin, Instagram, Telegram } from 'Components/Images/Social'

import { items } from 'data/pages'

function Socials() {
    return (
        <div className='socials'>
            <Link to={'/'}>
                <Facebook className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Twitter className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Instagram className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Medium className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Linkedin className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Telegram className="footer-social-icon" width={48} />
            </Link>
        </div>
    )
}

export function FooterTitle({ title }: { title: string }) {
    return <div className="footer-title">{title}</div>
}

export function FooterSection({ children }: { children: any }) {
    return (
        <div className="mt-lg-0 mt-4 footer-item">
            {children}
        </div>
    )
}

export function Pages() {
    return items.map((item) => {
        return (
            <ul className="list-unstyled footer-link mt-3">
                <li key={item.url}>
                    {item.icon}
                    <Link to={item.url}>{item.title}</Link>
                </li>
            </ul>
        )
    })
}

const Footer = () => {
    return (
        <React.Fragment>
            <section className="section footer-landing pb-0">
                <Container>
                    <div className="footer-items">
                        <FooterSection>
                            <Icon className="logo" />
                        </FooterSection>
                        <FooterSection>
                            <FooterTitle title="Pages" />

                            <Pages />
                        </FooterSection>

                        <FooterSection>
                            <FooterTitle title="Legal" />

                            <Pages />
                        </FooterSection>

                        <FooterSection>
                            <FooterTitle title="Shopcek" />

                            <Pages />
                        </FooterSection>

                        <FooterSection>
                            <Form className="subscribe-newsletter">
                                <FooterTitle title="Subscribe Our Newsletter" />
                                <Form.Control type="email" id="email" name="email" placeholder="Enter your email..." autoComplete="off" />
                                <Button variant="primary" className="w-100" type="submit">
                                    Subscribe
                                </Button>
                            </Form>

                            <Socials />
                        </FooterSection>
                    </div>
                    <hr className="solid"></hr>
                    <div className="infos">
                        <p className="info">Copyright 2024 SHOPCEK-All Rights Reserved</p>
                        <p className="info">Made with one mission: to accelerate the next billion's onboarding to crypto</p>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Footer
