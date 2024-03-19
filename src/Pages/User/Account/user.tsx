import { Container, Row, Col } from 'react-bootstrap'
import { User } from 'Components/Images/Icons'
import { Link } from 'react-router-dom'
import { useUser } from 'context/user'

export function UserSection() {
    let { address } = useUser()

    return (
        <Container className="account-top">
            <div className="pt-3">
                <div className="d-flex gap-3 flex-wrap align-items-center">
                    <User className="avatar-xl p-1 bg-light mt-n3" />
                    <div>
                        <h5 className="fs-18">
                            {address.slice(0, 6)}...{address.slice(address.length - 6, address.length)}{' '}
                            <div className="edit">
                                <i className="bi bi-pen"></i> <p>change username</p>
                            </div>
                        </h5>
                        <div className="text-muted">
                            {address.slice(0, 6)}...{address.slice(address.length - 6, address.length)}
                        </div>
                    </div>
                    <div className="ms-md-auto">
                        <Link to="/" className="btn btn-primary btn-hover">
                            <i className="bi bi-cart4 me-1 align-middle"></i> Shopping Now
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}
