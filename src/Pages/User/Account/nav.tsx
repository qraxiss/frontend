import {
    OrdersNav,
    OrdersTab,
    WishListNav,
    WishListTab,
    ProfileNav,
    ProfileTab,
    XpNav,
    AddressNav,
    AddressTab,
    LogoutNav,
    StakeNav
} from './sections'
import { Col, Container, Row, Tab, Nav, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export function UserNav() {
    let { section } = useParams()

    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey={section ? section : 'profile'}>
                <Row>
                    <Col lg={3}>
                        <Card>
                            <Card.Body>
                                <Nav variant="pills" className="flex-column gap-3">
                                    <ProfileNav />
                                    <WishListNav />
                                    <OrdersNav />
                                    <XpNav />
                                    <StakeNav />
                                    <AddressNav />
                                    <LogoutNav />
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <ProfileTab />
                            <WishListTab />
                            <OrdersTab />
                            <AddressTab />
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}
