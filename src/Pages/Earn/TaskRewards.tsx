import { Row, Col, Container, Button } from 'react-bootstrap'

export default function TaskRewards() {
    let task = (
        <div className="task">
            <div className="text">
                <h5>Refer a friend</h5>
                <p>Invite vour friends to join Shopcek</p>
            </div>

            <Button className="btn btn btn-primary">Invite Now</Button>
        </div>
    )

    return (
        <section className="section pb-0 task-rewards">
            <div className="top-container">
                <h1>Task Rewards</h1>
                <Row>
                    <Col>
                        <Row>{task}</Row>
                        <Row>{task}</Row>
                        <Row>{task}</Row>
                        <Row>{task}</Row>
                        <Row>{task}</Row>
                    </Col>
                    <Col>
                        <Row>{task}</Row>
                        <Row>{task}</Row>
                        <Row>{task}</Row>
                        <Row>{task}</Row>
                        <Row>{task}</Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
