import React from 'react'
import { Row, Col } from 'react-bootstrap'

export const CommonTitle = ({ title, dicription }: any) => {
    return (
        <Row className="justify-content-center">
            <Col lg={7}>
                <div className="text-center">
                    <p
                        className="mb-3"
                        style={{
                            fontSize: '30px'
                        }}
                    >
                        {title}
                    </p>
                    <p className="text-muted fs-15">{dicription}</p>
                </div>
            </Col>
        </Row>
    )
}
