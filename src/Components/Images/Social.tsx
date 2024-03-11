import facebook from '../../assets/images/social/facebook.svg'
import twitter from '../../assets/images/social/twitter.svg'
import medium from '../../assets/images/social/medium.svg'
import linkedin from '../../assets/images/social/linkedin.svg'
import telegram from '../../assets/images/social/telegram.svg'
import instagram from '../../assets/images/social/instagram.svg'
import { Image } from 'react-bootstrap'

export function Facebook({className}: {className: string}){
    return <Image src={facebook} className={className}/>
}

export function Twitter({className}: {className: string}){
    return <Image src={twitter} className={className}/>
}

export function Medium({className}: {className: string}){
    return <Image src={medium} className={className}/>
}

export function Linkedin({className}: {className: string}){
    return <Image src={linkedin} className={className}/>
}

export function Telegram({className}: {className: string}){
    return <Image src={telegram} className={className}/>
}

export function Instagram({className}: {className: string}){
    return <Image src={instagram} className={className}/>
}