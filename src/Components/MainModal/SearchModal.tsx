import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

//component
import DeleteModal from 'Components/MainModal/DeleteModal'

import { useNavigate } from 'react-router-dom'
import { useCart } from 'context/cart-context'

import { Text } from '../Images/Logo'

export const SearchModal = ({ show, handleClose }: any) => {
    const [value, setValue] = useState('')
    const handlesearch = (event: any) => {
        setValue(event.value)
    }

    useEffect(() => {
        var searchOption = document.getElementById('search-close-options')
        var dropdown = document.getElementById('search-dropdown')
        var searchInput: any = document.getElementById('search-options')

        searchInput?.addEventListener('keyup', function () {
            if (searchInput?.value.length > 0) {
                dropdown?.classList.add('show')
                searchOption?.classList.remove('d-none')
            } else {
                dropdown?.classList.remove('show')
                searchOption?.classList.add('d-none')
            }
        })

        searchOption?.addEventListener('click', function () {
            searchInput.value = ''
            dropdown?.classList.remove('show')
            searchOption?.classList.add('d-none')
            setValue('')
        })
    }, [value])
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} size="lg" contentClassName="rounded" id="searchModal">
                <Modal.Header className="p-3">
                    <div className="position-relative w-100">
                        <Form.Control
                            type="text"
                            className="form-control-lg border-2"
                            placeholder="Search for Toner..."
                            id="search-options"
                            value={value}
                            onChange={(e: any) => handlesearch(e.target)}
                        />
                        <span className="bi bi-search search-widget-icon fs-17"></span>
                        <Link
                            to="#"
                            className="search-widget-icon fs-14 link-secondary text-decoration-underline search-widget-icon-close"
                            id="search-close-options"
                        >
                            Clear
                        </Link>
                    </div>
                </Modal.Header>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 overflow-hidden" id="search-dropdown">
                    <div className="dropdown-head rounded-top">
                        <div className="p-3">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="m-0 fs-14 text-muted fw-semibold"> RECENT SEARCHES </h6>
                                </Col>
                            </Row>
                        </div>

                        <div className="dropdown-item bg-transparent text-wrap">
                            <Link to="/" className="btn btn-soft-secondary btn-sm btn-rounded">
                                how to setup <i className="mdi mdi-magnify ms-1 align-middle"></i>
                            </Link>
                            <Link to="/" className="btn btn-soft-secondary btn-sm btn-rounded">
                                buttons <i className="mdi mdi-magnify ms-1 align-middle"></i>
                            </Link>
                        </div>
                    </div>
                    <SimpleBar className="pe-2 ps-3 mt-3" style={{ maxHeight: '300px' }}>
                        <div className="list-group list-group-flush border-dashed">
                            <div className="notification-group-list">
                                <h5 className="text-overflow text-muted fs-13 mb-2 mt-3 text-uppercase notification-title">Apps Pages</h5>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <i className="bi bi-speedometer2 me-2"></i> <span>Analytics Dashboard</span>
                                </Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <i className="bi bi-filetype-psd me-2"></i> <span>Toner.psd</span>
                                </Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <i className="bi bi-ticket-detailed me-2"></i> <span>Support Tickets</span>
                                </Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <i className="bi bi-file-earmark-zip me-2"></i> <span>Toner.zip</span>
                                </Link>
                            </div>

                            <div className="notification-group-list">
                                <h5 className="text-overflow text-muted fs-13 mb-2 mt-3 text-uppercase notification-title">Links</h5>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <i className="bi bi-link-45deg me-2 align-middle"></i> <span>www.themesbrand.com</span>
                                </Link>
                            </div>

                            <div className="notification-group-list">
                                <h5 className="text-overflow text-muted fs-13 mb-2 mt-3 text-uppercase notification-title">People</h5>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <div className="d-flex align-items-center">
                                        <Image src="" alt="" className="avatar-xs flex-shrink-0 me-2" roundedCircle />
                                        <div>
                                            <h6 className="mb-0">Ayaan Bowen</h6>
                                            <span className="fs-12 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <div className="d-flex align-items-center">
                                        <Image src="" alt="" className="avatar-xs flex-shrink-0 me-2" roundedCircle />
                                        <div>
                                            <h6 className="mb-0">Alexander Kristi</h6>
                                            <span className="fs-12 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <div className="d-flex align-items-center">
                                        <Image src="" alt="" className="avatar-xs flex-shrink-0 me-2" roundedCircle />
                                        <div>
                                            <h6 className="mb-0">Alan Carla</h6>
                                            <span className="fs-12 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SimpleBar>
                </div>
            </Modal>
        </React.Fragment>
    )
}