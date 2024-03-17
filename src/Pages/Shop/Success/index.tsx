import { Container, Table, Row, Col, Form } from 'react-bootstrap'

let table1 = (
    <Table striped bordered hover>
        <tbody>
            <tr>
                <td>data1</td>
                <td>data2</td>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
            </tr>
        </tbody>
    </Table>
)

let table2 = (
    <Table striped bordered hover>
        <tbody>
            <tr>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
            </tr>
        </tbody>
    </Table>
)

export default function Success() {
    return (
        <section className="section">
            <Container className="success-page">
                <div className="success-info-box">
                    <div className="top">
                        <div className="title">Shopping Successful! ✅</div>
                        <div className="success-message">Thank You For Your Purchase! Your transaction has been successfully completed.</div>
                    </div>

                    <div className="tables">
                        <div className="information-table">
                            <div className="title">Payment</div>
                            {table1}
                        </div>
                        <div className="information-table">
                            <div className="title">Products</div>
                            {table2}
                        </div>
                    </div>
                </div>

                <div className="success-info-box shipping">
                    <div className="title">Shipping Information</div>

                    <Row className='details'>
                        <Col>
                            <Row>First Name</Row>
                            <Row>Email Address</Row>
                            <Row>Country / Region</Row>
                            <Row>Town / City</Row>
                            <Row>Postcode / ZIP</Row>
                            <Row>Order Notes</Row>
                            <div className="notes">

                            </div>
                        </Col>

                        <Col>
                            <Row>Last Name</Row>
                            <Row>Phone</Row>
                            <Row>State</Row>
                            <Row>Street Adress</Row>
                        </Col>

                                        <Form.Control className='notes'
                                            name="desc"
                                            as="textarea"
                                            id="exampleFormControlTextarea"
                                            placeholder=""
                                            rows={3}
                                        ></Form.Control>
                    </Row>

                    
                </div>
            </Container>
        </section>
    )
}
