import { Nav } from 'react-bootstrap'

export function LogoutNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" className="fs-15" href="/logout">
                <i className="bi bi-box-arrow-right align-middle me-1"></i> Logout
            </Nav.Link>
        </Nav.Item>
    )
}
