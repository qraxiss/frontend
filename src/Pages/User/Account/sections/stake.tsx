import { Nav } from 'react-bootstrap'

export function StakeNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="stake" className="fs-15" role="presentation">
                <i className="bi bi-piggy-bank align-middle me-1"></i> Stake
            </Nav.Link>
        </Nav.Item>
    )
}
