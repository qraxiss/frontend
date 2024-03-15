import { Nav } from 'react-bootstrap'

export function XpNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="xp-points" className="fs-15" role="presentation">
                <i className="bi bi-coin align-middle me-1"></i> XP Points
            </Nav.Link>
        </Nav.Item>
    )
}
