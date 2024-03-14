import facebook from '../../assets/images/social/black/facebook.png'
import twitter from '../../assets/images/social/black/x.png'
import medium from '../../assets/images/social/black/medium.png'
import linkedin from '../../assets/images/social/black/linkedin.png'
import telegram from '../../assets/images/social/black/telegram.png'
import pinterest from '../../assets/images/social/black/pinterest.png'
import discord from '../../assets/images/social/black/discord.png'
import instagram from '../../assets/images/social/black/instagram.png'
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

export function Discord({ className, width = '' }: { className: string; width?: string | number }) {
    return <Image src={discord} className={className} width={width} />
}

export function Pinterest({ className, width = '' }: { className: string; width?: string | number }) {
    return <Image src={pinterest} className={className} width={width} />
}