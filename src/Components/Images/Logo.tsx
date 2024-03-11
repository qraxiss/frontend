import text from '../../assets/images/logo/text.png'
import icon from '../../assets/images/logo/icon.svg'

import { Image } from 'react-bootstrap'


export function Text({className}: {className: string}){
    return <Image src={text} className={className}/>
}

export function Icon({className}: {className: string}){
    return <Image src={icon} className={className}/>
}