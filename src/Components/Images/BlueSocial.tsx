import facebook from '../../assets/images/social/blue/facebook.svg'
import twitter from '../../assets/images/social/blue/twitter.svg'
import medium from '../../assets/images/social/blue/medium.svg'
import linkedin from '../../assets/images/social/blue/linkedin.svg'
import telegram from '../../assets/images/social/blue/telegram.svg'
import instagram from '../../assets/images/social/blue/instagram.svg'
import { Image } from 'react-bootstrap'

export function Facebook({ className, width = '' }: { className: string; width?: string | number }) {
    return <Image src={facebook} className={className} width={width} />
}

export function Twitter({ className, width = '' }: { className: string; width?: string | number }) {
    return <Image src={twitter} className={className} width={width} />
}

export function Medium({ className, width = '' }: { className: string; width?: string | number }) {
    return <Image src={medium} className={className} width={width} />
}

export function Linkedin({ className, width = '' }: { className: string; width?: string | number }) {
    return <Image src={linkedin} className={className} width={width} />
}

export function Telegram({ className, width = '' }: { className: string; width?: string | number }) {
    return <Image src={telegram} className={className} width={width} />
}

export function Instagram({ className, width = '' }: { className: string; width?: string | number }) {
    return <Image src={instagram} className={className} width={width} />
}
