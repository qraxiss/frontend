import { Newsletter } from './newsletter'
import { Logo } from './logo'
import { Categories, Shopcek, Misc } from './pages'

export function Sections() {
    return (
        <div className="footer-items">
            <Logo />
            <Categories />
            <Shopcek />
            <Misc/>
            <Newsletter />
        </div>
    )
}
