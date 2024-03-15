import { Facebook, Twitter, Medium, Linkedin, Instagram, Telegram, Discord } from 'Components/Images/BlackSocial'
import { Link } from 'react-router-dom'

export function Socials() {
    return (
        <div className="socials-footer">
            <Link to={'/'}>
                <Facebook className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Twitter className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Instagram className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Medium className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Linkedin className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Telegram className="footer-social-icon" width={48} />
            </Link>
            <Link to={'/'}>
                <Discord className="footer-social-icon" width={48} />
            </Link>
        </div>
    )
}