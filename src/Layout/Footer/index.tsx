import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import { Bottom } from './bottom'
import { Sections } from './sections'
import { Socials } from './socials'
const Footer = () => {
    return (
        <React.Fragment>
            <section className="section footer-landing pb-0">
                <Container>
                    <Sections />
                    <Socials />
                    <Bottom />
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Footer
