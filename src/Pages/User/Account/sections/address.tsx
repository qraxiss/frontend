import { Nav } from 'react-bootstrap'

export function AddressNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="address" className="fs-15" role="presentation">
                <i className="bi bi-building-add align-middle me-1"></i> Address
            </Nav.Link>
        </Nav.Item>
    )
}
