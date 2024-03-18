import React from 'react'
import { Button } from 'react-bootstrap'
import {  useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { MainModal } from 'Components/Modals'

const Layout = (props: any) => {
    let location = useLocation()

    window.onscroll = function () {
        scrollFunction()
    }

    const scrollFunction = () => {
        const element = document.getElementById('back-to-top')
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        }
    }
    const ScrollbarTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return (
        <React.Fragment>
            {location.pathname && <MainModal location={location.pathname} />}

            <Header />
            {props.children}
            <Footer />

            <Button onClick={() => ScrollbarTop()} variant="info" className="btn-icon" style={{ bottom: '50px' }} id="back-to-top">
                <i className="ri-arrow-up-line"></i>
            </Button>
        </React.Fragment>
    )
}

export default Layout