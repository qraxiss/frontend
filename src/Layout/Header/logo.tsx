import { Navbar, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Text } from "Components/Images/Logo"

export function Logo() {
    return (
        <Navbar.Brand className="d-none d-lg-block">
            <Link to="/">
                <div className="logo-dark">
                    <Text height="60" />
                </div>
                <div className="logo-light">
                    <Text height="60" />
                </div>
            </Link>
        </Navbar.Brand>
    )
}

export function SideLogo(props: { logo: any }) {
    return (
        <li className="nav-item d-block d-lg-none">
            <Link to="/" className="d-block p-3 h-auto text-center">
                <Image src={props.logo.text.url} alt="" height="25" className="card-logo-dark mx-auto" />
            </Link>
            <Link to="/" className="d-block p-3 h-auto text-center">
                <Image src={props.logo.text.url} alt="" height="25" className="card-logo-light mx-auto" />
            </Link>
        </li>
    )
}